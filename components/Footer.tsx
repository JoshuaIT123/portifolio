import Link from "next/link";

import { siteConfig, socials } from "@/lib/site";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-10 md:px-10 lg:px-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.125rem] text-primary">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-xs text-muted">{siteConfig.role}</p>
        </div>

        <ul className="flex flex-wrap items-center gap-5">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-5">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                {...(social.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-xs uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-primary"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted">&copy; 2026 {siteConfig.name}</p>
      </div>
    </footer>
  );
}
