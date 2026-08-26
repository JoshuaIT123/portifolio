import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";

import { ProjectGallery } from "@/components/ProjectGallery";
import type { Project } from "@/lib/site";
import { getTechIcon } from "@/lib/tech-icons";

type ProjectCardProps = Project;

export function ProjectCard({
  title,
  description,
  image,
  tech,
  demoUrl,
  sourceUrl,
  gallery = [],
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-card-border bg-card/40 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_10px_60px_-15px_var(--accent)]">
      <div className="relative aspect-[2/1] overflow-hidden">
        <Image
          src={image}
          alt={`${title} — project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
        />
      </div>

      <ProjectGallery title={title} images={gallery} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
            {title}
          </h3>
          <FaArrowUpRightFromSquare
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-accent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <ul
            className="flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-1.5"
            aria-label="Tech stack"
          >
            {tech.map((t) => {
              const Icon = getTechIcon(t);
              return (
                <li
                  key={t}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-pill border border-card-border bg-bg-light/50 px-2.5 py-1 text-xs font-medium tracking-wide text-muted"
                >
                  {Icon && <Icon aria-hidden="true" className="size-3" />}
                  {t}
                </li>
              );
            })}
          </ul>

          {demoUrl || sourceUrl ? (
            <div className="flex shrink-0 items-center gap-3">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-primary transition-colors duration-200 hover:text-accent"
                >
                  Live Demo
                  <FaArrowUpRightFromSquare aria-hidden="true" className="size-3.5" />
                </a>
              )}
              {sourceUrl && (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
                >
                  Source
                  <FaArrowUpRightFromSquare aria-hidden="true" className="size-3.5" />
                </a>
              )}
            </div>
          ) : (
            <span className="shrink-0 whitespace-nowrap text-sm text-muted/60">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
