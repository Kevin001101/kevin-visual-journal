import Link from "next/link";
import Hero from "@/components/Hero";
import PhotoGrid from "@/components/PhotoGrid";
import SectionTitle from "@/components/SectionTitle";
import { categoryMeta, works } from "@/data/works";

const featuredWorks = works.slice(0, 4);
const categories = Object.values(categoryMeta);

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-y border-line py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Index"
            title="Four ways of keeping images."
            description="旅程、山径、街巷与地点构成这份影像日志的四个入口。它们不是严格的分类，更像进入记忆的不同方向。"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group flex min-h-[260px] flex-col justify-between border border-line bg-paper p-6 transition duration-300 hover:border-accent hover:bg-[#F8F5EF]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-accent">
                    {category.number}
                  </p>
                  <h3 className="mt-10 font-serif text-4xl font-medium text-ink">
                    {category.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{category.zh}</p>
                </div>
                <p className="text-sm leading-7 text-muted transition group-hover:text-ink">
                  {category.intro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <SectionTitle
          eyebrow="Recent Notes"
          title="Selected visual fragments."
          description="一些先放在这里的示例影像条目，后续可以直接替换成真实照片、地点、年份与文字。"
        />
        <PhotoGrid works={featuredWorks} />
      </section>
    </>
  );
}
