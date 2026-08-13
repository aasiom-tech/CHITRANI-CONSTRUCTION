import { z } from "zod";

export const ENQUIRY_STATUSES = ["new", "contacted", "qualified", "closed"] as const;
export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

export const listEnquiriesQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z.enum(ENQUIRY_STATUSES).optional(),
});
export type ListEnquiriesQuery = z.infer<typeof listEnquiriesQuerySchema>;

export const enquiryIdParamSchema = z.object({
  id: z.string().uuid(),
});
export type EnquiryIdParam = z.infer<typeof enquiryIdParamSchema>;

export const updateEnquiryStatusSchema = z.object({
  status: z.enum(ENQUIRY_STATUSES),
});
export type UpdateEnquiryStatusInput = z.infer<typeof updateEnquiryStatusSchema>;

export const createEnquiryNoteSchema = z.object({
  note: z.string().trim().min(1).max(5000),
});
export type CreateEnquiryNoteInput = z.infer<typeof createEnquiryNoteSchema>;