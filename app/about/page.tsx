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
  description: `Learn about ${siteConfig.name} — ${siteConfig.role} from Rwanda building web applications, fintech solutions, Bitcoin & Lightning Network.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name} — ${siteConfig.role} from Rwanda building web applications, fintech solutions, Bitcoin & Lightning Network.`,
    url: "/about",
  },
};

export default function AboutPage() {
  const breadcrumb = buildBreadcrumbJsonLd("/about");
  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <Breadcrumbs />
      <section className="px-8 py-16 md:px-12 md:py-24 lg:px-20">
        <FadeUp>
          <SectionHeading large>About</SectionHeading>
        </FadeUp>

        <div className="mt-14 grid gap-14 md:grid-cols-[2fr_1fr]">
          <FadeUp delay={0.08}>
            <div className="space-y-8">
              <p className="max-w-[38rem] text-xl leading-relaxed text-primary/85">
                {aboutIntro}
              </p>
              <p className="max-w-[38rem] text-base leading-relaxed text-muted">
                I specialize in building full-stack web applications using React,
                Next.js, Node.js and Python. From fintech platforms to real-time
                tracking systems, I turn complex problems into practical software
                that organizations can actually use.
              </p>
              <p className="max-w-[38rem] text-base leading-relaxed text-muted">
                I&apos;m particularly passionate about <span className="text-accent font-medium">Bitcoin</span> and the{" "}
                <span className="text-accent font-medium">Lightning Network</span> — exploring how instant, low-cost
                payments can transform financial access across Africa. Whether
                it&apos;s a Lightning invoice system, a crypto tracker or a booking
                platform — I build it end to end.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.16} direction="left">
            <dl className="flex flex-col space-y-7">
              {aboutFacts.map((fact) => {
                const Icon = iconMap[fact.iconName];
                return (
                  <div key={fact.label} className="flex items-start gap-3.5">
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-accent"
                    />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-primary">
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
      <section className="px-8 py-16 md:px-12 md:py-24 lg:px-20">
        <FadeUp>
          <SectionHeading large>Tools I Build With</SectionHeading>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            The tools and technologies I reach for daily.
          </p>
        </FadeUp>
        <ul className="mt-10 divide-y divide-card-border border-t border-card-border">
          {tools.map((tool, i) => (
            <li
              key={tool.category}
              className="grid gap-1.5 py-6 md:grid-cols-[220px_1fr] md:gap-10"
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
