-- Create quote_answers table for Chitrani Construction backend
-- Immutable key-value answer snapshots for a quote request, matched to a historical field definition
CREATE TABLE public.quote_answers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    quote_request_id uuid NOT NULL,
    field_id uuid NOT NULL,
    field_key_snapshot text NOT NULL,
    field_label_snapshot text NOT NULL,
    field_type_snapshot text NOT NULL,
    value_json jsonb NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: field_key_snapshot must be non-blank
ALTER TABLE public.quote_answers
ADD CONSTRAINT chk_quote_answers_field_key_snapshot_not_blank
CHECK (length(btrim(field_key_snapshot)) > 0);

-- Add constraint: field_label_snapshot must be non-blank
ALTER TABLE public.quote_answers
ADD CONSTRAINT chk_quote_answers_field_label_snapshot_not_blank
CHECK (length(btrim(field_label_snapshot)) > 0);

-- Add constraint: field_type_snapshot must be non-blank
ALTER TABLE public.quote_answers
ADD CONSTRAINT chk_quote_answers_field_type_snapshot_not_blank
CHECK (length(btrim(field_type_snapshot)) > 0);

-- Add constraint: field_key_snapshot must be a stable machine-readable identifier
ALTER TABLE public.quote_answers
ADD CONSTRAINT chk_quote_answers_field_key_snapshot_format
CHECK (field_key_snapshot ~ '^[a-z][a-z0-9_]*$');

-- Add constraint: field_type_snapshot must be one of allowed input types
ALTER TABLE public.quote_answers
ADD CONSTRAINT chk_quote_answers_field_type_snapshot_valid
CHECK (field_type_snapshot IN ('text', 'textarea', 'number', 'date', 'select', 'radio', 'checkbox', 'email', 'phone'));

-- Foreign key reference to quote_requests
-- ON DELETE RESTRICT: submitted answers must never be cascade-deleted
ALTER TABLE public.quote_answers
ADD CONSTRAINT fk_quote_answers_quote_request
FOREIGN KEY (quote_request_id)
REFERENCES public.quote_requests(id)
ON DELETE RESTRICT;

-- Foreign key reference to form_fields
-- ON DELETE RESTRICT: historical answers must remain attributable to their original field
ALTER TABLE public.quote_answers
ADD CONSTRAINT fk_quote_answers_field
FOREIGN KEY (field_id)
REFERENCES public.form_fields(id)
ON DELETE RESTRICT;

-- Prevent duplicate answers: one submitted field has exactly one answer record.
-- Future multi-value fields store arrays inside value_json rather than duplicate rows.
ALTER TABLE public.quote_answers
ADD CONSTRAINT uq_quote_answers_quote_request_field
UNIQUE (quote_request_id, field_id);

-- Quote answer configuration + snapshot consistency validation on INSERT:
-- 1. The submitted answer's field must belong to the exact quote form version the
--    quote request was submitted against (prevents cross-version answers).
-- 2. field_key_snapshot, field_label_snapshot, and field_type_snapshot must match
--    the field definition at submission time so snapshots faithfully record history.
CREATE OR REPLACE FUNCTION public.validate_quote_answer_configuration()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
    v_request_version_id uuid;
    v_field_version_id uuid;
    v_field_key text;
    v_field_label text;
    v_field_input_type text;
BEGIN
    SELECT template_version_id
    INTO v_request_version_id
    FROM public.quote_requests
    WHERE id = NEW.quote_request_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Quote request % does not exist', NEW.quote_request_id;
    END IF;

    SELECT version_id, field_key, label, input_type
    INTO v_field_version_id, v_field_key, v_field_label, v_field_input_type
    FROM public.form_fields
    WHERE id = NEW.field_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Form field % does not exist', NEW.field_id;
    END IF;

    IF v_field_version_id IS DISTINCT FROM v_request_version_id THEN
        RAISE EXCEPTION 'Answer field does not belong to the quote request''s form version';
    END IF;

    IF NEW.field_key_snapshot IS DISTINCT FROM v_field_key THEN
        RAISE EXCEPTION 'field_key_snapshot does not match the form field definition';
    END IF;

    IF NEW.field_label_snapshot IS DISTINCT FROM v_field_label THEN
        RAISE EXCEPTION 'field_label_snapshot does not match the form field definition';
    END IF;

    IF NEW.field_type_snapshot IS DISTINCT FROM v_field_input_type THEN
        RAISE EXCEPTION 'field_type_snapshot does not match the form field definition';
    END IF;

    RETURN NEW;
END;
$$;

CREATE TRIGGER validate_quote_answers_configuration
BEFORE INSERT ON public.quote_answers
FOR EACH ROW
EXECUTE FUNCTION public.validate_quote_answer_configuration();

-- Quote answer immutability guard:
-- User-submitted answers are historical submission data and must never be
-- rewritten or deleted by administrators. Corrections belong in internal notes,
-- status workflow, and future controlled business features.
CREATE OR REPLACE FUNCTION public.guard_quote_answer_immutability()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE EXCEPTION 'Quote answers are immutable submission data and cannot be updated or deleted';
END;
$$;

CREATE TRIGGER guard_quote_answers_immutability
BEFORE UPDATE OR DELETE ON public.quote_answers
FOR EACH ROW
EXECUTE FUNCTION public.guard_quote_answer_immutability();

-- Indexes for performance (UNIQUE (quote_request_id, field_id) index already exists;
-- a dedicated index on field_id is added since the unique index cannot be used safely for
-- field-first lookups that do not also filter by quote_request_id)
CREATE INDEX quote_answers_field_id_idx ON public.quote_answers (field_id);
COMMENT ON INDEX quote_answers_field_id_idx IS 'Index for field-based lookups';
-- RLS intentionally deferred to the dedicated security phase
