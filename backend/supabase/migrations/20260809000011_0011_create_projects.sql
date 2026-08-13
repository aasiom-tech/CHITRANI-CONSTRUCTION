-- Create projects table for Chitrani Construction backend
-- Stores verified client engagements and documented commercial proposals
CREATE TABLE public.projects (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    client_name text NULL,
    location text NULL,
    role text NULL,
    short_description text NULL,
    full_description text NULL,
    project_status text NOT NULL DEFAULT 'unknown',
    start_date date NULL,
    scheduled_completion_date date NULL,
    work_order_reference text NULL,
    featured boolean NOT NULL DEFAULT false,
    display_order integer NOT NULL DEFAULT 0,
    is_active boolean NOT NULL DEFAULT true,
    archived_at timestamptz NULL,
    seo_title text NULL,
    seo_description text NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint: non-blank name
ALTER TABLE public.projects
ADD CONSTRAINT chk_projects_name_not_blank
CHECK (length(btrim(name)) > 0);

-- Add constraint: slug format using PostgreSQL regex
ALTER TABLE public.projects
ADD CONSTRAINT chk_projects_slug_format
CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$');

-- Add constraint: non-negative display_order
ALTER TABLE public.projects
ADD CONSTRAINT chk_projects_display_order_non_negative
CHECK (display_order >= 0);

-- Add constraint: project_status limited to known values
ALTER TABLE public.projects
ADD CONSTRAINT chk_projects_project_status_valid
CHECK (project_status IN ('unknown', 'planned', 'active', 'on_hold', 'completed'));

-- Add constraint: if both dates exist, scheduled_completion_date >= start_date
ALTER TABLE public.projects
ADD CONSTRAINT chk_projects_dates_order
CHECK (
    start_date IS NULL OR
    scheduled_completion_date IS NULL OR
    scheduled_completion_date >= start_date
);

-- Indexes for performance
CREATE INDEX projects_project_status_idx ON public.projects (project_status);
CREATE INDEX projects_active_order_idx ON public.projects (is_active, display_order);
CREATE INDEX projects_created_at_idx ON public.projects (created_at);
-- Optional composite index for featured services
CREATE INDEX projects_featured_active_order_idx ON public.projects (featured, is_active, display_order);

-- Attach updated_at trigger
CREATE TRIGGER set_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for projects table
COMMENT ON TABLE public.projects IS 'Verified client engagements and documented commercial proposals';
COMMENT ON COLUMN public.projects.id IS 'Universally unique identifier (UUID) for the project';
COMMENT ON COLUMN public.projects.name IS 'Human-readable name of the project';
COMMENT ON COLUMN public.projects.slug IS 'URL-friendly identifier used for routing and SEO';
COMMENT ON COLUMN public.projects.client_name IS 'Client or project owner name';
COMMENT ON COLUMN public.projects.location IS 'Geographic location of the project';
COMMENT ON COLUMN public.projects.role IS 'Project role or responsibility designation';
COMMENT ON COLUMN public.projects.short_description IS 'Brief description for summary displays';
COMMENT ON COLUMN public.projects.full_description IS 'Detailed description for full content views';
COMMENT ON COLUMN public.projects.project_status IS 'Current status of the project';
COMMENT ON COLUMN public.projects.start_date IS 'Planned start date of the project';
COMMENT ON COLUMN public.projects.scheduled_completion_date IS 'Planned completion date of the project';
COMMENT ON COLUMN public.projects.work_order_reference IS 'Reference number for internal work order tracking';
COMMENT ON COLUMN public.projects.featured IS 'Flag indicating featured project status';
COMMENT ON COLUMN public.projects.display_order IS 'Numeric value determining display sequence (higher = later)';
COMMENT ON COLUMN public.projects.is_active IS 'Flag indicating if the project is currently active';
COMMENT ON COLUMN public.projects.archived_at IS 'Timestamp when the project was archived (soft delete)';
COMMENT ON COLUMN public.projects.seo_title IS 'SEO title for public endpoints';
COMMENT ON COLUMN public.projects.seo_description IS 'SEO description for public endpoints';
COMMENT ON INDEX projects_project_status_idx IS 'Index for queries by project status';
COMMENT ON INDEX projects_active_order_idx IS 'Index for queries by active state and ordering';
COMMENT ON INDEX projects_created_at_idx IS 'Index for queries by creation timestamp';
COMMENT ON INDEX projects_featured_active_order_idx IS 'Composite index for featured, active, and ordering queries';