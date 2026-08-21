"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SPRINT_LEDGER } from "@/lib/content";
import { finishIfHiddenOnEnter } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * What we hold ourselves to. Definitions, not scores — the numbers publish with
 * the methodology once the eval set is large enough to mean anything.
 */
const MEASURES = [
  {
    name: "Surfaced before deadline",
    definition:
      "Share of time-sensitive threads flagged to you before the deadline they carry.",
    state: "Instrumented",
  },
  {
    name: "Thread linkage precision",
    definition:
      "Cross-app threads correctly joined, against every join the agent proposed.",
    state: "Eval in progress",
  },
  {
    name: "Time to first briefing",
    definition:
      "Minutes from connecting the first account to a ranked briefing you can act on.",
    state: "Instrumented",
  },
] as const;

const STATUS_DOT: Record<(typeof SPRINT_LEDGER)[number]["status"], string> = {
  Completed: "bg-emerald-500",
  "Active sprint": "bg-signal",
  "In QA isolation": "bg-amber-500",
};

export default function AnalysisLedger() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    // matchMedia owns the lifecycle — see the note in Hero.tsx.
    const mm = gsap.matchMedia(root);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".measure-tile", {
          opacity: 0,
          y: 18,
          stagger: 0.09,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            once: true,
            onEnter: finishIfHiddenOnEnter,
          },
        });
        gsap.from(".ledger-row", {
          opacity: 0,
          y: 12,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".ledger-list",
            start: "top 82%",
            once: true,
            onEnter: finishIfHiddenOnEnter,
          },
        });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      id="ledger"
      className="gsap-scene relative scroll-mt-20 overflow-hidden bg-paper-sunk py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl"
      />

      <div className="shell text-center">
        <p className="eyebrow text-signal-deep">Built to be measured</p>
        <h2 className="mt-3 font-display text-3xl font-normal tracking-tightest text-ink sm:text-4xl">
          Measured before it&apos;s marketed.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-slate">
          We are not going to publish a score we cannot show you the working for.
          Here is exactly what gets measured, and exactly where the build is
          today.
        </p>
      </div>

      {/* what we measure */}
      <div className="shell mt-14 grid gap-4 sm:grid-cols-3">
        {MEASURES.map((m) => (
          <div
            key={m.name}
            className="measure-tile flex flex-col rounded-2xl border border-ink/8 bg-white p-6 shadow-folio"
          >
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-paper-sunk px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate">
              {m.state}
            </span>
            <h3 className="mt-5 text-base font-medium leading-snug text-ink">
              {m.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              {m.definition}
            </p>
          </div>
        ))}
      </div>

      {/* the real build ledger */}
      <div className="shell mt-12 max-w-3xl">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow">Development ledger</p>
          <p className="font-mono text-[11px] text-slate">
            updated as the build moves
          </p>
        </div>

        <ul className="ledger-list mt-5 divide-y divide-ink/10 border-y border-ink/10">
          {SPRINT_LEDGER.map((row) => (
            <li
              key={row.module}
              className="ledger-row flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="flex shrink-0 items-center gap-2 sm:w-44">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${STATUS_DOT[row.status]}`}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                  {row.status}
                </span>
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-medium text-ink">
                  {row.module}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-slate">
                  {row.target}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center font-mono text-[11px] leading-relaxed text-slate">
          When the eval set is big enough to mean something, the numbers and the
          methodology publish together.
        </p>
      </div>
    </section>
  );
}
