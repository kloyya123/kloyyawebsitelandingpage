import { PIPELINE } from "@/lib/content";

export default function Pipeline() {
  return (
    <section id="product-core" className="scroll-mt-20 py-20 sm:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Under the hood</p>
          <h2 className="font-display text-[2rem] leading-tight tracking-tightest text-ink sm:text-[2.6rem]">
            Process over triage.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            While the platform is in active build, here&apos;s exactly what
            Kloyya does with a signal once it arrives — an ordered pipeline, not
            a tidier inbox.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/12 bg-ink/12 md:grid-cols-3">
          {PIPELINE.map((step, i) => (
            <li
              key={step.state}
              className="flex flex-col bg-paper-raised p-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-signal-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-ink/12" />
              </div>
              <h3 className="mt-5 font-display text-xl leading-snug tracking-tight text-ink">
                {step.state}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                {step.action}
              </p>
              <p className="mt-5 border-t border-ink/10 pt-4 text-sm leading-relaxed text-ink">
                {step.benefit}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
