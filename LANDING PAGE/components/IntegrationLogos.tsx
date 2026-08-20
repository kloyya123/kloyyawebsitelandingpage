import type { ComponentType, SVGProps } from "react";
import {
  GmailIcon,
  SlackIcon,
  WhatsAppIcon,
  LinkedInIcon,
  NotionIcon,
  JiraIcon,
  LinearIcon,
  SalesforceIcon,
  HubSpotIcon,
  OutlookIcon,
} from "./BrandIcons";

const TOOLS: { name: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { name: "Gmail", Icon: GmailIcon },
  { name: "Slack", Icon: SlackIcon },
  { name: "WhatsApp", Icon: WhatsAppIcon },
  { name: "LinkedIn", Icon: LinkedInIcon },
  { name: "Notion", Icon: NotionIcon },
  { name: "Jira", Icon: JiraIcon },
  { name: "Linear", Icon: LinearIcon },
  { name: "Salesforce", Icon: SalesforceIcon },
  { name: "HubSpot", Icon: HubSpotIcon },
  { name: "Outlook", Icon: OutlookIcon },
];

export default function IntegrationLogos() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-[scroll_28s_linear_infinite] items-center gap-10">
        {row.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="flex shrink-0 items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
          >
            <t.Icon className="h-6 w-6 shrink-0" />
            <span className="text-sm font-medium text-ink/70">{t.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
