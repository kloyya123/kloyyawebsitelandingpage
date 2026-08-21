"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight, RotateCcw } from "lucide-react";
import { INTEGRATION_GROUPS } from "@/lib/content";
import { curve, bezierLength, pathLenOf } from "@/lib/svg-path";
import { finishIfHiddenOnEnter } from "@/lib/motion";
import { LogoMark } from "./Logo";
import {
  GmailIcon,
  SlackIcon,
  WhatsAppIcon,
  NotionIcon,
  GoogleDriveIcon,
  HubSpotIcon,
} from "./BrandIcons";

gsap.registerPlugin(ScrollTrigger);

/** useLayoutEffect warns during SSR; fall back to useEffect on the server. */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ------------------------------------------------------------------ data -- */

/**
 * Connectors carry the directory group they belong to, but the full group name
 * ("Communication hubs") does not fit the chip and truncated to
 * "COMMUNICATION H…". These are the compact forms; the directory in
 * lib/content.ts stays the source of truth for which group a tool is in.
 */
const GROUP_SHORT: Record<string, string> = {
  "Communication hubs": "Comms",
  "Knowledge & tasks": "Docs & tasks",
  "Operations & financials": "Ops",
};

function groupOf(item: string) {
  const group = INTEGRATION_GROUPS.find((g) => g.items.includes(item))?.group;
  return group ? (GROUP_SHORT[group] ?? group) : "Connected";
}

const SOURCES = [
  { id: "gmail", item: "Gmail", label: "Gmail", Icon: GmailIcon },
  { id: "slack", item: "Slack", label: "Slack", Icon: SlackIcon },
  { id: "whatsapp", item: "WhatsApp Business", label: "WhatsApp", Icon: WhatsAppIcon },
  { id: "notion", item: "Notion", label: "Notion", Icon: NotionIcon },
  { id: "drive", item: "Google Drive", label: "Drive", Icon: GoogleDriveIcon },
  { id: "hubspot", item: "HubSpot", label: "HubSpot CRM", Icon: HubSpotIcon },
] as const;

const PROCESSORS = [
  { key: "ingest", label: "Ingest", note: "Scoped OAuth reads, webhooked" },
  { key: "resolve", label: "Resolve", note: "People and threads deduped" },
  { key: "link", label: "Link", note: "Cross-app thread graph" },
  { key: "rank", label: "Rank", note: "Urgency, ownership, deadline" },
] as const;

/** source index -> processor index. One connector feeds several components. */
const LINKS: readonly (readonly [number, number])[] = [
  [0, 0], [0, 1], [0, 2],
  [1, 0], [1, 2], [1, 3],
  [2, 0], [2, 1],
  [3, 0], [3, 1], [3, 2],
  [4, 0], [4, 1],
  [5, 0], [5, 2], [5, 3],
];

const OUTPUTS = [
  { label: "Morning briefing", note: "ranked, not chronological" },
  { label: "Drafted reply", note: "your voice, held for approval" },
  { label: "Escalation flag", note: "when a deadline will slip" },
] as const;

/** The one run the demo walks through. Each row cites the connector it came from. */
const TRACE = [
  { t: "0.4s", src: "gmail", text: "Read 6 prior threads with Sarah Chen" },
  { t: "0.9s", src: "slack", text: "#ops: “renewal still open?” — unanswered 2 days" },
  { t: "1.4s", src: "hubspot", text: "Deal 4471 · closes in 6 days · owner unassigned" },
  { t: "1.9s", src: "drive", text: "MSA_v3.pdf — auto-renew needs 5 days’ notice" },
  { t: "2.3s", src: "notion", text: "Account plan names Sarah sole decision-maker" },
  { t: "2.8s", src: "whatsapp", text: "Last contact 11 days ago, quiet since pricing" },
  { t: "3.2s", src: null, text: "Linked 6 signals into one thread · ranked 1 of 41" },
  { t: "3.6s", src: null, text: "Drafted the reply in your voice — held for approval" },
] as const;

const TOOL_CALLS = [
  { call: "gmail.threads.search", ms: 120, src: "gmail" },
  { call: "slack.conversations.history", ms: 210, src: "slack" },
  { call: "drive.files.get", ms: 340, src: "drive" },
  { call: "hubspot.deals.read", ms: 180, src: "hubspot" },
  { call: "notion.pages.query", ms: 260, src: "notion" },
  { call: "kloyya.memory.recall", ms: 40, src: null },
] as const;

