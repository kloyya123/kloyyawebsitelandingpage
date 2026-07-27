const ITEMS = [
  {
    title: "Scoped by default",
    body: "Every integration connects through OAuth you control and can revoke any time.",
  },
  {
    title: "Never sold",
    body: "Your data trains nothing and is never shared or sold to third parties.",
  },
  {
    title: "Encrypted in transit and at rest",
    body: "Service-role infrastructure only — no client ever holds a raw credential.",
  },
  {
    title: "Built for real accountability",
    body: "A full security overview ships before public beta, not after.",
  },
];

export default function PrivacyGrid() {
  return (
    <section id="privacy" className="bg-paper-sunk py-24 sm:py-28">
      <div className="shell text-center">
        <p className="eyebrow text-signal-deep">Privacy and control</p>
        <h2 className="mt-3 font-display text-3xl font-normal tracking-tightest text-ink sm:text-4xl">
          Private enough to trust with real work.
        </h2>
      </div>

      <div className="shell mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-ink/8 bg-white p-5 text-left shadow-sm"
          >
            <h3 className="text-sm font-medium text-ink">{item.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-slate">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
