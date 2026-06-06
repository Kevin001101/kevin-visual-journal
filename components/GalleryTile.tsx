import Link from "next/link";
import type { GalleryWallItem } from "@/data/galleries";

type GalleryTileProps = {
  item: GalleryWallItem;
};

export default function GalleryTile({ item }: GalleryTileProps) {
  return (
    <Link href={`/galleries/${item.slug}`} className="gallery-tile">
      <img src={item.coverImage} alt={item.title} loading="lazy" />
      <span className="gallery-tile-text">
        <span className="gallery-tile-date">{item.date}</span>
        <span className="gallery-tile-title">{item.title}</span>
      </span>
    </Link>
  );
}
