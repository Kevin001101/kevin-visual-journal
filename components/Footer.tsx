export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 text-sm text-muted sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
        <div>
          <p className="font-medium text-ink">Kevin Visual Journal / Kevin 影像日志</p>
          <p className="mt-2 max-w-xl leading-7">
            记录走过的路、到达的地方，与那些短暂停留的光。
          </p>
        </div>
        <p className="uppercase tracking-[0.2em]">
          Journeys, trails, streets and places.
        </p>
      </div>
    </footer>
  );
}
