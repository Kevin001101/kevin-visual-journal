import WorkCard from "@/components/WorkCard";
import type { Work } from "@/data/works";

type PhotoGridProps = {
  works: Work[];
};

export default function PhotoGrid({ works }: PhotoGridProps) {
  return (
    <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
      {works.map((work, index) => (
        <div
          key={work.id}
          id={work.id}
          className={index % 2 === 1 ? "md:pt-20" : undefined}
        >
          <WorkCard work={work} />
        </div>
      ))}
    </div>
  );
}
