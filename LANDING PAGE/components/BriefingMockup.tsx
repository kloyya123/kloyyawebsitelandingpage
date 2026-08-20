import { Search } from "lucide-react";
import {
  GmailIcon,
  SlackIcon,
  WhatsAppIcon,
  NotionIcon,
  JiraIcon,
} from "./BrandIcons";

const CONNECTED = [
  { label: "Gmail", Icon: GmailIcon },
  { label: "Slack", Icon: SlackIcon },
  { label: "WhatsApp", Icon: WhatsAppIcon },
  { label: "Notion", Icon: NotionIcon },
  { label: "Jira", Icon: JiraIcon },
];

const CARDS = [
  {
    tag: "Slack · #ops",
    title: "Renewal at risk — Sarah Chen's account",
    detail: "Contract lapses in 6 days, CS thread has gone quiet since Tuesday.",
    from: "from-rose-100",
  },
  {
    tag: "Jira · SPRINT-42",
    title: "Blocker flagged on checkout migration",
    detail: "Backend owner is out; nobody has picked up the ticket in 2 days.",
    from: "from-amber-100",
  },
  {
    tag: "Gmail",
    title: "Investor update needs a number",
    detail: "Reply is drafted — waiting on Q3 churn figure from finance.",
    from: "from-sky-100",
  },
];

export default function BriefingMockup() {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lifted">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-ink/8 bg-paper-raised px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex h-6 flex-1 items-center gap-1.5 rounded-full bg-white px-3 text-[11px] text-slate">
          <Search className="h-3 w-3 text-slate" />
          app.kloyya.com/briefing
        </div>
      </div>

      {/* body */}
      <div className="grid gap-5 bg-sky-50/60 p-6 sm:grid-cols-[148px_1fr] sm:p-6">
        {/* connected tools panel */}
        <div className="hidden flex-col gap-3 sm:flex">
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate">
            Connected
          </p>
          <div className="flex flex-col gap-1.5">
            {CONNECTED.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 shadow-sm"
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="flex-1 truncate text-[11px] text-ink/80">
                  {label}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* ask bar */}
          <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-3 shadow-sm">
            <span className="text-sm text-slate">
              Ask Kloyya what needs my attention today…
            </span>
            <span className="ml-auto rounded-full bg-ink px-3 py-1 text-[11px] font-medium text-white">
              Ask
            </span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-ink">Today, prioritized</p>
            <span className="font-mono text-[11px] text-signal-deep">
              3 need you
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {CARDS.map((c) => (
              <div
                key={c.title}
                className="overflow-hidden rounded-xl border border-ink/8 bg-white text-left shadow-sm"
              >
                <div className={`h-12 bg-gradient-to-r ${c.from} to-white`} />
                <div className="p-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-signal-deep">
                    {c.tag}
                  </p>
                  <p className="mt-1.5 text-[13px] font-medium leading-snug text-ink">
                    {c.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate">
                    {c.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
