import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/* Dynamic sitemap for Joshua NDAMAGE's portfolio website. */

type RouteEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const routes: RouteEntry[] = [
  { path: "/",             changeFrequency: "monthly",  priority: 1.0 },
  { path: "/about",        changeFrequency: "yearly",   priority: 0.9 },
  { path: "/projects",     changeFrequency: "monthly",  priority: 0.9 },
  { path: "/experience",   changeFrequency: "yearly",   priority: 0.8 },
  { path: "/achievements", changeFrequency: "monthly",  priority: 0.8 },
  { path: "/contact",      changeFrequency: "yearly",   priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
