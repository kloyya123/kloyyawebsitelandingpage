import type { ComponentType } from "react";
import { Mail, Slack, Linkedin, Trello, HardDrive } from "lucide-react";

type Tile =
  | { name: string; bg: string; fg: string; Icon: ComponentType<{ className?: string }> }
  | { name: string; bg: string; fg: string; letter: string };

const TILES: Tile[] = [
  { name: "Gmail", bg: "bg-red-50", fg: "text-red-500", Icon: Mail },
  { name: "Slack", bg: "bg-[#4A154B]/10", fg: "text-[#4A154B]", Icon: Slack },
  { name: "WhatsApp", bg: "bg-[#25D366]/15", fg: "text-[#128C7E]", letter: "W" },
  { name: "Notion", bg: "bg-ink/5", fg: "text-ink", letter: "N" },
  { name: "Jira", bg: "bg-[#0052CC]/10", fg: "text-[#0052CC]", letter: "J" },
  { name: "Linear", bg: "bg-signal/10", fg: "text-signal-deep", letter: "L" },
  { name: "Salesforce", bg: "bg-sky-100", fg: "text-sky-600", letter: "SF" },
  { name: "HubSpot", bg: "bg-orange-50", fg: "text-orange-500", letter: "H" },
  { name: "LinkedIn", bg: "bg-[#0A66C2]/10", fg: "text-[#0A66C2]", Icon: Linkedin },
  { name: "Trello", bg: "bg-[#0079BF]/10", fg: "text-[#0079BF]", Icon: Trello },
  { name: "Drive", bg: "bg-emerald-50", fg: "text-emerald-600", Icon: HardDrive },
];

export default function IntegrationLogos() {
  return (
    <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
      {TILES.map((t) => (
        <div
          key={t.name}
          title={t.name}
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${t.bg} ${t.fg} shadow-sm ring-1 ring-inset ring-ink/5`}
        >
          {"Icon" in t ? (
            <t.Icon className="h-5 w-5" />
          ) : (
            <span className="text-[13px] font-semibold">{t.letter}</span>
          )}
        </div>
      ))}
    </div>
  );
}
