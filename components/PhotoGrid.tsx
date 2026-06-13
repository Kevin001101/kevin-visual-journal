"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryImage } from "@/data/galleries";

const PHOTOS_PER_BATCH = 12;

type PhotoGridProps = {
  images: GalleryImage[];
  title?: string;
  region?: string;
  category?: string;
  date?: string;
};

export default function PhotoGrid({
  images,
  title = "Gallery photo",
  region,
  category,
  date,
}: PhotoGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_BATCH);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const visibleImages = images.slice(0, visibleCount);
  const canLoadMore = visibleCount < images.length;
  const metaText = [region, category, date].filter(Boolean).join(", ");

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % images.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + images.length) % images.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  };

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visibleImages.map((image, index) => (
          <figure
            key={`${image.thumb}-${index}`}
            className="mb-4 break-inside-avoid overflow-hidden bg-fog"
          >
            <button
              type="button"
              aria-label={`Open ${image.alt}`}
              className="block w-full cursor-zoom-in"
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image.thumb}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full transition-transform duration-200 hover:scale-[1.02]"
              />
            </button>
          </figure>
        ))}
      </div>

      {canLoadMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="border border-line px-6 py-3 text-xs uppercase tracking-[0.22em] text-ink transition hover:border-accent hover:text-accent"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + PHOTOS_PER_BATCH, images.length),
              )
            }
          >
            加载更多
          </button>
        </div>
      )}

      {activeImage && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-5 sm:px-8"
          role="dialog"
          onClick={() => setActiveIndex(null)}
        >
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/25 text-4xl leading-none text-white transition hover:bg-white hover:text-black sm:left-8"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
              >
                &lt;
              </button>
              <button
                type="button"
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/25 text-4xl leading-none text-white transition hover:bg-white hover:text-black sm:right-8"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
              >
                &gt;
              </button>
            </>
          )}

          <div
            className="relative inline-flex max-h-[calc(100vh-40px)] max-w-[calc(100vw-32px)] flex-col overflow-hidden bg-white p-4 shadow-2xl sm:max-w-[calc(100vw-120px)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close image"
              className="absolute right-0 top-0 z-20 flex h-14 w-14 items-center justify-center bg-neutral-300 text-4xl font-light leading-none text-white transition hover:bg-neutral-800"
              onClick={() => setActiveIndex(null)}
            >
              x
            </button>

            <header className="shrink-0 px-12 pb-5 text-center text-ink sm:pb-7">
              {metaText && (
                <p className="font-serif text-lg font-semibold italic leading-none sm:text-2xl">
                  {metaText}
                </p>
              )}
              <h2 className="mt-1 text-3xl font-black leading-none sm:text-5xl">
                {title}
              </h2>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
                {(activeIndex ?? 0) + 1} / {images.length}
              </p>
            </header>

            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              sizes="100vw"
              className="block h-auto max-h-[calc(100vh-220px)] w-auto max-w-[calc(100vw-64px)] object-contain sm:max-h-[calc(100vh-240px)] sm:max-w-[calc(100vw-180px)]"
            />
          </div>
        </div>
      )}
    </>
  );
}
