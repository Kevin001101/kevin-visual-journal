export type Gallery = {
  title: string;
  slug: string;
  region: string;
  category: string;
  date: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
};

export type GalleryImage = {
  src: string;
  thumb: string;
  alt: string;
};

// Put full-size images in public/photos/{gallery}/ and thumbnails in
// public/photos/{gallery}/thumbs/. Thumbnails should be about 600px wide
// (80KB-250KB), full-size images about 1600px wide (300KB-900KB), and raw
// phone/camera originals should not be placed directly in the website.
const getThumbnailSrc = (src: string) => {
  if (src.includes("/optimized/") && src.includes("/detail/")) {
    return src.replace("/detail/", "/wall/");
  }

  const lastSlashIndex = src.lastIndexOf("/");
  return `${src.slice(0, lastSlashIndex)}/thumbs${src.slice(lastSlashIndex)}`;
};

const galleryPhotos = (photos: string[], title: string): GalleryImage[] =>
  photos.map((src, index) => ({
    src,
    thumb: getThumbnailSrc(src),
    alt: `${title} photo ${String(index + 1).padStart(2, "0")}`,
  }));

export type GalleryWallItem = {
  title: string;
  slug: string;
  date: string;
  coverImage: string;
  href?: string;
};

export const regionOrder = [
  "澳门",
  "香港",
  "中国内地",
];

export const homeHeroImage =
  "/photos/covers/home-hero-kula-kangri.jpg";

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

const mountWutaiPhotos = [
  "/photos/mount-wutai/wutai-01.jpg",
  "/photos/mount-wutai/wutai-02.jpg",
  "/photos/mount-wutai/wutai-03.jpg",
  "/photos/mount-wutai/wutai-04.jpg",
  "/photos/mount-wutai/wutai-05.jpg",
  "/photos/mount-wutai/wutai-06.jpg",
  "/photos/mount-wutai/wutai-07.jpg",
  "/photos/mount-wutai/wutai-08.jpg",
  "/photos/mount-wutai/wutai-09.jpg",
  "/photos/mount-wutai/wutai-10.jpg",
  "/photos/mount-wutai/wutai-11.jpg",
  "/photos/mount-wutai/wutai-12.jpg",
  "/photos/mount-wutai/wutai-13.jpg",
  "/photos/mount-wutai/wutai-14.jpg",
  "/photos/mount-wutai/wutai-15.jpg",
  "/photos/mount-wutai/wutai-16.jpg",
  "/photos/mount-wutai/wutai-17.jpg",
  "/photos/mount-wutai/wutai-18.jpg",
  "/photos/mount-wutai/wutai-19.jpg",
  "/photos/mount-wutai/wutai-20.jpg",
  "/photos/mount-wutai/wutai-21.jpg",
  "/photos/mount-wutai/wutai-22.jpg",
  "/photos/mount-wutai/wutai-23.jpg",
  "/photos/mount-wutai/wutai-24.jpg",
  "/photos/mount-wutai/wutai-25.jpg",
  "/photos/mount-wutai/wutai-26.jpg",
];

