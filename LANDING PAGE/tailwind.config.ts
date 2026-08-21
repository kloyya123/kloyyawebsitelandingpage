import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean, airy sky-blue system — white surfaces, soft blue accents
        ink: {
          DEFAULT: "#0B1220", // primary text / dark surfaces
          2: "#111A2C",
          3: "#1B2740",
        },
        paper: {
          DEFAULT: "#FFFFFF", // primary light surface
          raised: "#F6F8FC", // cards / insets
          sunk: "#EEF2F8", // recessed wells / alt sections
        },
        signal: {
          DEFAULT: "#2F6FED", // primary blue accent
          soft: "#6FA0FF", // lighter blue for fills
          deep: "#1D4FBF", // deeper blue for text/CTA on white (AA contrast)
        },
        slate: {
          DEFAULT: "#5B6472", // muted text on paper
          ink: "#8C93A1",
        },
        sky: {
          50: "#F3F8FF",
          100: "#E6F0FF",
          200: "#CFE3FF",
        },
        // Dark canvas used only by the agent-flow demo section
        flow: {
          canvas: "#070C18", // section ground
          raised: "#0E1729", // node / panel surface
          sunk: "#0A1120", // recessed wells inside the panel
          line: "#1C2B47", // hairline borders on the dark canvas
          edge: "#24406E", // resting graph edge
          text: "#93A4C4", // muted text on the dark canvas
          bright: "#E8EEFB", // primary text on the dark canvas
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
