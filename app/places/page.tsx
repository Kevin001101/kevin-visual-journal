import PhotoGrid from "@/components/PhotoGrid";
import SectionTitle from "@/components/SectionTitle";
import { categoryMeta, places, works } from "@/data/works";

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
        <div className="mb-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((place) => (
            <div
              key={place}
              className="border border-line px-5 py-6 font-serif text-3xl text-ink"
            >
              {place}
            </div>
          ))}
        </div>
        <PhotoGrid works={works.filter((work) => places.includes(work.location))} />
      </section>
    </>
  );
}
