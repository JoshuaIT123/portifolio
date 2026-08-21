import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  /** Hint for the image loader (intrinsic px size) */
  size?: number;
  /** Sizing classes, e.g. "size-64 md:size-80" */
  className?: string;
  /** Set on above-the-fold media (hero) so it loads eagerly */
  priority?: boolean;
};

/**
 * Circular profile media container — ready for a high-resolution headshot
 * (or any visual) via `src`. Includes the subtle lime gradient glow ring.
 */
export function Avatar({
  src,
  alt,
  size = 320,
  className = "size-20",
  priority = false,
}: AvatarProps) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      {/* Soft lime gradient glow behind the media */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/25 to-transparent blur-xl"
      />
      {/* Media container */}
      <span className="relative block size-full overflow-hidden rounded-full border border-white/15">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          priority={priority}
          className="rounded-full object-cover"
        />
      </span>
      {/* Thin accent ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border border-accent/40"
      />
    </span>
  );
}
