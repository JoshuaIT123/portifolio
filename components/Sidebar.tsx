import Link from "next/link";

import { Avatar } from "@/components/Avatar";
import { NavLinks } from "@/components/NavLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { NavItem } from "@/lib/site";
import { profile, siteConfig } from "@/lib/site";

type SidebarProps = {
  items: NavItem[];
};

export function Sidebar({ items }: SidebarProps) {
  const handle = `@${siteConfig.githubUrl.split("/").pop()}`;

  return (
    <aside className="sticky top-0 hidden h-dvh w-[18.5rem] shrink-0 flex-col bg-bg px-10 py-10 lg:flex">
      <div className="flex items-start justify-between gap-4">
        <Link href="/" className="block">
          <Avatar src={profile.avatar} alt="" size={152} priority className="size-[5rem]" />
          <span className="mt-6 block font-heading text-[1.5rem] font-bold leading-tight tracking-tight text-primary">
            Joshua NDAMAGE
          </span>
          <span className="mt-3 block text-base font-normal leading-relaxed text-muted">
            Software Developer &amp; Fintech Enthusiast
          </span>
        </Link>
        <ThemeToggle />
      </div>

      <nav aria-label="Primary" className="mt-14 flex-1">
        <NavLinks items={items} ulClassName="flex flex-col gap-8" />
      </nav>

      <p className="mt-6 text-sm text-muted">{handle}</p>
    </aside>
  );
}
