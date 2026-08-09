-- Create media table for Chitrani Construction backend
-- Stores media metadata with structured attributes and reference to uploader
CREATE TABLE public.media (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    bucket text NOT NULL,
    storage_path text NOT NULL,
    mime_type text NOT NULL,
    file_size bigint NOT NULL,
    width integer NULL,
    height integer NULL,
    alt_text text NULL,
    caption text NULL,
    visibility text NOT NULL DEFAULT 'public',
    uploaded_by uuid NULL,
    is_active boolean NOT NULL DEFAULT true,
    archived_at timestamptz NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint for non-blank bucket
ALTER TABLE public.media
ADD CONSTRAINT chk_media_bucket_not_blank
CHECK (length(btrim(bucket)) > 0);

-- Add constraint for non-blank storage_path
ALTER TABLE public.media
ADD CONSTRAINT chk_media_storage_path_not_blank
CHECK (length(btrim(storage_path)) > 0);

-- Add constraint for non-blank mime_type
ALTER TABLE public.media
ADD CONSTRAINT chk_media_mime_type_not_blank
CHECK (length(btrim(mime_type)) > 0);

-- Add constraint for non-negative file_size
ALTER TABLE public.media
ADD CONSTRAINT chk_media_file_size_non_negative
CHECK (file_size >= 0);

-- Add constraint for width (null or positive)
ALTER TABLE public.media
ADD CONSTRAINT chk_media_width_valid
CHECK (width IS NULL OR width > 0);

-- Add constraint for height (null or positive)
ALTER TABLE public.media
ADD CONSTRAINT chk_media_height_valid
CHECK (height IS NULL OR height > 0);

-- Add constraint for visibility limited to allowed values
ALTER TABLE public.media
ADD CONSTRAINT chk_media_visibility_valid
CHECK (visibility IN ('public', 'private', 'internal'));

-- Add unique constraint on bucket and storage_path combination
ALTER TABLE public.media
ADD CONSTRAINT uk_media_bucket_storage_path
UNIQUE (bucket, storage_path);

-- Foreign key reference to admin_users
ALTER TABLE public.media
ADD CONSTRAINT fk_media_uploaded_by
FOREIGN KEY (uploaded_by)
REFERENCES public.admin_users(id)
ON DELETE SET NULL;

-- Indexes for performance optimization
CREATE INDEX media_visibility_idx ON public.media (visibility);
CREATE INDEX media_uploaded_by_idx ON public.media (uploaded_by);
CREATE INDEX media_created_at_idx ON public.media (created_at);
CREATE INDEX media_active_idx ON public.media (is_active);

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_media_updated_at
BEFORE UPDATE ON public.media
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for media table:
-- 1. bucket stores the storage container name
-- 2. storage_path stores the path within the bucket
-- 3. mime_type stores the MIME type of the file
-- 4. file_size stores the size in bytes (non-negative)
-- 5. width and height store dimensions (nullable, must be positive if provided)
-- 6. alt_text provides accessibility text alternative
-- 7. caption provides descriptive text for the media
-- 8. visibility controls public/private/internal access levels
-- 9. uploaded_by references admin_users for audit trail (SET NULL on delete)
-- 10. is_active flag for soft deletion/status tracking
-- 11. archived_at tracks soft archive timestamp
-- 12. created_at and updated_at use UTC timestamptz for timezone-aware timestamps
COMMENT ON TABLE public.media IS 'Media metadata for Chitrani Construction with structured attributes and uploader reference';
COMMENT ON COLUMN public.media.id IS 'Universally unique identifier (UUID) for the media record';
COMMENT ON COLUMN public.media.bucket IS 'Storage container name';
COMMENT ON COLUMN public.media.storage_path IS 'Path within the bucket for the media file';
COMMENT ON COLUMN public.media.mime_type IS 'MIME type of the media file';
COMMENT ON COLUMN public.media.file_size IS 'Size of the media file in bytes';
COMMENT ON COLUMN public.media.width IS 'Width of the media in pixels (nullable)';
COMMENT ON COLUMN public.media.height IS 'Height of the media in pixels (nullable)';
COMMENT ON COLUMN public.media.alt_text IS 'Alternative text for accessibility';
COMMENT ON COLUMN public.media.caption IS 'Caption for the media content';
COMMENT ON COLUMN public.media.visibility IS 'Accessibility level: public, private, or internal';
COMMENT ON COLUMN public.media.uploaded_by IS 'Foreign key to admin user who uploaded the media';
COMMENT ON COLUMN public.media.is_active IS 'Flag indicating if the media is currently active';
COMMENT ON COLUMN public.media.archived_at IS 'Timestamp when the media was archived (soft delete)';
COMMENT ON COLUMN public.media.created_at IS 'Timestamp when the media was created (UTC)';
COMMENT ON COLUMN public.media.updated_at IS 'Timestamp when the media was last updated (UTC)';
COMMENT ON INDEX media_visibility_idx IS 'Index for efficient queries by visibility';
COMMENT ON INDEX media_uploaded_by_idx IS 'Index for efficient queries by uploader';
COMMENT ON INDEX media_created_at_idx IS 'Index for efficient creation timestamp queries';
COMMENT ON INDEX media_active_idx IS 'Index for efficient active media queries';
-- RLS intentionally deferred to the dedicated security phase
-- Storage bucket creation deferred to media/security implementation