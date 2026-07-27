import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

// Read the fs at build time so the emitted sitemap.xml is a static file.
export const dynamic = "force-static";

const baseUrl = "https://kloyya.com";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

// Per-route overrides. Any route not listed here falls back to `defaultConfig`,
// so newly-added pages are indexed automatically without touching this file.
const routeConfig: Record<
  string,
  { priority: number; changeFrequency: ChangeFrequency }
> = {
  "/": { priority: 1.0, changeFrequency: "weekly" },
  "/privacy": { priority: 0.6, changeFrequency: "monthly" },
  "/terms": { priority: 0.6, changeFrequency: "monthly" },
  "/trust": { priority: 0.6, changeFrequency: "monthly" },
  "/legal": { priority: 0.6, changeFrequency: "monthly" },
};

const defaultConfig: { priority: number; changeFrequency: ChangeFrequency } = {
  priority: 0.7,
  changeFrequency: "weekly",
};

const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;

/**
 * Walk the `app/` directory and collect the URL path of every public page.
 * Route groups `(group)` are transparent, and private `_folders`, parallel
 * `@slots`, and dynamic `[param]` segments are skipped because they don't map
 * to a crawlable static URL.
 */
function discoverRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const routes = new Set<string>();

  function walk(dir: string, segments: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    if (entries.some((e) => e.isFile() && PAGE_FILE.test(e.name))) {
      routes.add("/" + segments.join("/"));
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;

      // Non-routable or non-static segments.
      if (name.startsWith("_")) continue; // private folders
      if (name.startsWith("@")) continue; // parallel route slots
      if (name.startsWith(".")) continue; // dotfiles
      if (name.startsWith("[")) continue; // dynamic segments (no static URL)

      // Route groups don't contribute a URL segment.
      if (name.startsWith("(") && name.endsWith(")")) {
        walk(path.join(dir, name), segments);
        continue;
      }

      walk(path.join(dir, name), [...segments, name]);
    }
  }

  walk(appDir, []);
  return [...routes];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return discoverRoutes()
    .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)))
    .map((route) => {
      const { priority, changeFrequency } = routeConfig[route] ?? defaultConfig;
      return {
        url: route === "/" ? baseUrl : `${baseUrl}${route}`,
        lastModified,
        changeFrequency,
        priority,
      };
    });
}
