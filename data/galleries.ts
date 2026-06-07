export type Gallery = {
  title: string;
  slug: string;
  region: string;
  category: string;
  date: string;
  description: string;
  coverImage: string;
  images: string[];
};

export type GalleryWallItem = {
  title: string;
  slug: string;
  date: string;
  coverImage: string;
  href?: string;
};

export const regionOrder = [
  "Macau",
  "Hong Kong",
  "Mainland China",
  "Singapore",
  "Routes",
];

export const homeHeroImage =
  "/photos/optimized/macau-fireworks/hero/DSC01644.jpg";

const wallPhotos = [
  "/photos/optimized/macau-fireworks/wall/DSC01615.jpg",
  "/photos/optimized/macau-fireworks/wall/DSC01625.jpg",
  "/photos/optimized/macau-fireworks/wall/DSC01629.jpg",
  "/photos/optimized/macau-fireworks/wall/DSC01644.jpg",
  "/photos/optimized/macau-fireworks/wall/DSC01646.jpg",
  "/photos/optimized/macau-fireworks/wall/DSC01647.jpg",
  "/photos/optimized/macau-fireworks/wall/DSC01677.jpg",
];

const detailPhotos = [
  "/photos/optimized/macau-fireworks/detail/DSC01615.jpg",
  "/photos/optimized/macau-fireworks/detail/DSC01625.jpg",
  "/photos/optimized/macau-fireworks/detail/DSC01629.jpg",
  "/photos/optimized/macau-fireworks/detail/DSC01644.jpg",
  "/photos/optimized/macau-fireworks/detail/DSC01646.jpg",
  "/photos/optimized/macau-fireworks/detail/DSC01647.jpg",
  "/photos/optimized/macau-fireworks/detail/DSC01677.jpg",
];

const kulaKangriWallPhotos = [
  "/photos/optimized/kula-kangri/wall/DSC05323.jpg",
  "/photos/optimized/kula-kangri/wall/DSC05354.jpg",
  "/photos/optimized/kula-kangri/wall/DSC05379.jpg",
  "/photos/optimized/kula-kangri/wall/DSC05154-2.jpg",
  "/photos/optimized/kula-kangri/wall/DSC05000.jpg",
  "/photos/optimized/kula-kangri/wall/DSC05108.jpg",
  "/photos/optimized/kula-kangri/wall/DSC04510.jpg",
  "/photos/optimized/kula-kangri/wall/DSC05307.jpg",
  "/photos/optimized/kula-kangri/wall/DSC04645.jpg",
  "/photos/optimized/kula-kangri/wall/DSC05107.jpg",
];

const kulaKangriDetailPhotos = [
  "/photos/optimized/kula-kangri/detail/DSC05323.jpg",
  "/photos/optimized/kula-kangri/detail/DSC05354.jpg",
  "/photos/optimized/kula-kangri/detail/DSC05379.jpg",
  "/photos/optimized/kula-kangri/detail/DSC05154-2.jpg",
  "/photos/optimized/kula-kangri/detail/DSC05000.jpg",
  "/photos/optimized/kula-kangri/detail/DSC05108.jpg",
  "/photos/optimized/kula-kangri/detail/DSC04510.jpg",
  "/photos/optimized/kula-kangri/detail/DSC05307.jpg",
  "/photos/optimized/kula-kangri/detail/DSC04645.jpg",
  "/photos/optimized/kula-kangri/detail/DSC05107.jpg",
];

const mountSiguniangWallPhotos = [
  "/photos/optimized/mount-siguniang/wall/siguniang-01.jpg",
  "/photos/optimized/mount-siguniang/wall/siguniang-02.jpg",
  "/photos/optimized/mount-siguniang/wall/siguniang-03.jpg",
  "/photos/optimized/mount-siguniang/wall/siguniang-04.jpg",
  "/photos/optimized/mount-siguniang/wall/siguniang-05.jpg",
  "/photos/optimized/mount-siguniang/wall/siguniang-06.jpg",
  "/photos/optimized/mount-siguniang/wall/siguniang-07.jpg",
  "/photos/optimized/mount-siguniang/wall/siguniang-08.jpg",
  "/photos/optimized/mount-siguniang/wall/siguniang-09.jpg",
  "/photos/optimized/mount-siguniang/wall/siguniang-10.jpg",
];

