import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <SectionTitle
        eyebrow="About"
        title="A personal visual journal of journeys, trails, streets and places."
        description="Kevin Visual Journal / Kevin 影像日志，是一个记录旅途、山径、街巷和到达之地的个人影像日志。"
      />

      <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div
          className="min-h-[420px] border border-line bg-fog bg-cover bg-center"
          style={{ backgroundImage: "url('/photos/placeholder-3.jpg')" }}
          aria-label="Kevin visual journal portrait placeholder"
        />
        <div className="max-w-3xl text-lg leading-9 text-muted">
          <p>
            我喜欢把相机当成一种随身的笔记工具。它不一定总是在寻找宏大的景色，更多时候是在路上、山里、城市转角和一些很短的停留里，记录当时的光、空气和身体所在的位置。
          </p>
          <p className="mt-7">
            这里不是传统意义上的摄影师作品集，而是一份持续更新的个人旅行影像档案。有远行的线路，也有徒步时经过的山径；有日常扫街中的偶然画面，也有按地区、城市和路线慢慢整理的到达记录。
          </p>
          <p className="mt-7">
            网站先保持简单，图片和文字都可以慢慢替换。重要的是让每一次出发、每一段路和每个曾经停留过的地方，都有一个安静的位置。
          </p>
        </div>
      </div>
    </section>
  );
}
