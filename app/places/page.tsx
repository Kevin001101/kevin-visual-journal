import PlaceCard from "@/components/PlaceCard";
import SectionTitle from "@/components/SectionTitle";
import { categoryMeta, placeArchives } from "@/data/works";

export default function PlacesPage() {
  const meta = categoryMeta.places;

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <SectionTitle
          eyebrow={`${meta.number} / ${meta.zh}`}
          title={meta.label}
          description={meta.description}
        />

        <div className="mb-20 border-y border-line py-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">
                Travel image archive
              </p>
              <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-none text-ink sm:text-7xl">
                到达过的地方，成为照片的索引。
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted lg:ml-auto">
              这里按城市、地区和路线归档照片。地点不是普通作品集分类，而是每次抵达后留下的影像档案：街道、山径、边界、天气和短暂停留的光。
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {placeArchives.map((place) => (
              <a
                key={place.id}
                href={`#${place.id}`}
                className="bg-paper px-4 py-4 transition hover:bg-fog"
              >
                <span className="block font-serif text-2xl text-ink">
                  {place.name}
                </span>
                <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-muted">
                  {place.tags.join(" / ")}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-20 md:space-y-28">
          {placeArchives.map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
