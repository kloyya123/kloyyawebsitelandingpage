# Kloyya — Landing Page & Waitlist

The public landing page and value-driven waitlist for Kloyya, an autonomous AI Chief of Staff.

**Design direction — "The Briefing":** an executive intelligence dossier. Deep-ink folio
sections wrap warm-paper briefing surfaces, with one burnt-amber annotation accent. Type pairs
Fraunces (display) · Geist (body) · Geist Mono (the transparent development ledger). The hero
signature is an animated *reasoning thread* that stitches scattered app-signals into one
synthesized decision briefing.

No fake counters, no synthetic social proof — trust is earned through a real development
sprint ledger and an honest onboarding flow.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind · Framer Motion · react-hook-form + Zod ·
Supabase (waitlist ledger) · Resend (welcome email).

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

## Going live (waitlist backend)

The UI works immediately; persistence + email need two services.

1. **Supabase** — create a project, open the SQL editor, and run `supabase/schema.sql`.
   Copy `Project URL` and the `service_role` key into `.env.local`:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`  *(secret — server-only, bypasses RLS)*
2. **Resend** — create an API key and verify a sending domain. Set:
   - `RESEND_API_KEY`
   - `RESEND_FROM` — e.g. `Kloyya <updates@yourdomain.com>` (must use the verified domain)

Restart `npm run dev`. Until keys are present, the form returns an honest
"waitlist isn't connected yet" message instead of failing silently.

## Data captured

`kloyya_waitlist`: `email` (unique), `tools` (up to 3 focus tools from the enrichment drawer),
`headcount`, `created_at`. Writes go only through server actions in `app/actions.ts`; RLS
denies all public access by default.

## Editing content

All copy and the transparency data live in `lib/content.ts` — integration directory, the
"Under the Hood" pipeline, FAQ, and the **development sprint ledger** (update module statuses
here as the build moves). No numbers are invented anywhere.

## Structure

```
app/          layout, page, globals.css, server actions
components/    Masthead, Hero, ReasoningThread, Pipeline, Integrations,
               WaitlistForm, EnrichmentDrawer, SprintLedger, Manifesto, Faq, Footer
lib/          schema (Zod), content, supabase client, email template
supabase/     schema.sql
```
