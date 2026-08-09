-- Create form_fields table for Chitrani Construction backend
-- Individual form input definitions for a specific quote form version
CREATE TABLE public.form_fields (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    version_id uuid NOT NULL,
    field_key text NOT NULL,
    label text NOT NULL,
    input_type text NOT NULL,
    data_type text NOT NULL,
    is_required boolean NOT NULL DEFAULT false,
    placeholder text NULL,
    help_text text NULL,
    validation_rules jsonb NOT NULL DEFAULT '{}'::jsonb,
    display_order integer NOT NULL DEFAULT 0,
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: field_key must be a stable machine-readable identifier
-- Lowercase, starting with a letter, containing only letters, digits, or underscores
ALTER TABLE public.form_fields
ADD CONSTRAINT chk_form_fields_field_key_format
CHECK (field_key ~ '^[a-z][a-z0-9_]*$');

-- Add constraint for non-blank label
ALTER TABLE public.form_fields
ADD CONSTRAINT chk_form_fields_label_not_blank
CHECK (length(btrim(label)) > 0);

-- Add constraint: non-negative display_order
ALTER TABLE public.form_fields
ADD CONSTRAINT chk_form_fields_display_order_non_negative
CHECK (display_order >= 0);

-- Add constraint: input_type must be one of allowed values
ALTER TABLE public.form_fields
ADD CONSTRAINT chk_form_fields_input_type_valid
CHECK (input_type IN ('text', 'textarea', 'number', 'date', 'select', 'radio', 'checkbox', 'email', 'phone'));

-- Add constraint: data_type must be one of allowed values
ALTER TABLE public.form_fields
ADD CONSTRAINT chk_form_fields_data_type_valid
CHECK (data_type IN ('string', 'number', 'boolean', 'date', 'array', 'object'));

-- Add constraint: validation_rules must be a JSON object
ALTER TABLE public.form_fields
ADD CONSTRAINT chk_form_fields_validation_rules_object
CHECK (jsonb_typeof(validation_rules) = 'object');

-- Foreign key reference to quote_form_versions
-- ON DELETE RESTRICT: field definitions belonging to published/archived versions must be preserved
ALTER TABLE public.form_fields
ADD CONSTRAINT fk_form_fields_version
FOREIGN KEY (version_id)
REFERENCES public.quote_form_versions(id)
ON DELETE RESTRICT;

-- Unique constraint on (version_id, field_key)
-- field_key is a stable machine-readable form identifier, not a URL slug
ALTER TABLE public.form_fields
ADD CONSTRAINT uq_form_fields_version_field_key
UNIQUE (version_id, field_key);

-- Indexes for performance
CREATE INDEX form_fields_version_id_idx
ON public.form_fields (version_id);
CREATE INDEX form_fields_version_active_order_idx
ON public.form_fields (version_id, is_active, display_order);

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_form_fields_updated_at
BEFORE UPDATE ON public.form_fields
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Form field immutability guard:
-- published/archived quote form versions are immutable in meaning; their fields
-- must not be added, edited, or removed directly. Only draft versions are editable.
CREATE OR REPLACE FUNCTION public.guard_form_field_mutation()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        PERFORM public.assert_quote_form_version_editable(NEW.version_id);
    ELSIF TG_OP = 'UPDATE' THEN
        PERFORM public.assert_quote_form_version_editable(OLD.version_id);
        PERFORM public.assert_quote_form_version_editable(NEW.version_id);
    ELSIF TG_OP = 'DELETE' THEN
        PERFORM public.assert_quote_form_version_editable(OLD.version_id);
    END IF;

    RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE TRIGGER guard_form_fields_mutation
BEFORE INSERT OR UPDATE OR DELETE ON public.form_fields
FOR EACH ROW
EXECUTE FUNCTION public.guard_form_field_mutation();

-- Comments for form_fields table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. field_key is a stable machine-readable identifier (e.g. project_type, lift_height)
--    containing only lowercase letters, digits, and underscores
-- 3. input_type and data_type compatibility (e.g. number->number, date->date,
--    checkbox->boolean/array) is enforced by the backend validator, not SQL
-- 4. validation_rules is a JSON object constrained at the database level
-- 5. Only draft status versions are editable; guard_form_field_mutation raises for
--    INSERT/UPDATE/DELETE referencing published/archived versions
-- 6. No RESTRICT duplicate index on (version_id, field_key); the UNIQUE constraint
--    already creates one
COMMENT ON TABLE public.form_fields IS 'Individual form input definitions for a specific quote form version';
COMMENT ON COLUMN public.form_fields.id IS 'Universally unique identifier (UUID) for the form field';
COMMENT ON COLUMN public.form_fields.version_id IS 'Foreign key referencing the quote form version';
COMMENT ON COLUMN public.form_fields.field_key IS 'Stable machine-readable lowercase identifier (letters, digits, underscores)';
COMMENT ON COLUMN public.form_fields.label IS 'Human-readable label rendered on the form';
COMMENT ON COLUMN public.form_fields.input_type IS 'Input control type (text, textarea, number, date, select, radio, checkbox, email, phone)';
COMMENT ON COLUMN public.form_fields.data_type IS 'Semantic data type (string, number, boolean, date, array, object)';
COMMENT ON COLUMN public.form_fields.is_required IS 'Flag indicating if the field is required';
COMMENT ON COLUMN public.form_fields.placeholder IS 'Placeholder text shown in the input control';
COMMENT ON COLUMN public.form_fields.help_text IS 'Helper text displayed to guide the user';
COMMENT ON COLUMN public.form_fields.validation_rules IS 'JSON object containing validation rules';
COMMENT ON COLUMN public.form_fields.display_order IS 'Numeric value determining field sequence (higher = later)';
COMMENT ON COLUMN public.form_fields.is_active IS 'Flag indicating if the field is currently active';
COMMENT ON COLUMN public.form_fields.created_at IS 'Timestamp when the field was created (UTC)';
COMMENT ON COLUMN public.form_fields.updated_at IS 'Timestamp when the field was last updated (UTC)';
COMMENT ON INDEX form_fields_version_id_idx IS 'Index for efficient queries by version';
COMMENT ON INDEX form_fields_version_active_order_idx IS 'Composite index for active field queries with ordering';
-- RLS intentionally deferred to the dedicated security phase