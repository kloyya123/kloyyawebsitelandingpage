"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntegrationLogos from "./IntegrationLogos";
import { finishIfHiddenOnEnter } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ------------------------------------------------------- miniature screens -- */
/* Each screen sits in the same 1:1.35 well, so the three cards read as one set
   rather than three unrelated illustrations. */

function SignInScreen() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="rounded-lg bg-white/95 p-3 shadow-sm ring-1 ring-ink/5">
        <p className="text-[11px] font-medium text-ink">Sign in to Salesforce</p>
        <div className="mt-2 h-6 rounded-md border border-ink/10 bg-paper-sunk px-2 text-[10px] leading-6 text-slate">
          rachel@kloyya.com
        </div>
        <div className="mt-1.5 h-6 rounded-md border border-ink/10 bg-paper-sunk px-2 text-[10px] leading-6 text-slate">
          ••••••••••
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <span className="rounded bg-signal px-2 py-1 text-[9px] font-medium text-white">
            Kloyya autofill
          </span>
          <span className="font-mono text-[9px] text-slate">Session secured</span>
        </div>
      </div>
    </div>
  );
}

function ThreadLinkScreen() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5">
      <div className="rounded-lg bg-white/95 px-3 py-2 shadow-sm ring-1 ring-ink/5">
        <p className="font-mono text-[9px] uppercase tracking-wide text-signal-deep">
          Slack · #ops
        </p>
        <p className="text-[10px] leading-snug text-ink">
          &quot;did we ever fix the checkout bug?&quot;
        </p>
      </div>
      <div className="ml-4 rounded-lg bg-white/95 px-3 py-2 shadow-sm ring-1 ring-ink/5">
        <p className="font-mono text-[9px] uppercase tracking-wide text-signal-deep">
          Jira · SPRINT-42
        </p>
        <p className="text-[10px] leading-snug text-ink">
          Blocked — waiting on backend owner
        </p>
      </div>
      <div className="ml-8 rounded-lg border border-signal/30 bg-white px-3 py-2 shadow-sm">
        <p className="font-mono text-[9px] uppercase tracking-wide text-signal-deep">
          Linked by Kloyya
        </p>
        <p className="text-[10px] leading-snug text-ink">
          Same thread, same blocker, one owner.
        </p>
      </div>
    </div>
  );
}

function DecisionScreen() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="rounded-lg border border-signal/30 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-medium text-ink">Sarah Chen&apos;s renewal</p>
          <span className="shrink-0 rounded-full bg-signal/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-signal-deep">
            Needs you
          </span>
        </div>
        <p className="mt-1.5 text-[10px] leading-relaxed text-slate">
          Lapses in 6 days. Draft reply ready — approve or edit.
        </p>
        <div className="mt-2.5 flex gap-1.5">
          <span className="rounded-full bg-ink px-2.5 py-1 text-[9px] font-medium text-white">
            Approve
          </span>
          <span className="rounded-full border border-ink/15 px-2.5 py-1 text-[9px] text-ink">
            Edit
          </span>
        </div>
      </div>
    </div>
  );
}

/* The three steps are a real sequence — read, then link, then decide — so the
   numbering encodes order that actually matters rather than decorating. */
const CAPABILITIES = [
  {
    step: "01",
    label: "Read",
    title: "Reads everything, quietly",
    body: "Kloyya signs in and works across your inbox, chats, docs, and dashboards — no new tab to babysit.",
    Screen: SignInScreen,
  },
  {
    step: "02",
    label: "Link",
    title: "Connects the threads",
    body: "It links a Slack thread to the Jira ticket to the email that's actually blocking it, so you see the whole story.",
    Screen: ThreadLinkScreen,
  },
  {
    step: "03",
    label: "Decide",
    title: "Hands you the decision",
    body: "Not a summary of everything — the one thing that needs you today, with the context already attached.",
    Screen: DecisionScreen,
  },
];

export default function CapabilityGrid() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia(root);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".capability-card", {
        opacity: 0,
        y: 26,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".capability-row",
          start: "top 80%",
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
      id="product-core"
      className="gsap-scene relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="shell text-center">
        <p className="eyebrow text-signal-deep">Unlimited capability</p>
        <h2 className="mt-3 font-display text-3xl font-normal tracking-tightest text-ink sm:text-4xl">
          Anything scattered across your tools,
          <br className="hidden sm:block" /> Kloyya brings to one place.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-slate">
          Unlike agents that need integrations built one by one, Kloyya reads
          your accounts directly — the way you already do.
        </p>

        <IntegrationLogos />
      </div>

      <div className="shell capability-row mt-14 grid gap-5 md:grid-cols-3">
        {CAPABILITIES.map((c) => (
          <article
            key={c.step}
            className="capability-card group flex min-w-0 flex-col rounded-2xl border border-ink/8 bg-white p-3 shadow-folio transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lifted"
          >
            {/* the well — identical height across all three so the row aligns */}
            <div className="h-52 rounded-xl bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200/70 p-4 ring-1 ring-inset ring-ink/5">
              <c.Screen />
            </div>

            <div className="flex flex-1 flex-col px-3 pb-3 pt-5 text-left">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] font-medium text-signal-deep">
                  {c.step}
                </span>
                <span className="h-px flex-1 bg-ink/10" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate">
                  {c.label}
                </span>
              </div>
              <h3 className="mt-3 text-base font-medium text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{c.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
