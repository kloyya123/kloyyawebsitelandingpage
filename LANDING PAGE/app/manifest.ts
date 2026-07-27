import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kloyya — AI Chief of Staff",
    short_name: "Kloyya",
    description:
      "Kloyya is an autonomous AI Chief of Staff that reads across your tools, connects the threads, and hands you the decision.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#2F6FED",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
