import Image from "next/image";

/** Kloyya mark — the six-petal pinwheel brand logo. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Kloyya"
      width={200}
      height={214}
      priority
      className={`w-auto object-contain ${className ?? ""}`}
    />
  );
}

/** Full lockup: mark + wordmark, baseline-aligned. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-7 w-auto" />
      <span className="font-display text-[22px] font-semibold tracking-tightest">
        kloyya
      </span>
    </span>
  );
}