const mountSiguniangDetailPhotos = [
  "/photos/optimized/mount-siguniang/detail/siguniang-01.jpg",
  "/photos/optimized/mount-siguniang/detail/siguniang-02.jpg",
  "/photos/optimized/mount-siguniang/detail/siguniang-03.jpg",
  "/photos/optimized/mount-siguniang/detail/siguniang-04.jpg",
  "/photos/optimized/mount-siguniang/detail/siguniang-05.jpg",
  "/photos/optimized/mount-siguniang/detail/siguniang-06.jpg",
  "/photos/optimized/mount-siguniang/detail/siguniang-07.jpg",
  "/photos/optimized/mount-siguniang/detail/siguniang-08.jpg",
  "/photos/optimized/mount-siguniang/detail/siguniang-09.jpg",
  "/photos/optimized/mount-siguniang/detail/siguniang-10.jpg",
];

const galleryImages = (offset = 0) =>
  detailPhotos.map((_, index) => detailPhotos[(index + offset) % detailPhotos.length]);

export const galleries: Gallery[] = [
  {
    title: "Macau Streets",
    slug: "macau-streets",
    region: "Macau",
    category: "Street",
    date: "2026",
    description: "澳门街巷的光。",
    coverImage: wallPhotos[0],
    images: galleryImages(0),
  },
  {
    title: "Macau Fireworks",
    slug: "macau-fireworks",
    region: "Macau",
    category: "Night",
    date: "2026",
    description: "澳门夜空的烟花。",
    coverImage: wallPhotos[5],
    images: detailPhotos,
  },
  {
    title: "Taipa",
    slug: "taipa",
    region: "Macau",
    category: "City",
    date: "2026",
    description: "氹仔的旧街。",
    coverImage: wallPhotos[1],
    images: galleryImages(1),
  },
  {
    title: "Coloane",
    slug: "coloane",
    region: "Macau",
    category: "Place",
    date: "2026",
    description: "路环的海风。",
    coverImage: wallPhotos[2],
    images: galleryImages(2),
  },
  {
    title: "Hong Kong Streets",
    slug: "hong-kong-streets",
    region: "Hong Kong",
    category: "Street",
    date: "2025",
    description: "香港街头的密度。",
    coverImage: wallPhotos[3],
    images: galleryImages(3),
  },
  {
    title: "MacLehose Trail",
    slug: "maclehose-trail",
    region: "Hong Kong",
    category: "Trail",
    date: "2025",
    description: "山径与海风。",
    coverImage: wallPhotos[4],
    images: galleryImages(4),
  },
  {
    title: "Victoria Harbour",
    slug: "victoria-harbour",
    region: "Hong Kong",
    category: "City",
    date: "2025",
    description: "维港的水面。",
    coverImage: wallPhotos[5],
    images: galleryImages(5),
  },
  {
    title: "Wuhan",
    slug: "wuhan",
    region: "Mainland China",
    category: "City",
    date: "2025",
    description: "武汉的江岸。",
    coverImage: wallPhotos[6],
    images: galleryImages(6),
  },
  {
    title: "Changsha",
    slug: "changsha",
    region: "Mainland China",
    category: "City",
    date: "2025",
    description: "长沙的夜色。",
    coverImage: wallPhotos[0],
    images: galleryImages(0),
  },
  {
    title: "Shanxi Mount Wutai",
    slug: "mount-wutai",
    region: "Mainland China",
    category: "Mountain",
    date: "2025",
    description: "五台山的清晨。",
    coverImage: wallPhotos[1],
    images: galleryImages(1),
  },
  {
    title: "Tibet Kula Kangri",
    slug: "kula-kangri",
    region: "Mainland China",
    category: "Trail",
    date: "2025",
    description: "库拉岗日徒步。",
    coverImage: kulaKangriWallPhotos[4],
    images: kulaKangriDetailPhotos,
  },
  {
    title: "Sichuan Mount Siguniang",
    slug: "mount-siguniang",
    region: "Mainland China",
    category: "Mountain",
    date: "2026",
    description: "四姑娘山登山。",
    coverImage: mountSiguniangWallPhotos[1],
    images: mountSiguniangDetailPhotos,
  },
  {
    title: "Xinjiang",
    slug: "xinjiang",
    region: "Mainland China",
    category: "Journey",
    date: "2025",
    description: "新疆的远路。",
    coverImage: wallPhotos[3],
    images: galleryImages(3),
  },
  {
    title: "Singapore Streets",
    slug: "singapore-streets",
    region: "Singapore",
    category: "Street",
    date: "2026",
    description: "新加坡街头。",
    coverImage: wallPhotos[4],
    images: galleryImages(4),
  },
  {
    title: "City Fragments",
    slug: "city-fragments",
    region: "Singapore",
    category: "City",
    date: "2026",
    description: "城市片段。",
    coverImage: wallPhotos[5],
    images: galleryImages(5),
  },
  {
    title: "Wuhan to Changsha Ride",
    slug: "wuhan-to-changsha-ride",
    region: "Routes",
    category: "Ride",
    date: "2024",
    description: "从武汉骑到长沙。",
    coverImage: wallPhotos[6],
    images: galleryImages(6),
  },
];

