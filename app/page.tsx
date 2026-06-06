import Link from "next/link";
import GalleryCard from "@/components/GalleryCard";
import SectionTitle from "@/components/SectionTitle";
import { latestGalleries } from "@/data/galleries";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
              Kevin 影像日志
            </p>
            <h1 className="font-serif text-6xl leading-none text-ink sm:text-8xl lg:text-9xl">
              KEVIN
              <span className="block">VISUAL</span>
              <span className="block">JOURNAL</span>
            </h1>
          </div>
          <div className="max-w-xl lg:ml-auto">
            <p className="text-xl leading-9 text-ink">
              记录走过的路、到达的地方，与那些短暂停留的光。
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.24em] text-muted">
              Journeys, trails, streets and places.
            </p>
            <Link
              href="/galleries"
              className="mt-10 inline-flex border border-accent px-6 py-3 text-xs uppercase tracking-[0.22em] text-ink transition hover:bg-accent hover:text-paper"
            >
              Explore Galleries
            </Link>
          </div>
        </div>

        <div
          className="mt-16 min-h-[360px] bg-fog bg-cover bg-center sm:min-h-[520px]"
          style={{ backgroundImage: "url('/photos/placeholder-1.jpg')" }}
          aria-label="Kevin Visual Journal cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <SectionTitle
          eyebrow="Latest Galleries"
          title="最新相册"
          description="最近整理的地点、路线和街头影像。后续只需要替换静态数据和照片，就能持续扩展这份旅行影像档案。"
        />
        <div className="grid gap-12 lg:grid-cols-2">
          {latestGalleries.map((gallery, index) => (
            <GalleryCard key={gallery.slug} gallery={gallery} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
