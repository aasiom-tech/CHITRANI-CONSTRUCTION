import { getSupabaseAdminClient } from "../lib/supabase-admin.js";
import { AppError } from "../errors/app-error.js";

export const CONTACT_ENQUIRY_STATUSES = [
  "new",
  "contacted",
  "qualified",
  "closed",
] as const;

export const QUOTE_REQUEST_STATUSES = [
  "new",
  "under_review",
  "clarification_required",
  "quoted",
  "won",
  "lost",
  "closed",
] as const;

export interface DashboardSummary {
  enquiries: {
    total: number;
    new: number;
    contacted: number;
    qualified: number;
    closed: number;
  };
  quotes: {
    total: number;
    new: number;
    under_review: number;
    clarification_required: number;
    quoted: number;
    won: number;
    lost: number;
    closed: number;
  };
  catalog: {
    businessDivisions: number;
    services: number;
    equipment: number;
    projects: number;
    industries: number;
  };
}

function handleError(error: unknown, ctx: string): never {
  console.error(`[dashboard] ${ctx}:`, error);
  throw new AppError(
    500,
    "DATABASE_ERROR",
    "An unexpected error occurred while loading dashboard data.",
  );
}

async function countEnquiriesByStatus(
  status: (typeof CONTACT_ENQUIRY_STATUSES)[number],
): Promise<number> {
  const supabase = getSupabaseAdminClient();
  const { count, error } = await supabase
    .from("contact_enquiries")
    .select("*", { count: "exact", head: true })
    .eq("status", status);

  if (error) {
    handleError(error, `count_contact_enquiries_${status}`);
  }

  return count ?? 0;
}

async function countQuotesByStatus(
  status: (typeof QUOTE_REQUEST_STATUSES)[number],
): Promise<number> {
  const supabase = getSupabaseAdminClient();
  const { count, error } = await supabase
    .from("quote_requests")
    .select("*", { count: "exact", head: true })
    .eq("status", status);

  if (error) {
    handleError(error, `count_quote_requests_${status}`);
  }

  return count ?? 0;
}

async function countTable(table: string): Promise<number> {
  const supabase = getSupabaseAdminClient();
  const { count, error } = await supabase
    .from(table)
    .select("*", { count: "exact", head: true });

  if (error) {
    handleError(error, `count_${table}`);
  }

  return count ?? 0;
}

export async function getDashboardSummary(): Promise<DashboardSummary> {
  const [
    enquiryNew,
    enquiryContacted,
    enquiryQualified,
    enquiryClosed,
    quoteNew,
    quoteUnderReview,
    quoteClarificationRequired,
    quoteQuoted,
    quoteWon,
    quoteLost,
    quoteClosed,
    divisionsCount,
    servicesCount,
    equipmentCount,
    projectsCount,
    industriesCount,
  ] = await Promise.all([
    countEnquiriesByStatus("new"),
    countEnquiriesByStatus("contacted"),
    countEnquiriesByStatus("qualified"),
    countEnquiriesByStatus("closed"),
    countQuotesByStatus("new"),
    countQuotesByStatus("under_review"),
    countQuotesByStatus("clarification_required"),
    countQuotesByStatus("quoted"),
    countQuotesByStatus("won"),
    countQuotesByStatus("lost"),
    countQuotesByStatus("closed"),
    countTable("business_divisions"),
    countTable("services"),
    countTable("equipment"),
    countTable("projects"),
    countTable("industries"),
  ]);

  const enquiryTotal =
    enquiryNew + enquiryContacted + enquiryQualified + enquiryClosed;

  const quoteTotal =
    quoteNew +
    quoteUnderReview +
    quoteClarificationRequired +
    quoteQuoted +
    quoteWon +
    quoteLost +
    quoteClosed;

  return {
    enquiries: {
      total: enquiryTotal,
      new: enquiryNew,
      contacted: enquiryContacted,
      qualified: enquiryQualified,
      closed: enquiryClosed,
    },
    quotes: {
      total: quoteTotal,
      new: quoteNew,
      under_review: quoteUnderReview,
      clarification_required: quoteClarificationRequired,
      quoted: quoteQuoted,
      won: quoteWon,
      lost: quoteLost,
      closed: quoteClosed,
    },
    catalog: {
      businessDivisions: divisionsCount,
      services: servicesCount,
      equipment: equipmentCount,
      projects: projectsCount,
      industries: industriesCount,
    },
  };
}