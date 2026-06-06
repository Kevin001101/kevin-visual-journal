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
      <div className="border-b border-line pb-10">
        <p className="mb-5 text-xs uppercase tracking-[0.28em] text-accent">
          {gallery.region} / {gallery.category} / {gallery.date}
        </p>
        <h1 className="font-serif text-6xl leading-none text-ink sm:text-8xl">
          {gallery.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
          {gallery.description}
        </p>
      </div>

      <div className="mt-14">
        <PhotoGrid images={gallery.images} title={gallery.title} />
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <Link
          href="/galleries"
          className="inline-flex border-b border-accent pb-1 text-xs uppercase tracking-[0.22em] text-ink transition hover:text-accent"
        >
          返回影像目录
        </Link>
      </div>
    </section>
  );
}
