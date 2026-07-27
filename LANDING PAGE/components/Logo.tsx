/**
 * Kloyya mark — a six-petal pinwheel, unevenly spaced.
 * Single currentColor shape so it inherits text color and stays crisp at any size.
 */
const PETAL_ANGLES = [-95, -48, 13, 64, 126, 180];

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Kloyya"
      fill="currentColor"
    >
      <g transform="translate(100,100)">
        {PETAL_ANGLES.map((angle) => (
          <path
            key={angle}
            d="M0,0 C22,-16 62,-24 88,0 C62,24 22,16 0,0 Z"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
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
