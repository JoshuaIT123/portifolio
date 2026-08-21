import { ArrowUpRight } from "lucide-react";
import { TechList } from "@/components/TechList";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  href: string;
};

/**
 * Compact project card — same card language as the featured WorkPreviewCard
 * (bg-card, thin border, rounded corners, lime hover glow, circular
 * arrow-up-right link) in a smaller footprint for the project grid.
 */
export function ProjectCard({ title, description, tech, href }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-card border border-card-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_48px_color-mix(in_srgb,var(--accent)_15%,transparent)]">
      {/* Circular "view project" link, top-right */}
      <a
        href={href}
        aria-label={`View ${title} on GitHub`}
        className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full bg-bg text-primary transition-colors duration-200 hover:bg-accent hover:text-bg"
      >
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>

      <h3 className="max-w-[calc(100%-2.75rem)] font-heading text-lg font-medium leading-snug text-primary">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <TechList items={tech} size="sm" className="mt-auto pt-6" />
    </article>
  );
}
