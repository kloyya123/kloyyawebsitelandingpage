import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Service-role client — server only. Never import this into a "use client" file.
 * Falls back to empty strings so the app boots without keys; actions guard on
 * `isConfigured` and return an honest error instead of throwing.
 */
// trim() also strips a leading BOM (U+FEFF is ECMAScript whitespace) — some env-var
// tooling injects one, which otherwise corrupts HTTP header values (undici error).
const cleanEnv = (v: string | undefined) => (v ?? "").trim();

const url = cleanEnv(process.env.SUPABASE_URL);
const serviceRoleKey = cleanEnv(process.env.SUPABASE_SERVICE_ROLE_KEY);

export const isSupabaseConfigured = Boolean(url && serviceRoleKey);

export const supabaseAdmin = createClient(
  url || "http://localhost",
  serviceRoleKey || "public-anon-key",
  {
    auth: { persistSession: false, autoRefreshToken: false },
  }
);
