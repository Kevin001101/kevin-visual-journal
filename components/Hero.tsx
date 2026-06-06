export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 md:pb-24 md:pt-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-accent">
            Kevin 影像日志
          </p>
          <h1 className="font-serif text-[18vw] font-medium leading-[0.82] text-ink sm:text-[15vw] lg:text-[10.5rem]">
            KEVIN
            <br />
            VISUAL
            <br />
            JOURNAL
          </h1>
        </div>
        <div className="max-w-xl border-l border-line pl-6 lg:mb-4">
          <p className="text-2xl leading-10 text-ink md:text-3xl">
            记录走过的路、到达的地方，与那些短暂停留的光。
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-muted">
            Journeys, trails, streets and places.
          </p>
        </div>
      </div>

      <div
        className="mt-14 min-h-[360px] border border-line bg-fog bg-cover bg-center md:min-h-[560px]"
        style={{ backgroundImage: "url('/photos/placeholder-1.jpg')" }}
        aria-label="Featured journal photograph"
      >
        <div className="flex h-full min-h-[360px] items-end justify-between bg-gradient-to-t from-paper/75 via-paper/10 to-transparent p-6 md:min-h-[560px] md:p-10">
          <p className="max-w-md text-sm leading-7 text-muted">
            Visual notes from roads, mountains, city corners and places briefly held by light.
          </p>
          <span className="hidden text-xs uppercase tracking-[0.24em] text-accent md:block">
            Archive 001
          </span>
        </div>
      </div>
    </section>
  );
}
