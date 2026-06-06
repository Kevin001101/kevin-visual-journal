import Link from "next/link";
import { getGalleriesByRegion, latestGalleries } from "@/data/galleries";

const homeNavItems = [
  { href: "/", label: "Home" },
  { href: "/galleries", label: "Galleries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Home() {
  const groupedGalleries = getGalleriesByRegion();

  return (
    <div className="home-snap">
      <section className="home-snap-section home-cover">
        <div
          className="home-cover-image"
          style={{ backgroundImage: "url('/photos/placeholder-1.jpg')" }}
          aria-hidden="true"
        />
        <div className="home-cover-shade" />

        <div className="home-cover-top">
          <Link href="/" className="home-cover-brand">
            Kevin Visual Journal
            <span>Kevin 影像日志</span>
          </Link>
          <nav className="home-cover-nav" aria-label="Home navigation">
            {homeNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="home-cover-content">
          <p className="home-cover-kicker">Journeys, trails, streets and places.</p>
          <h1>Kevin Visual Journal</h1>
          <p className="home-cover-subtitle">
            记录走过的路、到达的地方，与那些短暂停留的光。
          </p>
        </div>

        <a href="#home-galleries" className="home-scroll-cue">
          Scroll
        </a>
      </section>

      <section id="home-galleries" className="home-snap-section home-index">
        <div className="home-section-inner">
          <div className="home-section-heading">
            <p>Galleries</p>
            <h2>到达之地档案</h2>
            <span>
              按地区、城市、山径和路线归档。这里更像旅行摄影网站的地点索引，而不是作品集橱窗。
            </span>
          </div>

          <div className="home-region-directory">
            {groupedGalleries.map(({ region, galleries }) => (
              <div key={region} className="home-region-block">
                <h3>{region}</h3>
                <div className="home-region-links">
                  {galleries.map((gallery) => (
                    <Link key={gallery.slug} href={`/galleries/${gallery.slug}`}>
                      {gallery.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-snap-section home-latest">
        <div className="home-section-inner">
          <div className="home-section-heading">
            <p>Latest Galleries</p>
            <h2>旅行记录列表</h2>
            <span>
              以文章列表的方式进入最近整理的相册，保留日期、简介和继续阅读入口。
            </span>
          </div>

          <div className="home-article-list">
            {latestGalleries.map((gallery) => (
              <article key={gallery.slug} className="home-article-item">
                <div>
                  <p className="home-article-date">
                    {gallery.date} / {gallery.region} / {gallery.category}
                  </p>
                  <h3>
                    <Link href={`/galleries/${gallery.slug}`}>
                      {gallery.title}
                    </Link>
                  </h3>
                </div>
                <p>{gallery.description}</p>
                <Link
                  href={`/galleries/${gallery.slug}`}
                  className="home-read-more"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
