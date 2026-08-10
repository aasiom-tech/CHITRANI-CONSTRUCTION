import { z } from "zod";

const slugPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export const divisionSlugQuerySchema = z.object({
  divisionSlug: z
    .string()
    .trim()
    .min(1, "divisionSlug is required")
    .max(100)
    .regex(slugPattern, "divisionSlug must be a URL-friendly slug"),
});

export const categoryQuerySchema = z.object({
  category: z
    .string()
    .trim()
    .min(1, "category is required")
    .max(100)
    .regex(slugPattern, "category must be a URL-friendly slug"),
});

export const slugParamSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(1, "slug is required")
    .max(100)
    .regex(slugPattern, "slug must be a URL-friendly slug"),
});

export type DivisionSlugQuery = z.infer<typeof divisionSlugQuerySchema>;
export type CategoryQuery = z.infer<typeof categoryQuerySchema>;
export type SlugParam = z.infer<typeof slugParamSchema>;
