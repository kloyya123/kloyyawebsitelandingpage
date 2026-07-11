/**
 * Kloyya mark — an oval with two arcs framing a central sparkle.
 * Drawn as a single currentColor shape via a mask, so it inherits text color
 * (works on paper or ink) and stays crisp at any size.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      role="img"
      aria-label="Kloyya"
      fill="none"
    >
      <mask id="kloyya-mark" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="140">
        {/* the oval body is the mark */}
        <ellipse cx="60" cy="70" rx="52" ry="63" fill="#fff" />
        {/* two arcs punched out */}
        <rect x="30" y="30" width="20" height="80" rx="10" fill="#000" />
        <rect x="70" y="30" width="20" height="80" rx="10" fill="#000" />
        {/* the sparkle joins the two arcs into one negative shape */}
        <path d="M60 50 L64 66 L72 70 L64 74 L60 90 L56 74 L48 70 L56 66 Z" fill="#000" />
      </mask>
      <rect width="120" height="140" fill="currentColor" mask="url(#kloyya-mark)" />
    </svg>
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
