import Link from "next/link";
import { getGalleriesByRegion } from "@/data/galleries";

export default function GalleriesPage() {
  const groupedGalleries = getGalleriesByRegion();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <div className="mb-14 border-b border-line pb-8">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">
          Galleries
        </p>
        <h1 className="mt-4 font-serif text-6xl leading-none text-ink sm:text-8xl">
          影像目录
        </h1>
      </div>

      <div className="space-y-16">
        {groupedGalleries.map(({ region, galleries }) => (
          <section
            id={region.toLowerCase().replace(/\s+/g, "-")}
            key={region}
            className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[260px_1fr]"
          >
            <h2 className="font-serif text-4xl text-ink">{region}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleries.map((gallery) => (
                <Link
                  key={gallery.slug}
                  href={`/galleries/${gallery.slug}`}
                  className="group border-t border-line pt-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {gallery.category} / {gallery.date}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-ink transition group-hover:text-accent">
                    {gallery.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {gallery.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
