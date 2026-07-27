import WaitlistForm from "./WaitlistForm";
import BriefingMockup from "./BriefingMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      {/* soft sky wash behind the hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-sky-100 via-sky-50 to-white" />

      <div className="shell flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/20 bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
            In active build · AI Chief of Staff
          </span>
        </div>

        <h1 className="max-w-3xl font-display text-[2.6rem] font-normal leading-[1.06] tracking-tightest text-ink sm:text-6xl">
          The intelligence behind
          <br />
          every <span className="text-signal-deep">decision</span> you make.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
          Kloyya reads across your inbox, chats, tasks, and CRM, connects the
          threads, and hands you the decision — not another notification.
        </p>

        <div id="waitlist" className="mt-9 flex w-full max-w-md scroll-mt-24 flex-col items-center">
          <WaitlistForm />
        </div>

        <div className="mt-16 w-full sm:mt-20">
          <BriefingMockup />
        </div>
      </div>
    </section>
  );
}
