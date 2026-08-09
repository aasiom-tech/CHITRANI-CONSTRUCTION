-- Create industries table for Chitrani Construction backend
-- Stores target market sectors with hierarchical and media association capabilities
CREATE TABLE public.industries (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    short_description text NULL,
    full_description text NULL,
    image_id uuid NULL,
    display_order integer NOT NULL DEFAULT 0,
    is_active boolean NOT NULL DEFAULT true,
    archived_at timestamptz NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: non-blank name
ALTER TABLE public.industries
ADD CONSTRAINT chk_industries_name_not_blank
CHECK (length(btrim(name)) > 0);

-- Add constraint: slug format using PostgreSQL regex
ALTER TABLE public.industries
ADD CONSTRAINT chk_industries_slug_format
CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$');

-- Add constraint: non-negative display_order
ALTER TABLE public.industries
ADD CONSTRAINT chk_industries_display_order_non_negative
CHECK (display_order >= 0);

-- Add foreign key to media (optional image association)
ALTER TABLE public.industries
ADD CONSTRAINT fk_industries_image
FOREIGN KEY (image_id)
REFERENCES public.media(id)
ON DELETE SET NULL;

-- Indexes for performance
CREATE INDEX industries_active_order_idx ON public.industries (is_active, display_order);
CREATE INDEX industries_image_id_idx ON public.industries (image_id);

-- Attach updated_at trigger
CREATE TRIGGER set_industries_updated_at
BEFORE UPDATE ON public.industries
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for industries table
COMMENT ON TABLE public.industries IS 'Target market sectors for Chitrani Construction services';
COMMENT ON COLUMN public.industries.id IS 'Universally unique identifier (UUID) for the industry';
COMMENT ON COLUMN public.industries.name IS 'Human-readable name of the industry';
COMMENT ON COLUMN public.industries.slug IS 'URL-friendly identifier used for routing and SEO';
COMMENT ON COLUMN public.industries.short_description IS 'Brief description for summary displays';
COMMENT ON COLUMN public.industries.full_description IS 'Detailed description for full content views';
COMMENT ON COLUMN public.industries.image_id IS 'Foreign key to media record for associated image';
COMMENT ON COLUMN public.industries.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON COLUMN public.industries.is_active IS 'Flag indicating if the industry is currently active';
COMMENT ON COLUMN public.industries.archived_at IS 'Timestamp when the industry was archived (soft delete)';
COMMENT ON COLUMN public.industries.created_at IS 'Timestamp when the industry was created (UTC)';
COMMENT ON COLUMN public.industries.updated_at IS 'Timestamp when the industry was last updated (UTC)';
COMMENT ON INDEX industries_active_order_idx IS 'Index for queries filtering by active status and ordering';
COMMENT ON INDEX industries_image_id_idx IS 'Index for queries by associated image';