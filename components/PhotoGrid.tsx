import Image from "next/image";

type PhotoGridProps = {
  images: string[];
  title?: string;
};

export default function PhotoGrid({ images, title = "Gallery photo" }: PhotoGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <figure
          key={`${image}-${index}`}
          className="relative min-h-[260px] overflow-hidden bg-fog sm:min-h-[340px]"
        >
          <Image
            src={image}
            alt={`${title} ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
