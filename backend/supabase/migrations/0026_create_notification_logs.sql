-- Create notification_logs table for Chitrani Construction backend
-- Delivery log for email notifications and system alerts
CREATE TABLE public.notification_logs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type text NOT NULL,
    enquiry_id uuid NULL,
    quote_request_id uuid NULL,
    recipient text NOT NULL,
    provider text NOT NULL,
    provider_message_id text NULL,
    delivery_status text NOT NULL DEFAULT ''pending'',
    error_summary text NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: event_type must not be blank
ALTER TABLE public.notification_logs
ADD CONSTRAINT chk_notification_logs_event_type_not_blank
CHECK (length(btrim(event_type)) > 0);

-- Add constraint: recipient must not be blank
ALTER TABLE public.notification_logs
ADD CONSTRAINT chk_notification_logs_recipient_not_blank
CHECK (length(btrim(recipient)) > 0);

-- Add constraint: provider must not be blank
ALTER TABLE public.notification_logs
ADD CONSTRAINT chk_notification_logs_provider_not_blank
CHECK (length(btrim(provider)) > 0);

-- Add constraint: delivery_status must be one of allowed values
ALTER TABLE public.notification_logs
ADD CONSTRAINT chk_notification_logs_delivery_status_valid
CHECK (delivery_status IN (''pending'', ''sent'', ''delivered'', ''failed''));

-- Add constraint: allow zero OR one related submission (enquiry_id XOR quote_request_id)
ALTER TABLE public.notification_logs
ADD CONSTRAINT chk_notification_logs_single_related_submission
CHECK (
    num_nonnulls(enquiry_id, quote_request_id) <= 1
);

-- Foreign key references
ALTER TABLE public.notification_logs
ADD CONSTRAINT fk_notification_logs_enquiry
FOREIGN KEY (enquiry_id)
REFERENCES public.contact_enquiries(id)
ON DELETE RESTRICT;

ALTER TABLE public.notification_logs
ADD CONSTRAINT fk_notification_logs_quote_request
FOREIGN KEY (quote_request_id)
REFERENCES public.quote_requests(id)
ON DELETE RESTRICT;

-- Indexes for performance
CREATE INDEX notification_logs_enquiry_id_idx
ON public.notification_logs (enquiry_id);
CREATE INDEX notification_logs_quote_request_id_idx
ON public.notification_logs (quote_request_id);
CREATE INDEX notification_logs_delivery_status_idx
ON public.notification_logs (delivery_status);
CREATE INDEX notification_logs_created_at_idx
ON public.notification_logs (created_at);
CREATE INDEX notification_logs_provider_message_id_idx
ON public.notification_logs (provider_message_id);
CREATE INDEX notification_logs_event_type_idx
ON public.notification_logs (event_type);

-- Mutable notification log helper: allow updates for status progression
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

-- Attach updated_at trigger to notification logs (they MUST remain mutable)
CREATE TRIGGER set_notification_logs_updated_at
BEFORE UPDATE ON public.notification_logs
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for notification_logs table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. Notification logs remain mutable to allow status progression: pending ? sent ? delivered/failed
-- 3. event_type describes the type of notification event (e.g., ''email'', ''sms'', ''system_alert'')
-- 4. enquiry_id and quote_request_id allow zero OR one related submission (but not both)
-- 5. recipient is the notification recipient (email address, phone number, etc.)
-- 6. provider is the notification provider (e.g., ''SendGrid'', ''Twilio'', ''SES'')
-- 7. provider_message_id is the optional message ID returned by the provider
-- 8. delivery_status tracks the delivery status through the provider lifecycle
-- 9. error_summary contains INTERNAL ONLY provider error details (never exposed in public responses)
-- 10. Timestamps track when the notification was created and last updated
COMMENT ON TABLE public.notification_logs IS 'Delivery log for email notifications and system alerts';
COMMENT ON COLUMN public.notification_logs.id IS 'Universally unique identifier (UUID) for the notification log';
COMMENT ON COLUMN public.notification_logs.event_type IS 'Type of notification event (email, sms, system alert, etc.)';
COMMENT ON COLUMN public.notification_logs.enquiry_id IS 'Foreign key to the contact enquiry (NULL if related to quote request)';
COMMENT ON COLUMN public.notification_logs.quote_request_id IS 'Foreign key to the quote request (NULL if related to enquiry)';
COMMENT ON COLUMN public.notification_logs.recipient IS 'Notification recipient (email address, phone number, etc.)';
COMMENT ON COLUMN public.notification_logs.provider IS 'Notification provider (SendGrid, Twilio, SES, etc.)';
COMMENT ON COLUMN public.notification_logs.provider_message_id IS 'Optional provider message ID';
COMMENT ON COLUMN public.notification_logs.delivery_status IS 'Delivery status: pending, sent, delivered, failed';
COMMENT ON COLUMN public.notification_logs.error_summary IS 'INTERNAL ONLY provider error details';
COMMENT ON COLUMN public.notification_logs.created_at IS 'Timestamp when the notification log was created (UTC)';
COMMENT ON COLUMN public.notification_logs.updated_at IS 'Timestamp when the notification log was last updated (UTC)';
COMMENT ON INDEX notification_logs_enquiry_id_idx IS 'Index for enquiry-related notifications';
COMMENT ON INDEX notification_logs_quote_request_id_idx IS 'Index for quote request-related notifications';
COMMENT ON INDEX notification_logs_delivery_status_idx IS 'Index for delivery status filtering';
COMMENT ON INDEX notification_logs_provider_message_id_idx IS 'Index for provider message ID lookups';
COMMENT ON INDEX notification_logs_event_type_idx IS 'Index for event type filtering';
