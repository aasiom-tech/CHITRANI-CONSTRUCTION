-- Create audit_logs table for Chitrani Construction backend
-- System-wide administrative action logs
CREATE TABLE public.audit_logs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_admin_id uuid NULL,
    entity_type text NOT NULL,
    entity_id uuid NOT NULL,
    action text NOT NULL,
    before_summary jsonb NULL,
    after_summary jsonb NULL,
    request_id uuid NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: entity_type must not be blank
ALTER TABLE public.audit_logs
ADD CONSTRAINT chk_audit_logs_entity_type_not_blank
CHECK (length(btrim(entity_type)) > 0);

-- Add constraint: action must not be blank
ALTER TABLE public.audit_logs
ADD CONSTRAINT chk_audit_logs_action_not_blank
CHECK (length(btrim(action)) > 0);

-- Add constraint: if before_summary is not NULL, it must be a JSON object
ALTER TABLE public.audit_logs
ADD CONSTRAINT chk_audit_logs_before_summary_object
CHECK (
    before_summary IS NULL OR
    jsonb_typeof(before_summary) = ''object''
);

-- Add constraint: if after_summary is not NULL, it must be a JSON object
ALTER TABLE public.audit_logs
ADD CONSTRAINT chk_audit_logs_after_summary_object
CHECK (
    after_summary IS NULL OR
    jsonb_typeof(after_summary) = ''object''
);

-- Foreign key reference
ALTER TABLE public.audit_logs
ADD CONSTRAINT fk_audit_logs_actor_admin_id
FOREIGN KEY (actor_admin_id)
REFERENCES public.admin_users(id)
ON DELETE SET NULL;

-- Indexes for performance
CREATE INDEX audit_logs_actor_admin_id_idx
ON public.audit_logs (actor_admin_id);
CREATE INDEX audit_logs_entity_type_idx
ON public.audit_logs (entity_type);
CREATE INDEX audit_logs_entity_id_idx
ON public.audit_logs (entity_id);
CREATE INDEX audit_logs_created_at_idx
ON public.audit_logs (created_at);
CREATE INDEX audit_logs_entity_lookup_idx
ON public.audit_logs (entity_type, entity_id);
CREATE INDEX audit_logs_request_id_idx
ON public.audit_logs (request_id);

-- Immutable audit log helper: prevent updates and deletions
CREATE TRIGGER prevent_audit_logs_mutation
BEFORE UPDATE OR DELETE ON public.audit_logs
FOR EACH ROW
EXECUTE FUNCTION public.prevent_log_record_mutation();

-- Comments for audit_logs table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. Audit logs are append-only and immutable
-- 3. actor_admin_id references the admin user who performed the action (NULL if system-generated)
-- 4. entity_type and entity_id form a controlled polymorphic reference (application validates the entity)
-- 5. action describes the administrative action performed
-- 6. before_summary and after_summary are JSON objects capturing state before/after the action
-- 7. request_id optionally references the original request that triggered the action
-- 8. No CASCADE deletion: audit logs are preserved as system operational records
-- 9. Never store passwords, access tokens, service keys, or sensitive customer form bodies in audit logs
COMMENT ON TABLE public.audit_logs IS 'System-wide administrative action logs';
COMMENT ON COLUMN public.audit_logs.id IS 'Universally unique identifier (UUID) for the audit log record';
COMMENT ON COLUMN public.audit_logs.actor_admin_id IS 'Admin user who performed the action (NULL if system-generated)';
COMMENT ON COLUMN public.audit_logs.entity_type IS 'Type of entity being audited (e.g., ''contact_enquiry'', ''quote_request'')';
COMMENT ON COLUMN public.audit_logs.entity_id IS 'ID of the entity being audited';
COMMENT ON COLUMN public.audit_logs.action IS 'Administrative action performed (extensible text, not ENUM)';
COMMENT ON COLUMN public.audit_logs.before_summary IS 'JSON object capturing entity state before the action';
COMMENT ON COLUMN public.audit_logs.after_summary IS 'JSON object capturing entity state after the action';
COMMENT ON COLUMN public.audit_logs.request_id IS 'Optional request ID that triggered this audit log entry';
COMMENT ON COLUMN public.audit_logs.created_at IS 'Timestamp when the audit log record was created (UTC)';
COMMENT ON INDEX audit_logs_entity_lookup_idx IS 'Composite index for entity-type lookups';
