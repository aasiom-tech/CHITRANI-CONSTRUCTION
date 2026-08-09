-- Create quote_form_templates table for Chitrani Construction backend
-- Master quote form entity tied to a specific service (database-configured, not hardcoded branches)
CREATE TABLE public.quote_form_templates (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    service_id uuid NOT NULL,
    name text NOT NULL,
    is_active boolean NOT NULL DEFAULT true,
    archived_at timestamptz NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint for non-blank name
ALTER TABLE public.quote_form_templates
ADD CONSTRAINT chk_quote_form_templates_name_not_blank
CHECK (length(btrim(name)) > 0);

-- Foreign key reference to services
-- ON DELETE RESTRICT: deactivation/archive is preferred over deleting templates with historical references
ALTER TABLE public.quote_form_templates
ADD CONSTRAINT fk_quote_form_templates_service
FOREIGN KEY (service_id)
REFERENCES public.services(id)
ON DELETE RESTRICT;

-- Index for efficient queries by service
CREATE INDEX quote_form_templates_service_id_idx
ON public.quote_form_templates (service_id);

-- Partial unique index enforcing at most one active, non-archived template per service
CREATE UNIQUE INDEX quote_form_templates_one_active_per_service_idx
ON public.quote_form_templates (service_id)
WHERE is_active = true
AND archived_at IS NULL;

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_quote_form_templates_updated_at
BEFORE UPDATE ON public.quote_form_templates
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for quote_form_templates table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. service_id ties the template to a service; forms are configured in the database
-- 3. is_active boolean for soft activation/deactivation status
-- 4. archived_at timestamptz for soft archive tracking with UTC timestamps
-- 5. Deactivation/archive is preferred over deleting templates with historical references
-- 6. One active, non-archived template per service enforced by partial unique index
COMMENT ON TABLE public.quote_form_templates IS 'Master quote form entity tied to a specific service';
COMMENT ON COLUMN public.quote_form_templates.id IS 'Universally unique identifier (UUID) for the quote form template';
COMMENT ON COLUMN public.quote_form_templates.service_id IS 'Foreign key referencing the service this form template belongs to';
COMMENT ON COLUMN public.quote_form_templates.name IS 'Human-readable name of the quote form template';
COMMENT ON COLUMN public.quote_form_templates.is_active IS 'Flag indicating if the template is currently active';
COMMENT ON COLUMN public.quote_form_templates.archived_at IS 'Timestamp when the template was archived (UTC), null while active';
COMMENT ON COLUMN public.quote_form_templates.created_at IS 'Timestamp when the template was created (UTC)';
COMMENT ON COLUMN public.quote_form_templates.updated_at IS 'Timestamp when the template was last updated (UTC)';
COMMENT ON INDEX quote_form_templates_service_id_idx IS 'Index for efficient queries by service';
COMMENT ON INDEX quote_form_templates_one_active_per_service_idx IS 'Partial unique index enforcing one active non-archived template per service';
-- RLS intentionally deferred to the dedicated security phase
