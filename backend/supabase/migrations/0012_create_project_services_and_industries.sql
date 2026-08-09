-- Create project_services table for Chitrani Construction backend
-- Junction table mapping projects to services for multi-service project tracking
CREATE TABLE public.project_services (
    project_id uuid NOT NULL,
    service_id uuid NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (project_id, service_id)
);

-- Add foreign key to projects
ALTER TABLE public.project_services
ADD CONSTRAINT fk_project_services_project
FOREIGN KEY (project_id)
REFERENCES public.projects(id)
ON DELETE CASCADE;

-- Add foreign key to services
ALTER TABLE public.project_services
ADD CONSTRAINT fk_project_services_service
FOREIGN KEY (service_id)
REFERENCES public.services(id)
ON DELETE CASCADE;

-- Index for service-based queries
CREATE INDEX project_services_service_id_idx ON public.project_services (service_id);

-- Comments for project_services table
COMMENT ON TABLE public.project_services IS 'Junction table linking projects to services';
COMMENT ON COLUMN public.project_services.project_id IS 'Foreign key to projects';
COMMENT ON COLUMN public.project_services.service_id IS 'Foreign key to services';
COMMENT ON COLUMN public.project_services.created_at IS 'Timestamp when the relationship was created (UTC)';
COMMENT ON INDEX project_services_service_id_idx IS 'Index for queries by service';

-- Create project_industries table for Chitrani Construction backend
-- Junction table mapping projects to industries for multi-industry project tracking
CREATE TABLE public.project_industries (
    project_id uuid NOT NULL,
    industry_id uuid NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (project_id, industry_id)
);

-- Add foreign key to projects
ALTER TABLE public.project_industries
ADD CONSTRAINT fk_project_industries_project
FOREIGN KEY (project_id)
REFERENCES public.projects(id)
ON DELETE CASCADE;

-- Add foreign key to industries
ALTER TABLE public.project_industries
ADD CONSTRAINT fk_project_industries_industry
FOREIGN KEY (industry_id)
REFERENCES public.industries(id)
ON DELETE CASCADE;

-- Index for industry-based queries
CREATE INDEX project_industries_industry_id_idx ON public.project_industries (industry_id);

-- Comments for project_industries table
COMMENT ON TABLE public.project_industries IS 'Junction table linking projects to industries';
COMMENT ON COLUMN public.project_industries.project_id IS 'Foreign key to projects';
COMMENT ON COLUMN public.project_industries.industry_id IS 'Foreign key to industries';
COMMENT ON COLUMN public.project_industries.created_at IS 'Timestamp when the relationship was created (UTC)';
COMMENT ON INDEX project_industries_industry_id_idx IS 'Index for queries by industry';