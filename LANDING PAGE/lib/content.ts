/**
 * Single source of truth for page copy and the transparency data.
 * No synthetic counters live here — only real, editable state.
 */

export const SIGNAL_NODES = [
  "Slack",
  "Gmail",
  "Jira",
  "Notion",
  "WhatsApp",
  "Salesforce",
  "Linear",
  "HubSpot",
] as const;

/** Integration directory — grouped, understated (no rainbow logos). */
export const INTEGRATION_GROUPS: {
  group: string;
  note: string;
  items: string[];
}[] = [
  {
    group: "Communication hubs",
    note: "Where the signal actually arrives.",
    items: ["Gmail", "Slack", "WhatsApp Business", "LinkedIn Messages"],
  },
  {
    group: "Knowledge & tasks",
    note: "Where the work is recorded.",
    items: ["Notion", "Jira", "Linear", "Google Drive"],
  },
  {
    group: "Operations & financials",
    note: "Where decisions become numbers.",
    items: ["Salesforce", "HubSpot", "Stripe"],
  },
];

/** The tools a leader can flag as fracturing their focus (enrichment pills). */
export const FOCUS_TOOLS = [
  "Slack",
  "Gmail",
  "WhatsApp",
  "Jira",
  "Notion",
  "Linear",
  "Salesforce",
  "HubSpot",
  "Google Drive",
  "LinkedIn",
] as const;

/** The genuine "Under the Hood" pipeline — an ordered sequence, so numbering is honest. */
export const PIPELINE = [
  {
    state: "Cross-platform ingestion",
    action:
      "Maps deep webhooks across your communications, CRMs, documentation, and task hubs into one stream.",
    benefit: "No more application hopping, no more context lost between tabs.",
  },
  {
    state: "Cognitive graph mapping",
    action:
      "Builds real-time relational vectors between tasks, people, blockers, and timelines.",
    benefit: "Non-obvious operational bottlenecks surface on their own.",
  },
  {
    state: "Autonomous briefing synthesis",
    action:
      "Compiles executive summaries, action items, and decision frameworks continuously.",
    benefit: "Your context is prepared before the meeting, not after it.",
  },
];

/**
 * Development Sprint Ledger — the honest replacement for a fake counter.
 * Edit these as the build moves. `status` drives the chip styling.
 */
export const SPRINT_LEDGER: {
  module: string;
  target: string;
  status: "Completed" | "Active sprint" | "In QA isolation";
}[] = [
  {
    module: "Secure webhook pipeline",
    target: "OAuth2 validation matrices for Slack and Jira ingestion.",
    status: "Completed",
  },
  {
    module: "Executive decision engine",
    target: "Tuning reasoning loops against sparse operational context.",
    status: "Active sprint",
  },
  {
    module: "Multi-vector context parse",
    target: "Cross-app thread linkage via semantic token alignment.",
    status: "In QA isolation",
  },
];

export const FAQ = [
  {
    q: "How is Kloyya different from a unified inbox?",
    a: "A unified inbox consolidates and tidies — you still do the reading and the deciding. Kloyya reads across everything, connects the threads, and prepares the decision. Consolidation is the floor, not the product.",
  },
  {
    q: "Who is Kloyya built for?",
    a: "Founders, VPs, and cross-border operators running five or more active channels — Slack, email, WhatsApp, Notion, Jira, CRM — who lose hours to context switching every day.",
  },
  {
    q: "Why no waitlist counter?",
    a: "Because a number invented to create urgency tells you nothing true. Instead we publish the real development ledger below — what's shipped, what's in QA, what's being built right now.",
  },
  {
    q: "Is joining the waitlist free?",
    a: "Yes. Early access is free and carries no obligation. You'll get build updates and a private beta key when your cohort opens.",
  },
  {
    q: "How do you handle my data?",
    a: "Integrations are read through scoped OAuth you control and can revoke at any time. We never sell data, and access is confined to service-role infrastructure. A full security overview ships before public beta.",
  },
];
