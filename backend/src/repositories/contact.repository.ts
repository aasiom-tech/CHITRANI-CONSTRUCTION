import { getSupabaseAdminClient } from "../lib/supabase-admin.js";
import { AppError } from "../errors/app-error.js";

export interface ContactEnquiryInsert {
  name: string;
  company?: string | null;
  email: string;
  phone: string;
  division_id?: string | null;
  service_id?: string | null;
  project_location?: string | null;
  message: string;
  consent: boolean;
  consent_at?: string | null;
}

export interface ContactEnquiryAcknowledgement {
  referenceNumber: string;
  message: string;
}

function handleError(error: unknown, ctx: string): never {
  console.error(`[contact] ${ctx}:`, error);
  throw new AppError(
    500,
    "DATABASE_ERROR",
    "An unexpected error occurred while processing your enquiry.",
  );
}

export async function insertContactEnquiry(
  input: ContactEnquiryInsert,
): Promise<ContactEnquiryAcknowledgement> {
  const supabase = getSupabaseAdminClient();

  const insertData = {
    name: input.name,
    company: input.company ?? null,
    email: input.email,
    phone: input.phone,
    division_id: input.division_id ?? null,
    service_id: input.service_id ?? null,
    project_location: input.project_location ?? null,
    message: input.message,
    consent: input.consent,
    consent_at: input.consent ? new Date().toISOString() : null,
  };

  const { data, error } = await supabase
    .from("contact_enquiries")
    .insert(insertData as never)
    .select("reference_number")
    .single();

  if (error) {
    if (error.code === "23503") {
      throw new AppError(
        400,
        "INVALID_RELATION",
        "The selected division or service does not exist.",
      );
    }
    handleError(error, "insertContactEnquiry");
  }

  if (!data) {
    throw new AppError(
      500,
      "DATABASE_ERROR",
      "Enquiry was not created.",
    );
  }

  const row = data as { reference_number: string };

  return {
    referenceNumber: row.reference_number,
    message:
      "Your enquiry has been received. Our team will contact you shortly.",
  };
}
