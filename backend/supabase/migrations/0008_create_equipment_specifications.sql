-- Create equipment_specifications table for Chitrani Construction backend
-- Stores flexible technical specifications for equipment assets
CREATE TABLE public.equipment_specifications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    equipment_id uuid NOT NULL,
    specification_name text NOT NULL,
    value text NOT NULL,
    unit text NULL,
    display_order integer NOT NULL DEFAULT 0,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: non-blank specification_name
ALTER TABLE public.equipment_specifications
ADD CONSTRAINT chk_eq_specs_name_not_blank
CHECK (length(btrim(specification_name)) > 0);

-- Add constraint: non-blank value
ALTER TABLE public.equipment_specifications
ADD CONSTRAINT chk_eq_specs_value_not_blank
CHECK (length(btrim(value)) > 0);

-- Add constraint: non-negative display_order
ALTER TABLE public.equipment_specifications
ADD CONSTRAINT chk_eq_specs_display_order_non_negative
CHECK (display_order >= 0);

-- Add uniqueness constraint to prevent duplicate specification names per equipment
ALTER TABLE public.equipment_specifications
ADD CONSTRAINT uk_eq_specs_eq_spec_name
UNIQUE (equipment_id, specification_name);

-- Add foreign key to equipment
ALTER TABLE public.equipment_specifications
ADD CONSTRAINT fk_eq_specs_equipment
FOREIGN KEY (equipment_id)
REFERENCES public.equipment(id)
ON DELETE RESTRICT;

-- Indexes for performance
CREATE INDEX equipment_specifications_equipment_id_idx ON public.equipment_specifications (equipment_id);
CREATE INDEX equipment_specifications_equipment_order_idx ON public.equipment_specifications (equipment_id, display_order);

-- Attach updated_at trigger
CREATE TRIGGER set_equipment_specifications_updated_at
BEFORE UPDATE ON public.equipment_specifications
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for equipment_specifications table
COMMENT ON TABLE public.equipment_specifications IS 'Technical specifications for equipment assets';
COMMENT ON COLUMN public.equipment_specifications.id IS 'Universally unique identifier (UUID) for the specification';
COMMENT ON COLUMN public.equipment_specifications.equipment_id IS 'Foreign key to equipment asset';
COMMENT ON COLUMN public.equipment_specifications.specification_name IS 'Name of the technical specification';
COMMENT ON COLUMN public.equipment_specifications.value IS 'Value of the specification';
COMMENT ON COLUMN public.equipment_specifications.unit IS 'Unit of measurement (if applicable)';
COMMENT ON COLUMN public.equipment_specifications.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON INDEX equipment_specifications_equipment_id_idx IS 'Index for queries by equipment';
COMMENT ON INDEX equipment_specifications_equipment_order_idx IS 'Composite index for equipment and ordering queries';