-- Create service_industries table for Chitrani Construction backend
-- Junction table mapping services to industries for targeted market segmentation
CREATE TABLE public.service_industries (
    service_id uuid NOT NULL,
    industry_id uuid NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (service_id, industry_id)
);

-- Add foreign key to services
ALTER TABLE public.service_industries
ADD CONSTRAINT fk_service_industries_service
FOREIGN KEY (service_id)
REFERENCES public.services(id)
ON DELETE CASCADE;

-- Add foreign key to industries
ALTER TABLE public.service_industries
ADD CONSTRAINT fk_service_industries_industry
FOREIGN KEY (industry_id)
REFERENCES public.industries(id)
ON DELETE CASCADE;

-- Create index for industry-based queries
CREATE INDEX service_industries_industry_id_idx ON public.service_industries (industry_id);

-- Comments for service_industries table
COMMENT ON TABLE public.service_industries IS 'Junction table linking services to target industries';
COMMENT ON COLUMN public.service_industries.service_id IS 'Foreign key to services';
COMMENT ON COLUMN public.service_industries.industry_id IS 'Foreign key to industries';
COMMENT ON COLUMN public.service_industries.created_at IS 'Timestamp when the relationship was created (UTC)';
COMMENT ON INDEX service_industries_industry_id_idx IS 'Index for efficient queries by industry';