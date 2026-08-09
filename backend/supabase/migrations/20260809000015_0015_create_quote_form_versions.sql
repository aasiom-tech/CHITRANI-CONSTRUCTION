-- Create quote_form_versions table for Chitrani Construction backend
-- Immutable version records for a quote form template
CREATE TABLE public.quote_form_versions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id uuid NOT NULL,
    version_number integer NOT NULL,
    status text NOT NULL DEFAULT 'draft',
    published_at timestamptz NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: version_number must be greater than zero
ALTER TABLE public.quote_form_versions
ADD CONSTRAINT chk_quote_form_versions_version_number_positive
CHECK (version_number > 0);

-- Add constraint: status must be one of allowed values
ALTER TABLE public.quote_form_versions
ADD CONSTRAINT chk_quote_form_versions_status_valid
CHECK (status IN ('draft', 'published', 'archived'));

-- Add constraint: a published version must have a published_at timestamp
-- draft versions should normally have published_at NULL
-- archived versions may retain published_at if previously published (do NOT erase it)
ALTER TABLE public.quote_form_versions
ADD CONSTRAINT chk_quote_form_versions_published_at_consistency
CHECK (status <> 'published' OR published_at IS NOT NULL);

-- Foreign key reference to quote_form_templates
-- ON DELETE RESTRICT: versions must never be cascade-deleted away from history
ALTER TABLE public.quote_form_versions
ADD CONSTRAINT fk_quote_form_versions_template
FOREIGN KEY (template_id)
REFERENCES public.quote_form_templates(id)
ON DELETE RESTRICT;

-- Unique constraint on template_id + version_number
ALTER TABLE public.quote_form_versions
ADD CONSTRAINT uq_quote_form_versions_template_version
UNIQUE (template_id, version_number);

-- Indexes for performance
CREATE INDEX quote_form_versions_template_id_idx
ON public.quote_form_versions (template_id);
CREATE INDEX quote_form_versions_status_idx
ON public.quote_form_versions (status);

-- Partial unique index enforcing at most one published version per template
CREATE UNIQUE INDEX quote_form_versions_one_published_per_template_idx
ON public.quote_form_versions (template_id)
WHERE status = 'published';

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_quote_form_versions_updated_at
BEFORE UPDATE ON public.quote_form_versions
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Version immutability helper:
-- Published quote-form versions are immutable in meaning.
-- Only status='draft' versions are editable.
-- This helper is reused by mutation guard triggers on form_fields, field_options,
-- and field_conditions to prevent changes to published/archived versions.
CREATE OR REPLACE FUNCTION public.assert_quote_form_version_editable(version_uuid uuid)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
    v_status text;
BEGIN
    SELECT status
    INTO v_status
    FROM public.quote_form_versions
    WHERE id = version_uuid;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Quote form version % does not exist', version_uuid;
    END IF;

    IF v_status <> 'draft' THEN
        RAISE EXCEPTION 'Quote form version % is immutable (current status: %)', version_uuid, v_status;
    END IF;
END;
$$;

COMMENT ON FUNCTION public.assert_quote_form_version_editable(uuid) IS 'Raises an exception unless the quote form version exists and is in draft status (editable). Prevents mutation of published/archived versions.';

-- Comments for quote_form_versions table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. version_number increments per template; unique per template
-- 3. status uses text + CHECK constraint (draft, published, archived), not native ENUM
-- 4. published_at recorded when a draft becomes published and is not erased on archive
-- 5. One published version per template enforced by partial unique index
-- 6. Version transitions (draft->published, published->archived, draft->archived) are
--    enforced by the application/service layer; the database restricts status values
--    and the one-published-version invariant
-- 7. Allowed transitions: draft -> published, published -> archived, draft -> archived
--    NOT allowed: archived -> published, published -> draft, archived -> draft
COMMENT ON TABLE public.quote_form_versions IS 'Immutable version records for a quote form template';
COMMENT ON COLUMN public.quote_form_versions.id IS 'Universally unique identifier (UUID) for the form version';
COMMENT ON COLUMN public.quote_form_versions.template_id IS 'Foreign key referencing the quote form template';
COMMENT ON COLUMN public.quote_form_versions.version_number IS 'Sequential version number for the template';
COMMENT ON COLUMN public.quote_form_versions.status IS 'draft, published, or archived';
COMMENT ON COLUMN public.quote_form_versions.published_at IS 'Timestamp when the version was published (UTC), null while draft';
COMMENT ON COLUMN public.quote_form_versions.created_at IS 'Timestamp when the version was created (UTC)';
COMMENT ON COLUMN public.quote_form_versions.updated_at IS 'Timestamp when the version was last updated (UTC)';
COMMENT ON INDEX quote_form_versions_template_id_idx IS 'Index for efficient queries by template';
COMMENT ON INDEX quote_form_versions_status_idx IS 'Index for efficient queries by status';
COMMENT ON INDEX quote_form_versions_one_published_per_template_idx IS 'Partial unique index enforcing one published version per template';
-- RLS intentionally deferred to the dedicated security phase