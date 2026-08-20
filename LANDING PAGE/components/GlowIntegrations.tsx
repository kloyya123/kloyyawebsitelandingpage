import {
  GmailIcon,
  SlackIcon,
  WhatsAppIcon,
  LinkedInIcon,
  NotionIcon,
  OutlookIcon,
} from "./BrandIcons";

const FLOATERS = [
  { Icon: GmailIcon, glow: "rgba(66,133,244,0.35)", className: "right-[26%] top-6 h-14 w-14" },
  { Icon: WhatsAppIcon, glow: "rgba(37,211,102,0.35)", className: "right-6 top-24 h-16 w-16" },
  { Icon: SlackIcon, glow: "rgba(54,197,240,0.32)", className: "left-[30%] top-40 h-14 w-14" },
  { Icon: LinkedInIcon, glow: "rgba(10,102,194,0.35)", className: "right-[8%] top-56 h-12 w-12" },
  { Icon: OutlookIcon, glow: "rgba(15,108,214,0.32)", className: "right-[30%] top-72 h-16 w-16" },
];

export default function GlowIntegrations() {
  return (
    <section className="relative overflow-hidden bg-sky-50/60 py-24 sm:py-28">
      {/* faint grid texture, light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="shell relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-signal-deep">Integrations</p>
          <h2 className="mt-3 max-w-md font-display text-3xl font-normal leading-[1.1] tracking-tightest text-ink sm:text-4xl">
            All your emails and messages in{" "}
            <span className="text-signal-deep">one</span> briefing.
          </h2>
          <p className="mt-5 max-w-md text-slate">
            Kloyya connects to Gmail, Outlook, Slack, WhatsApp, and LinkedIn —
            with more integrations shipping regularly.
          </p>
        </div>

        <div className="relative hidden h-80 lg:block">
          {FLOATERS.map(({ Icon, glow, className }, i) => (
            <div
              key={i}
              className={`absolute rounded-2xl bg-white p-3 ring-1 ring-inset ring-ink/5 ${className}`}
              style={{ boxShadow: `0 0 44px ${glow}` }}
            >
              <Icon className="h-full w-full" />
            </div>
          ))}
        </div>

        {/* mobile: simple centered row, no absolute layout */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:hidden">
          {FLOATERS.map(({ Icon, glow }, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-3 ring-1 ring-inset ring-ink/5"
              style={{ boxShadow: `0 0 32px ${glow}` }}
            >
              <Icon className="h-10 w-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
