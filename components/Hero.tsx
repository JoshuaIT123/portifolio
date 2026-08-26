"use client";

import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/PillButton";
import { Avatar } from "@/components/Avatar";
import { profile } from "@/lib/site";

type HeroProps = {
  statusText: string;
  role: string;
  headline: string;
  headlineShort: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
};

export function Hero({
  statusText,
  role,
  headline,
  headlineShort,
  email,
  githubUrl,
  linkedinUrl,
}: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinkClass =
    "inline-flex items-center gap-2.5 rounded-full border border-card-border bg-card/50 px-5 py-2.5 text-sm font-medium text-muted transition-all duration-300 hover:text-accent hover:border-accent/40 hover:-translate-y-0.5";
  const socials = [
    { label: "GitHub", href: githubUrl, Icon: SiGithub },
    { label: "LinkedIn", href: linkedinUrl, Icon: FaLinkedin },
    {
      label: "Email",
      href: email ? `mailto:${email}` : "",
      Icon: FaEnvelope,
    },
  ].filter((s) => s.href);

  return (
    <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
      {/* Text content */}
      <div className="flex-1 text-center lg:text-left">
        <FadeUp delay={0.1}>
          <p
            className="mb-5 text-base font-medium tracking-wide"
            style={{ color: "var(--accent)" }}
          >
            Hi, my name is
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-primary md:text-6xl lg:text-7xl">
            {mounted ? (
              <>
                <span className="md:hidden">{headlineShort.split(".")[0]}.</span>
                <span className="hidden md:inline">Joshua.</span>
              </>
            ) : (
              <span className="invisible">Joshua.</span>
            )}
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h2 className="mt-2 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.15] text-muted/80 md:text-5xl lg:text-6xl">
            {role.split("&")[0]}&amp;
          </h2>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted lg:text-xl">
            I build web applications, fintech platforms &amp; Bitcoin Lightning
            Network solutions. I&apos;m passionate about creating great digital
            experiences and driving financial innovation in Africa.
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <PillButton
              variant="primary"
              href={email ? `mailto:${email}` : "/contact"}
            >
              Get In Touch
            </PillButton>
            <PillButton variant="secondary" href="/projects">
              View My Work
            </PillButton>
          </div>
        </FadeUp>

        <FadeUp delay={0.6}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={socialLinkClass}
              >
                <Icon aria-hidden="true" className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Profile photo */}
      <FadeUp delay={0.3} className="hidden lg:block">
        <div className="relative" style={{ animation: "float 5s ease-in-out infinite" }}>
          <div
            className="rounded-full p-1"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, transparent 50%, var(--accent) 100%)",
              opacity: 0.6,
            }}
          >
            <div className="rounded-full bg-bg p-1">
              <Avatar
                src={profile.avatar}
                alt={profile.avatarAlt}
                size={400}
                className="size-[20rem] xl:size-[24rem]"
                priority
              />
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
