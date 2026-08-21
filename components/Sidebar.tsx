import Link from "next/link";

import { Avatar } from "@/components/Avatar";
import { NavLinks } from "@/components/NavLinks";
import type { NavItem } from "@/lib/site";
import { profile, siteConfig } from "@/lib/site";

type SidebarProps = {
  items: NavItem[];
};

/**
 * Fixed full-height left sidebar (desktop only, lg+): identity block on top,
 * scroll-spy navigation in the middle, social icons + handle at the bottom.
 * Below lg the MobileNav drawer takes over.
 */
export function Sidebar({ items }: SidebarProps) {
  const handle = `@${siteConfig.githubUrl.split("/").pop()}`;

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[17.5rem] flex-col bg-bg px-10 py-10 lg:flex">
      {/* Identity block — avatar, name and tagline all share the left edge */}
      <Link href="/#intro" className="block">
        <Avatar src={profile.avatar} alt="" size={152} priority className="size-[4.75rem]" />
        <span className="mt-6 block font-heading text-[1.4375rem] font-bold leading-tight tracking-tight text-primary">
          Mucyuneje Hirwa Arsene
        </span>
        <span className="mt-3 block text-base font-normal leading-relaxed text-muted">
          Software Developer &amp; IT Consultant
        </span>
      </Link>

      {/* Scroll-spy navigation — generous spacing, accent bar on the active item */}
      <nav aria-label="Primary" className="mt-14 flex-1">
        <NavLinks items={items} ulClassName="flex flex-col gap-8" />
      </nav>

      {/* Bottom: handle only — social links live in the hero */}
      <p className="mt-6 text-[0.8125rem] text-muted">{handle}</p>
    </aside>
  );
}

