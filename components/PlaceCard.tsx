import Link from "next/link";
import type { PlaceArchive } from "@/data/works";

type PlaceCardProps = {
  place: PlaceArchive;
  index: number;
};

export default function PlaceCard({ place, index }: PlaceCardProps) {
  return (
    <article
      id={place.id}
      className="group grid scroll-mt-28 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] sm:gap-8"
    >
      <Link
        href={`/places#${place.id}`}
        className="relative block aspect-[4/3] overflow-hidden bg-fog"
        aria-label={`View ${place.name} archive`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 grayscale transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
          style={{ backgroundImage: `url(${place.image})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,31,31,0.02),rgba(31,31,31,0.18))]" />
        <span className="absolute left-4 top-4 bg-paper/85 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>

      <div className="flex min-h-full flex-col justify-between gap-8 py-1">
        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            {place.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-3 py-1 text-xs uppercase tracking-[0.22em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-accent">
            {place.note}
          </p>
          <h2 className="font-serif text-4xl leading-none text-ink sm:text-5xl">
            {place.name}
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">
            {place.englishName}
          </p>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted">
            {place.description}
          </p>
        </div>

        <Link
          href={`/places#${place.id}`}
          className="inline-flex w-fit border-b border-accent pb-1 text-sm uppercase tracking-[0.22em] text-ink transition hover:text-accent"
        >
          View archive / 查看
        </Link>
      </div>
    </article>
  );
}
