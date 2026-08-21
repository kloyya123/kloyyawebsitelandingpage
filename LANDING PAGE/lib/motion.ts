import type gsap from "gsap";

/**
 * Entrance animations on this page stage their elements with `.from()`, which
 * means GSAP itself sets opacity to 0 and then animates back to 1. That is fine
 * while the page is visible — but a hidden tab suspends requestAnimationFrame,
 * so the timeline never advances and the content stays invisible. A page opened
 * in a background tab would render a blank hero.
 *
 * So: when the page is not visible, skip the flourish and jump straight to the
 * finished state. The content is always there; only the animation is optional.
 */
export function finishIfHidden(animation: gsap.core.Animation) {
  if (typeof document !== "undefined" && document.hidden) {
    animation.progress(1);
  }
}

/** The same guard, shaped for a ScrollTrigger `onEnter` callback. */
export function finishIfHiddenOnEnter(self: { animation?: gsap.core.Animation }) {
  if (self.animation) finishIfHidden(self.animation);
}
