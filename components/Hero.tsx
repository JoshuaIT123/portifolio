import { Avatar } from "@/components/Avatar";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/PillButton";

type Cta = {
  label: string;
  href: string;
};

type HeroProps = {
  avatarSrc: string;
  avatarAlt: string;
  /** Full display name — rendered once, uppercase, as the page h1 */
  fullName: string;
  role: string;
  headline: string;
  primaryCta: Cta;
  secondaryCta: Cta;
};

/**
 * Hero layout: brand block + big statement + CTAs first, profile media
 * after (below on mobile, right-hand side on desktop).
 * Server component; only the FadeUp wrappers are client-side.
 */
export function Hero({
  avatarSrc,
  avatarAlt,
  fullName,
  role,
  headline,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
      {/* Left column */}
      <div>
        {/* Consolidated brand block — full name appears once here */}
        <FadeUp>
          <h1 className="text-xl font-bold uppercase tracking-wider text-primary">
            {fullName}
          </h1>
          <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            {role}
          </p>
        </FadeUp>

        {/* Primary statement — scaled for balanced, natural wrapping */}
        <FadeUp delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-[1.25] tracking-tight text-primary sm:text-4xl md:mt-8 md:text-5xl xl:text-[56px]">
            {headline}
          </h2>
        </FadeUp>

        {/* Uniform CTA row — tight top spacing keeps it above the fold */}
        <FadeUp delay={0.2}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-10">
            <PillButton
              variant="primary"
              href={primaryCta.href}
              className="w-full sm:w-auto"
            >
              {primaryCta.label}
            </PillButton>
            <PillButton
              variant="secondary"
              href={secondaryCta.href}
              className="w-full sm:w-auto"
            >
              {secondaryCta.label}
            </PillButton>
          </div>
        </FadeUp>
      </div>

      {/* Profile media — right side on desktop, below the text on mobile */}
      <FadeUp delay={0.16} className="md:shrink-0">
        <Avatar
          src={avatarSrc}
          alt={avatarAlt}
          priority
          className="size-48 md:size-80"
        />
      </FadeUp>
    </div>
  );
}
