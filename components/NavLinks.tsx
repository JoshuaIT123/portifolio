"use client";

import { usePathname } from "next/navigation";

import type { NavItem } from "@/lib/site";
import { NavLink } from "@/components/NavLink";

type NavLinksProps = {
  items: NavItem[];
  /** ul classes — spacing differs between sidebar and mobile drawer */
  ulClassName?: string;
  /** li classes — the drawer adds min-height for 48px touch targets */
  liClassName?: string;
  /** e.g. the mobile drawer closes itself when a link is clicked */
  onNavigate?: () => void;
};

/**
 * Route-based navigation list. The active item is determined by matching
 * the current pathname against each nav item's href. On the homepage "/",
 * the "Intro" item (href="/") is always active.
 */
export function NavLinks({
  items,
  ulClassName = "flex flex-col gap-8",
  liClassName,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={ulClassName}>
      {items.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <li key={item.label} className={liClassName}>
            <NavLink
              item={{ ...item, active }}
              onClick={onNavigate}
            />
          </li>
        );
      })}
    </ul>
  );
}
