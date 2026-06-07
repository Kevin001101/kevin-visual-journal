"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { GalleryWallItem } from "@/data/galleries";

type GalleryTileProps = {
  item: GalleryWallItem;
};

export default function GalleryTile({ item }: GalleryTileProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link href={item.href ?? `/galleries/${item.slug}`} className="gallery-tile">
      {!imageFailed ? (
        <Image
          src={item.coverImage}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="gallery-tile-image"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="gallery-tile-image gallery-tile-fallback" aria-hidden="true" />
      )}
      <span className="gallery-tile-text">
        <span className="gallery-tile-date">{item.date}</span>
        <span className="gallery-tile-title">{item.title}</span>
      </span>
    </Link>
  );
}
