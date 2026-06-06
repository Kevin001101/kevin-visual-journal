import Link from "next/link";
import { latestGalleries } from "@/data/galleries";

export default function Home() {
  return (
    <main className="home-flow">
      <section className="home-flow-section home-cover">
        <div
          className="home-cover-image"
          style={{ backgroundImage: "url('/photos/placeholder-1.jpg')" }}
          aria-hidden="true"
        />
        <div className="home-cover-shade" />

        <div className="home-cover-content">
          <h1>Kevin Visual Journal</h1>
          <p className="home-cover-subtitle">记录走过的路与到达的地方。</p>
          <Link href="/galleries" className="home-primary-link">
            进入影像目录
          </Link>
        </div>
      </section>

      <section className="home-flow-section home-latest">
        <div className="home-section-inner">
          <div className="home-section-heading">
            <p>Latest</p>
            <h2>最新影像记录</h2>
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
    </main>
  );
}
