import PhotoGrid from "@/components/PhotoGrid";
import SectionTitle from "@/components/SectionTitle";
import { categoryMeta, getWorksByCategory } from "@/data/works";

export default function TrailsPage() {
  const meta = categoryMeta.trails;

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <SectionTitle
        eyebrow={`${meta.number} / ${meta.zh}`}
        title={meta.label}
        description={meta.description}
      />
      <PhotoGrid works={getWorksByCategory("trails")} />
    </section>
  );
}
