import { z } from "zod";

const supabaseEnvSchema = z.object({
  SUPABASE_URL: z.string().url().startsWith("https://"),
  SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
  SUPABASE_SECRET_KEY: z.string().min(1),
});

let cached: z.infer<typeof supabaseEnvSchema> | null = null;

export function getSupabaseConfig(): z.infer<typeof supabaseEnvSchema> {
  if (cached) return cached;

  const result = supabaseEnvSchema.safeParse(process.env);

  if (!result.success) {
    throw new Error(
      "Supabase server configuration is missing or invalid. " +
        "Ensure SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, and SUPABASE_SECRET_KEY are set.",
    );
  }

  cached = result.data;
  return cached;
}

export type SupabaseConfig = z.infer<typeof supabaseEnvSchema>;
