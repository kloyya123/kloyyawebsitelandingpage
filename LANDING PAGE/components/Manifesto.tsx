export default function Manifesto() {
  return (
    <section id="why" className="scroll-mt-20 bg-ink py-24 text-paper sm:py-32">
      <div className="shell">
        <p className="eyebrow mb-8 text-slate-ink">Why we build this way</p>
        <blockquote className="max-w-4xl font-display text-[1.7rem] font-normal leading-[1.28] tracking-tight text-paper sm:text-[2.4rem] sm:leading-[1.24]">
          Kloyya doesn&apos;t just clean your inbox. It reads between the lines,
          prepares your follow-ups, queries your stack, and informs your
          strategy{" "}
          <span className="text-signal-soft">before you even ask.</span>
        </blockquote>
        <p className="mt-10 max-w-2xl font-mono text-[13px] leading-relaxed text-slate-ink">
          That&apos;s a promise we can only keep by building for reliability, not
          for a growth-hacked launch graph. No synthetic subscribers, no
          countdown theater, no scarcity you can&apos;t verify. Just the work,
          shown as it happens.
        </p>
      </div>
    </section>
  );
}