const mountWutaiCover = mountWutaiPhotos[7];
const kulaKangriCover = "/photos/covers/kula-kangri-cover.jpg";
const mountSiguniangCover = "/photos/covers/mount-siguniang-cover.jpg";
const changbaiMountainPhotos = [
  "/photos/changbai-mountain/changbai-01.jpg",
  "/photos/changbai-mountain/changbai-02.jpg",
  "/photos/changbai-mountain/changbai-03.jpg",
  "/photos/changbai-mountain/changbai-04.jpg",
  "/photos/changbai-mountain/changbai-05.jpg",
  "/photos/changbai-mountain/changbai-06.jpg",
  "/photos/changbai-mountain/changbai-07.jpg",
  "/photos/changbai-mountain/changbai-08.jpg",
];
const changbaiMountainCover = changbaiMountainPhotos[7];
const lhasaPhotos = [
  "/photos/lhasa/lhasa-01.jpg",
  "/photos/lhasa/lhasa-02.jpg",
  "/photos/lhasa/lhasa-03.jpg",
  "/photos/lhasa/lhasa-04.jpg",
  "/photos/lhasa/lhasa-05.jpg",
  "/photos/lhasa/lhasa-06.jpg",
  "/photos/lhasa/lhasa-07.jpg",
  "/photos/lhasa/lhasa-08.jpg",
  "/photos/lhasa/lhasa-09.jpg",
];
const lhasaCover = lhasaPhotos[2];
const hongKongPhotos = [
  "/photos/hong-kong/hong-kong-01.jpg",
  "/photos/hong-kong/hong-kong-02.jpg",
  "/photos/hong-kong/hong-kong-03.jpg",
  "/photos/hong-kong/hong-kong-04.jpg",
  "/photos/hong-kong/hong-kong-05.jpg",
  "/photos/hong-kong/hong-kong-06.jpg",
  "/photos/hong-kong/hong-kong-07.jpg",
  "/photos/hong-kong/hong-kong-08.jpg",
];
const hongKongCover = hongKongPhotos[6];
const wuhanPhotos = [
  "/photos/optimized/wuhan/detail/wuhan-01.jpg",
  "/photos/optimized/wuhan/detail/wuhan-02.jpg",
  "/photos/optimized/wuhan/detail/wuhan-03.jpg",
  "/photos/optimized/wuhan/detail/wuhan-04.jpg",
  "/photos/optimized/wuhan/detail/wuhan-05.jpg",
  "/photos/optimized/wuhan/detail/wuhan-06.jpg",
  "/photos/optimized/wuhan/detail/wuhan-07.jpg",
  "/photos/optimized/wuhan/detail/wuhan-08.jpg",
  "/photos/optimized/wuhan/detail/wuhan-09.jpg",
  "/photos/optimized/wuhan/detail/wuhan-10.jpg",
  "/photos/optimized/wuhan/detail/wuhan-11.jpg",
  "/photos/optimized/wuhan/detail/wuhan-12.jpg",
  "/photos/optimized/wuhan/detail/wuhan-13.jpg",
  "/photos/optimized/wuhan/detail/wuhan-14.jpg",
  "/photos/optimized/wuhan/detail/wuhan-15.jpg",
  "/photos/optimized/wuhan/detail/wuhan-16.jpg",
  "/photos/optimized/wuhan/detail/wuhan-17.jpg",
  "/photos/optimized/wuhan/detail/wuhan-18.jpg",
  "/photos/optimized/wuhan/detail/wuhan-19.jpg",
  "/photos/optimized/wuhan/detail/wuhan-20.jpg",
  "/photos/optimized/wuhan/detail/wuhan-21.jpg",
];
const wuhanCover = "/photos/optimized/wuhan/wall/wuhan-17.jpg";
const nanchangPhotos = [
  "/photos/optimized/nanchang/detail/nanchang-01.jpg",
  "/photos/optimized/nanchang/detail/nanchang-02.jpg",
  "/photos/optimized/nanchang/detail/nanchang-03.jpg",
  "/photos/optimized/nanchang/detail/nanchang-04.jpg",
  "/photos/optimized/nanchang/detail/nanchang-05.jpg",
  "/photos/optimized/nanchang/detail/nanchang-06.jpg",
  "/photos/optimized/nanchang/detail/nanchang-07.jpg",
  "/photos/optimized/nanchang/detail/nanchang-08.jpg",
  "/photos/optimized/nanchang/detail/nanchang-09.jpg",
  "/photos/optimized/nanchang/detail/nanchang-10.jpg",
  "/photos/optimized/nanchang/detail/nanchang-11.jpg",
  "/photos/optimized/nanchang/detail/nanchang-12.jpg",
  "/photos/optimized/nanchang/detail/nanchang-13.jpg",
  "/photos/optimized/nanchang/detail/nanchang-14.jpg",
  "/photos/optimized/nanchang/detail/nanchang-15.jpg",
  "/photos/optimized/nanchang/detail/nanchang-16.jpg",
  "/photos/optimized/nanchang/detail/nanchang-17.jpg",
  "/photos/optimized/nanchang/detail/nanchang-18.jpg",
  "/photos/optimized/nanchang/detail/nanchang-19.jpg",
];
const nanchangCover = "/photos/optimized/nanchang/wall/nanchang-16.jpg";
const changshaPhotos = [
  "/photos/optimized/changsha/detail/changsha-01.jpg",
  "/photos/optimized/changsha/detail/changsha-02.jpg",
  "/photos/optimized/changsha/detail/changsha-03.jpg",
  "/photos/optimized/changsha/detail/changsha-04.jpg",
  "/photos/optimized/changsha/detail/changsha-05.jpg",
  "/photos/optimized/changsha/detail/changsha-06.jpg",
  "/photos/optimized/changsha/detail/changsha-07.jpg",
  "/photos/optimized/changsha/detail/changsha-08.jpg",
  "/photos/optimized/changsha/detail/changsha-09.jpg",
];
const changshaCover = "/photos/optimized/changsha/wall/changsha-01.jpg";
const xianPhotos = [
  "/photos/optimized/xian/detail/xian-01.jpg",
  "/photos/optimized/xian/detail/xian-02.jpg",
  "/photos/optimized/xian/detail/xian-03.jpg",
  "/photos/optimized/xian/detail/xian-04.jpg",
  "/photos/optimized/xian/detail/xian-05.jpg",
  "/photos/optimized/xian/detail/xian-06.jpg",
  "/photos/optimized/xian/detail/xian-07.jpg",
  "/photos/optimized/xian/detail/xian-08.jpg",
  "/photos/optimized/xian/detail/xian-09.jpg",
  "/photos/optimized/xian/detail/xian-10.jpg",
  "/photos/optimized/xian/detail/xian-11.jpg",
  "/photos/optimized/xian/detail/xian-12.jpg",
  "/photos/optimized/xian/detail/xian-13.jpg",
  "/photos/optimized/xian/detail/xian-14.jpg",
  "/photos/optimized/xian/detail/xian-15.jpg",
];
const xianCover = "/photos/optimized/xian/wall/xian-12.jpg";
const maclehoseTrailPhotos = [
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-01.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-02.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-03.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-04.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-05.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-06.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-07.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-08.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-09.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-10.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-11.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-12.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-13.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-14.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-15.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-16.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-17.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-18.jpg",
  "/photos/optimized/maclehose-trail/detail/maclehose-trail-19.jpg",
];
const maclehoseTrailCover =
  "/photos/optimized/maclehose-trail/wall/maclehose-trail-19.jpg";
