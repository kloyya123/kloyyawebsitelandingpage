import { SPRINT_LEDGER } from "@/lib/content";
import WaitlistForm from "./WaitlistForm";

const STATUS_STYLE: Record<string, string> = {
  Completed: "border-emerald-600/30 bg-emerald-600/10 text-emerald-800",
  "Active sprint": "border-signal/40 bg-signal/10 text-signal-deep",
  "In QA isolation": "border-ink/20 bg-ink/5 text-slate",
};

export default function SprintLedger() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* The argument */}
          <div>
            <p className="eyebrow mb-4">The waitlist, honestly</p>
            <h2 className="font-display text-[2rem] leading-tight tracking-tightest text-ink sm:text-[2.6rem]">
              No counter. A ledger instead.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              A number invented to manufacture urgency tells you nothing true.
              So here&apos;s what we&apos;re actually building — shipped, in QA,
              and in progress right now.
            </p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
          </div>

          {/* The ledger */}
          <div className="overflow-hidden rounded-2xl border border-ink/12 bg-paper-raised">
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-3.5">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate">
                Development sprint ledger
              </span>
              <span className="font-mono text-[11px] text-slate">
                live · v1
              </span>
            </div>
            <ul>
              {SPRINT_LEDGER.map((row, i) => (
                <li
                  key={row.module}
                  className={`grid grid-cols-1 gap-3 px-6 py-5 sm:grid-cols-[1fr_auto] sm:items-center ${
                    i > 0 ? "border-t border-ink/8" : ""
                  }`}
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{row.module}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">
                      {row.target}
                    </p>
                  </div>
                  <span
                    className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] ${STATUS_STYLE[row.status]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
