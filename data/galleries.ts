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
};

export const regionOrder = [
  "Macau",
  "Hong Kong",
  "Mainland China",
  "Singapore",
  "Routes",
];

const photoSet = [
  "/photos/placeholder-1.jpg",
  "/photos/placeholder-2.jpg",
  "/photos/placeholder-3.jpg",
  "/photos/placeholder-4.jpg",
];

export const galleries: Gallery[] = [
  {
    title: "Macau Streets",
    slug: "macau-streets",
    region: "Macau",
    category: "Street",
    date: "2026",
    description: "澳门街头的光与坡道。",
    coverImage: photoSet[1],
    images: [photoSet[1], photoSet[2], photoSet[0], photoSet[3], photoSet[1]],
  },
  {
    title: "Taipa",
    slug: "taipa",
    region: "Macau",
    category: "City",
    date: "2026",
    description: "氹仔的旧街与午后。",
    coverImage: photoSet[2],
    images: [photoSet[2], photoSet[0], photoSet[3], photoSet[1], photoSet[2]],
  },
  {
    title: "Coloane",
    slug: "coloane",
    region: "Macau",
    category: "Place",
    date: "2026",
    description: "路环的海风和慢步。",
    coverImage: photoSet[3],
    images: [photoSet[3], photoSet[1], photoSet[0], photoSet[2], photoSet[3]],
  },
  {
    title: "Hong Kong Streets",
    slug: "hong-kong-streets",
    region: "Hong Kong",
    category: "Street",
    date: "2025",
    description: "香港街头的密度。",
    coverImage: photoSet[2],
    images: [photoSet[2], photoSet[1], photoSet[3], photoSet[0], photoSet[2]],
  },
  {
    title: "MacLehose Trail",
    slug: "maclehose-trail",
    region: "Hong Kong",
    category: "Trail",
    date: "2025",
    description: "山径、海风和远处城市。",
    coverImage: photoSet[1],
    images: [photoSet[1], photoSet[3], photoSet[0], photoSet[2], photoSet[1]],
  },
  {
    title: "Victoria Harbour",
    slug: "victoria-harbour",
    region: "Hong Kong",
    category: "City",
    date: "2025",
    description: "维港的水面与夜色。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[2], photoSet[1], photoSet[3], photoSet[0]],
  },
  {
    title: "Wuhan",
    slug: "wuhan",
    region: "Mainland China",
    category: "City",
    date: "2025",
    description: "武汉的江岸和街道。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[1], photoSet[2], photoSet[3], photoSet[0]],
  },
  {
    title: "Changsha",
    slug: "changsha",
    region: "Mainland China",
    category: "City",
    date: "2025",
    description: "抵达长沙后的夜色。",
    coverImage: photoSet[1],
    images: [photoSet[1], photoSet[3], photoSet[2], photoSet[0], photoSet[1]],
  },
  {
    title: "Shanxi Mount Wutai",
    slug: "mount-wutai",
    region: "Mainland China",
    category: "Trail",
    date: "2025",
    description: "五台山的清晨与薄雾。",
    coverImage: photoSet[2],
    images: [photoSet[2], photoSet[0], photoSet[3], photoSet[1], photoSet[2]],
  },
  {
    title: "Tibet Kula Kangri",
    slug: "kula-kangri",
    region: "Mainland China",
    category: "Trail",
    date: "2025",
    description: "库拉岗日的雪线。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[3], photoSet[1], photoSet[2], photoSet[0]],
  },
  {
    title: "Xinjiang",
    slug: "xinjiang",
    region: "Mainland China",
    category: "Journey",
    date: "2025",
    description: "新疆的道路和远山。",
    coverImage: photoSet[3],
    images: [photoSet[3], photoSet[2], photoSet[0], photoSet[1], photoSet[3]],
  },
  {
    title: "Singapore Streets",
    slug: "singapore-streets",
    region: "Singapore",
    category: "Street",
    date: "2026",
    description: "新加坡街头的热带日常。",
    coverImage: photoSet[1],
    images: [photoSet[1], photoSet[0], photoSet[3], photoSet[2], photoSet[1]],
  },
  {
    title: "City Fragments",
    slug: "city-fragments",
    region: "Singapore",
    category: "City",
    date: "2026",
    description: "城市片段和短暂停留。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[2], photoSet[3], photoSet[1], photoSet[0]],
  },
  {
    title: "Wuhan to Changsha Ride",
    slug: "wuhan-to-changsha-ride",
    region: "Routes",
    category: "Journey",
    date: "2024",
    description: "从武汉骑到长沙。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[1], photoSet[2], photoSet[3], photoSet[0]],
  },
];

export const latestGalleries = galleries.slice(0, 4);

export const galleryWallItems: GalleryWallItem[] = [
  {
    title: "澳门街巷",
    slug: "macau-streets",
    date: "2026",
    coverImage: photoSet[1],
  },
  {
    title: "氹仔",
    slug: "taipa",
    date: "2026",
    coverImage: photoSet[2],
  },
  {
    title: "路环",
    slug: "coloane",
    date: "2026",
    coverImage: photoSet[3],
  },
  {
    title: "香港街头",
    slug: "hong-kong-streets",
    date: "2025",
    coverImage: photoSet[2],
  },
  {
    title: "麦理浩径",
    slug: "maclehose-trail",
    date: "2025",
    coverImage: photoSet[1],
  },
  {
    title: "维多利亚港",
    slug: "victoria-harbour",
    date: "2025",
    coverImage: photoSet[0],
  },
  {
    title: "武汉",
    slug: "wuhan",
    date: "2025",
    coverImage: photoSet[0],
  },
  {
    title: "长沙",
    slug: "changsha",
    date: "2025",
    coverImage: photoSet[1],
  },
  {
    title: "山西五台山",
    slug: "mount-wutai",
    date: "2025",
    coverImage: photoSet[2],
  },
  {
    title: "西藏库拉岗日",
    slug: "kula-kangri",
    date: "2025",
    coverImage: photoSet[0],
  },
  {
    title: "新疆",
    slug: "xinjiang",
    date: "2025",
    coverImage: photoSet[3],
  },
  {
    title: "新加坡街头",
    slug: "singapore-streets",
    date: "2026",
    coverImage: photoSet[1],
  },
  {
    title: "城市片段",
    slug: "city-fragments",
    date: "2026",
    coverImage: photoSet[0],
  },
  {
    title: "武汉至长沙骑行",
    slug: "wuhan-to-changsha-ride",
    date: "2024",
    coverImage: photoSet[0],
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
