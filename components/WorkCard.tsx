import Link from "next/link";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
};

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <article className="group">
      <Link href={`/${work.category}#${work.id}`} className="block">
        <div
          className="aspect-[4/3] border border-line bg-fog bg-cover bg-center transition duration-500 group-hover:opacity-90"
          style={{ backgroundImage: `url('${work.image}')` }}
        />
        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent">
              {work.location} / {work.year}
            </p>
            <h3 className="font-serif text-3xl font-medium text-ink">
              {work.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{work.subtitle}</p>
          </div>
          <span className="mt-1 text-lg text-muted transition group-hover:text-accent">
            +
          </span>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
          {work.excerpt}
        </p>
      </Link>
    </article>
  );
}
