import IntegrationLogos from "./IntegrationLogos";

function SignInScreen() {
  return (
    <div className="flex h-40 flex-col justify-center gap-2 rounded-2xl bg-gradient-to-br from-sky-100 via-sky-200 to-white p-4">
      <div className="rounded-lg bg-white/90 p-3 shadow-sm">
        <p className="text-[11px] font-medium text-ink">Sign in to Salesforce</p>
        <div className="mt-2 h-6 rounded-md border border-ink/10 bg-paper-sunk px-2 text-[10px] leading-6 text-slate">
          rachel@kloyya.com
        </div>
        <div className="mt-1.5 h-6 rounded-md border border-ink/10 bg-paper-sunk px-2 text-[10px] leading-6 text-slate">
          ••••••••••
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="rounded bg-signal px-2 py-1 text-[9px] font-medium text-white">
            Kloyya autofill
          </span>
          <span className="text-[9px] text-slate">Session secured</span>
        </div>
      </div>
    </div>
  );
}

function ThreadLinkScreen() {
  return (
    <div className="flex h-40 flex-col gap-1.5 rounded-2xl bg-gradient-to-br from-white via-sky-100 to-sky-200 p-4">
      <div className="rounded-lg bg-white/90 px-3 py-2 shadow-sm">
        <p className="font-mono text-[9px] uppercase tracking-wide text-signal-deep">
          Slack · #ops
        </p>
        <p className="text-[10px] text-ink">&quot;did we ever fix the checkout bug?&quot;</p>
      </div>
      <div className="ml-4 rounded-lg bg-white/90 px-3 py-2 shadow-sm">
        <p className="font-mono text-[9px] uppercase tracking-wide text-signal-deep">
          Jira · SPRINT-42
        </p>
        <p className="text-[10px] text-ink">Blocked — waiting on backend owner</p>
      </div>
      <div className="ml-8 rounded-lg border border-signal/30 bg-white px-3 py-2 shadow-sm">
        <p className="font-mono text-[9px] uppercase tracking-wide text-signal-deep">
          Linked by Kloyya
        </p>
        <p className="text-[10px] text-ink">Same thread, same blocker, one owner.</p>
      </div>
    </div>
  );
}

function DecisionScreen() {
  return (
    <div className="flex h-40 flex-col justify-center gap-2 rounded-2xl bg-gradient-to-br from-sky-200 via-white to-sky-100 p-4">
      <div className="rounded-lg border border-signal/30 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-medium text-ink">Sarah Chen's renewal</p>
          <span className="rounded-full bg-signal/10 px-2 py-0.5 text-[9px] font-medium text-signal-deep">
            Needs you
          </span>
        </div>
        <p className="mt-1 text-[10px] leading-relaxed text-slate">
          Lapses in 6 days. Draft reply ready — approve or edit.
        </p>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded-full bg-ink px-2.5 py-1 text-[9px] font-medium text-white">
            Approve
          </span>
          <span className="rounded-full border border-ink/15 px-2.5 py-1 text-[9px] text-ink">
            Edit
          </span>
        </div>
      </div>
    </div>
  );
}

const CAPABILITIES = [
  { title: "Reads everything, quietly", body: "Kloyya signs in and works across your inbox, chats, docs, and dashboards — no new tab to babysit.", Screen: SignInScreen },
  { title: "Connects the threads", body: "It links a Slack thread to the Jira ticket to the email that's actually blocking it, so you see the whole story.", Screen: ThreadLinkScreen },
  { title: "Hands you the decision", body: "Not a summary of everything — the one thing that needs you today, with the context already attached.", Screen: DecisionScreen },
];

export default function CapabilityGrid() {
  return (
    <section id="product-core" className="bg-white py-24 sm:py-28">
      <div className="shell text-center">
        <p className="eyebrow text-signal-deep">Unlimited capability</p>
        <h2 className="mt-3 font-display text-3xl font-normal tracking-tightest text-ink sm:text-4xl">
          Anything scattered across your tools,
          <br className="hidden sm:block" /> Kloyya brings to one place.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-slate">
          Unlike agents that need integrations built one by one, Kloyya reads
          your accounts directly — the way you already do.
        </p>

        <IntegrationLogos />
      </div>

      <div className="shell mt-14 grid gap-5 sm:grid-cols-3">
        {CAPABILITIES.map((c) => (
          <div key={c.title} className="text-left">
            <c.Screen />
            <h3 className="mt-5 text-base font-medium text-ink">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
