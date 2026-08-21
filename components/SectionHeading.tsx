type SectionHeadingProps = {
  children: React.ReactNode;
  /** Render as plain label instead of an h2 (for sub-blocks). */
  as?: "h2" | "p";
};

/** Small uppercase section label — the template's shared heading treatment. */
export function SectionHeading({ children, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <Tag className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
      {children}
    </Tag>
  );
}
