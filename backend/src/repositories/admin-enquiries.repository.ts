import { getSupabaseAdminClient } from "../lib/supabase-admin.js";
import { AppError } from "../errors/app-error.js";
import { ENQUIRY_STATUSES, type EnquiryStatus } from "../validation/admin-enquiries.schema.js";

export interface EnquiryListItem {
  id: string;
  referenceNumber: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface EnquiryListResult {
  items: EnquiryListItem[];
  total: number;
  page: number;
  limit: number;
}

export interface EnquiryDetail {
  id: string;
  referenceNumber: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  projectLocation: string | null;
  message: string;
  status: EnquiryStatus;
  division: { id: string; name: string; slug: string } | null;
  service: { id: string; name: string; slug: string } | null;
  createdAt: string;
  updatedAt: string;
}

export interface EnquiryNote {
  id: string;
  note: string;
  createdAt: string;
  authorName: string | null;
  authorRole: string | null;
}

export interface EnquiryStatusHistoryEntry {
  id: string;
  oldStatus: EnquiryStatus | null;
  newStatus: EnquiryStatus;
  changedAt: string;
  actorName: string | null;
  actorRole: string | null;
}

export interface TransitionEnquiryStatusInput {
  enquiryId: string;
  status: EnquiryStatus;
  adminUserId: string;
}

export interface TransitionEnquiryStatusResult {
  enquiryId: string;
  oldStatus: EnquiryStatus | null;
  newStatus: EnquiryStatus;
  changed: boolean;
  historyId: string | null;
}

export interface CreateEnquiryNoteInput {
  enquiryId: string;
  note: string;
  adminUserId: string;
}

interface ContactEnquiryRow {
  id: string;
  reference_number: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  division_id: string | null;
  service_id: string | null;
  project_location: string | null;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface DivisionRelation {
  id: string;
  name: string;
  slug: string;
}

interface ServiceRelation {
  id: string;
  name: string;
  slug: string;
  division_id: string;
}

function handleDbError(error: unknown, ctx: string): never {
  console.error(`[admin-enquiries] ${ctx}:`, error);
  throw new AppError(
    500,
    "DATABASE_ERROR",
    "An unexpected error occurred while processing the request.",
  );
}

function isEnquiryStatus(value: string): value is EnquiryStatus {
  return (ENQUIRY_STATUSES as readonly string[]).includes(value);
}

function toEnquiryListItem(row: ContactEnquiryRow): EnquiryListItem {
  return {
    id: row.id,
    referenceNumber: row.reference_number,
    name: row.name,
    company: row.company,
    email: row.email,
    phone: row.phone,
    status: isEnquiryStatus(row.status) ? row.status : "new",
    createdAt: row.created_at,
  };
}

export async function listEnquiries(
  page: number,
  limit: number,
  status: EnquiryStatus | undefined,
): Promise<EnquiryListResult> {
  const supabase = getSupabaseAdminClient();

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("contact_enquiries")
    .select(
      "id, reference_number, name, company, email, phone, status, created_at",
      { count: "exact" },
    )
    .order("created_at", { ascending: false })
    .range(from, to);

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error, count } = await query;

  if (error) {
    handleDbError(error, "listEnquiries");
  }

  const rows = (data ?? []) as unknown as ContactEnquiryRow[];

