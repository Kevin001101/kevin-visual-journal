import GalleryCard from "@/components/GalleryCard";
import SectionTitle from "@/components/SectionTitle";
import { getGalleriesByRegion } from "@/data/galleries";

export default function GalleriesPage() {
  const groupedGalleries = getGalleriesByRegion();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <SectionTitle
        eyebrow="Archive Index"
        title="GALLERIES"
        description="到达之地、山径、街巷与远行路线的影像档案。"
      />

      <div className="mb-20 border-y border-line py-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1 className="font-serif text-5xl leading-none text-ink sm:text-7xl">
            地区、城市与路线构成这份旅行索引。
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted lg:ml-auto">
            这里不按商业作品集的方式陈列照片，而是按抵达过的地方、走过的山径和完成过的路线归档。每个相册都是一段可以继续补充的个人影像记录。
          </p>
        </div>
      </div>

      <div className="space-y-24">
        {groupedGalleries.map(({ region, galleries }) => (
          <section key={region} className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">
                Region
              </p>
              <h2 className="mt-4 font-serif text-4xl text-ink">{region}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted">
                {galleries.length} galleries
              </p>
            </div>

            <div className="grid gap-12">
              {galleries.map((gallery, index) => (
                <GalleryCard
                  key={gallery.slug}
                  gallery={gallery}
                  index={index}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
