import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FadeUp } from "@/components/FadeUp";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { buildBreadcrumbJsonLd } from "@/lib/json-ld";
import { experience, leadershipPrograms, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
    description: `Professional experience of ${siteConfig.name} — roles, programs and projects that shaped how I work as a software developer and fintech enthusiast.`,
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: `Experience | ${siteConfig.name}`,
  description: `Professional experience of ${siteConfig.name} — roles, programs and projects that shaped how I work as a software developer and fintech enthusiast.`,
    url: "/experience",
  },
};

export default function ExperiencePage() {
  const breadcrumb = buildBreadcrumbJsonLd("/experience");
  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <Breadcrumbs />
      <section className="px-6 py-14 md:px-10 md:py-20 lg:px-20">
        <FadeUp>
          <SectionHeading large>Experience</SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Roles, teams and programs that shaped how I work.
          </p>
        </FadeUp>
        <ExperienceTimeline
          entries={experience}
          leadership={leadershipPrograms}
        />
      </section>
    </>
  );
}
