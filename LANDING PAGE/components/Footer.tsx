import type { ComponentType } from "react";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";

type LinkItem = { label: string; href: string };

/** TikTok glyph — lucide has no TikTok icon, so we draw one at the same weight. */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3c.36 2.02 1.5 3.42 3.5 3.72v2.53c-1.24.12-2.34-.22-3.5-.86v5.9c0 3.9-2.9 6.21-6.03 5.66-3.6-.63-4.9-4.98-2.7-7.6 1.05-1.24 2.7-1.77 4.48-1.5v2.7c-.4-.12-.82-.16-1.24-.08-1.1.2-1.86 1.1-1.74 2.22.16 1.5 1.86 2.28 3.14 1.4.7-.48.86-1.22.86-2.02V3h3.23z" />
    </svg>
  );
}

const SOCIALS: { label: string; href: string; Icon: ComponentType<{ className?: string }> }[] = [
  { label: "YouTube", href: "https://youtube.com/@kloyyaai", Icon: Youtube },
  { label: "TikTok", href: "https://www.tiktok.com/@buildingkloyyaai", Icon: TikTokIcon },
  { label: "Instagram", href: "https://www.instagram.com/building_kloyyaai", Icon: Instagram },
];

const COLUMNS: { title: string; links: LinkItem[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Product Core", href: "/#product-core" },
      { label: "Integrations", href: "/#integrations" },
      { label: "Waitlist", href: "/#waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Manifesto", href: "/#why" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "mailto:hello@kloyya.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/#faq" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-paper py-14">
      <div className="shell">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="/#top" aria-label="Kloyya — home" className="text-ink">
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              The intelligence layer behind executive decisions. An autonomous
              AI Chief of Staff, in active build.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kloyya on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-ink/40 hover:bg-ink hover:text-paper"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-ink/80 transition-colors hover:text-signal-deep"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-ink/10 pt-6 font-mono text-[11px] text-slate sm:flex-row">
          <span>© {year} Kloyya. Built for reliability, not for a launch graph.</span>
          <span>Stop managing notifications. Start executing strategy.</span>
        </div>
      </div>
    </footer>
  );
}
