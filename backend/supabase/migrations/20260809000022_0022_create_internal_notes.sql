-- Create internal_notes table for Chitrani Construction backend
-- Internal operational comments attached to enquiries or quotes
CREATE TABLE public.internal_notes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    enquiry_id uuid NULL,
    quote_request_id uuid NULL,
    note text NOT NULL,
    created_by uuid NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: exactly one parent must be present (enquiry_id XOR quote_request_id)
ALTER TABLE public.internal_notes
ADD CONSTRAINT chk_internal_notes_single_parent
CHECK (
    num_nonnulls(enquiry_id, quote_request_id) = 1
);

-- Add constraint: note must not be blank
ALTER TABLE public.internal_notes
ADD CONSTRAINT chk_internal_notes_note_not_blank
CHECK (length(btrim(note)) > 0);

-- Foreign key references
ALTER TABLE public.internal_notes
ADD CONSTRAINT fk_internal_notes_enquiry
FOREIGN KEY (enquiry_id)
REFERENCES public.contact_enquiries(id)
ON DELETE RESTRICT;

ALTER TABLE public.internal_notes
ADD CONSTRAINT fk_internal_notes_quote_request
FOREIGN KEY (quote_request_id)
REFERENCES public.quote_requests(id)
ON DELETE RESTRICT;

ALTER TABLE public.internal_notes
ADD CONSTRAINT fk_internal_notes_created_by
FOREIGN KEY (created_by)
REFERENCES public.admin_users(id)
ON DELETE RESTRICT;

-- Indexes for performance
CREATE INDEX internal_notes_enquiry_id_idx
ON public.internal_notes (enquiry_id);
CREATE INDEX internal_notes_quote_request_id_idx
ON public.internal_notes (quote_request_id);
CREATE INDEX internal_notes_created_by_idx
ON public.internal_notes (created_by);
CREATE INDEX internal_notes_created_at_idx
ON public.internal_notes (created_at);

-- Useful composite indexes for chronological queries
CREATE INDEX internal_notes_enquiry_created_at_idx
ON public.internal_notes (enquiry_id, created_at DESC);
CREATE INDEX internal_notes_quote_request_created_at_idx
ON public.internal_notes (quote_request_id, created_at DESC);

-- Comments for internal_notes table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. Exactly one parent must be present: either an enquiry_id OR a quote_request_id (XOR)
-- 3. Internal notes are strictly confidential; never exposed via public APIs
-- 4. Internal notes should normally be append-oriented in the API/service layer
-- 5. No CASCADE deletion: internal notes are historical operational records
COMMENT ON TABLE public.internal_notes IS 'Internal operational comments attached to enquiries or quotes';
COMMENT ON COLUMN public.internal_notes.id IS 'Universally unique identifier (UUID) for the internal note';
COMMENT ON COLUMN public.internal_notes.enquiry_id IS 'Foreign key to the contact enquiry (NULL if attached to quote request)';
COMMENT ON COLUMN public.internal_notes.quote_request_id IS 'Foreign key to the quote request (NULL if attached to enquiry)';
COMMENT ON COLUMN public.internal_notes.note IS 'The internal note content';
COMMENT ON COLUMN public.internal_notes.created_by IS 'Admin user who created this internal note';
COMMENT ON COLUMN public.internal_notes.created_at IS 'Timestamp when the internal note was created (UTC)';
