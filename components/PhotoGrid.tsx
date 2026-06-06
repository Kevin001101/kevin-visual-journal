type PhotoGridProps = {
  images: string[];
  title?: string;
};

export default function PhotoGrid({ images, title = "Gallery photo" }: PhotoGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="min-h-[260px] bg-fog bg-cover bg-center sm:min-h-[340px]"
          style={{ backgroundImage: `url(${image})` }}
          aria-label={`${title} ${index + 1}`}
        />
      ))}
    </div>
  );
}
