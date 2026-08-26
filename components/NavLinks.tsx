"use client";

import { usePathname } from "next/navigation";

import type { NavItem } from "@/lib/site";
import { NavLink } from "@/components/NavLink";

type NavLinksProps = {
  items: NavItem[];
  ulClassName?: string;
  liClassName?: string;
  onNavigate?: () => void;
};

export function NavLinks({
  items,
  ulClassName = "flex flex-col gap-8",
  liClassName,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={ulClassName}>
      {items.map((item, i) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <li key={item.label} className={liClassName}>
            <NavLink
              item={{ ...item, active }}
              onClick={onNavigate}
              index={i}
            />
          </li>
        );
      })}
    </ul>
  );
}
