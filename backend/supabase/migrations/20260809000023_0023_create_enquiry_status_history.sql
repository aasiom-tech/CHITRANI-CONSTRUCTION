-- Create enquiry_status_history table for Chitrani Construction backend
-- Immutable status audit log for contact enquiries
CREATE TABLE public.enquiry_status_history (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    enquiry_id uuid NOT NULL,
    old_status text NULL,
    new_status text NOT NULL,
    changed_by uuid NULL,
    note text NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: new_status must be one of allowed values
ALTER TABLE public.enquiry_status_history
ADD CONSTRAINT chk_enquiry_status_history_new_status_valid
CHECK (new_status IN ('new', 'contacted', 'qualified', 'closed'));

-- Add constraint: old_status must be NULL or one of allowed values
ALTER TABLE public.enquiry_status_history
ADD CONSTRAINT chk_enquiry_status_history_old_status_valid
CHECK (
    old_status IS NULL OR
    old_status IN ('new', 'contacted', 'qualified', 'closed')
);

-- Add constraint: if old_status is not NULL, it must differ from new_status
ALTER TABLE public.enquiry_status_history
ADD CONSTRAINT chk_enquiry_status_history_status_change
CHECK (
    old_status IS NULL OR
    old_status <> new_status
);

-- Foreign key references
ALTER TABLE public.enquiry_status_history
ADD CONSTRAINT fk_enquiry_status_history_enquiry
FOREIGN KEY (enquiry_id)
REFERENCES public.contact_enquiries(id)
ON DELETE RESTRICT;

ALTER TABLE public.enquiry_status_history
ADD CONSTRAINT fk_enquiry_status_history_changed_by
FOREIGN KEY (changed_by)
REFERENCES public.admin_users(id)
ON DELETE SET NULL;

-- Indexes for performance
CREATE INDEX enquiry_status_history_enquiry_id_idx
ON public.enquiry_status_history (enquiry_id);
CREATE INDEX enquiry_status_history_changed_by_idx
ON public.enquiry_status_history (changed_by);
CREATE INDEX enquiry_status_history_created_at_idx
ON public.enquiry_status_history (created_at);
CREATE INDEX enquiry_status_history_enquiry_created_idx
ON public.enquiry_status_history (enquiry_id, created_at DESC);

-- Immutable history helper: prevent updates and deletions
CREATE OR REPLACE FUNCTION public.prevent_log_record_mutation()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE EXCEPTION 'History/log records are immutable and cannot be updated or deleted';
END;
$$;

-- Attach immutability trigger to enquiry status history
CREATE TRIGGER prevent_enquiry_status_history_mutation
BEFORE UPDATE OR DELETE ON public.enquiry_status_history
FOR EACH ROW
EXECUTE FUNCTION public.prevent_log_record_mutation();

-- Comments for enquiry_status_history table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. Enquiry status history records are append-only and immutable
-- 3. old_status may be NULL for an initial history event
-- 4. new_status must be one of the allowed enquiry status values
-- 5. If old_status is provided, it must differ from new_status (actual status change)
-- 6. Changed_by references the admin user who made the change (NULL if system-generated)
-- 7. No CASCADE deletion: enquiry status history is preserved as operational record
COMMENT ON TABLE public.enquiry_status_history IS 'Immutable status audit log for contact enquiries';
COMMENT ON COLUMN public.enquiry_status_history.id IS 'Universally unique identifier (UUID) for the history record';
COMMENT ON COLUMN public.enquiry_status_history.enquiry_id IS 'Foreign key to the contact enquiry';
COMMENT ON COLUMN public.enquiry_status_history.old_status IS 'Previous status before the change (NULL for initial record)';
COMMENT ON COLUMN public.enquiry_status_history.new_status IS 'New status after the change';
COMMENT ON COLUMN public.enquiry_status_history.changed_by IS 'Admin user who changed the status (NULL if system-generated)';
COMMENT ON COLUMN public.enquiry_status_history.note IS 'Optional note about the status change';
COMMENT ON COLUMN public.enquiry_status_history.created_at IS 'Timestamp when the history record was created (UTC)';
COMMENT ON INDEX enquiry_status_history_enquiry_created_idx IS 'Composite index for enquiry status lists ordered by recency';
