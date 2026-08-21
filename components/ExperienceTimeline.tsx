import Image from "next/image";

import { FadeUp } from "@/components/FadeUp";
import type { ExperienceEntry } from "@/lib/site";

type ExperienceTimelineProps = {
  entries: ExperienceEntry[];
};

function initials(org: string): string {
  return org
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Vertical experience timeline: thin axis on the left with lime node dots,
 * pill tags above each role, a compact logo slot beside the company name
 * (initials fallback when no logo file exists) and a bulleted list of key
 * achievements under the description.
 */
export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <div className="mt-12 border-l-2 border-card-border pl-8">
      {entries.map((entry, i) => (
        <div key={entry.org} className="relative pb-14 last:pb-0">
          {/* Timeline node — the company logo itself sits on the axis
              (initials fallback when no logo file exists) */}
          <span className="absolute -left-[calc(2rem+23px)] top-3 flex size-12 items-center justify-center overflow-hidden rounded-full border border-card-border bg-bg">
            {entry.logo ? (
              <Image
                src={entry.logo}
                alt=""
                width={48}
                height={48}
                className="size-full object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="font-heading text-xs font-bold text-accent"
              >
                {initials(entry.org)}
              </span>
            )}
          </span>

          <FadeUp delay={i * 0.05}>
            {entry.date && (
              <p className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-muted">
                {entry.date}
              </p>
            )}

            {entry.tags && entry.tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tags">
                {entry.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-pill bg-card px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4">
              <h3 className="font-heading text-lg font-semibold leading-tight text-primary">
                {entry.role}
              </h3>
              <p className="mt-0.5 text-sm text-muted">{entry.org}</p>
            </div>

            <p className="mt-4 max-w-[34rem] text-sm leading-relaxed text-primary/80">
              {entry.description}
            </p>

            {entry.responsibilities && (
              <ul className="mt-3 max-w-[34rem] list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent/70">
                {entry.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </FadeUp>
        </div>
      ))}
    </div>
  );
}
