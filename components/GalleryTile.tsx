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
        style={{
          backgroundImage: `url(${item.coverImage}), linear-gradient(135deg, #8c8274, #2d2a26)`,
        }}
        aria-hidden="true"
      />
      <span className="gallery-tile-text">
        <span className="gallery-tile-date">{item.date}</span>
        <span className="gallery-tile-title">{item.title}</span>
      </span>
    </Link>
  );
}
