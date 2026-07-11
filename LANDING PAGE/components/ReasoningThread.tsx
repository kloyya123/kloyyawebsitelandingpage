"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The signature. Scattered app-signals (fragmented tools) are stitched by a
 * single amber "reasoning thread" into one synthesized briefing card.
 * A literal picture of "the intelligence behind every decision."
 *
 * Honors reduced motion by rendering the fully-resolved state with no draw.
 */

type Node = { id: string; x: number; y: number };

// Scattered signal sources — deliberately uneven, like a real desk.
const NODES: Node[] = [
  { id: "Slack", x: 44, y: 52 },
  { id: "Gmail", x: 232, y: 34 },
  { id: "Jira", x: 118, y: 116 },
  { id: "Notion", x: 300, y: 118 },
  { id: "WhatsApp", x: 40, y: 150 },
  { id: "Salesforce", x: 226, y: 168 },
];

// Where every thread converges before entering the briefing.
const HUB = { x: 186, y: 238 };

export default function ReasoningThread() {
  const reduce = useReducedMotion();

  // Timeline base — nodes settle, faint feeders draw, then the thread, then card.
  const t = {
    node: (i: number) => (reduce ? 0 : 0.15 + i * 0.08),
    feeder: 0.7,
    thread: 1.15,
    card: 1.9,
  };

  return (
    <div className="reasoning-thread relative mx-auto w-full max-w-[420px]">
      <svg
        viewBox="0 0 380 470"
        className="w-full"
        role="img"
        aria-label="Fragmented app signals converging into one synthesized decision briefing"
      >
        <defs>
          <linearGradient id="thread" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9A441" />
            <stop offset="100%" stopColor="#C8801F" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint feeder lines: each scattered signal reaches toward the hub */}
        {NODES.map((n, i) => (
          <motion.line
            key={`feed-${n.id}`}
            x1={n.x}
            y1={n.y}
            x2={HUB.x}
            y2={HUB.y}
            stroke="#15171C"
            strokeOpacity={0.14}
            strokeWidth={1}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: t.feeder + i * 0.05 }}
          />
        ))}

        {/* Signal nodes — mono labels, quiet chips */}
        {NODES.map((n, i) => (
          <motion.g
            key={n.id}
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: t.node(i) }}
          >
            <rect
              x={n.x - labelWidth(n.id) / 2}
              y={n.y - 11}
              width={labelWidth(n.id)}
              height={22}
              rx={11}
              fill="#F3F0E8"
              stroke="#15171C"
              strokeOpacity={0.12}
            />
            <circle cx={n.x - labelWidth(n.id) / 2 + 12} cy={n.y} r={2.4} fill="#545A67" />
            <text
              x={n.x + 5}
              y={n.y + 3.5}
              textAnchor="middle"
              className="fill-ink font-mono"
              style={{ fontSize: 10, letterSpacing: "0.02em" }}
            >
              {n.id}
            </text>
          </motion.g>
        ))}

        {/* The reasoning thread — one bold amber line, hub → briefing */}
        <motion.path
          d={`M ${HUB.x} ${HUB.y}
              C ${HUB.x} ${HUB.y + 34}, 120 300, 120 322`}
          fill="none"
          stroke="url(#thread)"
          strokeWidth={2.5}
          strokeLinecap="round"
          filter="url(#soft)"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: t.thread, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Convergence marker at the hub */}
        <motion.circle
          cx={HUB.x}
          cy={HUB.y}
          r={4.5}
          fill="#C8801F"
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: t.thread }}
          style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
        />

        {/* The synthesized briefing card */}
        <motion.g
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: t.card, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x={28}
            y={322}
            width={324}
            height={124}
            rx={16}
            fill="#15171C"
            stroke="#C8801F"
            strokeOpacity={0.5}
          />
          <text x={48} y={350} className="fill-signal-soft font-mono" style={{ fontSize: 9, letterSpacing: "0.18em" }}>
            MORNING BRIEFING · SYNTHESIZED
          </text>
          <line x1={48} y1={360} x2={332} y2={360} stroke="#EAE6DC" strokeOpacity={0.14} />

          <circle cx={52} cy={379} r={2.5} fill="#D9A441" />
          <text x={64} y={382} className="fill-paper font-sans" style={{ fontSize: 11 }}>
            Contract for Brightstone is stalled on legal sign-off.
          </text>
          <circle cx={52} cy={401} r={2.5} fill="#D9A441" />
          <text x={64} y={404} className="fill-paper font-sans" style={{ fontSize: 11 }}>
            Q3 spend thread + Jira blocker point to the same owner.
          </text>
          <circle cx={52} cy={423} r={2.5} fill="#D9A441" />
          <text x={64} y={426} className="fill-paper font-sans" style={{ fontSize: 11 }}>
            Draft reply prepared — one decision needed from you.
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

// Rough label width so chips fit their mono text without measuring at runtime.
function labelWidth(label: string) {
  return Math.max(56, label.length * 6.6 + 26);
}
