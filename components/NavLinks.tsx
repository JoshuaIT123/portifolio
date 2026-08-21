"use client";

import { useEffect, useState } from "react";
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
  /**
   * Selector of the scrolling element to observe (desktop content column
   * scrolls independently). Falls back to the viewport when omitted.
   */
  rootSelector?: string;
};

/** Section id from either "#intro" or "/#intro"; "" for plain routes. */
const sectionIdOf = (href: string) => href.split("#")[1] ?? "";

/**
 * Scroll-spy navigation list. Observes each item's section and marks the
 * one crossing the upper-middle viewport band as active, so the highlighted
 * link always reflects what the visitor is currently reading. Plain route
 * links (no hash, e.g. /achievements) are active on their own pathname.
 */
export function NavLinks({
  items,
  ulClassName = "flex flex-col gap-8",
  liClassName,
  onNavigate,
  rootSelector,
}: NavLinksProps) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const root = rootSelector
      ? document.querySelector<HTMLElement>(rootSelector)
      : null;
    const sections = items
      .map((item) => document.getElementById(sectionIdOf(item.href)))
      .filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      // A section becomes active while crossing this horizontal band
      { root, rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items, rootSelector]);

  return (
    <ul className={ulClassName}>
      {items.map((item) => {
        const id = sectionIdOf(item.href);
        const active =
          item.href === pathname || (pathname === "/" && id === activeId);
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
