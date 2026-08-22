type JsonLdProps = {
  /** Schema.org payload — build it with lib/json-ld.ts (buildJsonLd) */
  data: object;
};

/**
 * Reusable JSON-LD renderer: emits a native <script type="application/ld+json">
 * tag (per Next.js docs, JSON-LD is structured data — not executable JS —
 * so next/script is the wrong tool). Place inside a layout or page; crawlers
 * read it wherever it renders in the body.
 * `<` is escaped to \u003c per the Next.js JSON-LD guide to prevent XSS via
 * injected content.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