/* -------------------------------------------------------------- geometry -- */

const W = 1400;
const H = 470;

const SOURCE_W = 230;
const SOURCE_X = SOURCE_W + 2; // where a source's edges leave the chip
const SOURCE_Y = [46, 122, 198, 274, 350, 426];
const PROC_L = 500;
const PROC_R = 720;
const PROC_W = PROC_R - PROC_L;
const PROC_Y = [88, 184, 280, 376];
const AGENT = { x: 960, y: 232, r: 86 };
const OUT_W = 230;
const OUT_X = 1170; // left edge of an output chip
const OUT_Y = [132, 232, 332];

/** One hue per connector, so a bubble is traceable back to where it came from. */
const RAINBOW: Record<string, string> = {
  gmail: "#FF6B6B",
  slack: "#FFAE3B",
  whatsapp: "#2FD48A",
  notion: "#3EC9F5",
  drive: "#7C83FF",
  hubspot: "#E070FF",
};
const RAINBOW_CYCLE = Object.values(RAINBOW);

/**
 * Each node sits in a fixed-height band centred on its Y and is centred inside
 * that band with flexbox. Hard-coding `top: Y - height/2` drifts whenever a
 * label wraps to a different number of lines, leaving the edges off-centre; and
 * a translateY(-50%) would be stripped by the reduced-motion rule in globals.css.
 */
const SOURCE_BAND = 56;
const PROC_BAND = 80;
const OUT_BAND = 60;

/** Real pixel dash length of each bubble layer — see bezierLength() above. */
const PACKET_HALO = 30;
const PACKET_CORE = 12;

type Edge = {
  d: string;
  len: number;
  tier: "a" | "b" | "c";
  src: string | null;
  proc: number | null;
  color: string;
};

function edge(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  rest: Omit<Edge, "d" | "len">
): Edge {
  return { d: curve(x1, y1, x2, y2), len: bezierLength(x1, y1, x2, y2), ...rest };
}

const EDGES: Edge[] = [
  ...LINKS.map(([s, p]) =>
    edge(SOURCE_X, SOURCE_Y[s], PROC_L - 2, PROC_Y[p], {
      tier: "a",
      src: SOURCES[s].id,
      proc: p,
      color: RAINBOW[SOURCES[s].id],
    })
  ),
  ...PROC_Y.map((y, p) =>
    edge(PROC_R + 2, y, AGENT.x - AGENT.r - 4, AGENT.y, {
      tier: "b",
      src: null,
      proc: p,
      color: RAINBOW_CYCLE[p % RAINBOW_CYCLE.length],
    })
  ),
  ...OUT_Y.map((y, i) =>
    edge(AGENT.x + AGENT.r + 4, AGENT.y, OUT_X - 2, y, {
      tier: "c",
      src: null,
      proc: null,
      color: RAINBOW_CYCLE[(i + 3) % RAINBOW_CYCLE.length],
    })
  ),
];

const STRAND_COUNT = EDGES.filter((e) => e.tier === "a").length;

/** Processors reachable from a given connector — drives the isolation view. */
function procsOf(sourceId: string) {
  return new Set(
    LINKS.filter(([s]) => SOURCES[s].id === sourceId).map(([, p]) => p)
  );
}

/* ------------------------------------------------------------- component -- */

