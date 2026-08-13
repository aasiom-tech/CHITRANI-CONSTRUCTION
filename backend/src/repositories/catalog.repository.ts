import { getSupabaseAdminClient } from "../lib/supabase-admin.js";
import { AppError } from "../errors/app-error.js";

export interface BusinessDivisionDto {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  displayOrder: number;
}

export interface ServiceDto {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  fullDescription: string | null;
  featured: boolean;
  displayOrder: number;
  division: { id: string; name: string; slug: string };
}

export interface ServiceDetailDto extends ServiceDto {
  seoTitle: string | null;
  seoDescription: string | null;
}

export interface EquipmentListItemDto {
  id: string;
  name: string;
  slug: string;
  manufacturer: string | null;
  model: string | null;
  manufactureYear: number | null;
  description: string | null;
  publicStatus: string;
  featured: boolean;
  displayOrder: number;
  category: { id: string; name: string; slug: string };
}

export interface EquipmentDetailDto extends EquipmentListItemDto {
  specifications: Array<{
    name: string;
    value: string;
    unit: string | null;
    displayOrder: number;
  }>;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
type SupabaseRow = Record<string, any>;
/* eslint-enable @typescript-eslint/no-explicit-any */

function handleError(error: unknown, ctx: string): never {
  console.error(`[catalog] ${ctx}:`, error);
  throw new AppError(500, "DATABASE_ERROR", "An unexpected error occurred.");
}

export async function listActiveDivisions(): Promise<BusinessDivisionDto[]> {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("business_divisions")
    .select("id, name, slug, description, display_order")
    .eq("is_active", true)
    .is("archived_at", null)
    .order("display_order", { ascending: true });

  if (error) handleError(error, "listActiveDivisions");

  return ((data ?? []) as SupabaseRow[]).map((r) => ({
    id: r.id as string,
    name: r.name as string,
    slug: r.slug as string,
    description: r.description as string | null,
    displayOrder: r.display_order as number,
  }));
}

export async function listActiveServices(
  divisionSlug?: string,
): Promise<ServiceDto[]> {
  const supabase = getSupabaseAdminClient();

  let query = supabase
    .from("services")
    .select(
      "id, name, slug, short_description, full_description, featured, display_order, division:business_divisions!fk_services_division(id, name, slug)",
    )
    .eq("is_active", true)
    .is("archived_at", null)
    .order("display_order", { ascending: true });

  if (divisionSlug) {
    const { data: divs } = await supabase
      .from("business_divisions")
      .select("id")
      .eq("slug", divisionSlug)
      .eq("is_active", true);
    const ids = ((divs ?? []) as SupabaseRow[]).map((d) => d.id as string);
    query = query.in("division_id", ids);
  }

  const { data, error } = await query;
  if (error) handleError(error, "listActiveServices");

  return ((data ?? []) as SupabaseRow[]).map((r) => {
    const div = r.division as SupabaseRow | null;
    return {
      id: r.id as string,
      name: r.name as string,
      slug: r.slug as string,
      shortDescription: r.short_description as string | null,
      fullDescription: r.full_description as string | null,
      featured: r.featured as boolean,
      displayOrder: r.display_order as number,
      division: div
        ? { id: div.id as string, name: div.name as string, slug: div.slug as string }
        : { id: "", name: "", slug: "" },
    };
  });
}

export async function getServiceBySlug(
  slug: string,
): Promise<ServiceDetailDto | null> {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("services")
    .select(
      "id, name, slug, short_description, full_description, featured, display_order, seo_title, seo_description, division:business_divisions!fk_services_division(id, name, slug)",
    )
    .eq("slug", slug)
    .eq("is_active", true)
    .is("archived_at", null)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    handleError(error, "getServiceBySlug");
  }
  if (!data) return null;

  const r = data as SupabaseRow;
  const div = r.division as SupabaseRow | null;
  return {
    id: r.id as string,
    name: r.name as string,
    slug: r.slug as string,
    shortDescription: r.short_description as string | null,
    fullDescription: r.full_description as string | null,
    featured: r.featured as boolean,
    displayOrder: r.display_order as number,
    seoTitle: r.seo_title as string | null,
    seoDescription: r.seo_description as string | null,
    division: div
      ? { id: div.id as string, name: div.name as string, slug: div.slug as string }
      : { id: "", name: "", slug: "" },
  };
}

export async function listActiveEquipment(
  categorySlug?: string,
): Promise<EquipmentListItemDto[]> {
  const supabase = getSupabaseAdminClient();

  let query = supabase
    .from("equipment")
    .select(
      "id, name, slug, manufacturer, model, manufacture_year, description, public_status, featured, display_order, category:equipment_categories!fk_equipment_category(id, name, slug)",
    )
    .eq("is_active", true)
    .is("archived_at", null)
    .order("display_order", { ascending: true });

  if (categorySlug) {
    const { data: cats } = await supabase
      .from("equipment_categories")
      .select("id")
      .eq("slug", categorySlug)
      .eq("is_active", true);
    const ids = ((cats ?? []) as SupabaseRow[]).map((c) => c.id as string);
    query = query.in("category_id", ids);
  }

  const { data, error } = await query;
  if (error) handleError(error, "listActiveEquipment");

  return ((data ?? []) as SupabaseRow[]).map((r) => {
    const cat = r.category as SupabaseRow | null;
    return {
      id: r.id as string,
      name: r.name as string,
      slug: r.slug as string,
      manufacturer: r.manufacturer as string | null,
      model: r.model as string | null,
      manufactureYear: r.manufacture_year as number | null,
      description: r.description as string | null,
      publicStatus: r.public_status as string,
      featured: r.featured as boolean,
      displayOrder: r.display_order as number,
      category: cat
        ? { id: cat.id as string, name: cat.name as string, slug: cat.slug as string }
        : { id: "", name: "", slug: "" },
    };
  });
}

export async function getEquipmentBySlug(
  slug: string,
): Promise<EquipmentDetailDto | null> {
  const supabase = getSupabaseAdminClient();

  const { data: eq, error: eqErr } = await supabase
    .from("equipment")
    .select(
      "id, name, slug, manufacturer, model, manufacture_year, description, public_status, featured, display_order, category:equipment_categories!fk_equipment_category(id, name, slug)",
    )
    .eq("slug", slug)
    .eq("is_active", true)
    .is("archived_at", null)
    .single();

  if (eqErr) {
    if (eqErr.code === "PGRST116") return null;
    handleError(eqErr, "getEquipmentBySlug");
  }
  if (!eq) return null;

  const r = eq as SupabaseRow;
  const cat = r.category as SupabaseRow | null;

  const { data: specs, error: specErr } = await supabase
    .from("equipment_specifications")
    .select("specification_name, value, unit, display_order")
    .eq("equipment_id", r.id as string)
    .order("display_order", { ascending: true });

  if (specErr) handleError(specErr, "getEquipmentBySlug:specs");

  return {
    id: r.id as string,
    name: r.name as string,
    slug: r.slug as string,
    manufacturer: r.manufacturer as string | null,
    model: r.model as string | null,
    manufactureYear: r.manufacture_year as number | null,
    description: r.description as string | null,
    publicStatus: r.public_status as string,
    featured: r.featured as boolean,
    displayOrder: r.display_order as number,
    category: cat
      ? { id: cat.id as string, name: cat.name as string, slug: cat.slug as string }
      : { id: "", name: "", slug: "" },
    specifications: ((specs ?? []) as SupabaseRow[]).map((s) => ({
      name: s.specification_name as string,
      value: s.value as string,
      unit: s.unit as string | null,
      displayOrder: s.display_order as number,
    })),
  };
}
