import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/FadeUp";
import { JsonLd } from "@/components/JsonLd";
import { PillButton } from "@/components/PillButton";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { buildBreadcrumbJsonLd } from "@/lib/json-ld";
import { projects, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore projects built by ${siteConfig.name} — streaming platforms, booking systems, fintech dashboards and full-stack web applications.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: `Explore projects built by ${siteConfig.name} — streaming platforms, booking systems, fintech dashboards and full-stack web applications.`,
    url: "/projects",
  },
};

export default function ProjectsPage() {
  const breadcrumb = buildBreadcrumbJsonLd("/projects");
  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <Breadcrumbs />
      <section className="px-8 py-16 md:px-12 md:py-24 lg:px-20">
        <FadeUp>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionHeading large>Projects</SectionHeading>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                A selection of products, applications and systems I&apos;ve
                built.
              </p>
            </div>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 pb-1 text-sm font-medium text-primary/80 transition-colors duration-200 hover:text-accent"
            >
              View more on GitHub
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={0.08 + i * 0.1} direction="scale">
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

        <FadeUp delay={0.4} className="mt-16">
          <div className="rounded-card border border-card-border bg-card p-10 md:p-16">
            <h2 className="max-w-[38rem] font-heading text-4xl font-medium leading-tight text-primary md:text-5xl">
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
              View GitHub ↗
            </PillButton>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
