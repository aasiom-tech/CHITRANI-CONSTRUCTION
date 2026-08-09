-- Migration 0028: Security baseline — RLS + explicit privilege control
-- Enables RLS on all 28 application tables
-- Revokes direct table access from anon/authenticated
-- Grants service_role full application access
-- Revokes function EXECUTE from PUBLIC/anon/authenticated
-- Grants function EXECUTE to service_role only
-- Configures default privileges to prevent future accidental exposure

-- =============================================================================
-- 1. ENABLE RLS ON ALL 28 APPLICATION TABLES
-- =============================================================================

ALTER TABLE public.business_divisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.equipment_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.equipment_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.equipment_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_form_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_form_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.field_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.field_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internal_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiry_status_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_status_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_logs ENABLE ROW LEVEL SECURITY;

-- =============================================================================
-- 2. REVOKE TABLE ACCESS FROM ANON/AUTHENTICATED/PUBLIC
-- =============================================================================

-- Explicitly revoke all privileges on each application table from roles
-- that should NOT have direct access.

DO $$
DECLARE
    t text;
    tables text[] := ARRAY[
        'business_divisions', 'services', 'equipment_categories', 'admin_users',
        'media', 'equipment', 'equipment_specifications', 'industries',
        'service_industries', 'projects', 'project_services', 'project_industries',
        'project_media', 'service_media', 'equipment_media',
        'quote_form_templates', 'quote_form_versions', 'form_fields',
        'field_options', 'field_conditions',
        'contact_enquiries', 'quote_requests', 'quote_answers',
        'internal_notes', 'enquiry_status_history', 'quote_status_history',
        'audit_logs', 'notification_logs'
    ];
    role_name text;
BEGIN
    FOREACH t IN ARRAY tables LOOP
        FOREACH role_name IN ARRAY ARRAY['anon', 'authenticated'] LOOP
            EXECUTE format(
                'REVOKE ALL PRIVILEGES ON public.%I FROM %I',
                t, role_name
            );
        END LOOP;
    END LOOP;
END $$;

-- =============================================================================
-- 3. GRANT SERVICE_ROLE FULL APPLICATION ACCESS
-- =============================================================================

DO $$
DECLARE
    t text;
    tables text[] := ARRAY[
        'business_divisions', 'services', 'equipment_categories', 'admin_users',
        'media', 'equipment', 'equipment_specifications', 'industries',
        'service_industries', 'projects', 'project_services', 'project_industries',
        'project_media', 'service_media', 'equipment_media',
        'quote_form_templates', 'quote_form_versions', 'form_fields',
        'field_options', 'field_conditions',
        'contact_enquiries', 'quote_requests', 'quote_answers',
        'internal_notes', 'enquiry_status_history', 'quote_status_history',
        'audit_logs', 'notification_logs'
    ];
BEGIN
    FOREACH t IN ARRAY tables LOOP
        EXECUTE format(
            'GRANT SELECT, INSERT, UPDATE, DELETE ON public.%I TO service_role',
            t
        );
    END LOOP;
END $$;

-- =============================================================================
-- 4. REFERENCE SEQUENCE PRIVILEGES
-- =============================================================================

-- Revoke from anon/authenticated
REVOKE USAGE, SELECT ON SEQUENCE public.contact_enquiry_reference_seq FROM anon, authenticated;
REVOKE USAGE, SELECT ON SEQUENCE public.quote_request_reference_seq FROM anon, authenticated;

-- Grant to service_role
GRANT USAGE, SELECT ON SEQUENCE public.contact_enquiry_reference_seq TO service_role;
GRANT USAGE, SELECT ON SEQUENCE public.quote_request_reference_seq TO service_role;

-- =============================================================================
-- 5. FUNCTION EXECUTE PRIVILEGES
-- =============================================================================

-- Revoke EXECUTE from PUBLIC on all application functions (PUBLIC is a special keyword, not a role)
DO $$
DECLARE
    fn text;
    funcs text[] := ARRAY[
        'set_updated_at',
        'assert_quote_form_version_editable',
        'validate_optional_service_division',
        'prevent_log_record_mutation',
        'generate_contact_enquiry_reference',
        'generate_quote_request_reference',
        'guard_contact_enquiry_service_division',
        'validate_quote_answer_configuration',
        'guard_quote_answer_immutability',
        'validate_quote_request_configuration',
        'guard_quote_request_configuration',
        'validate_field_condition_same_version',
        'guard_field_condition_mutation',
        'guard_field_option_mutation',
        'guard_form_field_mutation'
    ];
BEGIN
    FOREACH fn IN ARRAY funcs LOOP
        EXECUTE format('REVOKE EXECUTE ON FUNCTION public.%I FROM PUBLIC', fn);
    END LOOP;
END $$;

-- Revoke EXECUTE from anon/authenticated on all application functions
DO $$
DECLARE
    fn text;
    funcs text[] := ARRAY[
        'set_updated_at',
        'assert_quote_form_version_editable',
        'validate_optional_service_division',
        'prevent_log_record_mutation',
        'generate_contact_enquiry_reference',
        'generate_quote_request_reference',
        'guard_contact_enquiry_service_division',
        'validate_quote_answer_configuration',
        'guard_quote_answer_immutability',
        'validate_quote_request_configuration',
        'guard_quote_request_configuration',
        'validate_field_condition_same_version',
        'guard_field_condition_mutation',
        'guard_field_option_mutation',
        'guard_form_field_mutation'
    ];
    role_name text;
BEGIN
    FOREACH fn IN ARRAY funcs LOOP
        FOREACH role_name IN ARRAY ARRAY['anon', 'authenticated'] LOOP
            EXECUTE format(
                'REVOKE EXECUTE ON FUNCTION public.%I FROM %I',
                fn, role_name
            );
        END LOOP;
    END LOOP;
END $$;

-- Grant EXECUTE to service_role
DO $$
DECLARE
    fn text;
    funcs text[] := ARRAY[
        'set_updated_at',
        'assert_quote_form_version_editable',
        'validate_optional_service_division',
        'prevent_log_record_mutation',
        'generate_contact_enquiry_reference',
        'generate_quote_request_reference',
        'guard_contact_enquiry_service_division',
        'validate_quote_answer_configuration',
        'guard_quote_answer_immutability',
        'validate_quote_request_configuration',
        'guard_quote_request_configuration',
        'validate_field_condition_same_version',
        'guard_field_condition_mutation',
        'guard_field_option_mutation',
        'guard_form_field_mutation'
    ];
BEGIN
    FOREACH fn IN ARRAY funcs LOOP
        EXECUTE format(
            'GRANT EXECUTE ON FUNCTION public.%I TO service_role',
            fn
        );
    END LOOP;
END $$;

-- =============================================================================
-- 6. DEFAULT PRIVILEGES FOR FUTURE OBJECTS
-- =============================================================================

-- Prevent future tables/functions created by postgres from being
-- automatically accessible to anon/authenticated.
-- Grant future tables/functions to service_role by default.

-- Future tables created by postgres in public: no default grant to anon/authenticated
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO service_role;

-- Future sequences created by postgres in public: no default grant to anon/authenticated
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT USAGE, SELECT ON SEQUENCES TO service_role;

-- Future functions created by postgres in public: no default EXECUTE to PUBLIC/anon/authenticated
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT EXECUTE ON FUNCTIONS TO service_role;
