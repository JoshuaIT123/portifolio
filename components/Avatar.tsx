import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  priority?: boolean;
};

export function Avatar({
  src,
  alt,
  size = 320,
  className = "size-20",
  priority = false,
}: AvatarProps) {
  return (
    <span className={`relative inline-block shrink-0 rounded-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        priority={priority}
        className="rounded-full object-cover"
      />
    </span>
  );
}
