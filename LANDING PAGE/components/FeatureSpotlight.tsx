import { PIPELINE } from "@/lib/content";

export default function FeatureSpotlight() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow text-signal-deep">Memory that knows the work</p>
          <h2 className="mt-3 font-display text-3xl font-normal tracking-tightest text-ink sm:text-4xl">
            It remembers what you were
            <br className="hidden sm:block" /> already working on.
          </h2>
          <p className="mt-5 max-w-md text-slate">
            Kloyya turns your browsing and messaging history into memory, so
            you never repeat context. Nothing here is shared across accounts —
            it stays scoped to you.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {PIPELINE.map((p, i) => (
            <div
              key={p.state}
              className="rounded-xl border border-ink/8 bg-sky-50/60 p-5"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal font-mono text-[10px] text-white">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-ink">{p.state}</p>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-slate">
                {p.action}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
