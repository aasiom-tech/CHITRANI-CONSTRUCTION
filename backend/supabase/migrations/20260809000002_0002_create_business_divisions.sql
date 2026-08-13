-- Create business_divisions table for Chitrani Construction backend
-- Stores organizational business divisions with hierarchical and display ordering capabilities
CREATE TABLE public.business_divisions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    description text NULL,
    display_order integer NOT NULL DEFAULT 0,
    is_active boolean NOT NULL DEFAULT true,
    archived_at timestamptz NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint to ensure name is not blank (trimmed length > 0)
ALTER TABLE public.business_divisions
ADD CONSTRAINT chk_business_divisions_name_not_blank
CHECK (length(btrim(name)) > 0);

-- Add constraint for slug format using PostgreSQL regex
ALTER TABLE public.business_divisions
ADD CONSTRAINT chk_business_divisions_slug_format
CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$');

-- Add constraint for display_order non-negative
ALTER TABLE public.business_divisions
ADD CONSTRAINT chk_business_divisions_display_order_non_negative
CHECK (display_order >= 0);

-- Index for active and ordering queries
CREATE INDEX business_divisions_active_order_idx
ON public.business_divisions (is_active, display_order);

-- Trigger to automatically update updated_at timestamp
-- This trigger will be attached to the table via the shared function
CREATE TRIGGER set_business_divisions_updated_at
BEFORE UPDATE ON public.business_divisions
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for business_divisions table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. Slug uses PostgreSQL-safe regex ^[a-z0-9]+(-[a-z0-9]+)*$ for URL-friendly identifiers
-- 3. display_order >= 0 ensures valid ordering values
-- 4. is_active boolean for soft deletion/status tracking
-- 5. archived_at timestamptz for soft archive tracking with UTC timestamps
COMMENT ON TABLE public.business_divisions IS 'Business divisions representing organizational units within Chitrani Construction';
COMMENT ON COLUMN public.business_divisions.id IS 'Universally unique identifier (UUID) for the division';
COMMENT ON COLUMN public.business_divisions.name IS 'Human-readable name of the business division';
COMMENT ON COLUMN public.business_divisions.slug IS 'URL-friendly identifier used for routing and SEO';
COMMENT ON COLUMN public.business_divisions.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON COLUMN public.business_divisions.is_active IS 'Flag indicating if the division is currently active';
COMMENT ON COLUMN public.business_divisions.archived_at IS 'Timestamp when the division was archived (soft delete)';
COMMENT ON COLUMN public.business_divisions.created_at IS 'Timestamp when the division was created (UTC)';
COMMENT ON COLUMN public.business_divisions.updated_at IS 'Timestamp when the division was last updated (UTC)';
COMMENT ON INDEX business_divisions_active_order_idx IS 'Index for efficient queries filtering by active status and ordering';