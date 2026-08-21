type SectionHeadingProps = {
  children: React.ReactNode;
  /** Render as plain label instead of an h2 (for sub-blocks). */
  as?: "h2" | "p";
  /** Reference-style page header scale (~40-48px bold) for section tops. */
  large?: boolean;
};

/**
 * Shared section heading. Default is the small uppercase eyebrow; `large`
 * renders the big page-header treatment used at the top of each section.
 */
export function SectionHeading({
  children,
  as: Tag = "h2",
  large = false,
}: SectionHeadingProps) {
  return (
    <Tag
      className={
        large
          ? "font-heading text-4xl font-bold tracking-tight text-primary md:text-[2.75rem]"
          : "text-xs font-medium uppercase tracking-[0.18em] text-muted"
      }
    >
      {children}
    </Tag>
  );
}
