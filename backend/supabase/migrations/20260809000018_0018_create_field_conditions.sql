-- Create field_conditions table for Chitrani Construction backend
-- Simple display logic rules governing dynamic field visibility (v1: equals/not_equals -> show)
CREATE TABLE public.field_conditions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    field_id uuid NOT NULL,
    depends_on_field_id uuid NOT NULL,
    operator text NOT NULL,
    comparison_value jsonb NOT NULL,
    action text NOT NULL DEFAULT 'show',
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: a field cannot depend on itself
ALTER TABLE public.field_conditions
ADD CONSTRAINT chk_field_conditions_no_self_dependency
CHECK (field_id <> depends_on_field_id);

-- Add constraint: operator must be one of allowed values (v1 keeps conditions intentionally simple)
ALTER TABLE public.field_conditions
ADD CONSTRAINT chk_field_conditions_operator_valid
CHECK (operator IN ('equals', 'not_equals'));

-- Add constraint: action must be one of allowed values (v1 only supports show)
ALTER TABLE public.field_conditions
ADD CONSTRAINT chk_field_conditions_action_valid
CHECK (action IN ('show'));

-- Foreign key reference to form_fields for the conditional field
-- ON DELETE RESTRICT: conditions on published/archived versions must be preserved
ALTER TABLE public.field_conditions
ADD CONSTRAINT fk_field_conditions_field
FOREIGN KEY (field_id)
REFERENCES public.form_fields(id)
ON DELETE RESTRICT;

-- Foreign key reference to form_fields for the dependency field
-- ON DELETE RESTRICT: conditions on published/archived versions must be preserved
ALTER TABLE public.field_conditions
ADD CONSTRAINT fk_field_conditions_depends_on_field
FOREIGN KEY (depends_on_field_id)
REFERENCES public.form_fields(id)
ON DELETE RESTRICT;

-- Indexes for performance
CREATE INDEX field_conditions_field_id_idx
ON public.field_conditions (field_id);
CREATE INDEX field_conditions_depends_on_field_id_idx
ON public.field_conditions (depends_on_field_id);

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_field_conditions_updated_at
BEFORE UPDATE ON public.field_conditions
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Same-version condition rule:
-- The conditional field and the dependency field must belong to the exact same
-- quote form version. A field in Version 2 must not depend on a field from Version 1.
CREATE OR REPLACE FUNCTION public.validate_field_condition_same_version()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
    v_field_version_id uuid;
    v_depends_version_id uuid;
BEGIN
    SELECT version_id
    INTO v_field_version_id
    FROM public.form_fields
    WHERE id = NEW.field_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Form field % does not exist for condition', NEW.field_id;
    END IF;

    SELECT version_id
    INTO v_depends_version_id
    FROM public.form_fields
    WHERE id = NEW.depends_on_field_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Form field % does not exist for condition dependency', NEW.depends_on_field_id;
    END IF;

    IF v_field_version_id <> v_depends_version_id THEN
        RAISE EXCEPTION 'Conditional field and dependency field must belong to the same quote form version';
    END IF;

    RETURN NEW;
END;
$$;

CREATE TRIGGER validate_field_conditions_same_version
BEFORE INSERT OR UPDATE ON public.field_conditions
FOR EACH ROW
EXECUTE FUNCTION public.validate_field_condition_same_version();

-- Field condition immutability guard:
-- Condition rules attached to published/archived versions must not be altered.
-- The parent form version is resolved through field_conditions.field_id -> form_fields.version_id.
CREATE OR REPLACE FUNCTION public.guard_field_condition_mutation()
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
            RAISE EXCEPTION 'Form field % does not exist for condition mutation check', NEW.field_id;
        END IF;

        PERFORM public.assert_quote_form_version_editable(v_version_id);
    END IF;

    IF TG_OP IN ('UPDATE', 'DELETE') THEN
        SELECT version_id
        INTO v_version_id
        FROM public.form_fields
        WHERE id = OLD.field_id;

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Form field % does not exist for condition mutation check', OLD.field_id;
        END IF;

        PERFORM public.assert_quote_form_version_editable(v_version_id);
    END IF;

    RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE TRIGGER guard_field_conditions_mutation
BEFORE INSERT OR UPDATE OR DELETE ON public.field_conditions
FOR EACH ROW
EXECUTE FUNCTION public.guard_field_condition_mutation();

-- Comments for field_conditions table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. v1 intentionally limits conditions to operator IN (equals, not_equals) and
--    action = 'show'; no nested AND/OR trees, scripts, expressions, or custom code
-- 3. field_id and depends_on_field_id must belong to the exact same quote form version,
--    enforced by validate_field_condition_same_version
-- 4. Guard trigger prevents INSERT/UPDATE/DELETE resolving to published/archived versions
-- 5. Example: Equipment Type = Crane -> show Lift Height
COMMENT ON TABLE public.field_conditions IS 'Simple display logic rules governing dynamic field visibility (v1)';
COMMENT ON COLUMN public.field_conditions.id IS 'Universally unique identifier (UUID) for the field condition';
COMMENT ON COLUMN public.field_conditions.field_id IS 'Foreign key referencing the conditional form field';
COMMENT ON COLUMN public.field_conditions.depends_on_field_id IS 'Foreign key referencing the dependency form field';
COMMENT ON COLUMN public.field_conditions.operator IS 'Comparison operator (equals, not_equals)';
COMMENT ON COLUMN public.field_conditions.comparison_value IS 'JSON value the dependency field is compared against';
COMMENT ON COLUMN public.field_conditions.action IS 'Display action when condition matches (v1: show)';
COMMENT ON COLUMN public.field_conditions.created_at IS 'Timestamp when the condition was created (UTC)';
COMMENT ON COLUMN public.field_conditions.updated_at IS 'Timestamp when the condition was last updated (UTC)';
COMMENT ON INDEX field_conditions_field_id_idx IS 'Index for efficient queries by conditional field';
COMMENT ON INDEX field_conditions_depends_on_field_id_idx IS 'Index for efficient queries by dependency field';
-- RLS intentionally deferred to the dedicated security phase