const env = {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL as string,
  VITE_SUPABASE_PUBLISHABLE_KEY: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string,
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL as string,
};

function validateEnv(): void {
  const missing: string[] = [];
  if (!env.VITE_SUPABASE_URL) missing.push("VITE_SUPABASE_URL");
  if (!env.VITE_SUPABASE_PUBLISHABLE_KEY) missing.push("VITE_SUPABASE_PUBLISHABLE_KEY");
  if (!env.VITE_API_BASE_URL) missing.push("VITE_API_BASE_URL");
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}

if (import.meta.env.DEV) {
  validateEnv();
}

export { env };
