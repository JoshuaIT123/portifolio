"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import type { NavItem } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { NavLinks } from "@/components/NavLinks";

type MobileNavProps = {
  items: NavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const close = useCallback(() => setOpen(false), []);

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
        <FaBars className="size-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-50 flex flex-col bg-bg/95 backdrop-blur-xl"
            initial={reduceMotion ? false : { opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-heading text-base font-bold tracking-tight text-primary">
                {siteConfig.name}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close navigation menu"
                className="flex size-10 items-center justify-center rounded-full text-primary transition-colors hover:text-accent"
              >
                <FaXmark className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-col items-center gap-6 pt-[20vh]">
              <NavLinks
                items={items}
                ulClassName="flex flex-col items-center gap-6"
                liClassName=""
                onNavigate={close}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
