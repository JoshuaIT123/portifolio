import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/PillButton";

type WorkPreviewCardProps = {
  /** Path to the project screenshot. Omit to render the styled placeholder. */
  image?: string;
  /** Required — describe the screenshot for screen readers & SEO. */
  alt: string;
  /** "View project" link target (circular arrow button). */
  href?: string;
  /** Floating pill CTA overlapping the card's bottom-left edge. */
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * Featured-work preview card: rounded dark card with a 4:3 media area,
 * a circular "view project" link in the top-right, and a floating
 * primary pill button overlapping the bottom-left edge.
 */
export function WorkPreviewCard({
  image,
  alt,
  href = "#",
  ctaLabel,
  ctaHref = "#contact",
}: WorkPreviewCardProps) {
  return (
    <FadeUp delay={0.3}>
      <section aria-label="Featured work" className="relative pb-8">
        <div className="group relative rounded-card border border-card-border bg-card p-2.5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_48px_color-mix(in_srgb,var(--accent)_15%,transparent)]">
          {/* Media area — fixed aspect ratio prevents layout shift (CLS) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-bg-secondary">
            {image ? (
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              /* Placeholder shown until an image is passed in */
              <div
                role="img"
                aria-label={alt}
                className="flex h-full w-full items-center justify-center border border-dashed border-card-border"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-muted">
                  Project preview
                </span>
              </div>
            )}
          </div>

          {/* Circular "view project" link, top-right */}
          <a
            href={href}
            aria-label="View project"
            className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full bg-bg text-primary transition-colors duration-200 hover:bg-accent hover:text-bg"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          {/* Floating CTA overlapping the card edge */}
          {ctaLabel && (
            <div className="absolute -bottom-5 left-6">
              <PillButton variant="primary" href={ctaHref}>
                {ctaLabel}
              </PillButton>
            </div>
          )}
        </div>
      </section>
    </FadeUp>
  );
}
