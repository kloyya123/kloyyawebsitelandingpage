"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Product Core", href: "/#product-core" },
  { label: "Integrations", href: "/#integrations" },
  { label: "Security Matrix", href: "/#faq" },
];

export default function Masthead() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/#top" aria-label="Kloyya — home" className="text-ink">
            <Logo />
          </a>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/#waitlist"
          className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-xs font-medium text-paper transition-transform hover:-translate-y-px active:translate-y-0"
        >
          Request Access
        </a>
      </div>
    </header>
  );
}
