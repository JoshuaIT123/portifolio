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
          <p className="text-sm font-medium text-primary">
            {siteConfig.name}
          </p>
          <p className="mt-1.5 text-sm text-muted">{siteConfig.role}</p>
        </div>

        <ul className="flex flex-wrap items-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-6">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                {...(social.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-muted transition-colors duration-300 hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted">&copy; 2026 {siteConfig.name}</p>
      </div>
    </footer>
  );
}
