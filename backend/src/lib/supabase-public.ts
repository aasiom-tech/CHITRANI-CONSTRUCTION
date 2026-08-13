import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "../config/supabase-env.js";
import type { Database } from "./database.types.js";

let client: ReturnType<typeof createClient<Database>> | null = null;

/**
 * Low-privilege Supabase client suitable for RLS-compatible operations.
 * Use this for public API operations where normal authorization should apply.
 */
export function getSupabasePublicClient() {
  if (client) return client;

  const config = getSupabaseConfig();

  client = createClient<Database>(config.SUPABASE_URL, config.SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  return client;
}
