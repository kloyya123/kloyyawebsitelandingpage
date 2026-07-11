import { z } from "zod";

/**
 * Waitlist ingestion — the only required step to secure a place.
 * We normalize aggressively so the DB dedupe key is reliable.
 */
export const WaitlistIngestSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Enter your work email to continue." })
    .email({ message: "That doesn't look like a valid email address." }),
});

export type WaitlistIngestInput = z.infer<typeof WaitlistIngestSchema>;

/** Headcount buckets — no free text, so the data stays queryable. */
export const HEADCOUNT_OPTIONS = [
  "Just me",
  "2–10",
  "11–50",
  "51–200",
  "201–1,000",
  "1,000+",
] as const;

/**
 * Post-submit enrichment. Everything here is optional context —
 * a place is already secured by this point, so nothing blocks.
 */
export const EnrichmentSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  tools: z
    .array(z.string())
    .max(3, { message: "Pick up to three." })
    .default([]),
  headcount: z.enum(HEADCOUNT_OPTIONS).optional(),
});

export type EnrichmentInput = z.infer<typeof EnrichmentSchema>;
