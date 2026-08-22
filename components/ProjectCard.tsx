import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { ProjectGallery } from "@/components/ProjectGallery";
import type { Project } from "@/lib/site";
import { getTechIcon } from "@/lib/tech-icons";

type ProjectCardProps = Project;

/**
 * Curated project showcase card: 16:10 preview image on top, title with a
 * subtle arrow indicator, then either a structured Problem -> Approach ->
 * Outcome case-study block (featured projects) or the one-line description.
 * Actions are explicit links — "Live Demo" (primary) and "Source Code"
 * (secondary) — so each destination stays honest and separate. Cards with
 * no public URL yet show a muted "coming soon" note instead of a dead link.
 * Hover: image scales ~1.03, border eases toward the accent, arrow nudges.
 */
export function ProjectCard({
  title,
  description,
  image,
  tech,
  demoUrl,
  sourceUrl,
  caseStudy,
  gallery = [],
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-card-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_40px_-12px_color-mix(in_srgb,var(--accent)_30%,transparent)]">
      {/* Media — the visual focus of the card */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={`${title} — project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Screenshot strip — renders nothing until gallery assets are added */}
      <ProjectGallery title={title} images={gallery} />

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-lg font-medium text-primary">
            {title}
          </h3>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>

        {/* Featured projects get the structured case study; the rest keep
            the quick one-liner */}
        {caseStudy ? (
          <dl className="mt-4 space-y-2.5">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 pt-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Problem
              </dt>
              <dd className="text-sm leading-relaxed text-primary/80">
                {caseStudy.problem}
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 pt-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Approach
              </dt>
              <dd className="text-sm leading-relaxed text-primary/80">
                {caseStudy.approach}
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 pt-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Outcome
              </dt>
              {/* TODO: add metric here — e.g. users served, screening time
                  saved, requests handled; render it under the outcome line */}
              <dd className="text-sm leading-relaxed text-primary/80">
                {caseStudy.outcome}
              </dd>
            </div>
          </dl>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}

        {/* Footer pinned to the card bottom so all cards align evenly:
            tech-stack chips on the left, explicit action links on the right */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-3 pt-5">
          <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
            {tech.map((t) => {
              const Icon = getTechIcon(t);
              return (
                <li
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-pill border border-card-border bg-bg-secondary px-2.5 py-1 text-[0.6875rem] font-medium tracking-wide text-muted"
                >
                  {Icon && <Icon aria-hidden="true" className="size-3.5" />}
                  {t}
                </li>
              );
            })}
          </ul>

          {/* Distinct destinations: live deployment vs source code */}
          {demoUrl || sourceUrl ? (
            <div className="flex shrink-0 items-center gap-4">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors duration-200 hover:text-accent"
                >
                  Live Demo
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-0.5"
                  />
                </a>
              )}
              {sourceUrl && (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
                >
                  Source Code
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              )}
            </div>
          ) : (
            /* No public URL yet — say so instead of linking to GitHub root */
            <span className="shrink-0 text-sm text-muted/70">
              Links coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
