/**
 * Shared mini-UI type scale across all device mockups:
 * label = 8px mono uppercase, body = 9px, title = 10px, emphasis = 11px.
 */

function BriefingContent() {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-white p-2.5 shadow-sm">
        <p className="text-[10px] font-medium text-ink">Weekly digest ready</p>
        <p className="mt-1 text-[9px] text-slate">4 decisions, 12 threads resolved</p>
      </div>
      <div className="rounded-lg bg-white p-2.5 shadow-sm">
        <p className="text-[10px] font-medium text-ink">Meridian renewal</p>
        <p className="mt-1 text-[9px] text-slate">Draft reply waiting on you</p>
      </div>
    </div>
  );
}

function MacScreen() {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-t-xl border border-b-0 border-ink/10 bg-white shadow-lifted">
        <div className="flex items-center gap-1.5 border-b border-ink/8 bg-paper-raised px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <div className="ml-2 h-4 flex-1 rounded-full bg-white" />
        </div>
        <div className="grid grid-cols-[72px_1fr] gap-3 bg-sky-50/60 p-4">
          <div className="flex flex-col gap-2">
            {["Briefing", "Inbox", "Tasks", "Settings"].map((l, i) => (
              <div
                key={l}
                className={`rounded-md px-2 py-1.5 text-[9px] ${
                  i === 0 ? "bg-white font-medium text-ink shadow-sm" : "text-slate"
                }`}
              >
                {l}
              </div>
            ))}
          </div>
          <BriefingContent />
        </div>
      </div>
      {/* laptop base */}
      <div className="h-2.5 rounded-b-md bg-gradient-to-b from-ink/25 to-ink/40" />
      <div className="mx-auto h-1 w-24 rounded-b-lg bg-ink/40" />
      <p className="mt-4 text-center text-[11px] font-medium text-slate">Web app</p>
    </div>
  );
}

function DesktopScreen() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-t-xl border border-b-0 border-ink/10 bg-white shadow-lifted">
        <div className="flex items-center gap-1.5 border-b border-ink/8 bg-ink px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <span className="ml-2 text-[10px] font-medium text-white/80">
            Kloyya
          </span>
        </div>
        <div className="flex flex-col gap-2.5 bg-sky-50/60 p-4">
          <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm">
            <span className="text-[9px] text-slate">
              Ask Kloyya what needs my attention…
            </span>
            <span className="rounded-full bg-ink px-2 py-1 text-[8px] font-medium text-white">
              Ask
            </span>
          </div>
          <BriefingContent />
        </div>
      </div>
      {/* desktop dock hint */}
      <div className="mx-auto mt-2 flex w-fit items-center gap-1.5 rounded-full bg-paper-raised px-2.5 py-1.5 shadow-sm">
        <span className="h-4 w-4 rounded-md bg-signal" />
        <span className="text-[9px] text-slate">Runs in your menu bar</span>
      </div>
      <p className="mt-4 text-center text-[11px] font-medium text-slate">Desktop app</p>
    </div>
  );
}

function IPhoneScreen() {
  return (
    <div className="w-[168px]">
      <div className="relative overflow-hidden rounded-[2.1rem] border-[7px] border-ink bg-white shadow-lifted">
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-ink" />
        <div className="flex items-center justify-between bg-sky-50 px-3 pb-2 pt-4">
          <span className="text-[10px] font-medium text-ink">Kloyya</span>
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        </div>
        <div className="flex flex-col gap-2 bg-sky-50/60 p-2.5 pb-5">
          <BriefingContent />
          <div className="rounded-full bg-ink px-3 py-1.5 text-center text-[9px] font-medium text-white">
            Approve 2 replies
          </div>
        </div>
        {/* home indicator */}
        <div className="flex justify-center bg-sky-50/60 pb-2">
          <div className="h-1 w-16 rounded-full bg-ink/30" />
        </div>
      </div>
      <p className="mt-4 text-center text-[11px] font-medium text-slate">iOS</p>
    </div>
  );
}

function AndroidScreen() {
  return (
    <div className="w-[168px]">
      <div className="relative overflow-hidden rounded-[1.1rem] border-[7px] border-ink bg-white shadow-lifted">
        {/* punch-hole camera */}
        <div className="absolute left-1/2 top-2 z-10 h-2 w-2 -translate-x-1/2 rounded-full bg-ink" />
        <div className="flex items-center justify-between bg-sky-50 px-3 pb-2 pt-4">
          <span className="text-[10px] font-medium text-ink">Kloyya</span>
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        </div>
        <div className="flex flex-col gap-2 bg-sky-50/60 p-2.5 pb-3">
          <BriefingContent />
          <div className="rounded-md bg-ink px-3 py-1.5 text-center text-[9px] font-medium text-white">
            Approve 2 replies
          </div>
        </div>
        {/* android nav bar */}
        <div className="flex items-center justify-center gap-6 bg-sky-50/60 py-1.5">
          <span className="h-2 w-2 rounded-sm border border-ink/40" />
          <span className="h-2 w-2 rounded-full border border-ink/40" />
          <span className="h-2 w-2 border border-ink/40" />
        </div>
      </div>
      <p className="mt-4 text-center text-[11px] font-medium text-slate">Android</p>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="shell text-center">
        <p className="eyebrow text-signal-deep">One brain, every surface</p>
        <h2 className="mt-3 font-display text-3xl font-normal tracking-tightest text-ink sm:text-4xl">
          On your desk or in your pocket.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-slate">
          The same briefing, kept in sync — full workspace on the web app,
          quick approvals from your phone, on any platform.
        </p>
      </div>

      <div className="shell mt-14 flex flex-col items-center gap-12 lg:flex-row lg:items-end lg:justify-center lg:gap-8">
        <MacScreen />
        <DesktopScreen />
        <IPhoneScreen />
        <AndroidScreen />
      </div>
    </section>
  );
}
