import Link from "next/link";
import type { Gallery } from "@/data/galleries";

type GalleryCardProps = {
  gallery: Gallery;
  index?: number;
};

export default function GalleryCard({ gallery, index }: GalleryCardProps) {
  return (
    <article className="group grid gap-5 border-t border-line pt-5 sm:grid-cols-[0.86fr_1.14fr]">
      <Link
        href={`/galleries/${gallery.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-fog"
        aria-label={`Open ${gallery.title}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 grayscale transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
          style={{ backgroundImage: `url(${gallery.coverImage})` }}
        />
        {typeof index === "number" ? (
          <span className="absolute left-4 top-4 bg-paper/85 px-3 py-1 text-xs uppercase tracking-[0.22em] text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-col justify-between gap-8 py-1">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">
            {gallery.region} / {gallery.date}
          </p>
          <h3 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            <Link
              href={`/galleries/${gallery.slug}`}
              className="transition hover:text-accent"
            >
              {gallery.title}
            </Link>
          </h3>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
            {gallery.category}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
            {gallery.description}
          </p>
        </div>
        <Link
          href={`/galleries/${gallery.slug}`}
          className="inline-flex w-fit border-b border-accent pb-1 text-xs uppercase tracking-[0.22em] text-ink transition hover:text-accent"
        >
          View
        </Link>
      </div>
    </article>
  );
}
