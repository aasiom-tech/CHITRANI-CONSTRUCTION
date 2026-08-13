-- Chitrani Construction — Development Seed Data
-- Safe, verified initial configuration only.
-- Do NOT seed: admin accounts, enquiries, quotes, projects, media, or operational data.
-- Rerunnable: uses ON CONFLICT DO NOTHING for idempotency.

BEGIN;

-- =============================================================================
-- Business Divisions
-- =============================================================================
INSERT INTO public.business_divisions (name, slug, display_order, is_active)
VALUES
  ('Construction Contracting', 'construction-contracting', 1, true),
  ('Equipment Rental', 'equipment-rental', 2, true)
ON CONFLICT (slug) DO NOTHING;

-- =============================================================================
-- Services
-- =============================================================================
INSERT INTO public.services (division_id, name, slug, display_order, featured, is_active)
SELECT
  bd.id,
  v.name,
  v.slug,
  v.display_order,
  v.featured,
  v.is_active
FROM (VALUES
  ('construction-contracting', 'Construction Contracting', 'construction-contracting', 1, true, true),
  ('equipment-rental', 'Concrete Boom Placer Rental', 'concrete-boom-placer-rental', 1, true, true)
) AS v(division_slug, name, slug, display_order, featured, is_active)
JOIN public.business_divisions bd ON bd.slug = v.division_slug
ON CONFLICT (slug) DO NOTHING;

-- =============================================================================
-- Equipment Categories
-- =============================================================================
INSERT INTO public.equipment_categories (name, slug, display_order, is_active)
VALUES
  ('Concrete Boom Placers', 'concrete-boom-placers', 1, true)
ON CONFLICT (slug) DO NOTHING;

-- =============================================================================
-- Equipment
-- =============================================================================
INSERT INTO public.equipment (category_id, name, slug, manufacturer, model, manufacture_year, internal_status, public_status, featured, display_order, is_active)
SELECT
  ec.id,
  v.name,
  v.slug,
  v.manufacturer,
  v.model,
  v.manufacture_year,
  v.internal_status,
  v.public_status,
  v.featured,
  v.display_order,
  v.is_active
FROM (VALUES
  ('concrete-boom-placers', 'Putzmeister M42-5 Concrete Boom Placer', 'putzmeister-m42-5', 'Putzmeister', 'M42-5', 2020, 'unknown', 'Availability subject to confirmation.', true, 1, true)
) AS v(category_slug, name, slug, manufacturer, model, manufacture_year, internal_status, public_status, featured, display_order, is_active)
JOIN public.equipment_categories ec ON ec.slug = v.category_slug
ON CONFLICT (slug) DO NOTHING;

-- =============================================================================
-- Equipment Specifications (for Putzmeister M42-5)
-- =============================================================================
INSERT INTO public.equipment_specifications (equipment_id, specification_name, value, unit, display_order)
SELECT
  e.id,
  v.specification_name,
  v.value,
  v.unit,
  v.display_order
FROM (VALUES
  ('putzmeister-m42-5', 'Boom Reach', '42', 'm', 1),
  ('putzmeister-m42-5', 'Capacity', '90', 'm³', 2)
) AS v(equipment_slug, specification_name, value, unit, display_order)
JOIN public.equipment e ON e.slug = v.equipment_slug
ON CONFLICT (equipment_id, specification_name) DO NOTHING;

-- Industries: DEFERRED — pending explicit approved business confirmation.
-- Frontend contains a mix of "evidenced" and "applicability" sectors,
-- but no approved company document explicitly confirms the full industry list.
-- The database schema remains ready for industries later.

COMMIT;
