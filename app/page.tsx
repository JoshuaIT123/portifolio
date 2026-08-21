import type { Metadata } from "next";

import { Avatar } from "@/components/Avatar";
import { FadeUp } from "@/components/FadeUp";
import { Hero } from "@/components/Hero";
import { PillButton } from "@/components/PillButton";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TechList } from "@/components/TechList";
import { WorkPreviewCard } from "@/components/WorkPreviewCard";
import {
  aboutContent,
  achievements,
  experience,
  finalCta,
  githubSection,
  heroContent,
  profile,
  projects,
  services,
  siteConfig,
  tools,
} from "@/lib/site";

export const metadata: Metadata = {
  // absolute: bypasses the layout's "%s — Arsene Mucyuneje" template
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
};

export default function HomePage() {
  const [featured, ...rest] = projects;

  return (
    <>
      {/* Intro / hero — the page's single <h1> lives inside */}
      <section
        id="intro"
        className="scroll-mt-24 px-6 pb-24 pt-28 md:px-12 md:pt-[24vh] lg:pr-20"
      >
        <Hero
          avatarSrc={profile.avatar}
          avatarAlt={profile.avatarAlt}
          fullName={heroContent.fullName}
          role={heroContent.role}
          headline={heroContent.headline}
          primaryCta={heroContent.primaryCta}
          secondaryCta={heroContent.secondaryCta}
        />
      </section>

      {/* Selected work — featured project card + project grid */}
      <section id="work" className="scroll-mt-24 px-6 pb-24 md:px-12 lg:pr-20">
        <FadeUp>
          <SectionHeading>Selected Work</SectionHeading>
        </FadeUp>
        <div className="mt-8">
          <WorkPreviewCard
            image="/images/work-placeholder.svg"
            alt={`${featured.title} — project preview`}
            href={featured.href}
            ctaLabel="View project"
            ctaHref={featured.href}
          />
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <FadeUp key={project.title} delay={0.1 + i * 0.08}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                href={project.href}
              />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 px-6 pb-24 md:px-12 lg:pr-20">
        <FadeUp>
          <SectionHeading>About</SectionHeading>
        </FadeUp>
        <div className="mt-8 gap-12 md:grid md:grid-cols-[1fr_220px]">
          <FadeUp delay={0.08}>
            <div className="flex items-start gap-5">
              <Avatar
                src={profile.avatar}
                alt={profile.avatarAlt}
                className="size-18"
              />
              <p className="max-w-[520px] text-lg leading-relaxed text-primary">
                {aboutContent.intro}
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.16}>
            <dl className="mt-10 flex flex-col gap-6 md:mt-1">
              {aboutContent.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-primary">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </section>

      {/* What I do */}
      <section aria-label="What I do" className="px-6 pb-24 md:px-12 lg:pr-20">
        <FadeUp>
          <SectionHeading>What I Do</SectionHeading>
        </FadeUp>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={0.08 + i * 0.08}>
              {/* h2 label above; service names are h3 to keep hierarchy */}
              <div className="border-t border-card-border pt-6">
                <h3 className="font-heading text-lg font-medium text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Tools / stack */}
      <section id="skills" className="scroll-mt-24 px-6 pb-24 md:px-12 lg:pr-20">
        <FadeUp>
          <SectionHeading>Tools I Build With</SectionHeading>
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

      {/* Experience + achievements */}
      <section
        id="experience"
        className="scroll-mt-24 px-6 pb-24 md:px-12 lg:pr-20"
      >
        <FadeUp>
          <SectionHeading>Experience</SectionHeading>
        </FadeUp>
        <ul className="mt-8 divide-y divide-card-border border-t border-card-border">
          {experience.map((entry, i) => (
            <li key={entry.org} className="grid gap-2 py-6 md:grid-cols-[280px_1fr] md:gap-10">
              <FadeUp delay={i * 0.05}>
                <h3 className="font-heading text-base font-medium text-primary">
                  {entry.org}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                  {entry.role}
                </p>
              </FadeUp>
              <FadeUp delay={0.05 + i * 0.05}>
                <p className="max-w-[480px] text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              </FadeUp>
            </li>
          ))}
        </ul>

        {/* Achievements */}
        <div className="mt-20">
          <FadeUp>
            <SectionHeading as="p">Achievements</SectionHeading>
          </FadeUp>
          <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {achievements.map((achievement, i) => (
              <li key={achievement.title}>
                <FadeUp delay={i * 0.06}>
                  <div className="border-t border-card-border pt-5">
                    <h3 className="font-heading text-base font-medium text-primary">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{achievement.result}</p>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GitHub */}
      <section aria-label="GitHub" className="px-6 pb-24 md:px-12 lg:pr-20">
        <FadeUp>
          <div className="rounded-card border border-card-border bg-card p-8 md:p-14">
            <h2 className="max-w-[560px] font-heading text-3xl font-medium leading-tight text-primary md:text-4xl">
              {githubSection.heading}
            </h2>
            <p className="mt-4 max-w-[440px] text-sm leading-relaxed text-muted md:text-base">
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
        className="scroll-mt-24 px-6 pb-28 pt-4 md:px-12 lg:pr-20"
      >
        <FadeUp>
          <h2 className="font-heading text-[32px] font-medium uppercase leading-[1.05] text-primary md:text-[56px]">
            {finalCta.headingLines[0]}
            <br />
            {finalCta.headingLines[1]}
          </h2>
          <p className="mt-6 max-w-[420px] text-sm leading-relaxed text-muted md:text-base">
            {finalCta.description}
          </p>
          <PillButton variant="primary" href={finalCta.href} className="mt-10">
            {finalCta.cta}
          </PillButton>
        </FadeUp>
      </section>
    </>
  );
}
