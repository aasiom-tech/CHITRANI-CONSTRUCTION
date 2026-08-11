import { z } from "zod";

const slugPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export const projectSlugParamSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(1, "slug is required")
    .max(100)
    .regex(slugPattern, "slug must be a URL-friendly slug"),
});

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(12),
});

export type ProjectSlugParam = z.infer<typeof projectSlugParamSchema>;
export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
