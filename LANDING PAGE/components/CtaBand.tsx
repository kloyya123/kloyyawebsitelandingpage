import WaitlistForm from "./WaitlistForm";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-signal via-signal-deep to-ink py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="shell relative flex flex-col items-center text-center">
        <h2 className="max-w-2xl font-display text-3xl font-normal tracking-tightest text-white sm:text-4xl">
          Built for the work you actually have to do.
        </h2>
        <p className="mt-4 max-w-md text-white/80">
          Join the waitlist and get a private beta key when your cohort opens.
        </p>
        <div className="mt-8 w-full max-w-md">
          <WaitlistForm variant="dark" />
        </div>
      </div>
    </section>
  );
}
