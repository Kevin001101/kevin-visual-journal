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
    date: "2025",
    description:
      "坡道、旧墙、葡式窗框与午后光线交错，记录澳门街巷里缓慢移动的日常片段。",
    coverImage: photoSet[1],
    images: [photoSet[1], photoSet[2], photoSet[0], photoSet[3], photoSet[1]],
  },
  {
    title: "Taipa",
    slug: "taipa",
    region: "Macau",
    category: "City",
    date: "2025",
    description:
      "氹仔的街口、老建筑、窄巷和安静午后，像一本被反复翻看的旅行笔记。",
    coverImage: photoSet[2],
    images: [photoSet[2], photoSet[0], photoSet[3], photoSet[1], photoSet[2]],
  },
  {
    title: "Coloane",
    slug: "coloane",
    region: "Macau",
    category: "Place",
    date: "2025",
    description:
      "路环保留了海风、村落边缘和慢下来的步伐，适合收藏短暂停留的光。",
    coverImage: photoSet[3],
    images: [photoSet[3], photoSet[1], photoSet[0], photoSet[2], photoSet[3]],
  },
  {
    title: "Hong Kong Streets",
    slug: "hong-kong-streets",
    region: "Hong Kong",
    category: "Street",
    date: "2025",
    description:
      "天桥、市场、灯牌和雨后路面，让香港街头呈现出高密度而不断流动的层次。",
    coverImage: photoSet[2],
    images: [photoSet[2], photoSet[1], photoSet[3], photoSet[0], photoSet[2]],
  },
  {
    title: "MacLehose Trail",
    slug: "maclehose-trail",
    region: "Hong Kong",
    category: "Trail",
    date: "2025",
    description:
      "山脊、海风、碎石路和远处城市边缘，组成麦理浩径上缓慢展开的影像路线。",
    coverImage: photoSet[1],
    images: [photoSet[1], photoSet[3], photoSet[0], photoSet[2], photoSet[1]],
  },
  {
    title: "Victoria Harbour",
    slug: "victoria-harbour",
    region: "Hong Kong",
    category: "City",
    date: "2025",
    description:
      "维港的水面、渡轮、 skyline 和夜色，把城市的距离压缩在一条光带里。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[2], photoSet[1], photoSet[3], photoSet[0]],
  },
  {
    title: "Wuhan",
    slug: "wuhan",
    region: "Mainland China",
    category: "City",
    date: "2025",
    description:
      "江岸、桥梁、骑行出发点和日常街道，把武汉记录成一段旅程开始前的注脚。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[1], photoSet[2], photoSet[3], photoSet[0]],
  },
  {
    title: "Changsha",
    slug: "changsha",
    region: "Mainland China",
    category: "City",
    date: "2025",
    description:
      "长途抵达后的夜色、街口、桥下灯光和城市气味，成为路线终章的影像档案。",
    coverImage: photoSet[1],
    images: [photoSet[1], photoSet[3], photoSet[2], photoSet[0], photoSet[1]],
  },
  {
    title: "Shanxi Mount Wutai",
    slug: "shanxi-mount-wutai",
    region: "Mainland China",
    category: "Trail",
    date: "2024",
    description:
      "五台山的清晨有低温、钟声和薄雾，山寺与路面让时间沉下来。",
    coverImage: photoSet[2],
    images: [photoSet[2], photoSet[0], photoSet[3], photoSet[1], photoSet[2]],
  },
  {
    title: "Tibet Kula Kangri",
    slug: "tibet-kula-kangri",
    region: "Mainland China",
    category: "Trail",
    date: "2024",
    description:
      "高原、雪线、湖面和营地，在稀薄空气里留下更慢、更安静的影像索引。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[3], photoSet[1], photoSet[2], photoSet[0]],
  },
  {
    title: "Xinjiang",
    slug: "xinjiang",
    region: "Mainland China",
    category: "Journey",
    date: "2024",
    description:
      "辽阔道路、荒漠边缘、远山和长距离移动，归档那些关于空间和远方的照片。",
    coverImage: photoSet[3],
    images: [photoSet[3], photoSet[2], photoSet[0], photoSet[1], photoSet[3]],
  },
  {
    title: "Singapore Streets",
    slug: "singapore-streets",
    region: "Singapore",
    category: "Street",
    date: "2025",
    description:
      "热带树影、骑楼边缘、街角建筑和行人，组成新加坡日常街头的短篇。",
    coverImage: photoSet[1],
    images: [photoSet[1], photoSet[0], photoSet[3], photoSet[2], photoSet[1]],
  },
  {
    title: "City Fragments",
    slug: "city-fragments",
    region: "Singapore",
    category: "City",
    date: "2025",
    description:
      "地铁出口、午后阴影、建筑立面和短暂停留，把城市切成轻盈的片段。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[2], photoSet[3], photoSet[1], photoSet[0]],
  },
  {
    title: "Wuhan to Changsha Ride",
    slug: "wuhan-to-changsha-ride",
    region: "Routes",
    category: "Journey",
    date: "2025",
    description:
      "从武汉到长沙的移动记录，沿道路、渡口和小城镇，把速度放慢成可以观看的距离。",
    coverImage: photoSet[0],
    images: [photoSet[0], photoSet[1], photoSet[2], photoSet[3], photoSet[0]],
  },
];

export const latestGalleries = galleries.slice(0, 4);

export function getGalleryBySlug(slug: string) {
  return galleries.find((gallery) => gallery.slug === slug);
}

export function getGalleriesByRegion() {
  return regionOrder.map((region) => ({
    region,
    galleries: galleries.filter((gallery) => gallery.region === region),
  }));
}
