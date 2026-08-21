"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/lib/site";
import { NavLink } from "@/components/NavLink";

type MobileNavProps = {
  items: NavItem[];
};

/**
 * Mobile navigation: hamburger button (below the `md` breakpoint) that opens
 * a full-screen slide-in drawer with the same nav items and larger (48px+)
 * touch targets. Closes on link click, Escape key, or backdrop tap.
 */
export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label="Open navigation menu"
        className="flex size-10 items-center justify-center rounded-full text-primary transition-colors hover:text-accent"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-50 flex flex-col bg-bg/95 backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Drawer header mirrors the fixed page header */}
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-xs font-medium uppercase tracking-[2px] text-muted">
                Menu
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close navigation menu"
                className="flex size-10 items-center justify-center rounded-full text-primary transition-colors hover:text-accent"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="px-8 pt-[12vh]">
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    {/* min-h-12 = 48px minimum touch target */}
                    <div className="flex min-h-12 items-center">
                      <NavLink item={item} onClick={close} />
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
