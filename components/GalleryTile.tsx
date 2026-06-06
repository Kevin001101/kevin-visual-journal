import Link from "next/link";
import type { GalleryWallItem } from "@/data/galleries";

type GalleryTileProps = {
  item: GalleryWallItem;
};

export default function GalleryTile({ item }: GalleryTileProps) {
  return (
    <Link href={item.href ?? `/galleries/${item.slug}`} className="gallery-tile">
      <span
        className="gallery-tile-image"
        style={{ backgroundImage: `url(${item.coverImage})` }}
        aria-hidden="true"
      />
      <span className="gallery-tile-text">
        <span className="gallery-tile-date">{item.date}</span>
        <span className="gallery-tile-title">{item.title}</span>
      </span>
    </Link>
  );
}
