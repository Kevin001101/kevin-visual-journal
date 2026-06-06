import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhotoGrid from "@/components/PhotoGrid";
import { galleries, getGalleryBySlug } from "@/data/galleries";

type GalleryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return galleries.map((gallery) => ({
    slug: gallery.slug,
  }));
}

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    return {
      title: "Gallery not found / Kevin Visual Journal",
    };
  }

  return {
    title: `${gallery.title} / Kevin Visual Journal`,
    description: gallery.description,
  };
}

export default async function GalleryDetailPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-accent">
            {gallery.region} / {gallery.category} / {gallery.date}
          </p>
          <h1 className="font-serif text-6xl leading-none text-ink sm:text-8xl">
            {gallery.title}
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-9 text-muted lg:ml-auto">
          {gallery.description}
        </p>
      </div>

      <div
        className="mt-14 min-h-[340px] bg-fog bg-cover bg-center sm:min-h-[540px]"
        style={{ backgroundImage: `url(${gallery.coverImage})` }}
        aria-label={`${gallery.title} cover`}
      />

      <div className="mt-20">
        <PhotoGrid images={gallery.images} title={gallery.title} />
      </div>

      <div className="mt-20 border-t border-line pt-8">
        <Link
          href="/galleries"
          className="inline-flex border-b border-accent pb-1 text-xs uppercase tracking-[0.22em] text-ink transition hover:text-accent"
        >
          Back to Galleries / 返回相册
        </Link>
      </div>
    </section>
  );
}
