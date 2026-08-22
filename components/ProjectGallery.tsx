import Image from "next/image";

type ProjectGalleryProps = {
  title: string;
  /** Screenshot/GIF paths under /public — empty renders nothing */
  images: string[];
};

/**
 * Thumbnail strip rendered between a project card's preview image and body.
 * Ready to receive 2-3 screenshots or a short looping GIF per project:
 * add files to /public/images and list their paths in the project's
 * `gallery` array in lib/site.ts. Renders nothing until assets exist,
 * so cards stay visually unchanged in the meantime.
 */
export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div
      aria-label={`${title} screenshots`}
      className="thin-scrollbar flex gap-2 overflow-x-auto px-6 pt-4"
    >
      {images.map((src) => (
        <div
          key={src}
          className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border border-card-border"
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
