import {
  GmailIcon,
  SlackIcon,
  WhatsAppIcon,
  LinkedInIcon,
  NotionIcon,
  OutlookIcon,
  JiraIcon,
  LinearIcon,
  SalesforceIcon,
  HubSpotIcon,
} from "./BrandIcons";

const FLOATERS = [
  { Icon: GmailIcon, glow: "rgba(66,133,244,0.35)", className: "right-[30%] top-2 h-14 w-14", delay: "0s" },
  { Icon: WhatsAppIcon, glow: "rgba(37,211,102,0.35)", className: "right-4 top-16 h-16 w-16", delay: "0.6s" },
  { Icon: SlackIcon, glow: "rgba(54,197,240,0.32)", className: "left-[34%] top-32 h-14 w-14", delay: "1.2s" },
  { Icon: LinkedInIcon, glow: "rgba(10,102,194,0.35)", className: "right-[6%] top-44 h-12 w-12", delay: "0.3s" },
  { Icon: OutlookIcon, glow: "rgba(15,108,214,0.32)", className: "right-[32%] top-60 h-16 w-16", delay: "0.9s" },
  { Icon: NotionIcon, glow: "rgba(15,23,42,0.22)", className: "left-[8%] top-6 h-12 w-12", delay: "1.5s" },
  { Icon: JiraIcon, glow: "rgba(0,82,204,0.32)", className: "left-[4%] top-52 h-14 w-14", delay: "0.4s" },
  { Icon: LinearIcon, glow: "rgba(94,106,210,0.32)", className: "left-[18%] top-72 h-12 w-12", delay: "1s" },
  { Icon: SalesforceIcon, glow: "rgba(0,161,224,0.32)", className: "right-[16%] top-2 h-12 w-12", delay: "0.7s" },
  { Icon: HubSpotIcon, glow: "rgba(255,122,89,0.32)", className: "left-[46%] top-4 h-12 w-12", delay: "1.3s" },
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
            Kloyya connects to Gmail, Outlook, Slack, WhatsApp, LinkedIn,
            Notion, Jira, Linear, Salesforce, and HubSpot — with more
            integrations shipping regularly.
          </p>
        </div>

        <div className="relative hidden h-96 lg:block">
          {FLOATERS.map(({ Icon, glow, className, delay }, i) => (
            <div
              key={i}
              className={`absolute animate-[float_6s_ease-in-out_infinite] rounded-2xl bg-white p-3 ring-1 ring-inset ring-ink/5 ${className}`}
              style={{ boxShadow: `0 0 44px ${glow}`, animationDelay: delay }}
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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
