import {
  type EnquiryDetail,
  type EnquiryListItem,
  type EnquiryListResult,
  type EnquiryNote,
  type EnquiryStatusHistoryEntry,
  type TransitionEnquiryStatusInput,
  type TransitionEnquiryStatusResult,
  createEnquiryNote,
  enquiryExists,
  getEnquiryById,
  getEnquiryNotes,
  getEnquiryStatusHistory,
  listEnquiries,
  transitionEnquiryStatus,
} from "../repositories/admin-enquiries.repository.js";
import { AppError } from "../errors/app-error.js";
import type { EnquiryStatus } from "../validation/admin-enquiries.schema.js";

export interface AdminEnquiryDetailResponse {
  enquiry: EnquiryDetail;
  notes: EnquiryNote[];
  statusHistory: EnquiryStatusHistoryEntry[];
}

export async function listEnquiriesService(
  page: number,
  limit: number,
  status: EnquiryStatus | undefined,
): Promise<EnquiryListResult> {
  return listEnquiries(page, limit, status);
}

export async function getEnquiryDetailService(
  id: string,
): Promise<AdminEnquiryDetailResponse> {
  const enquiry = await getEnquiryById(id);
  if (!enquiry) {
    throw new AppError(404, "NOT_FOUND", "Enquiry not found.");
  }

  const [notes, statusHistory] = await Promise.all([
    getEnquiryNotes(id),
    getEnquiryStatusHistory(id),
  ]);

  return { enquiry, notes, statusHistory };
}

export async function transitionEnquiryStatusService(
  input: TransitionEnquiryStatusInput,
): Promise<TransitionEnquiryStatusResult> {
  const exists = await enquiryExists(input.enquiryId);
  if (!exists) {
    throw new AppError(404, "NOT_FOUND", "Enquiry not found.");
  }

  return transitionEnquiryStatus(input);
}

export async function createEnquiryNoteService(input: {
  enquiryId: string;
  note: string;
  adminUserId: string;
}): Promise<EnquiryNote> {
  const exists = await enquiryExists(input.enquiryId);
  if (!exists) {
    throw new AppError(404, "NOT_FOUND", "Enquiry not found.");
  }

  return createEnquiryNote(input);
}

export type {
  EnquiryDetail,
  EnquiryListItem,
  EnquiryListResult,
  EnquiryNote,
  EnquiryStatusHistoryEntry,
};