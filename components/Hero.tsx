import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa6";

import { FadeUp } from "@/components/FadeUp";

type HeroProps = {
  /** Identity badge — only rendered below lg (sidebar shows the name there) */
  identity: string;
  /** Role + base line — rendered as a bold lime kicker */
  role: string;
  headline: string;
  /** Shorter headline variant shown below the md breakpoint */
  headlineShort: string;
  /** Social/direct links — empty values render no icon (no dead links) */
  githubUrl: string;
  linkedinUrl: string;
  whatsappUrl: string;
  instagramUrl: string;
  email: string;
};

/**
 * Hero: (mobile/tablet) identity -> role kicker -> full-width headline ->
 * row of plain pill icon buttons (GitHub, LinkedIn, WhatsApp, Instagram,
 * Email). No imagery, no résumé button; the sidebar carries identity on
 * large screens.
 * Server component; only the FadeUp wrappers are client-side.
 */
export function Hero({
  identity,
  role,
  headline,
  headlineShort,
  githubUrl,
  linkedinUrl,
  whatsappUrl,
  instagramUrl,
  email,
}: HeroProps) {
  /* Plain pill-shaped icon buttons — no borders, subtle hover fill */
  const socialLinkClass =
    "rounded-full p-2.5 text-muted transition-colors duration-200 hover:bg-card/70 hover:text-primary";
  const socials = [
    { label: "GitHub profile", href: githubUrl, external: true, Icon: SiGithub },
    { label: "LinkedIn profile", href: linkedinUrl, external: true, Icon: FaLinkedin },
    { label: "Chat on WhatsApp", href: whatsappUrl, external: true, Icon: FaWhatsapp },
    { label: "Instagram profile", href: instagramUrl, external: true, Icon: FaInstagram },
    { label: "Send an email", href: email ? `mailto:${email}` : "", external: false, Icon: Mail },
  ].filter((s) => s.href);

  return (
    <div>
      {/* Identity badge — mobile/tablet only; lg+ has the sidebar name.
          Sentence case, tracked out — a refined brand mark */}
      <FadeUp>
        <p className="mb-3 block text-[0.8125rem] font-semibold tracking-[0.12em] text-muted lg:hidden">
          {identity}
        </p>
      </FadeUp>

      {/* Role kicker — neutral muted gray; lime is reserved for the CTA */}
      <FadeUp delay={0.08}>
        <p className="mb-4 block text-base font-bold uppercase tracking-wider text-muted sm:text-lg">
          {role}
        </p>
      </FadeUp>

      {/* Primary headline — the page's single h1. Short variant on mobile
          so it never runs past ~3 lines; full statement from md up.
          No max-width: text spans the full content column. */}
      <FadeUp delay={0.14}>
        <h1 className="mb-8 text-[clamp(2.25rem,8vw,2.6rem)] font-bold leading-[1.02] tracking-tight text-primary sm:text-4xl sm:leading-[1.1] md:text-[2.6rem] md:leading-[1.1] lg:text-[4.5rem] lg:leading-[1.05]">
          <span className="md:hidden">{headlineShort}</span>
          <span className="hidden md:inline">{headline}</span>
        </h1>
      </FadeUp>

      {/* Action row: social + direct-contact icon buttons.
          Icons sit at 70% on mobile so they never compete with the h1 */}
      <FadeUp delay={0.2}>
        <div className="flex flex-wrap items-center gap-3 opacity-70 md:opacity-100">
          {socials.map(({ label, href, external, Icon }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={label}
              className={socialLinkClass}
            >
              <Icon aria-hidden="true" className="size-7" />
            </a>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
