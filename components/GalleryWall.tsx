import GalleryTile from "@/components/GalleryTile";
import { galleryWallItems } from "@/data/galleries";

export default function GalleryWall() {
  return (
    <section className="gallery-wall" aria-label="影像目录">
      {galleryWallItems.map((item) => (
        <GalleryTile key={item.slug} item={item} />
      ))}
    </section>
  );
}
