-- Create field_options table for Chitrani Construction backend
-- Selectable options for select, radio, or checkbox form fields
CREATE TABLE public.field_options (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    field_id uuid NOT NULL,
    value text NOT NULL,
    label text NOT NULL,
    display_order integer NOT NULL DEFAULT 0,
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: value must be non-blank
ALTER TABLE public.field_options
ADD CONSTRAINT chk_field_options_value_not_blank
CHECK (length(btrim(value)) > 0);

-- Add constraint: label must be non-blank
ALTER TABLE public.field_options
ADD CONSTRAINT chk_field_options_label_not_blank
CHECK (length(btrim(label)) > 0);

-- Add constraint: non-negative display_order
ALTER TABLE public.field_options
ADD CONSTRAINT chk_field_options_display_order_non_negative
CHECK (display_order >= 0);

-- Foreign key reference to form_fields
-- ON DELETE RESTRICT: options belonging to published/archived versions must be preserved
ALTER TABLE public.field_options
ADD CONSTRAINT fk_field_options_field
FOREIGN KEY (field_id)
REFERENCES public.form_fields(id)
ON DELETE RESTRICT;

-- Unique constraint on (field_id, value)
ALTER TABLE public.field_options
ADD CONSTRAINT uq_field_options_field_value
UNIQUE (field_id, value);

-- Indexes for performance
CREATE INDEX field_options_field_id_idx
ON public.field_options (field_id);
CREATE INDEX field_options_field_order_idx
ON public.field_options (field_id, display_order);

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_field_options_updated_at
BEFORE UPDATE ON public.field_options
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Field option immutability guard:
-- Options belonging to fields of published/archived versions must not be modified.
-- The parent version is resolved through field_options.field_id -> form_fields.version_id.
CREATE OR REPLACE FUNCTION public.guard_field_option_mutation()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
    v_version_id uuid;
BEGIN
    IF TG_OP IN ('INSERT', 'UPDATE') THEN
        SELECT version_id
        INTO v_version_id
        FROM public.form_fields
        WHERE id = NEW.field_id;

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Form field % does not exist for option mutation check', NEW.field_id;
        END IF;

        PERFORM public.assert_quote_form_version_editable(v_version_id);
    END IF;

    IF TG_OP IN ('UPDATE', 'DELETE') THEN
        SELECT version_id
        INTO v_version_id
        FROM public.form_fields
        WHERE id = OLD.field_id;

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Form field % does not exist for option mutation check', OLD.field_id;
        END IF;

        PERFORM public.assert_quote_form_version_editable(v_version_id);
    END IF;

    RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE TRIGGER guard_field_options_mutation
BEFORE INSERT OR UPDATE OR DELETE ON public.field_options
FOR EACH ROW
EXECUTE FUNCTION public.guard_field_option_mutation();

-- Comments for field_options table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. value is the stable machine-readable submission value; label is the displayed text
-- 3. display_order >= 0 ensures valid ordering values
-- 4. Whether options are permitted for a field input_type (select, radio, checkbox)
--    is enforced by the backend validator, not SQL
-- 5. Only fields belonging to draft versions are editable; guard_field_option_mutation
--    raises for INSERT/UPDATE/DELETE resolving to published/archived versions
COMMENT ON TABLE public.field_options IS 'Selectable options for select, radio, or checkbox form fields';
COMMENT ON COLUMN public.field_options.id IS 'Universally unique identifier (UUID) for the field option';
COMMENT ON COLUMN public.field_options.field_id IS 'Foreign key referencing the form field';
COMMENT ON COLUMN public.field_options.value IS 'Machine-readable submission value';
COMMENT ON COLUMN public.field_options.label IS 'Human-readable label displayed to the user';
COMMENT ON COLUMN public.field_options.display_order IS 'Numeric value determining option sequence (higher = later)';
COMMENT ON COLUMN public.field_options.is_active IS 'Flag indicating if the option is currently active';
COMMENT ON COLUMN public.field_options.created_at IS 'Timestamp when the option was created (UTC)';
COMMENT ON COLUMN public.field_options.updated_at IS 'Timestamp when the option was last updated (UTC)';
COMMENT ON INDEX field_options_field_id_idx IS 'Index for efficient queries by field';
COMMENT ON INDEX field_options_field_order_idx IS 'Composite index for option queries with ordering';
-- RLS intentionally deferred to the dedicated security phase