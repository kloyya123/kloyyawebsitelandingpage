"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { curve, bezierLength, pathLenOf } from "@/lib/svg-path";
import WaitlistForm from "./WaitlistForm";

gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ------------------------------------------------------------------ scene -- */

const VW = 1440;
const VH = 900;
/** Everything funnels here — directly behind the headline. */
const FOCUS = { x: VW / 2, y: VH / 2 };

/** Same hues as the connectors in the flow section, so the payoff reads as the
    same signals arriving — there they converged on the agent, here on you. */
const RAINBOW = [
  "#FF6B6B",
  "#FFAE3B",
  "#2FD48A",
  "#3EC9F5",
  "#7C83FF",
  "#E070FF",
];

type Strand = { d: string; len: number; color: string; delay: number };

/** Strands sweep in from both edges and converge on the focus point. */
const STRANDS: Strand[] = (() => {
  const out: Strand[] = [];
  const rows = 7;
  for (let i = 0; i < rows; i++) {
    const t = i / (rows - 1);
    const edgeY = 40 + t * (VH - 80);
    // a small vertical spread at the focus keeps it a funnel, not a starburst
    const focusY = FOCUS.y - 46 + t * 92;

    out.push({
      d: curve(-120, edgeY, FOCUS.x - 40, focusY),
      len: bezierLength(-120, edgeY, FOCUS.x - 40, focusY),
      color: RAINBOW[i % RAINBOW.length],
      delay: i * 0.16,
    });
    out.push({
      d: curve(VW + 120, edgeY, FOCUS.x + 40, focusY),
      len: bezierLength(VW + 120, edgeY, FOCUS.x + 40, focusY),
      color: RAINBOW[(i + 3) % RAINBOW.length],
      delay: 0.08 + i * 0.16,
    });
  }
  return out;
})();

const BUBBLE_HALO = 34;
const BUBBLE_CORE = 13;

/* ------------------------------------------------------------- component -- */

export default function CtaBand() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia(root);

    // The bubble stream runs on every screen size — it is ambient, not a
    // scroll behaviour.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(".cta-strand", { strokeDashoffset: pathLenOf });
      gsap.set(".cta-bubble", {
        strokeDashoffset: (i, t) => pathLenOf(i, t) * 0.04,
      });

      gsap.to(".cta-strand", {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });

      // Bubbles stream inward forever, each on its own offset.
      STRANDS.forEach((s, i) => {
        gsap.to(`.cta-bubble-${i}`, {
          strokeDashoffset: (idx, t) => -pathLenOf(idx, t),
          duration: 3.1,
          ease: "none",
          repeat: -1,
          delay: s.delay,
        });
      });

      gsap.to(".cta-core", {
        scale: 1.16,
        opacity: 0.85,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center",
      });
    });

    // Only desktop gets the full-screen hold — pinning a form on a phone is
    // hostile, and reduced-motion users should never have scroll taken over.
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "+=650",
              pin: true,
              // Direct scroll mapping, no rAF smoothing needed.
              scrub: true,
              anticipatePin: 1,
            },
          })
          // As you push through the hold, the field tightens and brightens,
          // then hands you off to the footer.
          .to(".cta-field", { scale: 1.08, opacity: 1, ease: "none" }, 0)
          .to(".cta-copy", { y: -18, ease: "none" }, 0);
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      className="gsap-scene relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-signal via-signal-deep to-ink py-24 sm:py-28"
    >
      {/* converging signal field */}
      <div className="cta-field pointer-events-none absolute inset-0 opacity-90">
        <svg
          aria-hidden
          className="h-full w-full"
          viewBox={`0 0 ${VW} ${VH}`}
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Masked so strands and bubbles dissolve as they reach the middle:
              they read as being absorbed at the focus, and nothing competes
              with the headline sitting on top of it. */}
          <g mask="url(#ctaFade)">
            {STRANDS.map((s, i) => (
              <g key={i}>
              <path
                d={s.d}
                data-len={s.len}
                className="cta-strand"
                stroke="#ffffff"
                strokeOpacity={0.16}
                strokeWidth={1.25}
                strokeDasharray={`${s.len} ${s.len}`}
              />
              {/* halo + core share one offset so they read as one glowing bubble */}
              <path
                d={s.d}
                data-len={s.len}
                className={`cta-bubble cta-bubble-${i}`}
                stroke={s.color}
                strokeOpacity={0.3}
                strokeWidth={18}
                strokeLinecap="round"
                strokeDasharray={`${BUBBLE_HALO} ${Math.max(s.len - BUBBLE_HALO, 1)}`}
              />
              <path
                d={s.d}
                data-len={s.len}
                className={`cta-bubble cta-bubble-${i}`}
                stroke={s.color}
                strokeWidth={6.5}
                strokeLinecap="round"
                strokeDasharray={`${BUBBLE_CORE} ${Math.max(s.len - BUBBLE_CORE, 1)}`}
              />
              </g>
            ))}
          </g>
          {/* the point everything arrives at */}
          <circle
            className="cta-core"
            cx={FOCUS.x}
            cy={FOCUS.y}
            r={130}
            fill="url(#ctaCore)"
            opacity={0.6}
          />
          <defs>
            <radialGradient id="ctaFadeGrad">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="55%" stopColor="#000000" />
              <stop offset="100%" stopColor="#ffffff" />
            </radialGradient>
            <mask id="ctaFade">
              <rect width={VW} height={VH} fill="#ffffff" />
              <circle cx={FOCUS.x} cy={FOCUS.y} r={300} fill="url(#ctaFadeGrad)" />
            </mask>
            <radialGradient id="ctaCore">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="shell relative flex w-full flex-col items-center text-center">
        <div className="cta-copy flex flex-col items-center">
          <h2 className="max-w-2xl font-display text-3xl font-normal tracking-tightest text-white drop-shadow-[0_2px_20px_rgba(11,18,32,0.35)] sm:text-5xl">
            Built for the work you actually have to do.
          </h2>
          <p className="mt-5 max-w-md text-white/85">
            Join the waitlist and get a private beta key when your cohort opens.
          </p>
        </div>
        <div className="mt-9 w-full max-w-md">
          <WaitlistForm variant="dark" />
        </div>
      </div>
    </section>
  );
}
