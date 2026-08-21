/**
 * Shared SVG path helpers for the animated flow scenes.
 *
 * Why lengths are computed here rather than using SVG's `pathLength="1"`
 * normalization: GSAP's CSSPlugin writes `stroke-dashoffset` with an explicit
 * "px" suffix, and SVG only applies `pathLength` scaling to *unitless* values.
 * Mixing the two silently renders a dash pattern authored as fractions of the
 * path as fractions of a single pixel instead — lines become invisible hairline
 * dots that travel a ~1px range. Driving every dash value in real pixels avoids
 * the mismatch entirely.
 */

/** Flat S-curve between two points — control points at the horizontal midpoint. */
export function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

/**
 * Approximate on-screen length of the cubic bezier `curve()` produces, by
 * sampling points and summing chord lengths. Matches the browser's own
 * getTotalLength() to ~0.002px at 48 samples.
 */
export function bezierLength(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  samples = 48
) {
  const mx = (x1 + x2) / 2;
  const cx1 = mx;
  const cy1 = y1;
  const cx2 = mx;
  const cy2 = y2;
  const at = (t: number) => {
    const u = 1 - t;
    const x =
      u * u * u * x1 + 3 * u * u * t * cx1 + 3 * u * t * t * cx2 + t * t * t * x2;
    const y =
      u * u * u * y1 + 3 * u * u * t * cy1 + 3 * u * t * t * cy2 + t * t * t * y2;
    return [x, y] as const;
  };
  let len = 0;
  let [px, py] = at(0);
  for (let i = 1; i <= samples; i++) {
    const [x, y] = at(i / samples);
    len += Math.hypot(x - px, y - py);
    px = x;
    py = y;
  }
  return len;
}

/** Reads the real pixel length a path stashed in `data-len`, for GSAP function values. */
export const pathLenOf = (_i: number, target: Element) =>
  +((target as HTMLElement).dataset.len ?? 0);
