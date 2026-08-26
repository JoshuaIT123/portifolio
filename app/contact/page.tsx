import type { Metadata } from "next";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/FadeUp";
import { JsonLd } from "@/components/JsonLd";
import { PillButton } from "@/components/PillButton";
import { SectionHeading } from "@/components/SectionHeading";
import { buildBreadcrumbJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — ${siteConfig.role} available for internships, projects and collaboration.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} — ${siteConfig.role} available for internships, projects and collaboration.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumb = buildBreadcrumbJsonLd("/contact");
  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <Breadcrumbs />
      <section className="px-8 py-16 md:px-12 md:py-24 lg:px-20">
        <FadeUp>
          <SectionHeading large>Get in Touch</SectionHeading>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-14 max-w-2xl">
            <h2 className="font-heading text-[2.5rem] font-medium uppercase leading-[1.05] text-primary md:text-[4rem]">
              Have an idea?
              <br />
              Let&apos;s build it.
            </h2>
            <p className="mt-8 max-w-[28rem] text-base leading-relaxed text-muted md:text-lg">
              Have a project, business problem, or idea that could become
              software? I&apos;m available for internships, collaborations
              and consulting.
            </p>
            <PillButton
              variant="primary"
              href={`mailto:${siteConfig.email}`}
              className="mt-12"
            >
              Send an Email ↗
            </PillButton>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted">
              <FaLocationDot aria-hidden="true" className="size-4" />
              Rwanda · Available for remote work
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.16} className="mt-14">
          <div className="flex flex-wrap items-center gap-3">
            {[
              {
                label: "Chat on WhatsApp",
                href: siteConfig.whatsappUrl,
                Icon: FaWhatsapp,
              },
              {
                label: "Instagram profile",
                href: siteConfig.instagramUrl,
                Icon: FaInstagram,
              },
            ]
              .filter((s) => s.href)
              .map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2.5 text-sm font-medium text-muted transition-all duration-300 hover:text-primary hover:scale-105"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </a>
              ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.24} className="mt-16">
          <div className="rounded-card border border-card-border bg-card p-10 md:p-12">
            <h3 className="font-heading text-xl font-semibold text-primary">
              Other ways to reach me
            </h3>
            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted w-20 shrink-0">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-primary/80 transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted w-20 shrink-0">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm text-primary/80 transition-colors hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted w-20 shrink-0">
                  GitHub
                </dt>
                <dd>
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary/80 transition-colors hover:text-accent"
                  >
                    {siteConfig.githubUrl.replace("https://", "")}
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted w-20 shrink-0">
                  LinkedIn
                </dt>
                <dd>
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary/80 transition-colors hover:text-accent"
                  >
                    {siteConfig.linkedinUrl.replace("https://", "")}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
