export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <p className="text-xs uppercase tracking-[0.28em] text-accent">About</p>
      <h1 className="mt-4 font-serif text-5xl leading-none text-ink sm:text-7xl">
        Kevin Visual Journal
      </h1>
      <div className="mt-10 space-y-4 border-t border-line pt-8 text-lg leading-8 text-muted">
        <p>个人影像日志。</p>
        <p>记录旅途、山径、街巷和到达的地方。</p>
        <p>照片会慢慢补齐。</p>
      </div>
    </section>
  );
}
