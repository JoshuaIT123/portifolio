type SectionHeadingProps = {
  children: React.ReactNode;
  as?: "h2" | "p";
  large?: boolean;
};

export function SectionHeading({
  children,
  as: Tag = "h2",
  large = false,
}: SectionHeadingProps) {
  return (
    <Tag
      className={
        large
          ? "font-heading text-5xl font-bold tracking-tight text-primary md:text-[3.5rem]"
          : "text-sm font-medium uppercase tracking-[0.2em]"
      }
      style={!large ? { color: "var(--accent)" } : undefined}
    >
      {children}
    </Tag>
  );
}
