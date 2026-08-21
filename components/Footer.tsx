import { siteConfig, socials } from "@/lib/site";

/** Minimal footer: name + role, social links, copyright. */
export function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-8 md:px-12 lg:pr-20">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.125rem] text-primary">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-xs text-muted">{siteConfig.role}</p>
        </div>

        <ul className="flex items-center gap-6">
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

        <p className="text-xs text-muted">© 2026 Arsene Mucyuneje</p>
      </div>
    </footer>
  );
}
