"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader2, AlertCircle, Check } from "lucide-react";
import { WaitlistIngestSchema, type WaitlistIngestInput } from "@/lib/schema";
import { processWaitlistSubmission } from "@/app/actions";
import EnrichmentDrawer from "./EnrichmentDrawer";

type Status = "idle" | "success" | "error";

export default function WaitlistForm({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [savedEmail, setSavedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistIngestInput>({
    resolver: zodResolver(WaitlistIngestSchema),
  });

  const onSubmit = async (data: WaitlistIngestInput) => {
    setStatus("idle");
    setServerMsg(null);
    const res = await processWaitlistSubmission(data);
    if (res.success) {
      setSavedEmail(data.email.trim().toLowerCase());
      setStatus("success");
      setDrawerOpen(true);
    } else {
      setStatus("error");
      setServerMsg(res.error);
    }
  };

  const dark = variant === "dark";
  const success = status === "success";

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-3 rounded-2xl border px-5 py-4 ${
              dark
                ? "border-signal/40 bg-ink-2"
                : "border-signal/40 bg-paper-raised"
            }`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal text-paper">
              <Check className="h-4 w-4" />
            </span>
            <div>
              <p className={`text-sm font-medium ${dark ? "text-paper" : "text-ink"}`}>
                You&apos;re on the list.
              </p>
              <button
                onClick={() => setDrawerOpen(true)}
                className="font-mono text-[11px] text-signal-deep underline-offset-2 hover:underline"
              >
                Add a bit of context →
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            initial={false}
            className="flex flex-col gap-2 sm:flex-row"
            noValidate
          >
            <div className="relative flex-1">
              <input
                type="email"
                autoComplete="email"
                placeholder="Your work email"
                aria-label="Work email"
                aria-invalid={!!errors.email}
                disabled={isSubmitting}
                {...register("email")}
                className={`h-12 w-full rounded-full border px-5 text-sm outline-none transition-colors ${
                  dark
                    ? "border-paper/15 bg-ink-2 text-paper placeholder:text-slate-ink focus:border-signal"
                    : "border-ink/15 bg-paper-raised text-ink placeholder:text-slate focus:border-signal"
                }`}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-sm font-medium transition-transform hover:-translate-y-px active:translate-y-0 disabled:opacity-70 ${
                dark ? "bg-signal text-ink" : "bg-ink text-paper"
              }`}
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Secure Waitlist Priority
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(errors.email || status === "error") && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-3 flex items-center gap-1.5 text-xs ${
              dark ? "text-signal-soft" : "text-signal-deep"
            }`}
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {errors.email?.message ?? serverMsg}
          </motion.p>
        )}
      </AnimatePresence>

      <EnrichmentDrawer
        open={drawerOpen}
        email={savedEmail}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
