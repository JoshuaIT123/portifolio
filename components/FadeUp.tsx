"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  /** Stagger offset in seconds */
  delay?: number;
  className?: string;
};

/**
 * Lightweight entrance wrapper: fades + slides content up on page load.
 * The only client-side piece of the hero — children stay server-rendered,
 * so all copy remains in the initial HTML for SEO.
 * Respects the user's reduced-motion preference.
 */
export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
