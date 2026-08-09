-- Migration 0029: Hardening remediation
-- A. Fix PL/pgSQL ambiguity in validate_quote_request_configuration
-- B. Harden future postgres-created object default privileges
-- Does NOT modify existing object ACLs (handled by migration 0028)
-- Does NOT create application tables or seed data

-- =============================================================================
-- A. FIX FUNCTION AMBIGUITY
-- =============================================================================

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
    SELECT qfv.version_number
    INTO v_version_number
    FROM public.quote_form_versions AS qfv
    WHERE qfv.id = template_version_uuid;

    IF v_version_number IS DISTINCT FROM version_number THEN
        RAISE EXCEPTION 'Quote form version % has version_number %, not %', template_version_uuid, v_version_number, version_number;
    END IF;
END;
$$;

-- =============================================================================
-- B. HARDEN FUTURE TABLE DEFAULT PRIVILEGES
-- =============================================================================

-- Remove all existing future-table defaults for postgres-created objects in public
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
    REVOKE ALL PRIVILEGES ON TABLES
    FROM anon, authenticated, service_role;

-- Restore only intended service_role defaults
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES
    TO service_role;

-- =============================================================================
-- C. HARDEN FUTURE SEQUENCE DEFAULT PRIVILEGES
-- =============================================================================

-- Remove all existing future-sequence defaults
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
    REVOKE ALL PRIVILEGES ON SEQUENCES
    FROM anon, authenticated, service_role;

-- Restore only intended service_role defaults
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
    GRANT USAGE, SELECT ON SEQUENCES
    TO service_role;

-- =============================================================================
-- D. HARDEN FUTURE FUNCTION DEFAULT PRIVILEGES
-- =============================================================================

-- Remove built-in global PUBLIC EXECUTE default for future functions created by postgres
-- This is NOT schema-specific; PostgreSQL's built-in default is global
ALTER DEFAULT PRIVILEGES FOR ROLE postgres
    REVOKE EXECUTE ON FUNCTIONS
    FROM PUBLIC;

-- Remove all existing future-function defaults in public schema
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
    REVOKE ALL PRIVILEGES ON FUNCTIONS
    FROM anon, authenticated, service_role;

-- Restore only intended service_role defaults in public schema
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
    GRANT EXECUTE ON FUNCTIONS
    TO service_role;
