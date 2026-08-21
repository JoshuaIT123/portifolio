import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import type { Project } from "@/lib/site";
import { getTechIcon } from "@/lib/tech-icons";

type ProjectCardProps = Project;

/**
 * Curated project showcase card: 16:10 preview image on top, title with a
 * subtle arrow indicator, one-line description and a quiet tech line.
 * Hover: image scales ~1.03, border eases toward the accent, arrow nudges.
 */
export function ProjectCard({
  title,
  description,
  image,
  tech,
  href,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-card border border-card-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_40px_-12px_color-mix(in_srgb,var(--accent)_30%,transparent)]"
    >
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
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

        {/* Footer pinned to the card bottom so all cards align evenly:
            tech-stack chips on the left, Visit affordance on the right */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
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
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary/80 transition-colors duration-200 group-hover:text-accent"
          >
            Visit
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </a>
  );
}
