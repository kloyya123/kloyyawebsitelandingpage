"use server";

import { Resend } from "resend";
import {
  WaitlistIngestSchema,
  EnrichmentSchema,
  type WaitlistIngestInput,
  type EnrichmentInput,
} from "@/lib/schema";
import { supabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";
import { welcomeEmailHtml, signupNotifyHtml } from "@/lib/email";

// trim() strips any stray BOM/whitespace that env tooling may prepend.
const FROM_ADDRESS = (process.env.RESEND_FROM ?? "Kloyya <updates@kloyya.com>").trim();
const RESEND_KEY = (process.env.RESEND_API_KEY ?? "").trim();

// Operator forwarding allowlist — HARDCODED on purpose. Signup notifications go
// only to these two inboxes and nowhere else; not env-configurable, so a mis-set
// or injected env var can never redirect a copy of a user's data elsewhere.
const NOTIFY_ADDRESSES = ["whelmank@gmail.com", "whelmanny@gmail.com"] as const;

/** Best-effort internal forward to the operator allowlist. Never blocks or throws. */
async function notifyOperators(html: string, subject: string): Promise<void> {
  if (!RESEND_KEY) return;
  try {
    const resend = new Resend(RESEND_KEY);
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: [...NOTIFY_ADDRESSES],
      subject,
      html,
    });
  } catch {
    // swallow — internal notification is non-critical to the user's signup
  }
}

type ActionResult = { success: boolean; error: string | null };

/**
 * Step 1 — secure a place. Validates, dedupes, inserts, and sends the welcome
 * email. Returns honest, human errors; the UI never sees a stack trace.
 */
export async function processWaitlistSubmission(
  data: WaitlistIngestInput
): Promise<ActionResult> {
  const parsed = WaitlistIngestSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0].message };
  }

  if (!isSupabaseConfigured) {
    return {
      success: false,
      error:
        "The waitlist isn't connected yet. Add your Supabase keys to .env.local to go live.",
    };
  }

  const { email } = parsed.data;

  try {
    const { data: existing, error: fetchError } = await supabaseAdmin
      .from("kloyya_waitlist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (fetchError) throw fetchError;
    if (existing) {
      return {
        success: false,
        error: "You're already on the list — check your inbox for the confirmation.",
      };
    }

    const { error: insertError } = await supabaseAdmin
      .from("kloyya_waitlist")
      .insert([{ email }]);

    if (insertError) throw insertError;

    // Email is best-effort: a mail failure must not lose the signup.
    if (RESEND_KEY) {
      try {
        const resend = new Resend(RESEND_KEY);
        await resend.emails.send({
          from: FROM_ADDRESS,
          to: [email],
          subject: "You're on the Kloyya waitlist",
          html: welcomeEmailHtml(),
        });
      } catch {
        // swallow — the place is secured regardless of mail delivery
      }
    }

    // Forward the new signup to the operator allowlist only.
    await notifyOperators(
      signupNotifyHtml({ email, stage: "joined" }),
      `New Kloyya waitlist signup — ${email}`
    );

    return { success: true, error: null };
  } catch (err) {
    console.error("[waitlist] submission failed:", err);
    return {
      success: false,
      error: "Something went wrong on our side. Please try again in a moment.",
    };
  }
}

/**
 * Step 2 — optional enrichment. Never blocks; a place is already secured.
 * Updates the existing row with focus tools and headcount.
 */
export async function saveEnrichmentProfile(
  data: EnrichmentInput
): Promise<ActionResult> {
  const parsed = EnrichmentSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0].message };
  }

  if (!isSupabaseConfigured) {
    return { success: true, error: null }; // stay graceful when unconfigured
  }

  const { email, tools, headcount } = parsed.data;

  try {
    const { error } = await supabaseAdmin
      .from("kloyya_waitlist")
      .update({ tools, headcount: headcount ?? null })
      .eq("email", email);

    if (error) throw error;

    // Forward the enriched profile to the operator allowlist only.
    await notifyOperators(
      signupNotifyHtml({ email, tools, headcount, stage: "enriched" }),
      `Kloyya waitlist profile enriched — ${email}`
    );

    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error: "Couldn't save that just now — but your place is secured.",
    };
  }
}
