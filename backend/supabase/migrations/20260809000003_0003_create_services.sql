-- Create services table for Chitrani Construction backend
-- Stores service offerings with categorization, SEO metadata, and display ordering
CREATE TABLE public.services (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    division_id uuid NOT NULL,
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    short_description text NULL,
    full_description text NULL,
    featured boolean NOT NULL DEFAULT false,
    display_order integer NOT NULL DEFAULT 0,
    is_active boolean NOT NULL DEFAULT true,
    seo_title text NULL,
    seo_description text NULL,
    archived_at timestamptz NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint for non-blank name
ALTER TABLE public.services
ADD CONSTRAINT chk_services_name_not_blank
CHECK (length(btrim(name)) > 0);

-- Add constraint for slug format using PostgreSQL regex
ALTER TABLE public.services
ADD CONSTRAINT chk_services_slug_format
CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$');

-- Add constraint for non-negative display_order
ALTER TABLE public.services
ADD CONSTRAINT chk_services_display_order_non_negative
CHECK (display_order >= 0);

-- Foreign key reference to business_divisions
ALTER TABLE public.services
ADD CONSTRAINT fk_services_division
FOREIGN KEY (division_id)
REFERENCES public.business_divisions(id)
ON DELETE RESTRICT;

-- Indexes for performance optimization
CREATE INDEX services_division_id_idx ON public.services (division_id);
CREATE INDEX services_active_order_idx ON public.services (is_active, display_order);
CREATE INDEX services_division_active_order_idx ON public.services (division_id, is_active, display_order);

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_services_updated_at
BEFORE UPDATE ON public.services
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for services table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. Slug uses PostgreSQL-safe regex ^[a-z0-9]+(-[a-z0-9]+)*$ for URL-friendly identifiers
-- 3. display_order >= 0 ensures valid ordering values
-- 4. is_active boolean for soft deletion/status tracking
-- 5. archived_at timestamptz for soft archive tracking with UTC timestamps
-- 6. SEO fields support content optimization for public endpoints
COMMENT ON TABLE public.services IS 'Service offerings organized under business divisions within Chitrani Construction';
COMMENT ON COLUMN public.services.id IS 'Universally unique identifier (UUID) for the service';
COMMENT ON COLUMN public.services.division_id IS 'Foreign key referencing business division';
COMMENT ON COLUMN public.services.name IS 'Human-readable name of the service';
COMMENT ON COLUMN public.services.slug IS 'URL-friendly identifier used for routing and SEO';
COMMENT ON COLUMN public.services.short_description IS 'Brief description for summary displays';
COMMENT ON COLUMN public.services.full_description IS 'Detailed description for full content views';
COMMENT ON COLUMN public.services.featured IS 'Flag indicating featured service status';
COMMENT ON COLUMN public.services.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON COLUMN public.services.is_active IS 'Flag indicating if the service is currently active';
COMMENT ON COLUMN public.services.seo_title IS 'SEO title for public endpoints';
COMMENT ON COLUMN public.services.seo_description IS 'SEO description for public endpoints';
COMMENT ON INDEX services_division_id_idx IS 'Index for efficient queries by division';
COMMENT ON INDEX services_active_order_idx IS 'Index for efficient active service queries with ordering';
COMMENT ON INDEX services_division_active_order_idx IS 'Composite index for division-active-ordering queries';