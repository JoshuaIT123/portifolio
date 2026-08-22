import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/* ---------------------------------------------------------------------------
 * Dynamic sitemap — served at https://mucyuneje.space/sitemap.xml
 *
 * IMPORTANT (single-page architecture): this portfolio renders all sections
 * (#work, #about, #skills, #experience, #achievements, #contact) on the one
 * "/" route. Anchor fragments are NOT valid sitemap URLs and would be
 * ignored (or flagged) by Google — so only real routes belong here.
 *
 * To add a sub-page later (e.g. /projects, /about): create the route, then
 * append one entry to `routes` below. Priority 1.0 = homepage,
 * 0.8 = core sub-pages.
 * ------------------------------------------------------------------------- */

type RouteEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const routes: RouteEntry[] = [
  { path: "/", changeFrequency: "monthly", priority: 1.0 },
  // { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  // { path: "/about", changeFrequency: "yearly", priority: 0.8 },
  // { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  // { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
