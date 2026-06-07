import Image from "next/image";
import Link from "next/link";
import GalleryWall from "@/components/GalleryWall";
import { homeHeroImage } from "@/data/galleries";

export default function Home() {
  return (
    <main className="home-flow">
      <section className="home-flow-section home-cover">
        <Image
          src={homeHeroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="home-cover-image"
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

      <GalleryWall />
    </main>
  );
}