export default function AgentFlow() {
  const pin = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const intro = useRef<gsap.core.Timeline | null>(null);
  const [scale, setScale] = useState(1);
  const [active, setActive] = useState<string | null>(null);

  const lit = active ? procsOf(active) : null;

  /* Fit the fixed-geometry stage to the width it is given AND to the height the
     pinned viewport can spare, so heading and caption always stay on screen. */
  const fit = useCallback(() => {
    const el = stage.current;
    if (!el) return;
    // Below `lg` the stage is display:none and measures 0 — keep the last good
    // scale rather than collapsing the diagram to scale(0).
    if (el.clientWidth === 0) return;
    // Width only. The height cap existed to squeeze the diagram into a pinned
    // viewport; without the pin it just left the stage narrower than its
    // container, which is the dead space on the right of the graph.
    setScale(Math.min(1, el.clientWidth / W));
  }, []);

  useEffect(() => {
    fit();
    const el = stage.current;
    const ro = el ? new ResizeObserver(fit) : null;
    ro?.observe(el as Element);
    window.addEventListener("resize", fit);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [fit]);

  // Re-measure the pin once the stage has settled at its final size.
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [scale]);

  useIsoLayoutEffect(() => {
    const el = pin.current;
    if (!el) return;

    // matchMedia is the single lifecycle owner here. Creating it inside a
    // gsap.context() leaks: the context does not adopt it, so React's
    // StrictMode double-mount left two live timelines fighting over the same
    // elements and stranded some of them at opacity 0.
    const mm = gsap.matchMedia(pin);

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const counter = { v: 0 };
        // Dash offsets are function values so each path's OWN real length
        // (embedded as data-len — see bezierLength() above) drives its own
        // animation instead of one shared number that only made sense for a
        // pathLength-normalized fraction.
        const pathLen = pathLenOf;
        gsap.set(".flow-edge", { strokeDashoffset: pathLen });
        gsap.set(".flow-agent-glow", { opacity: 0 });
        // Park the bubbles off the far end of their path until the loop starts.
        gsap.set(".flow-packet", { strokeDashoffset: (i, t) => -pathLen(i, t) });

        /** Bubbles cascade source -> component -> agent -> output, forever. */
        const loop = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
        loop
          .fromTo(
            ".flow-packet-a",
            { strokeDashoffset: (i, t) => 0.04 * pathLen(i, t) },
            {
              strokeDashoffset: (i, t) => -pathLen(i, t),
              duration: 1.5,
              stagger: { each: 0.07, from: "random" },
            },
            0
          )
          .fromTo(
            ".flow-packet-b",
            { strokeDashoffset: (i, t) => 0.04 * pathLen(i, t) },
            { strokeDashoffset: (i, t) => -pathLen(i, t), duration: 1.1, stagger: 0.09 },
            1.05
          )
          .fromTo(
            ".flow-packet-c",
            { strokeDashoffset: (i, t) => 0.04 * pathLen(i, t) },
            { strokeDashoffset: (i, t) => -pathLen(i, t), duration: 1, stagger: 0.11 },
            1.95
          )
          .to({}, { duration: 0.7 });
        loop.pause();

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          // Autoplay: the run starts on its own the first time the section is
          // on screen. No pin, no scrub — the scroll wheel is never taken over.
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            once: true,
            onEnter: finishIfHiddenOnEnter,
          },
          onComplete: () => loop.play(0),
        });

        tl.from(".flow-source", { opacity: 0, x: -24, stagger: 0.09, duration: 0.5 })
          .to(".flow-edge-a", { strokeDashoffset: 0, stagger: 0.035, duration: 0.7 }, "-=0.15")
          .from(".flow-node", { opacity: 0, y: 18, stagger: 0.1, duration: 0.5 }, "-=0.35")
          .to(".flow-edge-b", { strokeDashoffset: 0, stagger: 0.06, duration: 0.6 }, "-=0.2")
          .from(
            ".flow-agent",
            { opacity: 0, scale: 0.55, duration: 0.75, ease: "back.out(1.7)" },
            "-=0.35"
          )
          .to(".flow-agent-glow", { opacity: 1, duration: 0.6 }, "<")
          .to(
            counter,
            {
              v: STRAND_COUNT,
              duration: 0.9,
              ease: "none",
              onUpdate: () => {
                if (count.current) {
                  count.current.textContent = String(Math.round(counter.v));
                }
              },
            },
            "<"
          )
          .to(".flow-edge-c", { strokeDashoffset: 0, stagger: 0.07, duration: 0.5 }, "-=0.3")
          .from(".flow-out", { opacity: 0, x: 18, stagger: 0.1, duration: 0.5 }, "-=0.35");

        intro.current = tl;

        return () => {
          loop.kill();
          intro.current = null;
          if (count.current) count.current.textContent = String(STRAND_COUNT);
        };
      }
    );

    return () => mm.revert();
  }, []);

  /** Replay the whole run from the top; the bubble loop restarts with it. */
  const rerun = () => {
    const tl = intro.current;
    if (!tl) return;
    gsap.set(".flow-packet", { strokeDashoffset: -1 });
    tl.restart();
  };

  const edgeOpacity = (e: Edge) => {
    if (!lit) return "opacity-100";
    if (e.tier === "a") return e.src === active ? "opacity-100" : "opacity-[0.12]";
    if (e.tier === "b") return lit.has(e.proc as number) ? "opacity-100" : "opacity-[0.12]";
    return "opacity-100";
  };

  const activeLabel = SOURCES.find((s) => s.id === active)?.label;

  return (
    <section id="integrations" className="gsap-scene relative bg-flow-canvas">
      {/* ------------------------------------------- pinned: the run itself -- */}
      <div
        ref={pin}
        className="relative flex flex-col justify-center overflow-hidden py-20 sm:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(111,160,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,160,255,0.055) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(120% 80% at 50% 45%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(120% 80% at 50% 45%, #000 30%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[120px]"
        />

        <div className="shell relative">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <div className="max-w-lg">
              <p className="eyebrow text-signal-soft">Demo run · sample data</p>
              <h2 className="mt-3 font-display text-3xl font-normal leading-[1.08] tracking-tightest text-flow-bright sm:text-[2.5rem]">
                Watch one decision get made.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-[15px] leading-relaxed text-flow-text">
                Connect your accounts and every signal splits into the components
                that read it. They converge on one agent — and this is what that
                agent does before it hands anything back to you.
              </p>
              <button
                type="button"
                onClick={rerun}
                className="mt-5 hidden h-10 items-center gap-2 rounded-full border border-flow-line bg-flow-raised px-4 text-xs font-medium text-flow-bright transition-colors hover:border-signal/60 hover:text-white lg:inline-flex"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Rerun the flow
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------- diagram (desktop) -- */}
        <div className="relative mx-auto mt-10 hidden w-full max-w-[1400px] px-6 sm:px-8 lg:block">
          <div
            ref={stage}
            className="flex justify-center overflow-hidden"
            style={{ height: H * scale }}
          >
            <div
              className="relative shrink-0"
              style={{
                width: W,
                height: H,
                transform: `scale(${scale})`,
                transformOrigin: "top center",
              }}
            >
              {/* edges */}
              <svg
                aria-hidden
                className="absolute inset-0"
                width={W}
                height={H}
                viewBox={`0 0 ${W} ${H}`}
                fill="none"
              >
                {EDGES.map((e, i) => (
                  <g key={i} className={`transition-opacity duration-300 ${edgeOpacity(e)}`}>
                    <path
                      d={e.d}
                      data-len={e.len}
                      className={`flow-edge flow-edge-${e.tier} stroke-flow-edge`}
                      strokeWidth={1.5}
                      strokeDasharray={`${e.len} ${e.len}`}
                    />
                    {/* bubble: a soft halo and a bright core sharing one dash
                        offset, so they travel the path as a single glowing dot.
                        Dash lengths are real pixels (see bezierLength above) —
                        a fraction of the *path*, sized big enough to read as a
                        travelling dot rather than the pinprick a normalized
                        fraction rendered as once GSAP forced px units on it. */}
                    <path
                      d={e.d}
                      data-len={e.len}
                      className={`flow-packet flow-packet-${e.tier}`}
                      stroke={e.color}
                      strokeOpacity={0.3}
                      strokeWidth={16}
                      strokeLinecap="round"
                      strokeDasharray={`${PACKET_HALO} ${Math.max(e.len - PACKET_HALO, 1)}`}
                    />
                    <path
                      d={e.d}
                      data-len={e.len}
                      className={`flow-packet flow-packet-${e.tier}`}
                      stroke={e.color}
                      strokeWidth={6}
                      strokeLinecap="round"
                      strokeDasharray={`${PACKET_CORE} ${Math.max(e.len - PACKET_CORE, 1)}`}
                    />
                  </g>
                ))}
              </svg>

              {/* sources */}
              {SOURCES.map((s, i) => {
                const on = active === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(on ? null : s.id)}
                    className="flow-source absolute text-left"
                    style={{
                      left: 0,
                      top: SOURCE_Y[i] - SOURCE_BAND / 2,
                      width: SOURCE_W,
                      minHeight: SOURCE_BAND,
                    }}
                  >
                    {/* The dim layer is separate from the GSAP target: GSAP writes
                        an inline opacity on .flow-source, which would override an
                        opacity class set here, and a CSS opacity transition on a
                        from() target corrupts the value GSAP samples. */}
                    <span
                      className={`flex h-full items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-opacity duration-300 ${
                        on
                          ? "border-signal/70 bg-signal/10"
                          : "border-flow-line bg-flow-raised hover:border-signal/40"
                      } ${active && !on ? "opacity-40" : "opacity-100"}`}
                    >
                      <s.Icon className="h-6 w-6 shrink-0" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[12.5px] font-medium text-flow-bright">
                          {s.label}
                        </span>
                        <span className="block truncate font-mono text-[9px] uppercase tracking-[0.12em] text-flow-text">
                          {groupOf(s.item)}
                        </span>
                      </span>
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    </span>
                  </button>
                );
              })}

              {/* processing components */}
              {PROCESSORS.map((p, i) => {
                const on = !lit || lit.has(i);
                return (
                  <div
                    key={p.key}
                    className="flow-node absolute flex items-center"
                    style={{
                      left: PROC_L,
                      top: PROC_Y[i] - PROC_BAND / 2,
                      width: PROC_W,
                      height: PROC_BAND,
                    }}
                  >
                    <div
                      className={`w-full rounded-xl border border-flow-line bg-flow-raised px-4 py-3 transition-opacity duration-300 ${
                        on ? "opacity-100" : "opacity-25"
                      }`}
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal-soft">
                        {p.label}
                      </p>
                      <p className="mt-1 text-[11px] leading-snug text-flow-text">{p.note}</p>
                    </div>
                  </div>
                );
              })}

              {/* the agent */}
              <div
                className="flow-agent absolute"
                style={{
                  left: AGENT.x - AGENT.r,
                  top: AGENT.y - AGENT.r,
                  width: AGENT.r * 2,
                  height: AGENT.r * 2,
                }}
              >
                <div className="flow-agent-glow absolute -inset-12 rounded-full bg-signal/30 blur-3xl" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-signal/40 bg-flow-raised">
                  <div className="absolute inset-4 rounded-full border border-signal/20" />
                  <div className="absolute inset-9 rounded-full border border-signal/15" />
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(111,160,255,0.45)]">
                    <LogoMark className="h-9 w-auto" />
                  </span>
                </div>
              </div>
              <p
                className="absolute whitespace-nowrap text-center font-mono text-[10px] uppercase tracking-[0.14em] text-flow-text"
                style={{ left: AGENT.x - 130, top: AGENT.y + AGENT.r + 16, width: 260 }}
              >
                one agent · <span ref={count}>{STRAND_COUNT}</span> strands in
              </p>

              {/* outputs */}
              {OUTPUTS.map((o, i) => (
                <div
                  key={o.label}
                  className="flow-out absolute flex items-center"
                  style={{
                    left: OUT_X,
                    top: OUT_Y[i] - OUT_BAND / 2,
                    width: OUT_W,
                    height: OUT_BAND,
                  }}
                >
                  <div className="w-full rounded-xl border border-flow-line bg-flow-raised px-4 py-2.5">
                    <p className="text-[12px] font-medium text-flow-bright">{o.label}</p>
                    <p className="mt-0.5 text-[10px] leading-snug text-flow-text">{o.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-center font-mono text-[11px] text-flow-text">
            {activeLabel
              ? `Showing only what ${activeLabel} contributed — click it again for the whole run.`
              : "Keep scrolling to run it · click a connector to trace just its path"}
          </p>
        </div>

        {/* ---------------------------------------------- diagram (small) -- */}
        <div className="shell relative mt-10 lg:hidden">
          <div className="rounded-2xl border border-flow-line bg-flow-raised/50 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal-soft">
              Connected
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {SOURCES.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center gap-2 rounded-lg border border-flow-line bg-flow-raised px-2.5 py-2"
                >
                  <s.Icon className="h-5 w-5 shrink-0" />
                  <span className="truncate text-[11px] text-flow-bright">{s.label}</span>
                </div>
              ))}
            </div>

            <Rung label={`${STRAND_COUNT} strands`} />

            <div className="grid gap-2 sm:grid-cols-2">
              {PROCESSORS.map((p) => (
                <div
                  key={p.key}
                  className="rounded-lg border border-flow-line bg-flow-raised px-3 py-2.5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal-soft">
                    {p.label}
                  </p>
                  <p className="mt-0.5 text-[11px] text-flow-text">{p.note}</p>
                </div>
              ))}
            </div>

            <Rung label="converge" />

            <div className="flex items-center gap-3 rounded-lg border border-signal/40 bg-signal/10 px-3 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                <LogoMark className="h-5 w-auto" />
              </span>
              <div>
                <p className="text-[12px] font-medium text-flow-bright">One agent</p>
                <p className="text-[11px] text-flow-text">
                  Reads the graph, decides what needs you
                </p>
              </div>
            </div>

            <Rung label="hands back" />

            <div className="grid gap-2">
              {OUTPUTS.map((o) => (
                <div
                  key={o.label}
                  className="rounded-lg border border-flow-line bg-flow-raised px-3 py-2.5"
                >
                  <p className="text-[12px] font-medium text-flow-bright">{o.label}</p>
                  <p className="text-[11px] text-flow-text">{o.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------- unpinned: the internal system -- */}
      <div className="relative pb-24 pt-4 sm:pb-28">
        <div className="shell">
          <div className="rounded-2xl border border-flow-line bg-flow-raised/60 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="eyebrow text-signal-soft">Inside the agent</p>
              <p className="font-mono text-[11px] text-flow-text">
                run 8f2c · 3.6s wall clock · 6 sources cited
              </p>
            </div>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1.25fr_0.85fr_1fr]">
              {/* reasoning trace */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-flow-text">
                  Reasoning trace
                </p>
                <ol className="mt-4">
                  {TRACE.map((r) => {
                    const dim = active !== null && r.src !== null && r.src !== active;
                    return (
                      <li
                        key={r.t}
                        className={`flow-trace-row relative flex gap-3 border-l border-flow-line py-2.5 pl-5 transition-opacity duration-300 ${
                          dim ? "opacity-25" : "opacity-100"
                        }`}
                      >
                        <span
                          className={`absolute -left-[3px] top-[15px] h-1.5 w-1.5 rounded-full ${
                            r.src === null ? "bg-signal" : "bg-signal-soft/70"
                          }`}
                        />
                        <span className="w-9 shrink-0 font-mono text-[10px] text-flow-text">
                          {r.t}
                        </span>
                        <span className="text-[12.5px] leading-snug text-flow-bright/90">
                          {r.text}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* tool calls */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-flow-text">
                  Tool calls
                </p>
                <ul className="mt-4 space-y-1.5">
                  {TOOL_CALLS.map((c) => {
                    const dim = active !== null && c.src !== null && c.src !== active;
                    return (
                      <li
                        key={c.call}
                        className={`flow-tool-row flex items-center gap-2 rounded-lg bg-flow-sunk px-2.5 py-2 transition-opacity duration-300 ${
                          dim ? "opacity-25" : "opacity-100"
                        }`}
                      >
                        <Check className="h-3 w-3 shrink-0 text-emerald-400" />
                        <span className="min-w-0 flex-1 truncate font-mono text-[10.5px] text-flow-bright/85">
                          {c.call}
                        </span>
                        <span className="shrink-0 font-mono text-[10px] text-flow-text">
                          {c.ms}ms
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* what it hands back */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-flow-text">
                  What it hands back
                </p>
                <div className="flow-decision mt-4 rounded-xl border border-signal/35 bg-flow-sunk p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[13px] font-medium text-flow-bright">
                      Sarah Chen&apos;s renewal
                    </p>
                    <span className="shrink-0 rounded-full bg-signal/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-signal-soft">
                      Needs you
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] leading-relaxed text-flow-text">
                    Contract lapses in 6 days and the auto-renew clause needs five
                    days&apos; notice. Reply drafted in your voice.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-signal px-3 py-1.5 text-[11px] font-medium text-white">
                      Approve <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="rounded-full border border-flow-line px-3 py-1.5 text-[11px] text-flow-bright/80">
                      Edit
                    </span>
                  </div>
                  <p className="mt-4 border-t border-flow-line pt-3 font-mono text-[10px] text-flow-text">
                    Nothing sends until you approve it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Vertical connector between stacked stages on small screens. */
function Rung({ label }: { label: string }) {
  return (
    <div className="my-4 flex flex-col items-center gap-1.5">
      <span className="h-6 w-px bg-gradient-to-b from-transparent to-signal/60" />
      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-flow-text">
        {label}
      </span>
      <span className="h-6 w-px bg-gradient-to-b from-signal/60 to-transparent" />
    </div>
  );
}
