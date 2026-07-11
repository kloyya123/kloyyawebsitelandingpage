import ReasoningThread from "./ReasoningThread";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="shell grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        {/* Left — the thesis */}
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/12 bg-paper-raised px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
              In active build · AI Chief of Staff
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] font-normal leading-[1.04] tracking-tightest text-ink sm:text-6xl">
            The intelligence
            <br />
            behind every
            <br />
            <span className="italic text-signal-deep">decision</span> you make.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate">
            Kloyya aggregates cross-application operational telemetry to act as
            your autonomous AI Chief of Staff. Stop managing notifications. Start
            executing strategy.
          </p>

          <div id="waitlist" className="mt-9 scroll-mt-24">
            <WaitlistForm />
            <p className="mt-3 font-mono text-[11px] text-slate">
              No fake counters. No spam. A private beta key when your cohort opens.
            </p>
          </div>
        </div>

        {/* Right — the signature */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_60%_30%,rgba(200,128,31,0.10),transparent_60%)]" />
          <ReasoningThread />
        </div>
      </div>

      <div className="h-px w-full bg-ink/10" />
    </section>
  );
}
