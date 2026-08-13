-- Create equipment table for Chitrani Construction backend
-- Stores machinery assets with categorization, status, and media references
CREATE TABLE public.equipment (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id uuid NOT NULL,
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    manufacturer text NULL,
    model text NULL,
    manufacture_year integer NULL,
    description text NULL,
    internal_status text NOT NULL DEFAULT 'unknown',
    public_status text NOT NULL DEFAULT 'Availability subject to confirmation.',
    featured boolean NOT NULL DEFAULT false,
    display_order integer NOT NULL DEFAULT 0,
    is_active boolean NOT NULL DEFAULT true,
    archived_at timestamptz NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: non-blank name
ALTER TABLE public.equipment
ADD CONSTRAINT chk_equipment_name_not_blank
CHECK (length(btrim(name)) > 0);

-- Add constraint: slug format using PostgreSQL regex
ALTER TABLE public.equipment
ADD CONSTRAINT chk_equipment_slug_format
CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$');

-- Add constraint: non-negative display_order
ALTER TABLE public.equipment
ADD CONSTRAINT chk_equipment_display_order_non_negative
CHECK (display_order >= 0);

-- Add constraint: manufacture_year validation
ALTER TABLE public.equipment
ADD CONSTRAINT chk_equipment_manufacture_year
CHECK (manufacture_year IS NULL OR (manufacture_year >= 1900 AND manufacture_year <= 2100));

-- Add constraint: internal_status limited to known values
ALTER TABLE public.equipment
ADD CONSTRAINT chk_equipment_internal_status_valid
CHECK (internal_status IN ('unknown', 'available', 'assigned', 'maintenance', 'inactive'));

-- Add constraint: public_status must not be blank
ALTER TABLE public.equipment
ADD CONSTRAINT chk_equipment_public_status_not_blank
CHECK (length(btrim(public_status)) > 0);

-- Add foreign key to equipment_categories
ALTER TABLE public.equipment
ADD CONSTRAINT fk_equipment_category
FOREIGN KEY (category_id)
REFERENCES public.equipment_categories(id)
ON DELETE RESTRICT;

-- Indexes for performance
CREATE INDEX equipment_category_id_idx ON public.equipment (category_id);
CREATE INDEX equipment_internal_status_idx ON public.equipment (internal_status);
CREATE INDEX equipment_active_order_idx ON public.equipment (is_active, display_order);
CREATE INDEX equipment_category_active_order_idx ON public.equipment (category_id, is_active, display_order);

-- Attach updated_at trigger
CREATE TRIGGER set_equipment_updated_at
BEFORE UPDATE ON public.equipment
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for equipment table
COMMENT ON TABLE public.equipment IS 'Machinery assets offered by Chitrani Construction';
COMMENT ON COLUMN public.equipment.id IS 'Universally unique identifier (UUID) for the equipment record';
COMMENT ON COLUMN public.equipment.category_id IS 'Foreign key to equipment category';
COMMENT ON COLUMN public.equipment.name IS 'Human-readable name of the equipment';
COMMENT ON COLUMN public.equipment.slug IS 'URL-friendly identifier used for routing and SEO';
COMMENT ON COLUMN public.equipment.manufacturer IS 'Equipment manufacturer name';
COMMENT ON COLUMN public.equipment.model IS 'Equipment model designation';
COMMENT ON COLUMN public.equipment.manufacture_year IS 'Year the equipment was manufactured';
COMMENT ON COLUMN public.equipment.description IS 'Detailed description of the equipment';
COMMENT ON COLUMN public.equipment.internal_status IS 'Internal administrative status (admin-only)';
COMMENT ON COLUMN public.equipment.public_status IS 'Public-facing status message shown to clients';
COMMENT ON COLUMN public.equipment.featured IS 'Flag indicating featured equipment status';
COMMENT ON COLUMN public.equipment.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON COLUMN public.equipment.is_active IS 'Flag indicating if the equipment is currently active';
COMMENT ON COLUMN public.equipment.archived_at IS 'Timestamp when the equipment was archived (soft delete)';
COMMENT ON COLUMN public.equipment.created_at IS 'Timestamp when the equipment was created (UTC)';
COMMENT ON COLUMN public.equipment.updated_at IS 'Timestamp when the equipment was last updated (UTC)';
COMMENT ON INDEX equipment_category_id_idx IS 'Index for queries by equipment category';
COMMENT ON INDEX equipment_internal_status_idx IS 'Index for queries by internal status';
COMMENT ON INDEX equipment_active_order_idx IS 'Index for queries by active state and ordering';
COMMENT ON INDEX equipment_category_active_order_idx IS 'Composite index for category, active state, and ordering queries';