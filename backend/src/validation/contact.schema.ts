import { z } from "zod";

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const submitContactEnquirySchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, "Name is required")
      .max(200, "Name must be 200 characters or fewer"),
    company: z
      .string()
      .trim()
      .max(200, "Company must be 200 characters or fewer")
      .nullish(),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .max(254, "Email must be 254 characters or fewer")
      .email("Invalid email address"),
    phone: z
      .string()
      .trim()
      .min(1, "Phone is required")
      .max(30, "Phone must be 30 characters or fewer"),
    divisionId: z
      .string()
      .trim()
      .regex(uuidPattern, "divisionId must be a valid UUID")
      .nullish(),
    serviceId: z
      .string()
      .trim()
      .regex(uuidPattern, "serviceId must be a valid UUID")
      .nullish(),
    projectLocation: z
      .string()
      .trim()
      .max(300, "Project location must be 300 characters or fewer")
      .nullish(),
    message: z
      .string()
      .trim()
      .min(1, "Message is required")
      .max(5000, "Message must be 5000 characters or fewer"),
    consent: z.boolean().refine((v) => v === true, {
      message: "Consent is required to submit an enquiry",
    }),
  })
  .strict();

export type SubmitContactEnquiryInput = z.infer<
  typeof submitContactEnquirySchema
>;
