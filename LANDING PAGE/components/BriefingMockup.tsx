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

const INBOX: {
  name: string;
  initial: string;
  subject: string;
  time: string;
  flagged?: boolean;
}[] = [
  { name: "Sarah Chen", initial: "S", subject: "Re: renewal terms — can we lock this in?", time: "6m", flagged: true },
  { name: "Christopher", initial: "C", subject: "Re: Q3 board deck — one more pass", time: "9m" },
  { name: "Whelman", initial: "W", subject: "Can you approve the vendor invoice?", time: "22m" },
  { name: "John", initial: "J", subject: "Client call moved to 4pm today", time: "41m" },
  { name: "Ram", initial: "R", subject: "Shared: updated pricing sheet", time: "1h" },
  { name: "Sahil", initial: "H", subject: "Design review — 2 things need your call", time: "2h" },
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
      <div className="grid gap-5 bg-sky-50/60 p-3.5 sm:grid-cols-[148px_minmax(0,1fr)] sm:p-6">
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

        <div className="flex min-w-0 flex-col gap-4">
          {/* ask bar */}
          <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2.5 shadow-sm sm:px-4 sm:py-3">
            <span className="min-w-0 flex-1 truncate text-[13px] text-slate sm:text-sm">
              Ask Kloyya what needs my attention today…
            </span>
            <span className="shrink-0 rounded-full bg-ink px-3 py-1 text-[11px] font-medium text-white">
              Ask
            </span>
          </div>

          {/* inbox */}
          <div className="mt-1 rounded-xl border border-ink/8 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-ink/8 px-4 py-2.5">
              <p className="text-sm font-medium text-ink">Inbox</p>
              <span className="font-mono text-[11px] text-slate">
                {INBOX.length} recent
              </span>
            </div>
            <div className="divide-y divide-ink/6">
              {INBOX.map((m) => (
                <div
                  key={m.name}
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-left sm:gap-3 sm:px-4 ${
                    m.flagged ? "bg-sky-50" : ""
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[11px] font-medium text-signal-deep">
                    {m.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12px] font-medium text-ink">
                      {m.name}
                    </p>
                    <p className="truncate text-[11px] text-slate">
                      {m.subject}
                    </p>
                  </div>
                  {m.flagged ? (
                    <span className="hidden shrink-0 rounded-full bg-signal/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-signal-deep min-[420px]:inline">
                      Needs you
                    </span>
                  ) : null}
                  <span className="shrink-0 font-mono text-[10px] text-slate">
                    {m.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
