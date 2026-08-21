"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { finishIfHidden } from "@/lib/motion";
import WaitlistForm from "./WaitlistForm";
import BriefingMockup from "./BriefingMockup";

gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    // matchMedia owns the lifecycle. Nesting it inside a gsap.context() leaks —
    // the context does not adopt it, so StrictMode's double-mount would leave a
    // second live timeline fighting this one over the same elements.
    const mm = gsap.matchMedia(root);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".hero-badge", { opacity: 0, y: 10, duration: 0.5 })
        .from(".hero-line", { opacity: 0, y: 22, stagger: 0.09, duration: 0.7 }, "-=0.25")
        .from(".hero-copy", { opacity: 0, y: 14, duration: 0.6 }, "-=0.45")
        .from(".hero-form", { opacity: 0, y: 14, duration: 0.6 }, "-=0.4")
        .from(".hero-stage", { opacity: 0, y: 28, duration: 0.9 }, "-=0.7")
        .from(".hero-flag", { opacity: 0, y: -8, scale: 0.96, duration: 0.5 }, "-=0.35");

      // The hero is the page's primary content — never leave it staged at
      // opacity 0 because the tab happened to be in the background.
      finishIfHidden(intro);

      // The product shot drifts up a little as the page scrolls past it.
      gsap.to(".hero-stage", {
        y: -34,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="gsap-scene relative overflow-hidden pt-16 sm:pt-24"
    >
      {/* soft sky wash behind the hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-sky-100 via-sky-50 to-white" />

      {/* `min-w-0` on both tracks is load-bearing: grid items default to
          min-width:auto, so BriefingMockup's intrinsic min-content (~413px)
          would otherwise widen the single mobile column past the viewport and
          the section's overflow-hidden would silently clip the headline, copy
          and waitlist form rather than show a scrollbar. */}
      <div className="shell grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-10">
        {/* left — the pitch */}
        <div className="min-w-0">
          <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-signal/20 bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
              In active build · AI Chief of Staff
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] font-normal leading-[1.04] tracking-tightest text-ink sm:text-6xl">
            <span className="hero-line block">One brain,</span>
            <span className="hero-line block">
              every <span className="text-signal-deep">decision</span>.
            </span>
          </h1>

          <p className="hero-copy mt-6 max-w-md text-lg leading-relaxed text-slate">
            Kloyya reads across your inbox, chats, tasks, and CRM, connects the
            threads, and hands you the decision — not another notification.
          </p>

          <div id="waitlist" className="hero-form mt-9 w-full max-w-md scroll-mt-24">
            <WaitlistForm />
          </div>
        </div>

        {/* right — the product, with a floating decision card layered on top */}
        <div className="hero-stage relative min-w-0">
          <div className="hero-flag pointer-events-none absolute -right-2 -top-8 z-10 hidden w-64 rounded-xl border border-ink/8 bg-white p-3.5 text-left shadow-lifted sm:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-signal-deep">
              Slack · #ops
            </p>
            <p className="mt-1.5 text-[12px] font-medium leading-snug text-ink">
              Renewal at risk — Sarah Chen&apos;s account
            </p>
            <p className="mt-1 text-[11px] text-slate">
              Contract lapses in 6 days. Draft reply ready.
            </p>
          </div>

          <BriefingMockup />
        </div>
      </div>
    </section>
  );
}
