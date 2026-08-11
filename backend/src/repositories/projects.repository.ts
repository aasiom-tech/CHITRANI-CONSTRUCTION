import { getSupabaseAdminClient } from "../lib/supabase-admin.js";
import { AppError } from "../errors/app-error.js";

/* ------------------------------------------------------------------ */
/*  Industry DTOs                                                      */
/* ------------------------------------------------------------------ */

export interface IndustryDto {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  fullDescription: string | null;
  displayOrder: number;
}

/* ------------------------------------------------------------------ */
/*  Project DTOs                                                       */
/* ------------------------------------------------------------------ */

export interface ProjectListItemDto {
  id: string;
  name: string;
  slug: string;
  clientName: string | null;
  location: string | null;
  role: string | null;
  shortDescription: string | null;
  projectStatus: string;
  featured: boolean;
  displayOrder: number;
  services: Array<{ id: string; name: string; slug: string }>;
  industries: Array<{ id: string; name: string; slug: string }>;
}

export interface ProjectDetailDto extends ProjectListItemDto {
  fullDescription: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
}

export interface PaginatedProjectsDto {
  items: ProjectListItemDto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/* eslint-disable @typescript-eslint/no-explicit-any */
type SupabaseRow = Record<string, any>;
/* eslint-enable @typescript-eslint/no-explicit-any */

function handleError(error: unknown, ctx: string): never {
  console.error(`[projects] ${ctx}:`, error);
  throw new AppError(500, "DATABASE_ERROR", "An unexpected error occurred.");
}

/* ------------------------------------------------------------------ */
/*  Industries                                                         */
/* ------------------------------------------------------------------ */

export async function listActiveIndustries(): Promise<IndustryDto[]> {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("industries")
    .select("id, name, slug, short_description, full_description, display_order")
    .eq("is_active", true)
    .is("archived_at", null)
    .order("display_order", { ascending: true });

  if (error) handleError(error, "listActiveIndustries");

  return ((data ?? []) as SupabaseRow[]).map((r) => ({
    id: r.id as string,
    name: r.name as string,
    slug: r.slug as string,
    shortDescription: r.short_description as string | null,
    fullDescription: r.full_description as string | null,
    displayOrder: r.display_order as number,
  }));
}

/* ------------------------------------------------------------------ */
/*  Projects — List (paginated)                                        */
/* ------------------------------------------------------------------ */

export async function listActiveProjects(
  page: number,
  limit: number,
): Promise<PaginatedProjectsDto> {
  const supabase = getSupabaseAdminClient();
  const offset = (page - 1) * limit;

  const { count, error: countErr } = await supabase
    .from("projects")
    .select("id", { count: "exact", head: true })
    .eq("is_active", true)
    .is("archived_at", null);

  if (countErr) handleError(countErr, "listActiveProjects:count");

  const total = count ?? 0;
  const totalPages = Math.ceil(total / limit);

  if (total === 0) {
    return {
      items: [],
      pagination: { page, limit, total, totalPages },
    };
  }

  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, name, slug, client_name, location, role, short_description, project_status, featured, display_order",
    )
    .eq("is_active", true)
    .is("archived_at", null)
    .order("featured", { ascending: false })
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) handleError(error, "listActiveProjects");

  const rows = (data ?? []) as SupabaseRow[];
  const projectIds = rows.map((r) => r.id as string);

  const [servicesMap, industriesMap] = await Promise.all([
    fetchProjectServices(supabase, projectIds),
    fetchProjectIndustries(supabase, projectIds),
  ]);

  const items: ProjectListItemDto[] = rows.map((r) => ({
    id: r.id as string,
    name: r.name as string,
    slug: r.slug as string,
    clientName: r.client_name as string | null,
    location: r.location as string | null,
    role: r.role as string | null,
    shortDescription: r.short_description as string | null,
    projectStatus: r.project_status as string,
    featured: r.featured as boolean,
    displayOrder: r.display_order as number,
    services: servicesMap.get(r.id as string) ?? [],
    industries: industriesMap.get(r.id as string) ?? [],
  }));

  return { items, pagination: { page, limit, total, totalPages } };
}

/* ------------------------------------------------------------------ */
/*  Projects — Detail by slug                                          */
/* ------------------------------------------------------------------ */

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectDetailDto | null> {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, name, slug, client_name, location, role, short_description, full_description, project_status, featured, display_order, seo_title, seo_description",
    )
    .eq("slug", slug)
    .eq("is_active", true)
    .is("archived_at", null)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    handleError(error, "getProjectBySlug");
  }
  if (!data) return null;

  const r = data as SupabaseRow;
  const projectId = r.id as string;

  const [servicesMap, industriesMap] = await Promise.all([
    fetchProjectServices(supabase, [projectId]),
    fetchProjectIndustries(supabase, [projectId]),
  ]);

  return {
    id: projectId,
    name: r.name as string,
    slug: r.slug as string,
    clientName: r.client_name as string | null,
    location: r.location as string | null,
    role: r.role as string | null,
    shortDescription: r.short_description as string | null,
    fullDescription: r.full_description as string | null,
    projectStatus: r.project_status as string,
    featured: r.featured as boolean,
    displayOrder: r.display_order as number,
    seoTitle: r.seo_title as string | null,
    seoDescription: r.seo_description as string | null,
    services: servicesMap.get(projectId) ?? [],
    industries: industriesMap.get(projectId) ?? [],
  };
}

/* ------------------------------------------------------------------ */
/*  Junction helpers                                                   */
/* ------------------------------------------------------------------ */

async function fetchProjectServices(
  supabase: ReturnType<typeof getSupabaseAdminClient>,
  projectIds: string[],
): Promise<Map<string, Array<{ id: string; name: string; slug: string }>>> {
  if (projectIds.length === 0) return new Map();

  const { data, error } = await supabase
    .from("project_services")
    .select("project_id, service:services(id, name, slug)")
    .in("project_id", projectIds);

  if (error) handleError(error, "fetchProjectServices");

  const map = new Map<string, Array<{ id: string; name: string; slug: string }>>();
  for (const row of (data ?? []) as SupabaseRow[]) {
    const pid = row.project_id as string;
    const svc = row.service as SupabaseRow | null;
    if (!svc) continue;
    const list = map.get(pid) ?? [];
    list.push({ id: svc.id as string, name: svc.name as string, slug: svc.slug as string });
    map.set(pid, list);
  }
  return map;
}

async function fetchProjectIndustries(
  supabase: ReturnType<typeof getSupabaseAdminClient>,
  projectIds: string[],
): Promise<Map<string, Array<{ id: string; name: string; slug: string }>>> {
  if (projectIds.length === 0) return new Map();

  const { data, error } = await supabase
    .from("project_industries")
    .select("project_id, industry:industries(id, name, slug)")
    .in("project_id", projectIds);

  if (error) handleError(error, "fetchProjectIndustries");

  const map = new Map<string, Array<{ id: string; name: string; slug: string }>>();
  for (const row of (data ?? []) as SupabaseRow[]) {
    const pid = row.project_id as string;
    const ind = row.industry as SupabaseRow | null;
    if (!ind) continue;
    const list = map.get(pid) ?? [];
    list.push({ id: ind.id as string, name: ind.name as string, slug: ind.slug as string });
    map.set(pid, list);
  }
  return map;
}
