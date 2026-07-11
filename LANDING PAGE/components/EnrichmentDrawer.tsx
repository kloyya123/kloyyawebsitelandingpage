"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";
import { HEADCOUNT_OPTIONS } from "@/lib/schema";
import { FOCUS_TOOLS } from "@/lib/content";
import { saveEnrichmentProfile } from "@/app/actions";

export default function EnrichmentDrawer({
  open,
  email,
  onClose,
}: {
  open: boolean;
  email: string;
  onClose: () => void;
}) {
  const [tools, setTools] = useState<string[]>([]);
  const [headcount, setHeadcount] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const toggleTool = (tool: string) => {
    setTools((prev) =>
      prev.includes(tool)
        ? prev.filter((t) => t !== tool)
        : prev.length >= 3
          ? prev
          : [...prev, tool]
    );
  };

  const submit = async () => {
    setSaving(true);
    await saveEnrichmentProfile({
      email,
      tools,
      headcount: (headcount as (typeof HEADCOUNT_OPTIONS)[number]) ?? undefined,
    });
    setSaving(false);
    setDone(true);
    setTimeout(onClose, 1100);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Tell us what fractures your focus"
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            className="relative flex h-full w-full max-w-[440px] flex-col overflow-y-auto bg-paper-raised shadow-lifted"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
          >
            <div className="flex items-start justify-between p-7 pb-4">
              <div>
                <p className="eyebrow mb-2 text-signal-deep">Place secured</p>
                <h3 className="font-display text-2xl leading-tight tracking-tightest">
                  Help us tune your
                  <br />
                  first briefing.
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1.5 text-slate transition-colors hover:bg-paper-sunk hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-8 px-7">
              <fieldset>
                <legend className="mb-1 text-sm font-medium text-ink">
                  Which tools fracture your focus the most?
                </legend>
                <p className="mb-4 font-mono text-[11px] text-slate">
                  Pick up to three · {tools.length}/3 selected
                </p>
                <div className="flex flex-wrap gap-2">
                  {FOCUS_TOOLS.map((tool) => {
                    const active = tools.includes(tool);
                    const disabled = !active && tools.length >= 3;
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleTool(tool)}
                        disabled={disabled}
                        className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                          active
                            ? "border-ink bg-ink text-paper"
                            : disabled
                              ? "cursor-not-allowed border-ink/10 text-slate/50"
                              : "border-ink/15 text-slate hover:border-ink/40 hover:text-ink"
                        }`}
                      >
                        {tool}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-4 text-sm font-medium text-ink">
                  How big is your team?
                </legend>
                <div className="flex flex-wrap gap-2">
                  {HEADCOUNT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setHeadcount(opt)}
                      className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                        headcount === opt
                          ? "border-ink bg-ink text-paper"
                          : "border-ink/15 text-slate hover:border-ink/40 hover:text-ink"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="sticky bottom-0 mt-8 flex items-center gap-3 border-t border-ink/10 bg-paper-raised/95 p-7 backdrop-blur">
              <button
                onClick={submit}
                disabled={saving || done}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-paper transition-transform hover:-translate-y-px disabled:opacity-70"
              >
                {done ? (
                  <>
                    <Check className="h-4 w-4" /> Saved
                  </>
                ) : saving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Save context"
                )}
              </button>
              <button
                onClick={onClose}
                className="text-sm text-slate transition-colors hover:text-ink"
              >
                Skip for now
              </button>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
