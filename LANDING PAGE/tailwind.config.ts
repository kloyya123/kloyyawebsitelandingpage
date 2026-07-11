import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "The Briefing" — deep-ink folio wrapping warm-paper briefing surfaces
        ink: {
          DEFAULT: "#15171C", // folio / dark surfaces
          2: "#1C1F26", // raised panels on ink
          3: "#252A33", // hairline-lifted panel on ink
        },
        paper: {
          DEFAULT: "#EAE6DC", // primary light briefing surface (greige)
          raised: "#F3F0E8", // cards / insets on paper
          sunk: "#E1DCD0", // recessed wells on paper
        },
        signal: {
          DEFAULT: "#C8801F", // burnt-amber annotation ink — the one accent
          soft: "#D9A441", // lighter amber for fills / on-ink marks
          deep: "#A56613", // deeper amber for text on paper (AA contrast)
        },
        slate: {
          DEFAULT: "#545A67", // muted text on paper
          ink: "#8C93A1", // muted text on ink
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        folio: "0 1px 2px rgba(21,23,28,0.04), 0 8px 30px rgba(21,23,28,0.06)",
        lifted: "0 2px 4px rgba(21,23,28,0.05), 0 20px 50px rgba(21,23,28,0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
