import type { Metadata } from "next";

import { AchievementStats } from "@/components/achievements/AchievementStats";
import { AchievementsView } from "@/components/achievements/AchievementsView";
import { FeaturedAchievement } from "@/components/achievements/FeaturedAchievement";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/FadeUp";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import {
  featuredAchievements,
  homepageAchievements,
  orderedAchievements,
} from "@/lib/achievements";
import { buildBreadcrumbJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Achievements",
  description: `Certifications, awards, competitions and leadership programs completed by ${siteConfig.name}.`,
  alternates: { canonical: "/achievements" },
  openGraph: {
    title: `Achievements | ${siteConfig.name}`,
    description: `Certifications, awards, competitions and leadership programs completed by ${siteConfig.name}.`,
    url: "/achievements",
  },
};

export default function AchievementsPage() {
  const breadcrumb = buildBreadcrumbJsonLd("/achievements");
  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <Breadcrumbs />
      <section className="px-8 py-16 md:px-12 md:py-24 lg:px-20">
        <FadeUp>
          <SectionHeading large>Achievements &amp; Recognition</SectionHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Certifications, competitions and programs that back the skills
            above with evidence.
          </p>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-12">
          <AchievementStats />
        </FadeUp>

        {featuredAchievements[0] && (
          <FadeUp delay={0.12} className="mt-14">
            <FeaturedAchievement achievement={featuredAchievements[0]} />
          </FadeUp>
        )}

        <FadeUp delay={0.16} className="mt-14">
          <AchievementsView
            highlights={homepageAchievements}
            all={orderedAchievements}
          />
        </FadeUp>
      </section>
    </>
  );
}
