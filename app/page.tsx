import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

import { AchievementStats } from "@/components/achievements/AchievementStats";
import { AchievementsView } from "@/components/achievements/AchievementsView";
import { FeaturedAchievement } from "@/components/achievements/FeaturedAchievement";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FadeUp } from "@/components/FadeUp";
import { getTechIcon } from "@/lib/tech-icons";
import {
  homepageAchievements,
  featuredAchievements,
  orderedAchievements,
} from "@/lib/achievements";
import { Hero } from "@/components/Hero";
import { PillButton } from "@/components/PillButton";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TechList } from "@/components/TechList";
import { TechMarquee } from "@/components/TechMarquee";
import {
  aboutContent,
  experience,
  finalCta,
  githubSection,
  heroContent,
  projects,
  siteConfig,
  tools,
} from "@/lib/site";

export const metadata: Metadata = {
  // absolute: bypasses the layout's "%s — Arsene Mucyuneje" template
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      {/* Intro / hero — the page's single <h1> lives inside */}
      <section
        id="intro"
        className="scroll-mt-24 px-6 pb-24 pt-28 md:px-12 md:pb-16 md:pt-[16vh] lg:pr-20"
      >
        <Hero
          statusText="Available for projects"
          role={heroContent.role}
          headline={heroContent.headline}
          headlineShort={heroContent.headlineShort}
          email={siteConfig.email}
          githubUrl={siteConfig.githubUrl}
          linkedinUrl={siteConfig.linkedinUrl}
        />
      </section>

      {/* Mobile: static pills of the strongest technologies — clean, no
          cut-off motion; the animated marquee takes over on md+ */}
      <div className="flex flex-wrap items-center justify-center gap-2 px-6 md:hidden">
        {["React", "Next.js", "Node.js", "Python"].map((name) => {
          const Icon = getTechIcon(name);
          return (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-pill border border-card-border bg-card px-3.5 py-1.5 text-sm font-medium text-primary/85"
            >
              {Icon && <Icon aria-hidden="true" className="size-4" />}
              {name}
            </span>
          );
        })}
      </div>

      {/* Tech marquee — muted auto-scrolling brand strip (md+ only) */}
      <div className="hidden md:block">
        <TechMarquee />
      </div>

      {/* Selected work — curated 3-project preview */}
      <section id="work" className="scroll-mt-24 px-6 py-14 md:px-12 md:py-20 lg:pr-20">
        <FadeUp>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionHeading large>Selected Work</SectionHeading>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                A selection of products, applications and systems I&apos;ve built.
              </p>
            </div>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 pb-1 text-sm font-medium text-primary/80 transition-colors duration-200 hover:text-accent"
            >
              View more work
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-1"
              />
            </a>
          </div>
        </FadeUp>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <FadeUp key={project.title} delay={0.08 + i * 0.08}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                href={project.href}
              />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* About — bio left, icon-led metadata right */}
      <section id="about" className="scroll-mt-24 px-6 py-14 md:px-12 md:py-20 lg:pr-20">
        <FadeUp>
          <SectionHeading large>About</SectionHeading>
        </FadeUp>
        <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
          <FadeUp delay={0.08}>
            <p className="max-w-[36rem] text-lg leading-relaxed text-primary/85">
              {aboutContent.intro}
            </p>
          </FadeUp>
          <FadeUp delay={0.16}>
            <dl className="flex flex-col space-y-6">
              {aboutContent.facts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <fact.icon
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-muted"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-primary">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </section>

      {/* Tools / stack */}
      <section id="skills" className="scroll-mt-24 px-6 py-14 md:px-12 md:py-20 lg:pr-20">
        <FadeUp>
          <SectionHeading large>Tools I Build With</SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            The tools and technologies I reach for daily.
          </p>
        </FadeUp>
        <ul className="mt-8 divide-y divide-card-border border-t border-card-border">
          {tools.map((tool, i) => (
            <li
              key={tool.category}
              className="grid gap-1 py-5 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <FadeUp delay={i * 0.05}>
                <span className="block pt-0.5 text-xs uppercase tracking-[0.18em] text-muted">
                  {tool.category}
                </span>
              </FadeUp>
              <FadeUp delay={0.05 + i * 0.05}>
                <TechList items={tool.items} />
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="scroll-mt-24 px-6 py-14 md:px-12 md:py-20 lg:pr-20"
      >
        <FadeUp>
          <SectionHeading large>Experience</SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Roles, teams and programs that shaped how I work.
          </p>
        </FadeUp>
        <ExperienceTimeline entries={experience} />
      </section>

      {/* Achievements & Recognition — evidence behind the expertise */}
      <section
        id="achievements"
        className="scroll-mt-24 px-6 py-14 md:px-12 md:py-20 lg:pr-20"
      >
        <FadeUp>
          <SectionHeading large>Achievements &amp; Recognition</SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Certifications, competitions and programs that back the skills
            above with evidence.
          </p>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-10">
          <AchievementStats />
        </FadeUp>

        {/* Tier 1 recognition leads */}
        {featuredAchievements[0] && (
          <FadeUp delay={0.12} className="mt-14">
            <FeaturedAchievement achievement={featuredAchievements[0]} />
          </FadeUp>
        )}

        {/* Highlights <-> full collection toggle */}
        <FadeUp delay={0.16} className="mt-12">
          <AchievementsView
            highlights={homepageAchievements}
            all={orderedAchievements}
          />
        </FadeUp>
      </section>

      {/* GitHub */}
      <section aria-label="GitHub" className="px-6 pb-24 md:px-12 lg:pr-20">
        <FadeUp>
          <div className="rounded-card border border-card-border bg-card p-8 md:p-14">
            <h2 className="max-w-[35rem] font-heading text-3xl font-medium leading-tight text-primary md:text-4xl">
              {githubSection.heading}
            </h2>
            <p className="mt-4 max-w-[27.5rem] text-sm leading-relaxed text-muted md:text-base">
              {githubSection.description}
            </p>
            <PillButton
              variant="primary"
              href={siteConfig.githubUrl}
              className="mt-10"
            >
              {githubSection.cta}
            </PillButton>
          </div>
        </FadeUp>
      </section>

      {/* Final CTA / contact */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 py-14 md:px-12 md:py-20 lg:pr-20"
      >
        <FadeUp>
          <h2 className="font-heading text-[2rem] font-medium uppercase leading-[1.05] text-primary md:text-[3.5rem]">
            {finalCta.headingLines[0]}
            <br />
            {finalCta.headingLines[1]}
          </h2>
          <p className="mt-6 max-w-[26.25rem] text-sm leading-relaxed text-muted md:text-base">
            {finalCta.description}
          </p>
          <PillButton variant="primary" href={finalCta.href} className="mt-10">
            {finalCta.cta}
          </PillButton>
          {/* Only real links are shown — no invented contact channels */}
          <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-muted">
            <MapPin aria-hidden="true" className="size-3.5" />
            Rwanda · Available for remote work
          </p>

          {/* Secondary socials — kept out of the hero to reduce noise */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            {[
              { label: "Chat on WhatsApp", href: siteConfig.whatsappUrl, Icon: FaWhatsapp },
              { label: "Instagram profile", href: siteConfig.instagramUrl, Icon: FaInstagram },
            ]
              .filter((s) => s.href)
              .map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </a>
              ))}
          </div>
        </FadeUp>
      </section>
    </>
  );
}
