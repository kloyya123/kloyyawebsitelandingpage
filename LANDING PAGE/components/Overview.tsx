const KEY_FEATURES = [
  {
    title: "Unified briefing",
    body: "Combines Gmail, Slack, WhatsApp, Notion, Jira, Linear, Salesforce, and HubSpot into one prioritized view, so nothing is read twice.",
  },
  {
    title: "Cross-app thread linking",
    body: "Connects a Slack thread to the Jira ticket to the email that's actually blocking it, instead of showing them as three unrelated notifications.",
  },
  {
    title: "Decisions, not summaries",
    body: "Surfaces the one thing that needs a human today, with the context already attached — not a digest of everything that happened.",
  },
  {
    title: "Approval-gated drafts",
    body: "Kloyya drafts replies and flags actions, but nothing sends or executes without explicit approval.",
  },
  {
    title: "Scoped, revocable access",
    body: "Every integration connects through OAuth you control and can revoke at any time. Data is never sold.",
  },
];

export default function Overview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="shell max-w-3xl">
        <p className="eyebrow text-signal-deep">Overview</p>
        <h2 className="mt-3 font-display text-3xl font-normal tracking-tightest text-ink sm:text-4xl">
          What Kloyya is
        </h2>
        <p className="mt-5 text-slate">
          Kloyya is an AI-powered Chief of Staff that reads across your inbox,
          chats, tasks, and CRM, connects the threads between them, and
          surfaces the decision that actually needs you — instead of another
          notification to triage. It is built for founders, VPs, and
          cross-border operators running five or more active channels who
          lose hours a day to context switching.
        </p>

        <h3 className="mt-10 text-lg font-medium text-ink">Key features</h3>
        <ul className="mt-4 space-y-4">
          {KEY_FEATURES.map((f) => (
            <li key={f.title} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <p className="text-slate">
                <strong className="font-medium text-ink">{f.title}</strong>
                {" — "}
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
