import type { Metadata } from "next";
import { FaCode, FaHandshake, FaLayerGroup, FaLocationDot } from "react-icons/fa6";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/FadeUp";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { TechList } from "@/components/TechList";
import { buildBreadcrumbJsonLd } from "@/lib/json-ld";
import { aboutFacts, aboutIntro, siteConfig, tools } from "@/lib/site";

const iconMap = { MapPin: FaLocationDot, Layers: FaLayerGroup, Code2: FaCode, Handshake: FaHandshake } as const;

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — ${siteConfig.role} from Rwanda building web applications, fintech solutions and digital platforms.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name} — ${siteConfig.role} from Rwanda building web applications, fintech solutions and digital platforms.`,
    url: "/about",
  },
};

export default function AboutPage() {
  const breadcrumb = buildBreadcrumbJsonLd("/about");
  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <Breadcrumbs />
      <section className="px-6 py-14 md:px-12 md:py-20 lg:px-20">
        <FadeUp>
          <SectionHeading large>About</SectionHeading>
        </FadeUp>

        <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
          <FadeUp delay={0.08}>
            <div className="space-y-6">
              <p className="max-w-[36rem] text-lg leading-relaxed text-primary/85">
                {aboutIntro}
              </p>
              <p className="max-w-[36rem] text-base leading-relaxed text-muted">
                I specialize in building full-stack web applications using React,
                Next.js, Node.js and Python. From fintech platforms to real-time
                tracking systems, I turn complex problems into practical software
                that organizations can actually use.
              </p>
              <p className="max-w-[36rem] text-base leading-relaxed text-muted">
                Based in Rwanda, I am particularly interested in how technology
                can transform financial services in Africa. Whether it&apos;s a
                custom web app, a cryptocurrency tracker or a booking system — I
                build it end to end.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.16}>
            <dl className="flex flex-col space-y-6">
              {aboutFacts.map((fact) => {
                const Icon = iconMap[fact.iconName];
                return (
                  <div key={fact.label} className="flex items-start gap-3">
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-muted"
                    />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-primary">
                        {fact.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </FadeUp>
        </div>
      </section>

      {/* Tools / stack */}
      <section className="px-6 py-14 md:px-12 md:py-20 lg:px-20">
        <FadeUp>
          <SectionHeading large>Tools I Build With</SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            The tools and technologies I reach for daily.
          </p>
        </FadeUp>
        <ul className="mt-8 divide-y divide-card-border border-t border-card-border">
          {tools.map((tool, i) => (
            <li
              key={tool.category}
              className="grid gap-1 py-5 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <FadeUp delay={i * 0.05}>
                <span className="block pt-0.5 text-xs uppercase tracking-[0.18em] text-muted">
                  {tool.category}
                </span>
              </FadeUp>
              <FadeUp delay={0.05 + i * 0.05}>
                <TechList items={tool.items} />
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
