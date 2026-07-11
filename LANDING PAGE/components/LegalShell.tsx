import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Masthead from "./Masthead";
import Footer from "./Footer";

export default function LegalShell({
  kicker,
  title,
  updated,
  children,
}: {
  kicker: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper">
      <Masthead />
      <main className="shell max-w-3xl py-16 sm:py-24">
        <Link
          href="/#top"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to home
        </Link>

        <p className="eyebrow mt-10 mb-4">{kicker}</p>
        <h1 className="font-display text-[2.4rem] leading-tight tracking-tightest text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 font-mono text-[12px] text-slate">
          Effective {updated}
        </p>

        <hr className="my-10 border-ink/10" />

        <div className="legal">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