const birdingPhotos = [
  "/photos/optimized/birding/detail/birding-01.jpg",
  "/photos/optimized/birding/detail/birding-02.jpg",
  "/photos/optimized/birding/detail/birding-03.jpg",
  "/photos/optimized/birding/detail/birding-04.jpg",
  "/photos/optimized/birding/detail/birding-05.jpg",
  "/photos/optimized/birding/detail/birding-06.jpg",
  "/photos/optimized/birding/detail/birding-07.jpg",
  "/photos/optimized/birding/detail/birding-08.jpg",
];
const birdingCover = "/photos/optimized/birding/wall/birding-01.jpg";
const wugongshanPhotos = [
  "/photos/optimized/wugongshan/detail/wugongshan-01.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-02.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-03.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-04.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-05.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-06.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-07.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-08.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-09.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-10.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-11.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-12.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-13.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-14.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-15.jpg",
  "/photos/optimized/wugongshan/detail/wugongshan-16.jpg",
];
const wugongshanCover = "/photos/optimized/wugongshan/wall/wugongshan-01.jpg";
const macauPhotos = [
  "/photos/macau/macau-01.jpg",
  "/photos/macau/macau-02.jpg",
  "/photos/macau/macau-03.jpg",
  "/photos/macau/macau-04.jpg",
  "/photos/macau/macau-05.jpg",
  "/photos/macau/macau-06.jpg",
  "/photos/macau/macau-07.jpg",
  "/photos/macau/macau-08.jpg",
  "/photos/macau/macau-09.jpg",
  "/photos/macau/macau-10.jpg",
  "/photos/macau/macau-11.jpg",
];
const macauCover = macauPhotos[8];
const bronzeHeadPhotos = [
  "/photos/bronze-head/bronze-head-01.jpg",
  "/photos/bronze-head/bronze-head-02.jpg",
  "/photos/bronze-head/bronze-head-03.jpg",
  "/photos/bronze-head/bronze-head-04.jpg",
  "/photos/bronze-head/bronze-head-05.jpg",
];
const bronzeHeadCover = bronzeHeadPhotos[3];

