import { INTEGRATION_GROUPS } from "@/lib/content";

export default function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-20 bg-ink py-20 text-paper sm:py-28">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow mb-4 text-slate-ink">Integration directory</p>
            <h2 className="font-display text-[2rem] leading-tight tracking-tightest text-paper sm:text-[2.6rem]">
              It binds to the data layer you already run on.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[12px] leading-relaxed text-slate-ink">
            Read through scoped OAuth you control. Revoke any source at any time.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper/12 bg-paper/12 md:grid-cols-3">
          {INTEGRATION_GROUPS.map((group) => (
            <div key={group.group} className="bg-ink-2 p-7">
              <h3 className="text-sm font-medium text-paper">{group.group}</h3>
              <p className="mt-1 font-mono text-[11px] text-slate-ink">
                {group.note}
              </p>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-paper/15 bg-ink-3 font-mono text-[11px] text-signal-soft">
                      {item.slice(0, 2)}
                    </span>
                    <span className="text-sm text-paper/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
