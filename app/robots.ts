import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/* ---------------------------------------------------------------------------
 * Dynamic robots.txt — served at https://mucyuneje.space/robots.txt
 * Allows all crawlers everywhere, blocks private route patterns (future-
 * proofing: /api and /admin routes don't exist yet but stay covered if
 * they're ever added), and points every crawler at the sitemap.
 * ------------------------------------------------------------------------- */
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
