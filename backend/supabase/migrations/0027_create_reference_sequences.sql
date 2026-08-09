-- Create reference sequences and functions for Chitrani Construction backend
-- Collision-safe reference number generation for enquiries and quote requests

-- Create PostgreSQL sequences for reference number generation
CREATE SEQUENCE IF NOT EXISTS public.contact_enquiry_reference_seq
    AS bigint
    START WITH 1
    INCREMENT BY 1
    NO CYCLE;

CREATE SEQUENCE IF NOT EXISTS public.quote_request_reference_seq
    AS bigint
    START WITH 1
    INCREMENT BY 1
    NO CYCLE;

-- Create reference generation function for contact enquiries
-- Format: CHI-ENQ-YYYY-XXXXXX (e.g. CHI-ENQ-2026-000123)
-- XXXXXX means minimum six digits, values > 999999 are preserved in full
CREATE OR REPLACE FUNCTION public.generate_contact_enquiry_reference()
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
    sequence_value bigint;
    year_value text;
    sequence_text text;
BEGIN
    sequence_value := nextval('public.contact_enquiry_reference_seq');

    year_value := to_char(CURRENT_TIMESTAMP AT TIME ZONE 'UTC', 'YYYY');

    sequence_text := sequence_value::text;

    RETURN 'CHI-ENQ-' || year_value || '-' || lpad(sequence_text, greatest(6, length(sequence_text)), '0');
END;
$$;

-- Create reference generation function for quote requests
-- Format: CHI-Q-YYYY-XXXXXX (e.g. CHI-Q-2026-000456)
-- XXXXXX means minimum six digits, values > 999999 are preserved in full
CREATE OR REPLACE FUNCTION public.generate_quote_request_reference()
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
    sequence_value bigint;
    year_value text;
    sequence_text text;
BEGIN
    sequence_value := nextval('public.quote_request_reference_seq');

    year_value := to_char(CURRENT_TIMESTAMP AT TIME ZONE 'UTC', 'YYYY');

    sequence_text := sequence_value::text;

    RETURN 'CHI-Q-' || year_value || '-' || lpad(sequence_text, greatest(6, length(sequence_text)), '0');
END;
$$;

-- Apply reference defaults to contact_enquiries table
ALTER TABLE public.contact_enquiries
ALTER COLUMN reference_number SET DEFAULT public.generate_contact_enquiry_reference();

-- Apply reference defaults to quote_requests table
ALTER TABLE public.quote_requests
ALTER COLUMN reference_number SET DEFAULT public.generate_quote_request_reference();

-- Comments for reference sequences and functions:
-- 1. Sequences are concurrency-safe and generate unique values
-- 2. Sequence gaps are normal and acceptable (failed transactions, rollbacks)
-- 3. Reference numbers are identifiers, NOT invoice/accounting counters
-- 4. Annual sequence reset is NOT attempted - sequences continue indefinitely
-- 5. Reference numeric portions use a minimum width of six digits.
-- 6. Values greater than 999999 are preserved in full and are never truncated.
-- 7. The UNIQUE constraint on reference_number provides additional DB guarantee
-- 8. Public POST APIs will NOT accept reference_number from the browser
-- 9. Repository insert logic will omit reference_number so PostgreSQL generates it
-- 10. Never use MAX(reference_number) + 1 or COUNT(*) + 1 for reference generation
-- 11. Never calculate the next reference in JavaScript - database sequences are the source
COMMENT ON SEQUENCE public.contact_enquiry_reference_seq IS 'Sequence for generating contact enquiry reference numbers (CHI-ENQ-YYYY-XXXXXX)';
COMMENT ON SEQUENCE public.quote_request_reference_seq IS 'Sequence for generating quote request reference numbers (CHI-Q-YYYY-XXXXXX)';
COMMENT ON FUNCTION public.generate_contact_enquiry_reference() IS 'Generates contact enquiry reference numbers in format CHI-ENQ-YYYY-XXXXXX (minimum 6 digits, no truncation)';
COMMENT ON FUNCTION public.generate_quote_request_reference() IS 'Generates quote request reference numbers in format CHI-Q-YYYY-XXXXXX (minimum 6 digits, no truncation)';