-- Create project_media table for Chitrani Construction backend
-- Junction table linking projects to media assets with role and ordering
CREATE TABLE public.project_media (
    project_id uuid NOT NULL,
    media_id uuid NOT NULL,
    role text NOT NULL DEFAULT 'gallery',
    display_order integer NOT NULL DEFAULT 0,
    created_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (project_id, media_id, role)
);

-- Add foreign key to projects
ALTER TABLE public.project_media
ADD CONSTRAINT fk_project_media_project
FOREIGN KEY (project_id)
REFERENCES public.projects(id)
ON DELETE CASCADE;

-- Add foreign key to media
ALTER TABLE public.project_media
ADD CONSTRAINT fk_project_media_media
FOREIGN KEY (media_id)
REFERENCES public.media(id)
ON DELETE RESTRICT;

-- Add constraint: role must be one of allowed values
ALTER TABLE public.project_media
ADD CONSTRAINT chk_project_media_role_valid
CHECK (role IN ('cover', 'gallery', 'inline'));

-- Add constraint: non-negative display_order
ALTER TABLE public.project_media
ADD CONSTRAINT chk_project_media_display_order_non_negative
CHECK (display_order >= 0);

-- Indexes for performance
CREATE INDEX project_media_project_order_idx ON public.project_media (project_id, display_order);
CREATE INDEX project_media_media_id_idx ON public.project_media (media_id);

-- Comments for project_media table
COMMENT ON TABLE public.project_media IS 'Junction table linking projects to media assets with role and ordering';
COMMENT ON COLUMN public.project_media.project_id IS 'Foreign key to projects';
COMMENT ON COLUMN public.project_media.media_id IS 'Foreign key to media';
COMMENT ON COLUMN public.project_media.role IS 'Role of the media in the project (cover, gallery, inline)';
COMMENT ON COLUMN public.project_media.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON INDEX project_media_project_order_idx IS 'Index for queries by project and ordering';
COMMENT ON INDEX project_media_media_id_idx IS 'Index for queries by media asset';

-- Create service_media table for Chitrani Construction backend
-- Junction table linking services to media assets with role and ordering
CREATE TABLE public.service_media (
    service_id uuid NOT NULL,
    media_id uuid NOT NULL,
    role text NOT NULL DEFAULT 'gallery',
    display_order integer NOT NULL DEFAULT 0,
    created_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (service_id, media_id, role)
);

-- Add foreign key to services
ALTER TABLE public.service_media
ADD CONSTRAINT fk_service_media_service
FOREIGN KEY (service_id)
REFERENCES public.services(id)
ON DELETE CASCADE;

-- Add foreign key to media
ALTER TABLE public.service_media
ADD CONSTRAINT fk_service_media_media
FOREIGN KEY (media_id)
REFERENCES public.media(id)
ON DELETE RESTRICT;

-- Add constraint: role must be one of allowed values
ALTER TABLE public.service_media
ADD CONSTRAINT chk_service_media_role_valid
CHECK (role IN ('cover', 'gallery', 'inline'));

-- Add constraint: non-negative display_order
ALTER TABLE public.service_media
ADD CONSTRAINT chk_service_media_display_order_non_negative
CHECK (display_order >= 0);

-- Indexes for performance
CREATE INDEX service_media_service_order_idx ON public.service_media (service_id, display_order);
CREATE INDEX service_media_media_id_idx ON public.service_media (media_id);

-- Comments for service_media table
COMMENT ON TABLE public.service_media IS 'Junction table linking services to media assets with role and ordering';
COMMENT ON COLUMN public.service_media.service_id IS 'Foreign key to services';
COMMENT ON COLUMN public.service_media.media_id IS 'Foreign key to media';
COMMENT ON COLUMN public.service_media.role IS 'Role of the media in the service (cover, gallery, inline)';
COMMENT ON COLUMN public.service_media.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON INDEX service_media_service_order_idx IS 'Index for queries by service and ordering';
COMMENT ON INDEX service_media_media_id_idx IS 'Index for queries by media asset';

-- Create equipment_media table for Chitrani Construction backend
-- Junction table linking equipment to media assets with role and ordering
CREATE TABLE public.equipment_media (
    equipment_id uuid NOT NULL,
    media_id uuid NOT NULL,
    role text NOT NULL DEFAULT 'gallery',
    display_order integer NOT NULL DEFAULT 0,
    created_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (equipment_id, media_id, role)
);

-- Add foreign key to equipment
ALTER TABLE public.equipment_media
ADD CONSTRAINT fk_equipment_media_equipment
FOREIGN KEY (equipment_id)
REFERENCES public.equipment(id)
ON DELETE CASCADE;

-- Add foreign key to media
ALTER TABLE public.equipment_media
ADD CONSTRAINT fk_equipment_media_media
FOREIGN KEY (media_id)
REFERENCES public.media(id)
ON DELETE RESTRICT;

-- Add constraint: role must be one of allowed values
ALTER TABLE public.equipment_media
ADD CONSTRAINT chk_equipment_media_role_valid
CHECK (role IN ('cover', 'gallery', 'inline'));

-- Add constraint: non-negative display_order
ALTER TABLE public.equipment_media
ADD CONSTRAINT chk_equipment_media_display_order_non_negative
CHECK (display_order >= 0);

-- Indexes for performance
CREATE INDEX equipment_media_equipment_order_idx ON public.equipment_media (equipment_id, display_order);
CREATE INDEX equipment_media_media_id_idx ON public.equipment_media (media_id);

-- Comments for equipment_media table
COMMENT ON TABLE public.equipment_media IS 'Junction table linking equipment to media assets with role and ordering';
COMMENT ON COLUMN public.equipment_media.equipment_id IS 'Foreign key to equipment';
COMMENT ON COLUMN public.equipment_media.media_id IS 'Foreign key to media';
COMMENT ON COLUMN public.equipment_media.role IS 'Role of the media in the equipment (cover, gallery, inline)';
COMMENT ON COLUMN public.equipment_media.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON INDEX equipment_media_equipment_order_idx IS 'Index for queries by equipment and ordering';
COMMENT ON INDEX equipment_media_media_id_idx IS 'Index for queries by media asset';

-- Partial unique indexes to enforce one cover image per entity
-- One cover per project
CREATE UNIQUE INDEX project_media_one_cover_per_project
ON public.project_media (project_id)
WHERE role = 'cover';

-- One cover per service
CREATE UNIQUE INDEX service_media_one_cover_per_service
ON public.service_media (service_id)
WHERE role = 'cover';

-- One cover per equipment
CREATE UNIQUE INDEX equipment_media_one_cover_per_equipment
ON public.equipment_media (equipment_id)
WHERE role = 'cover';