export const latestGalleries = galleries.slice(0, 4);

export const galleryWallItems: GalleryWallItem[] = [
  {
    title: "澳门",
    slug: "macau",
    date: "2026",
    coverImage: wallPhotos[3],
    href: "/galleries#macau",
  },
  {
    title: "澳门烟花",
    slug: "macau-fireworks",
    date: "2026",
    coverImage: wallPhotos[5],
  },
  {
    title: "香港",
    slug: "hong-kong",
    date: "2025",
    coverImage: wallPhotos[0],
    href: "/galleries#hong-kong",
  },
  {
    title: "武汉",
    slug: "wuhan",
    date: "2025",
    coverImage: wallPhotos[1],
  },
  {
    title: "长沙",
    slug: "changsha",
    date: "2025",
    coverImage: wallPhotos[2],
  },
  {
    title: "山西",
    slug: "shanxi",
    date: "2025",
    coverImage: wallPhotos[3],
    href: "/galleries#mainland-china",
  },
  {
    title: "西藏",
    slug: "tibet",
    date: "2025",
    coverImage: kulaKangriWallPhotos[8],
    href: "/galleries#mainland-china",
  },
  {
    title: "新疆",
    slug: "xinjiang",
    date: "2025",
    coverImage: wallPhotos[5],
  },
  {
    title: "新加坡",
    slug: "singapore",
    date: "2026",
    coverImage: wallPhotos[6],
    href: "/galleries#singapore",
  },
  {
    title: "登山",
    slug: "mount-siguniang",
    date: "2026",
    coverImage: mountSiguniangWallPhotos[1],
  },
  {
    title: "徒步",
    slug: "kula-kangri",
    date: "2025",
    coverImage: kulaKangriWallPhotos[4],
  },
  {
    title: "骑行",
    slug: "wuhan-to-changsha-ride",
    date: "2024",
    coverImage: wallPhotos[2],
  },
];

export function getGalleryBySlug(slug: string) {
  return galleries.find((gallery) => gallery.slug === slug);
}

export function getGalleriesByRegion() {
  return regionOrder.map((region) => ({
    region,
    galleries: galleries.filter((gallery) => gallery.region === region),
  }));
}
