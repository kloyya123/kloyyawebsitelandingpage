import WaitlistForm from "./WaitlistForm";
import BriefingMockup from "./BriefingMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      {/* soft sky wash behind the hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-sky-100 via-sky-50 to-white" />

      <div className="shell grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
        {/* left — the pitch */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/20 bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
              In active build · AI Chief of Staff
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] font-normal leading-[1.06] tracking-tightest text-ink sm:text-6xl">
            One brain,
            <br />
            every <span className="text-signal-deep">decision</span>.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
            Kloyya reads across your inbox, chats, tasks, and CRM, connects
            the threads, and hands you the decision — not another
            notification.
          </p>

          <div id="waitlist" className="mt-9 w-full max-w-md scroll-mt-24">
            <WaitlistForm />
          </div>
        </div>

        {/* right — the product, with a floating decision card layered on top */}
        <div className="relative">
          <div className="pointer-events-none absolute -right-2 -top-8 z-10 hidden w-64 rounded-xl border border-ink/8 bg-white p-3.5 text-left shadow-lifted sm:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-signal-deep">
              Slack · #ops
            </p>
            <p className="mt-1.5 text-[12px] font-medium leading-snug text-ink">
              Renewal at risk — Sarah Chen&apos;s account
            </p>
            <p className="mt-1 text-[11px] text-slate">
              Contract lapses in 6 days. Draft reply ready.
            </p>
          </div>

          <BriefingMockup />
        </div>
      </div>
    </section>
  );
}
