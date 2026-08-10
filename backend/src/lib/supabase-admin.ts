import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "../config/supabase-env.js";
import type { Database } from "./database.types.js";

let client: ReturnType<typeof createClient<Database>> | null = null;

/**
 * Privileged Supabase client that bypasses RLS.
 * Must only be used after server-side authorization and business validation.
 * Never expose this client to frontend or browser code.
 */
export function getSupabaseAdminClient() {
  if (client) return client;

  const config = getSupabaseConfig();

  client = createClient<Database>(config.SUPABASE_URL, config.SUPABASE_SECRET_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  return client;
}
