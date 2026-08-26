import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/* Dynamic robots.txt — allows all crawlers, blocks private routes, points to sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
