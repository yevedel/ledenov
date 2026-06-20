import type { MetadataRoute } from "next";
import { site, cases, solutions } from "./content";

const base = `https://${site.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/work", "/pricing", "/reviews", "/blog", "/privacy", "/cookies"];
  const caseRoutes = cases.map((c) => `/work/${c.slug}`);
  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);

  return [...staticRoutes, ...caseRoutes, ...solutionRoutes].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/solutions") || path.startsWith("/work/") ? 0.8 : 0.6,
  }));
}
