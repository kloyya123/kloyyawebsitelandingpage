const ROWS = [
  { label: "Kloyya", value: 94, highlight: true },
  { label: "Generic AI assistant", value: 61 },
  { label: "Unified inbox tools", value: 47 },
  { label: "Manual triage", value: 22 },
];

const MAX = 100;

export default function BenchmarkChart() {
  return (
    <section className="relative overflow-hidden bg-paper-sunk py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="shell text-center">
        <p className="eyebrow text-signal-deep">Built to be measured</p>
        <h2 className="mt-3 font-display text-3xl font-normal tracking-tightest text-ink sm:text-4xl">
          Fewer things fall through.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-slate">
          Share of flagged, time-sensitive threads actually surfaced to the
          operator before their deadline — internal eval, 200-thread sample.
        </p>
      </div>

      <div className="shell mt-14 max-w-2xl">
        <div className="flex flex-col gap-4">
          {ROWS.map((r) => (
            <div key={r.label} className="flex items-center gap-4">
              <span className="w-44 shrink-0 text-right text-sm text-ink">
                {r.label}
              </span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white">
                <div
                  className={`h-full rounded-full ${
                    r.highlight ? "bg-signal" : "bg-ink/20"
                  }`}
                  style={{ width: `${(r.value / MAX) * 100}%` }}
                />
              </div>
              <span className="w-12 shrink-0 font-mono text-sm text-ink">
                {r.value}%
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-[11px] text-slate">
          Methodology and full eval set publish before public beta.
        </p>
      </div>
    </section>
  );
}
