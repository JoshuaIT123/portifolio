import Link from "next/link";
import type { ReactNode } from "react";

type PillButtonProps = {
  variant: "primary" | "secondary";
  href: string;
  children: ReactNode;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98]";

const variantStyles = {
  /** Solid lime with a soft glow */
  primary:
    "bg-accent text-bg shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_25%,transparent)] hover:shadow-[0_0_36px_color-mix(in_srgb,var(--accent)_40%,transparent)] hover:brightness-90",
  /** Neutral outline that picks up the accent on hover — extra horizontal
   * padding balances its width next to the primary button */
  secondary:
    "border border-white/25 bg-transparent px-8 text-primary hover:border-accent hover:text-accent",
} as const;

/** Pill-shaped CTA rendered as a real link. */
export function PillButton({
  variant,
  href,
  children,
  className = "",
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
