"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Product Core", href: "/#product-core" },
  { label: "How it works", href: "/#integrations" },
  { label: "Build ledger", href: "/#ledger" },
  { label: "Security & FAQ", href: "/#faq" },
];

export default function Masthead() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The sheet covers the page — close it on Escape and keep the page from
  // scrolling underneath while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open
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

        <div className="flex items-center gap-2">
          <a
            href="https://kloyya.com"
            className="hidden text-sm text-slate transition-colors hover:text-ink sm:inline"
          >
            Login
          </a>
          <a
            href="/#waitlist"
            className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-xs font-medium text-paper transition-transform hover:-translate-y-px active:translate-y-0"
          >
            Request Access
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-1.5 flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-ink/10 bg-paper/95 backdrop-blur-md md:hidden"
        >
          <ul className="shell flex flex-col py-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/8 py-3.5 text-[15px] text-ink/85 transition-colors hover:text-signal-deep"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://kloyya.com"
                onClick={() => setOpen(false)}
                className="block py-3.5 text-[15px] text-ink/85 transition-colors hover:text-signal-deep"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