  return {
    items: rows.map(toEnquiryListItem),
    total: count ?? 0,
    page,
    limit,
  };
}

export async function getEnquiryById(id: string): Promise<EnquiryDetail | null> {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase
    .from("contact_enquiries")
    .select(
      `
      id, reference_number, name, company, email, phone, division_id, service_id,
      project_location, message, status, created_at, updated_at,
      business_divisions:division_id ( id, name, slug ),
      services:service_id ( id, name, slug, division_id )
    `,
    )
    .eq("id", id)
    .maybeSingle();

  if (error) {
    handleDbError(error, "getEnquiryById");
  }

  if (!data) return null;

  const row = data as unknown as ContactEnquiryRow & {
    business_divisions: DivisionRelation | null;
    services: ServiceRelation | null;
  };

  return {
    id: row.id,
    referenceNumber: row.reference_number,
    name: row.name,
    company: row.company,
    email: row.email,
    phone: row.phone,
    projectLocation: row.project_location,
    message: row.message,
    status: isEnquiryStatus(row.status) ? row.status : "new",
    division: row.business_divisions
      ? {
          id: row.business_divisions.id,
          name: row.business_divisions.name,
          slug: row.business_divisions.slug,
        }
      : null,
    service: row.services
      ? {
          id: row.services.id,
          name: row.services.name,
          slug: row.services.slug,
        }
      : null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getEnquiryNotes(enquiryId: string): Promise<EnquiryNote[]> {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase
    .from("internal_notes")
    .select(
      `
      id, note, created_at,
      admin_users:created_by ( id, display_name, role )
    `,
    )
    .eq("enquiry_id", enquiryId)
    .order("created_at", { ascending: true });

  if (error) {
    handleDbError(error, "getEnquiryNotes");
  }

  type NoteRow = {
    id: string;
    note: string;
    created_at: string;
    admin_users: { id: string; display_name: string; role: string } | null;
  };

  const rows = (data ?? []) as unknown as NoteRow[];

  return rows.map((row) => ({
    id: row.id,
    note: row.note,
    createdAt: row.created_at,
    authorName: row.admin_users?.display_name ?? null,
    authorRole: row.admin_users?.role ?? null,
  }));
}

export async function getEnquiryStatusHistory(
  enquiryId: string,
): Promise<EnquiryStatusHistoryEntry[]> {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase
    .from("enquiry_status_history")
    .select(
      `
      id, old_status, new_status, created_at,
      admin_users:changed_by ( id, display_name, role )
    `,
    )
    .eq("enquiry_id", enquiryId)
    .order("created_at", { ascending: true });

  if (error) {
    handleDbError(error, "getEnquiryStatusHistory");
  }

  type HistoryRow = {
    id: string;
    old_status: string | null;
    new_status: string;
    created_at: string;
    admin_users: { id: string; display_name: string; role: string } | null;
  };

  const rows = (data ?? []) as unknown as HistoryRow[];

  return rows.map((row) => ({
    id: row.id,
    oldStatus: row.old_status && isEnquiryStatus(row.old_status) ? row.old_status : null,
    newStatus: isEnquiryStatus(row.new_status) ? row.new_status : "new",
    changedAt: row.created_at,
    actorName: row.admin_users?.display_name ?? null,
    actorRole: row.admin_users?.role ?? null,
  }));
}

export async function transitionEnquiryStatus(
  input: TransitionEnquiryStatusInput,
): Promise<TransitionEnquiryStatusResult> {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase.rpc("transition_enquiry_status" as never, {
    enquiry_uuid: input.enquiryId,
    requested_status: input.status,
    actor_admin_uuid: input.adminUserId,
  } as never);

  if (error) {
    handleDbError(error, "transitionEnquiryStatus");
  }

  const result = (Array.isArray(data) ? data[0] : data) as
    | {
        enquiry_id: string;
        old_status: string | null;
        new_status: string;
        changed: boolean;
        history_id: string | null;
      }
    | undefined;

  if (!result) {
    throw new AppError(
      500,
      "DATABASE_ERROR",
      "Status transition returned no result.",
    );
  }

  return {
    enquiryId: result.enquiry_id,
    oldStatus: result.old_status && isEnquiryStatus(result.old_status) ? result.old_status : null,
    newStatus: isEnquiryStatus(result.new_status) ? result.new_status : "new",
    changed: result.changed,
    historyId: result.history_id,
  };
}

export async function createEnquiryNote(
  input: CreateEnquiryNoteInput,
): Promise<EnquiryNote> {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase
    .from("internal_notes")
    .insert({
      enquiry_id: input.enquiryId,
      quote_request_id: null,
      note: input.note,
      created_by: input.adminUserId,
    } as never)
    .select(
      `
      id, note, created_at,
      admin_users:created_by ( id, display_name, role )
    `,
    )
    .single();

  if (error) {
    handleDbError(error, "createEnquiryNote");
  }

  type NoteRow = {
    id: string;
    note: string;
    created_at: string;
    admin_users: { id: string; display_name: string; role: string } | null;
  };

  const row = data as unknown as NoteRow;

  return {
    id: row.id,
    note: row.note,
    createdAt: row.created_at,
    authorName: row.admin_users?.display_name ?? null,
    authorRole: row.admin_users?.role ?? null,
  };
}

export async function enquiryExists(id: string): Promise<boolean> {
  const supabase = getSupabaseAdminClient();
  const { count, error } = await supabase
    .from("contact_enquiries")
    .select("id", { count: "exact", head: true })
    .eq("id", id);

  if (error) {
    handleDbError(error, "enquiryExists");
  }

  return (count ?? 0) > 0;
}