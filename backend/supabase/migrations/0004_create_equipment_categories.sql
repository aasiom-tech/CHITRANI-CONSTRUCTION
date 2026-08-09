-- Create equipment_categories table for Chitrani Construction backend
-- Stores equipment category definitions with organizational metadata and display ordering
CREATE TABLE public.equipment_categories (
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

-- Add constraint for non-blank name
ALTER TABLE public.equipment_categories
ADD CONSTRAINT chk_equipment_categories_name_not_blank
CHECK (length(btrim(name)) > 0);

-- Add constraint for slug format using PostgreSQL regex
ALTER TABLE public.equipment_categories
ADD CONSTRAINT chk_equipment_categories_slug_format
CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$');

-- Add constraint for non-negative display_order
ALTER TABLE public.equipment_categories
ADD CONSTRAINT chk_equipment_categories_display_order_non_negative
CHECK (display_order >= 0);

-- Index for active and ordering queries
CREATE INDEX equipment_categories_active_order_idx
ON public.equipment_categories (is_active, display_order);

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_equipment_categories_updated_at
BEFORE UPDATE ON public.equipment_categories
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for equipment_categories table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. Slug uses PostgreSQL-safe regex ^[a-z0-9]+(-[a-z0-9]+)*$ for URL-friendly identifiers
-- 3. display_order >= 0 ensures valid ordering values
-- 4. is_active boolean for soft deletion/status tracking
-- 5. archived_at timestamptz for soft archive tracking with UTC timestamps
COMMENT ON TABLE public.equipment_categories IS 'Equipment category definitions for Chitrani Construction equipment tracking';
COMMENT ON COLUMN public.equipment_categories.id IS 'Universally unique identifier (UUID) for the equipment category';
COMMENT ON COLUMN public.equipment_categories.name IS 'Human-readable name of the equipment category';
COMMENT ON COLUMN public.equipment_categories.slug IS 'URL-friendly identifier used for routing and SEO';
COMMENT ON COLUMN public.equipment_categories.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON COLUMN public.equipment_categories.is_active IS 'Flag indicating if the equipment category is currently active';
COMMENT ON COLUMN public.equipment_categories.archived_at IS 'Timestamp when the equipment category was archived (soft delete)';
COMMENT ON COLUMN public.equipment_categories.created_at IS 'Timestamp when the equipment category was created (UTC)';
COMMENT ON COLUMN public.equipment_categories.updated_at IS 'Timestamp when the equipment category was last updated (UTC)';
COMMENT ON INDEX equipment_categories_active_order_idx IS 'Index for efficient queries filtering by active status and ordering';