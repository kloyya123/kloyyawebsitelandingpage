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

Next.js 15 (App Router) · TypeScript · Tailwind · GSAP + ScrollTrigger (the agent-flow
demo) · Framer Motion (form + drawer) · react-hook-form + Zod · Supabase (waitlist
ledger) · Resend (welcome email).

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

All copy and the transparency data live in `lib/content.ts` — the integration directory
(which also labels the connectors in `AgentFlow`), the "Under the Hood" pipeline, the FAQ,
and the **development sprint ledger** rendered by `AnalysisLedger` (update module statuses
here as the build moves).

No performance number is invented anywhere. `AnalysisLedger` publishes the *definitions* of
what we measure and the current build state, not scores — the numbers ship with their
methodology or not at all. The `AgentFlow` walkthrough uses sample data and says so on the
section label.

## Structure

```
app/          layout, page, globals.css, server actions, legal/privacy/terms/trust
components/   Masthead, Hero, BriefingMockup, CapabilityGrid, IntegrationLogos,
              AgentFlow, FeatureSpotlight, AnalysisLedger, Faq, CtaBand,
              WaitlistForm, EnrichmentDrawer, Footer, Logo, BrandIcons, LegalShell
lib/          schema (Zod), content, supabase client, email template
supabase/     schema.sql
```

`AgentFlow` is the page's signature: a scroll-triggered demo run that fans six
connectors out across the processing components, converges them on one agent,
and then exposes the agent's internal work — reasoning trace, tool calls, and
the decision it hands back. It is driven by GSAP + ScrollTrigger and skips its
timeline entirely under `prefers-reduced-motion`.
