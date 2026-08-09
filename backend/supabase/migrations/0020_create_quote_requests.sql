-- Create quote_requests table for Chitrani Construction backend
-- Structured commercial requirement submissions using a published dynamic quote form
-- (a different workflow from general contact enquiries; never merged into one table)
CREATE TABLE public.quote_requests (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_number text NOT NULL,
    division_id uuid NOT NULL,
    service_id uuid NOT NULL,
    template_id uuid NOT NULL,
    template_version_id uuid NOT NULL,
    template_version_number integer NOT NULL,
    name text NOT NULL,
    company text NULL,
    email text NOT NULL,
    phone text NOT NULL,
    project_location text NULL,
    preferred_start_date date NULL,
    expected_duration text NULL,
    message text NULL,
    status text NOT NULL DEFAULT 'new',
    assigned_to uuid NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: reference_number must be non-blank
ALTER TABLE public.quote_requests
ADD CONSTRAINT chk_quote_requests_reference_number_not_blank
CHECK (length(btrim(reference_number)) > 0);

-- Add constraint: name must be non-blank
ALTER TABLE public.quote_requests
ADD CONSTRAINT chk_quote_requests_name_not_blank
CHECK (length(btrim(name)) > 0);

-- Add constraint: email must be non-blank
ALTER TABLE public.quote_requests
ADD CONSTRAINT chk_quote_requests_email_not_blank
CHECK (length(btrim(email)) > 0);

-- Add constraint: phone must be non-blank
ALTER TABLE public.quote_requests
ADD CONSTRAINT chk_quote_requests_phone_not_blank
CHECK (length(btrim(phone)) > 0);

-- Add constraint: template_version_number must be greater than zero
ALTER TABLE public.quote_requests
ADD CONSTRAINT chk_quote_requests_version_number_positive
CHECK (template_version_number > 0);

-- Add constraint: status must be one of allowed values
-- Full transition workflow is enforced by the service layer, not SQL
ALTER TABLE public.quote_requests
ADD CONSTRAINT chk_quote_requests_status_valid
CHECK (status IN ('new', 'under_review', 'clarification_required', 'quoted', 'won', 'lost', 'closed'));

-- Foreign key reference to business_divisions
ALTER TABLE public.quote_requests
ADD CONSTRAINT fk_quote_requests_division
FOREIGN KEY (division_id)
REFERENCES public.business_divisions(id)
ON DELETE RESTRICT;

-- Foreign key reference to services
ALTER TABLE public.quote_requests
ADD CONSTRAINT fk_quote_requests_service
FOREIGN KEY (service_id)
REFERENCES public.services(id)
ON DELETE RESTRICT;

-- Foreign key reference to quote_form_templates
ALTER TABLE public.quote_requests
ADD CONSTRAINT fk_quote_requests_template
FOREIGN KEY (template_id)
REFERENCES public.quote_form_templates(id)
ON DELETE RESTRICT;

-- Foreign key reference to quote_form_versions
ALTER TABLE public.quote_requests
ADD CONSTRAINT fk_quote_requests_template_version
FOREIGN KEY (template_version_id)
REFERENCES public.quote_form_versions(id)
ON DELETE RESTRICT;

-- Foreign key reference to admin_users (assignment)
-- ON DELETE SET NULL: assignment is cleared when the admin user is removed
ALTER TABLE public.quote_requests
ADD CONSTRAINT fk_quote_requests_assigned_to
FOREIGN KEY (assigned_to)
REFERENCES public.admin_users(id)
ON DELETE SET NULL;

-- Quote configuration integrity helper:
-- Validates the relational integrity between division, service, template, and version.
-- Does NOT enforce publication status (handled separately for insert-time policy).
CREATE OR REPLACE FUNCTION public.validate_quote_request_configuration(
    division_uuid uuid,
    service_uuid uuid,
    template_uuid uuid,
    template_version_uuid uuid,
    version_number integer
)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
    v_service_division_id uuid;
    v_template_service_id uuid;
    v_version_template_id uuid;
    v_version_number integer;
BEGIN
    -- A. service_id must belong to division_id
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

    -- B. template_id must belong to service_id
    SELECT service_id
    INTO v_template_service_id
    FROM public.quote_form_templates
    WHERE id = template_uuid;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Quote form template % does not exist', template_uuid;
    END IF;

    IF v_template_service_id IS DISTINCT FROM service_uuid THEN
        RAISE EXCEPTION 'Quote form template % does not belong to service %', template_uuid, service_uuid;
    END IF;

    -- C. template_version_id must belong to template_id
    SELECT template_id
    INTO v_version_template_id
    FROM public.quote_form_versions
    WHERE id = template_version_uuid;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Quote form version % does not exist', template_version_uuid;
    END IF;

    IF v_version_template_id IS DISTINCT FROM template_uuid THEN
        RAISE EXCEPTION 'Quote form version % does not belong to template %', template_version_uuid, template_uuid;
    END IF;

    -- D. version_number must equal the stored version_number of template_version_id
    SELECT version_number
    INTO v_version_number
    FROM public.quote_form_versions
    WHERE id = template_version_uuid;

    IF v_version_number IS DISTINCT FROM version_number THEN
        RAISE EXCEPTION 'Quote form version % has version_number %, not %', template_version_uuid, v_version_number, version_number;
    END IF;
END;
$$;

-- Quote request guard covering insert policy and configuration immutability:
-- 1. On INSERT: full configuration validation + requirement that the selected
--    form version is published. New quotes must be created against a live form.
-- 2. On UPDATE: configuration identity columns are immutable. A historical quote
--    must stay tied to the exact division/service/template/version used at submission.
--    Ordinary operational updates (status, assigned_to) are allowed even when the
--    historical version has since been archived (it is NOT required to still be published).
CREATE OR REPLACE FUNCTION public.guard_quote_request_configuration()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
    v_version_status text;
BEGIN
    IF TG_OP = 'INSERT' THEN
        PERFORM public.validate_quote_request_configuration(
            NEW.division_id,
            NEW.service_id,
            NEW.template_id,
            NEW.template_version_id,
            NEW.template_version_number
        );

        SELECT status
        INTO v_version_status
        FROM public.quote_form_versions
        WHERE id = NEW.template_version_id;

        IF v_version_status IS DISTINCT FROM 'published' THEN
            RAISE EXCEPTION 'Quote requests can only be created against a published form version (current status: %)', v_version_status;
        END IF;
    ELSIF TG_OP = 'UPDATE' THEN
        IF NEW.division_id IS DISTINCT FROM OLD.division_id
           OR NEW.service_id IS DISTINCT FROM OLD.service_id
           OR NEW.template_id IS DISTINCT FROM OLD.template_id
           OR NEW.template_version_id IS DISTINCT FROM OLD.template_version_id
           OR NEW.template_version_number IS DISTINCT FROM OLD.template_version_number THEN
            RAISE EXCEPTION 'Quote request configuration is immutable; division, service, template, or version cannot be changed';
        END IF;
    END IF;

    RETURN NEW;
END;
$$;

CREATE TRIGGER guard_quote_requests_configuration
BEFORE INSERT OR UPDATE ON public.quote_requests
FOR EACH ROW
EXECUTE FUNCTION public.guard_quote_request_configuration();

-- Indexes for performance (reference_number UNIQUE index already exists)
CREATE INDEX quote_requests_status_idx
ON public.quote_requests (status);
CREATE INDEX quote_requests_division_id_idx
ON public.quote_requests (division_id);
CREATE INDEX quote_requests_service_id_idx
ON public.quote_requests (service_id);
CREATE INDEX quote_requests_template_version_id_idx
ON public.quote_requests (template_version_id);
CREATE INDEX quote_requests_assigned_to_idx
ON public.quote_requests (assigned_to);
CREATE INDEX quote_requests_created_at_idx
ON public.quote_requests (created_at);
CREATE INDEX quote_requests_status_created_at_idx
ON public.quote_requests (status, created_at DESC);
CREATE INDEX quote_requests_service_created_at_idx
ON public.quote_requests (service_id, created_at DESC);
CREATE INDEX quote_requests_assignee_status_idx
ON public.quote_requests (assigned_to, status);

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_quote_requests_updated_at
BEFORE UPDATE ON public.quote_requests
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for quote_requests table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. reference_number is UNIQUE; collision-safe generation strategy arrives in Step 3D2
-- 3. Configuration identity (division/service/template/version) is immutable after creation
--    so a historical quote stays tied to the exact config used at submission
-- 4. New quotes require the selected version to be published; historical versions may later
--     later be archived without invalidating existing quotes
-- 5. Status workflows are service-layer enforced; SQL only constrains status values
-- 6. Email/phone format validation belongs to Zod/backend validation
-- 7. No CASCADE deletion: quotation history is immutable operational data
-- 8. reference_number UNIQUE index is authoritative; not duplicated
COMMENT ON TABLE public.quote_requests IS 'Structured commercial quote request submissions';
COMMENT ON COLUMN public.quote_requests.id IS 'Universally unique identifier (UUID) for the quote request';
COMMENT ON COLUMN public.quote_requests.reference_number IS 'Collision-safe human reference (CHI-Q-YYYY-XXXXXX)';
COMMENT ON COLUMN public.quote_requests.division_id IS 'Immutable division configuration identity';
COMMENT ON COLUMN public.quote_requests.service_id IS 'Immutable service configuration identity';
COMMENT ON COLUMN public.quote_requests.template_id IS 'Immutable quote form template configuration identity';
COMMENT ON COLUMN public.quote_requests.template_version_id IS 'Immutable quote form version configuration identity';
COMMENT ON COLUMN public.quote_requests.template_version_number IS 'Immutable snapshot of the version number';
COMMENT ON COLUMN public.quote_requests.name IS 'Submitted requester name';
COMMENT ON COLUMN public.quote_requests.company IS 'Optional submitted company name';
COMMENT ON COLUMN public.quote_requests.email IS 'Submitted email address';
COMMENT ON COLUMN public.quote_requests.phone IS 'Submitted phone number';
COMMENT ON COLUMN public.quote_requests.project_location IS 'Optional submitted project location';
COMMENT ON COLUMN public.quote_requests.preferred_start_date IS 'Optional preferred start date';
COMMENT ON COLUMN public.quote_requests.expected_duration IS 'Optional expected duration description';
COMMENT ON COLUMN public.quote_requests.message IS 'Optional free-text requirement message';
COMMENT ON COLUMN public.quote_requests.status IS 'new, under_review, clarification_required, quoted, won, lost, or closed';
COMMENT ON COLUMN public.quote_requests.assigned_to IS 'Admin user assigned to this quote request';
COMMENT ON COLUMN public.quote_requests.created_at IS 'Timestamp when the quote request was created (UTC)';
COMMENT ON COLUMN public.quote_requests.updated_at IS 'Timestamp when the quote request was last updated (UTC)';
COMMENT ON INDEX quote_requests_status_idx IS 'Index for status filtering';
COMMENT ON INDEX quote_requests_division_id_idx IS 'Index for division-based queries';
COMMENT ON INDEX quote_requests_service_id_idx IS 'Index for service-based queries';
COMMENT ON INDEX quote_requests_template_version_id_idx IS 'Index for version-based historical queries';
COMMENT ON INDEX quote_requests_assigned_to_idx IS 'Index for assignee queries';
COMMENT ON INDEX quote_requests_created_at_idx IS 'Index for time-ordered queries';
COMMENT ON INDEX quote_requests_status_created_at_idx IS 'Composite index for status lists ordered by recency';
COMMENT ON INDEX quote_requests_service_created_at_idx IS 'Composite index for service lists ordered by recency';
COMMENT ON INDEX quote_requests_assignee_status_idx IS 'Composite index for assignee/status lists';
-- RLS intentionally deferred to the dedicated security phase