const galleryImages = (offset = 0) =>
  detailPhotos.map((_, index) => detailPhotos[(index + offset) % detailPhotos.length]);

export const galleries: Gallery[] = [
  {
    title: "澳门",
    slug: "macau-streets",
    region: "澳门",
    category: "街头",
    date: "2025.01",
    description: "",
    coverImage: macauCover,
    images: galleryPhotos(macauPhotos, "macau streets"),
  },
  {
    title: "烟花",
    slug: "macau-fireworks",
    region: "澳门",
    category: "夜景",
    date: "2025.10",
    description: "",
    coverImage: wallPhotos[5],
    images: galleryPhotos(detailPhotos, "macau fireworks"),
  },
  {
    title: "氹仔",
    slug: "taipa",
    region: "澳门",
    category: "城市",
    date: "2025.01",
    description: "",
    coverImage: wallPhotos[1],
    images: galleryPhotos(galleryImages(1), "taipa"),
  },
  {
    title: "路环",
    slug: "coloane",
    region: "澳门",
    category: "地点",
    date: "2025.01",
    description: "",
    coverImage: wallPhotos[2],
    images: galleryPhotos(galleryImages(2), "coloane"),
  },
  {
    title: "香港",
    slug: "hong-kong-streets",
    region: "香港",
    category: "街头",
    date: "2025.04",
    description: "",
    coverImage: hongKongCover,
    images: galleryPhotos(hongKongPhotos, "hong kong streets"),
  },
  {
    title: "麦理浩径",
    slug: "maclehose-trail",
    region: "香港",
    category: "徒步",
    date: "2025.05",
    description: "",
    coverImage: maclehoseTrailCover,
    images: galleryPhotos(maclehoseTrailPhotos, "maclehose trail"),
  },
  {
    title: "武汉",
    slug: "wuhan",
    region: "中国内地",
    category: "城市",
    date: "2025.08",
    description: "",
    coverImage: wuhanCover,
    images: galleryPhotos(wuhanPhotos, "wuhan"),
  },
  {
    title: "南昌",
    slug: "nanchang",
    region: "中国内地",
    category: "城市",
    date: "2026.01",
    description: "",
    coverImage: nanchangCover,
    images: galleryPhotos(nanchangPhotos, "nanchang"),
  },
  {
    title: "长沙",
    slug: "changsha",
    region: "中国内地",
    category: "城市",
    date: "2024.08",
    description: "",
    coverImage: changshaCover,
    images: galleryPhotos(changshaPhotos, "changsha"),
  },
  {
    title: "西安",
    slug: "xian",
    region: "中国内地",
    category: "城市",
    date: "2024.07",
    description: "",
    coverImage: xianCover,
    images: galleryPhotos(xianPhotos, "xian"),
  },
  {
    title: "打鸟",
    slug: "birding",
    region: "中国内地",
    category: "观鸟",
    date: "2026.04",
    description: "",
    coverImage: birdingCover,
    images: galleryPhotos(birdingPhotos, "birding"),
  },
  {
    title: "山西五台山",
    slug: "mount-wutai",
    region: "中国内地",
    category: "徒步",
    date: "2025.07",
    description: "",
    coverImage: mountWutaiCover,
    images: galleryPhotos(mountWutaiPhotos, "mount wutai"),
  },
  {
    title: "武功山",
    slug: "wugongshan",
    region: "中国内地",
    category: "徒步",
    date: "2026.04",
    description: "",
    coverImage: wugongshanCover,
    images: galleryPhotos(wugongshanPhotos, "wugongshan"),
  },
  {
    title: "库拉岗日",
    slug: "kula-kangri",
    region: "中国内地",
    category: "徒步",
    date: "2025.02",
    description: "",
    coverImage: kulaKangriCover,
    images: galleryPhotos(kulaKangriDetailPhotos, "kula kangri"),
  },
  {
    title: "四姑娘山",
    slug: "mount-siguniang",
    region: "中国内地",
    category: "山峰",
    date: "2026.05",
    description: "",
    coverImage: mountSiguniangCover,
    images: galleryPhotos(mountSiguniangDetailPhotos, "mount siguniang"),
  },
  {
    title: "长白山",
    slug: "changbai-mountain",
    region: "中国内地",
    category: "雪景",
    date: "2025.11",
    description: "",
    coverImage: changbaiMountainCover,
    images: galleryPhotos(changbaiMountainPhotos, "changbai mountain"),
  },
  {
    title: "拉萨",
    slug: "lhasa",
    region: "中国内地",
    category: "城市",
    date: "2026.01",
    description: "",
    coverImage: lhasaCover,
    images: galleryPhotos(lhasaPhotos, "lhasa"),
  },
  {
    title: "铜首",
    slug: "bronze-head",
    region: "中国内地",
    category: "物件",
    date: "2025.02",
    description: "",
    coverImage: bronzeHeadCover,
    images: galleryPhotos(bronzeHeadPhotos, "bronze head"),
  },
];

