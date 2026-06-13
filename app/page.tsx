import Image from "next/image";
import Link from "next/link";
import GalleryWall from "@/components/GalleryWall";
import HomeScrollTransition from "@/components/HomeScrollTransition";
import { homeHeroImage } from "@/data/galleries";

export default function Home() {
  return (
    <main className="home-flow">
      <HomeScrollTransition>
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
            <h1>
              Kevin
              <br />
              Journal
            </h1>
            <Link href="/galleries" className="home-primary-link">
              进入影像目录
            </Link>
          </div>
        </section>

        <div className="home-gallery-reveal">
          <GalleryWall />
        </div>
      </HomeScrollTransition>
    </main>
  );
}
