/* ---------------------------------------------------------------------------
 * JSON-LD structured data builder
 * Produces a single @graph with three linked entities:
 *   Person                — who Arsene is (identity for the knowledge panel)
 *   WebSite               — the site entity, publisher-linked to the Person
 *   SiteNavigationElement — named section links; explicit hierarchy signals
 *                           that assist Google Sitelinks generation
 * Pure data module: no React, trivially unit-testable.
 * ------------------------------------------------------------------------- */

import { profile, seoKeywords, siteConfig } from "@/lib/site";
import type { NavItem } from "@/lib/site";

type BuildJsonLdArgs = {
  /** Nav items passed in so the graph always mirrors the rendered menu */
  navItems: NavItem[];
};

export function buildJsonLd({ navItems }: BuildJsonLdArgs) {
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        // Historical name ordering used across older profiles/pages —
        // helps search engines reconcile both spellings to one entity
        alternateName: "Arsene Mucyuneje Hirwa",
        jobTitle: siteConfig.role,
        description: siteConfig.description,
        url: siteConfig.url,
        email: `mailto:${siteConfig.email}`,
        image: `${siteConfig.url}${profile.avatar}`,
        address: {
          "@type": "PostalAddress",
          addressCountry: "RW",
        },
        sameAs: [
          siteConfig.githubUrl,
          siteConfig.linkedinUrl,
          siteConfig.instagramUrl,
        ],
        knowsAbout: seoKeywords,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-US",
        publisher: { "@id": personId },
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${siteConfig.url}/#navigation`,
        name: "Primary navigation",
        itemListElement: navItems.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.label,
          // Anchors like "/#work" resolve against the canonical origin so
          // Google can map each named section of the single-page site
          url: `${siteConfig.url}${item.href}`,
        })),
      },
    ],
  };
}
