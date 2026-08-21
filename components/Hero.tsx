import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/PillButton";
import { StatusBadge } from "@/components/StatusBadge";

type Cta = {
  label: string;
  href: string;
};

type HeroProps = {
  badgeText: string;
  headline: string;
  primaryCta: Cta;
  secondaryCta: Cta;
};

/**
 * Hero: status badge -> headline -> CTA row, each staggered via FadeUp.
 * Server component; only the FadeUp wrappers are client-side.
 */
export function Hero({
  badgeText,
  headline,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <div>
      <FadeUp>
        <StatusBadge text={badgeText} />
      </FadeUp>

      {/* Single h1 per page. Desktop ~48-56px, mobile 30px, max-w so it
          wraps to two lines on desktop. */}
      <FadeUp delay={0.1}>
        <h1 className="mt-6 max-w-[500px] font-heading text-[30px] font-medium leading-[1.15] text-primary md:text-[48px] xl:text-[56px]">
          {headline}
        </h1>
      </FadeUp>

      {/* CTAs stack full-width below `sm`, side-by-side above */}
      <FadeUp delay={0.2}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
  );
}
