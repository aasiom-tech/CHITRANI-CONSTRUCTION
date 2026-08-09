-- Create contact_enquiries table for Chitrani Construction backend
-- General contact/communication workflow submissions (distinct from structured quote requests)
CREATE TABLE public.contact_enquiries (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_number text NOT NULL,
    name text NOT NULL,
    company text NULL,
    email text NOT NULL,
    phone text NOT NULL,
    division_id uuid NULL,
    service_id uuid NULL,
    project_location text NULL,
    message text NOT NULL,
    consent boolean NOT NULL DEFAULT false,
    consent_at timestamptz NULL,
    status text NOT NULL DEFAULT 'new',
    assigned_to uuid NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: reference_number must be non-blank (UNIQUE is enforced separately)
ALTER TABLE public.contact_enquiries
ADD CONSTRAINT chk_contact_enquiries_reference_number_not_blank
CHECK (length(btrim(reference_number)) > 0);

-- Add constraint: name must be non-blank
ALTER TABLE public.contact_enquiries
ADD CONSTRAINT chk_contact_enquiries_name_not_blank
CHECK (length(btrim(name)) > 0);

-- Add constraint: email must be non-blank
-- Format validation (email/phone) belongs to Zod/backend validation, not SQL
ALTER TABLE public.contact_enquiries
ADD CONSTRAINT chk_contact_enquiries_email_not_blank
CHECK (length(btrim(email)) > 0);

-- Add constraint: phone must be non-blank
ALTER TABLE public.contact_enquiries
ADD CONSTRAINT chk_contact_enquiries_phone_not_blank
CHECK (length(btrim(phone)) > 0);

-- Add constraint: message must be non-blank
ALTER TABLE public.contact_enquiries
ADD CONSTRAINT chk_contact_enquiries_message_not_blank
CHECK (length(btrim(message)) > 0);

-- Add constraint: status must be one of allowed values
ALTER TABLE public.contact_enquiries
ADD CONSTRAINT chk_contact_enquiries_status_valid
CHECK (status IN ('new', 'contacted', 'qualified', 'closed'));

-- Foreign key reference to business_divisions
-- ON DELETE RESTRICT: submissions must never be cascade-deleted by catalog changes
ALTER TABLE public.contact_enquiries
ADD CONSTRAINT fk_contact_enquiries_division
FOREIGN KEY (division_id)
REFERENCES public.business_divisions(id)
ON DELETE RESTRICT;

-- Foreign key reference to services
-- ON DELETE RESTRICT: submissions must never be cascade-deleted by catalog changes
ALTER TABLE public.contact_enquiries
ADD CONSTRAINT fk_contact_enquiries_service
FOREIGN KEY (service_id)
REFERENCES public.services(id)
ON DELETE RESTRICT;

-- Foreign key reference to admin_users (assignment)
-- ON DELETE SET NULL: assignment is cleared when the admin user is removed
ALTER TABLE public.contact_enquiries
ADD CONSTRAINT fk_contact_enquiries_assigned_to
FOREIGN KEY (assigned_to)
REFERENCES public.admin_users(id)
ON DELETE SET NULL;

-- Optional division/service consistency helper:
-- service_id may only reference a service that belongs to the referenced division_id.
-- It does NOT check is_active / archived_at / public visibility
-- (those are submission-time business rules handled by the API layer later).
CREATE OR REPLACE FUNCTION public.validate_optional_service_division(
    division_uuid uuid,
    service_uuid uuid
)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
    v_service_division_id uuid;
BEGIN
    IF service_uuid IS NULL THEN
        RETURN;
    END IF;

    IF division_uuid IS NULL THEN
        RAISE EXCEPTION 'Service % provided without a parent division', service_uuid;
    END IF;

    SELECT division_id
    INTO v_service_division_id
    FROM public.services
    WHERE id = service_uuid;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Service % does not exist', service_uuid;
    END IF;

    IF v_service_division_id IS DISTINCT FROM division_uuid THEN
        RAISE EXCEPTION 'Service % does not belong to division %', service_uuid, division_uuid;
    END IF;
END;
$$;

-- Trigger enforcing division/service relationship integrity on insert and update
CREATE OR REPLACE FUNCTION public.guard_contact_enquiry_service_division()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    PERFORM public.validate_optional_service_division(NEW.division_id, NEW.service_id);
    RETURN NEW;
END;
$$;

CREATE TRIGGER validate_contact_enquiry_service_division_insert
BEFORE INSERT
ON public.contact_enquiries
FOR EACH ROW
EXECUTE FUNCTION public.guard_contact_enquiry_service_division();

CREATE TRIGGER validate_contact_enquiry_service_division_update
BEFORE UPDATE OF division_id, service_id
ON public.contact_enquiries
FOR EACH ROW
EXECUTE FUNCTION public.guard_contact_enquiry_service_division();

-- Indexes for performance (reference_number UNIQUE index already exists)
CREATE INDEX contact_enquiries_status_idx
ON public.contact_enquiries (status);
CREATE INDEX contact_enquiries_created_at_idx
ON public.contact_enquiries (created_at);
CREATE INDEX contact_enquiries_division_id_idx
ON public.contact_enquiries (division_id);
CREATE INDEX contact_enquiries_service_id_idx
ON public.contact_enquiries (service_id);
CREATE INDEX contact_enquiries_assigned_to_idx
ON public.contact_enquiries (assigned_to);
CREATE INDEX contact_enquiries_status_created_at_idx
ON public.contact_enquiries (status, created_at DESC);
CREATE INDEX contact_enquiries_assignee_status_idx
ON public.contact_enquiries (assigned_to, status);

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_contact_enquiries_updated_at
BEFORE UPDATE ON public.contact_enquiries
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for contact_enquiries table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. reference_number is UNIQUE; collision-safe generation strategy arrives in Step 3D2
-- 3. Email/phone format validation belongs to Zod/backend; only non-blank required here
-- 4. consent is not required at the database level; the public API enforces the website consent policy
-- 5. User-submitted fields (name, company, email, phone, division/service choice,
--    project_location, message, consent) should NOT be silently rewritten by Admin;
--    operational changes belong in status, assigned_to, and future internal notes/history
-- 6. No CASCADE deletion: submissions are historical operational records
-- 7. reference_number UNIQUE index is authoritative; not duplicated
COMMENT ON TABLE public.contact_enquiries IS 'General contact/communication submissions';
COMMENT ON COLUMN public.contact_enquiries.id IS 'Universally unique identifier (UUID) for the enquiry';
COMMENT ON COLUMN public.contact_enquiries.reference_number IS 'Collision-safe human reference (CHI-ENQ-YYYY-XXXXXX)';
COMMENT ON COLUMN public.contact_enquiries.name IS 'Submitted contact name';
COMMENT ON COLUMN public.contact_enquiries.company IS 'Optional submitted company name';
COMMENT ON COLUMN public.contact_enquiries.email IS 'Submitted email address';
COMMENT ON COLUMN public.contact_enquiries.phone IS 'Submitted phone number';
COMMENT ON COLUMN public.contact_enquiries.division_id IS 'Optional division choice, if any';
COMMENT ON COLUMN public.contact_enquiries.service_id IS 'Optional service choice, if any';
COMMENT ON COLUMN public.contact_enquiries.project_location IS 'Optional submitted project location';
COMMENT ON COLUMN public.contact_enquiries.message IS 'Free-text enquiry message';
COMMENT ON COLUMN public.contact_enquiries.consent IS 'Consent flag captured at submission';
COMMENT ON COLUMN public.contact_enquiries.consent_at IS 'Timestamp when consent was captured (UTC)';
COMMENT ON COLUMN public.contact_enquiries.status IS 'new, contacted, qualified, or closed';
COMMENT ON COLUMN public.contact_enquiries.assigned_to IS 'Admin user assigned to this enquiry';
COMMENT ON COLUMN public.contact_enquiries.created_at IS 'Timestamp when the enquiry was created (UTC)';
COMMENT ON COLUMN public.contact_enquiries.updated_at IS 'Timestamp when the enquiry was last updated (UTC)';
COMMENT ON INDEX contact_enquiries_status_idx IS 'Index for status filtering';
COMMENT ON INDEX contact_enquiries_created_at_idx IS 'Index for time-ordered queries';
COMMENT ON INDEX contact_enquiries_division_id_idx IS 'Index for division-based queries';
COMMENT ON INDEX contact_enquiries_service_id_idx IS 'Index for service-based queries';
COMMENT ON INDEX contact_enquiries_assigned_to_idx IS 'Index for assignee queries';
COMMENT ON INDEX contact_enquiries_status_created_at_idx IS 'Composite index for status lists ordered by recency';
COMMENT ON INDEX contact_enquiries_assignee_status_idx IS 'Composite index for assignee/status lists';
-- RLS intentionally deferred to the dedicated security phase
