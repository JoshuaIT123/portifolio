import type { Metadata } from "next";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

import { FadeUp } from "@/components/FadeUp";
import { getTechIcon } from "@/lib/tech-icons";
import { Hero } from "@/components/Hero";
import { PillButton } from "@/components/PillButton";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TechMarquee } from "@/components/TechMarquee";
import {
  heroContent,
  highlightedTech,
  projects,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const quickLinks = [
  {
    label: "About",
    href: "/about",
    description: "Learn about my background, skills and what I do.",
  },
  {
    label: "Projects",
    href: "/projects",
    description: "See the products, apps and systems I've built.",
  },
  {
    label: "Experience",
    href: "/experience",
    description: "My professional timeline and leadership programs.",
  },
  {
    label: "Achievements",
    href: "/achievements",
    description: "Certifications, awards and recognitions.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch for projects or collaboration.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-20 pt-20 md:px-10 md:pt-32 lg:px-20">
        <Hero
          statusText="Open to internships"
          role={heroContent.role}
          headline={heroContent.headline}
          headlineShort={heroContent.headlineShort}
          email={siteConfig.email}
          githubUrl={siteConfig.githubUrl}
          linkedinUrl={siteConfig.linkedinUrl}
        />
      </section>

      {/* Mobile tech pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 px-6 md:hidden">
        {highlightedTech.map((name) => {
          const Icon = getTechIcon(name);
          return (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-pill border border-card-border bg-card/50 px-4 py-2 text-sm font-medium text-muted transition-all duration-300 hover:text-accent hover:border-accent/40"
            >
              {Icon && <Icon aria-hidden="true" className="size-4" />}
              {name}
            </span>
          );
        })}
      </div>

      {/* Tech marquee */}
      <div className="hidden md:block">
        <TechMarquee />
      </div>

      {/* Selected work */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-20">
        <FadeUp>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionHeading large>Selected Work</SectionHeading>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl">
                A selection of products, applications and systems I&apos;ve
                built.
              </p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 pb-1 text-sm font-medium transition-colors duration-300 hover:text-accent"
              style={{ color: "var(--text-muted)" }}
            >
              View all projects
              <FaArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeUp>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <FadeUp key={project.title} delay={0.1 + i * 0.1} direction="scale">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                demoUrl={project.demoUrl}
                sourceUrl={project.sourceUrl}
                gallery={project.gallery ?? []}
              />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-20">
        <FadeUp>
          <SectionHeading large>Explore</SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl">
            Learn more about me, my work and how to get in touch.
          </p>
        </FadeUp>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link, i) => (
            <FadeUp key={link.href} delay={0.1 + i * 0.06} direction="scale">
              <Link
                href={link.href}
                className="group flex flex-col rounded-card border border-card-border bg-card/40 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_10px_40px_-15px_var(--accent)]"
              >
                <h3 className="font-heading text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                  {link.label}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {link.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ color: "var(--accent)" }}>
                  View
                  <FaArrowRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* GitHub CTA */}
      <section aria-label="GitHub" className="px-6 pb-24 md:px-10 lg:px-20">
        <FadeUp direction="scale">
          <div className="rounded-card border border-card-border bg-card/40 p-10 md:p-16">
            <h2 className="max-w-[38rem] font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
              I build, experiment &amp; learn in public.
            </h2>
            <p className="mt-5 max-w-[28rem] text-base leading-relaxed text-muted md:text-lg">
              Explore my projects, experiments and open-source work on GitHub.
            </p>
            <PillButton
              variant="primary"
              href={siteConfig.githubUrl}
              className="mt-12"
            >
              View GitHub
            </PillButton>
          </div>
        </FadeUp>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-20">
        <FadeUp>
          <h2 className="font-heading text-[2.5rem] font-bold uppercase leading-[1.05] text-primary md:text-[4rem]">
            Have an idea?
            <br />
            <span style={{ color: "var(--accent)" }}>Let&apos;s build it.</span>
          </h2>
          <p className="mt-8 max-w-[28rem] text-base leading-relaxed text-muted md:text-lg">
            Have a project, business problem, or idea that could become
            software?
          </p>
          <PillButton variant="primary" href="/contact" className="mt-10">
            Get In Touch
          </PillButton>
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted">
            <FaLocationDot aria-hidden="true" className="size-4" style={{ color: "var(--accent)" }} />
            Rwanda · Available for remote work
          </p>
        </FadeUp>
      </section>
    </>
  );
}