export const latestGalleries = galleries.slice(0, 4);

export const galleryWallItems: GalleryWallItem[] = [
  {
    title: "澳门",
    slug: "macau",
    date: "2025.01",
    coverImage: macauCover,
    href: "/galleries/macau-streets",
  },
  {
    title: "烟花",
    slug: "macau-fireworks",
    date: "2025.10",
    coverImage: wallPhotos[5],
  },
  {
    title: "香港",
    slug: "hong-kong",
    date: "2025.04",
    coverImage: hongKongCover,
    href: "/galleries/hong-kong-streets",
  },
  {
    title: "麦理浩径",
    slug: "maclehose-trail",
    date: "2025.05",
    coverImage: maclehoseTrailCover,
  },
  {
    title: "武汉",
    slug: "wuhan",
    date: "2025.08",
    coverImage: wuhanCover,
  },
  {
    title: "南昌",
    slug: "nanchang",
    date: "2026.01",
    coverImage: nanchangCover,
  },
  {
    title: "长沙",
    slug: "changsha",
    date: "2024.08",
    coverImage: changshaCover,
  },
  {
    title: "西安",
    slug: "xian",
    date: "2024.07",
    coverImage: xianCover,
  },
  {
    title: "打鸟",
    slug: "birding",
    date: "2026.04",
    coverImage: birdingCover,
  },
  {
    title: "五台山",
    slug: "mount-wutai",
    date: "2025.07",
    coverImage: mountWutaiCover,
  },
  {
    title: "武功山",
    slug: "wugongshan",
    date: "2026.04",
    coverImage: wugongshanCover,
  },
  {
    title: "长白山",
    slug: "changbai-mountain",
    date: "2025.11",
    coverImage: changbaiMountainCover,
  },
  {
    title: "拉萨",
    slug: "lhasa",
    date: "2026.01",
    coverImage: lhasaCover,
  },
  {
    title: "铜首",
    slug: "bronze-head",
    date: "2025.02",
    coverImage: bronzeHeadCover,
  },
  {
    title: "四姑娘山",
    slug: "mount-siguniang",
    date: "2026.05",
    coverImage: mountSiguniangCover,
  },
  {
    title: "库拉岗日",
    slug: "kula-kangri",
    date: "2025.02",
    coverImage: kulaKangriCover,
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
