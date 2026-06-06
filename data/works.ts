export type WorkCategory = "journeys" | "trails" | "streets" | "places";

export type Work = {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  category: WorkCategory;
  image: string;
  excerpt: string;
  tags: string[];
};

export type PlaceArchive = {
  id: string;
  name: string;
  englishName: string;
  tags: string[];
  description: string;
  image: string;
  note: string;
};

export const categoryMeta: Record<
  WorkCategory,
  {
    number: string;
    label: string;
    zh: string;
    href: string;
    intro: string;
    description: string;
  }
> = {
  journeys: {
    number: "01",
    label: "Journeys",
    zh: "远行",
    href: "/journeys",
    intro: "完整旅程、长线路线、骑行与旅行中的时间切片。",
    description:
      "用于记录完整旅程，例如骑行、旅行、长线路线。每一组影像都像一本展开的路书，留下移动中的风景与停顿。",
  },
  trails: {
    number: "02",
    label: "Trails",
    zh: "山径",
    href: "/trails",
    intro: "徒步、登山、雪山、高原、山路、营地与风。",
    description:
      "用于记录徒步、登山、雪山、高原、山路、营地等。这里更接近身体经验，记录海拔、天气和脚步经过的地方。",
  },
  streets: {
    number: "03",
    label: "Streets",
    zh: "街巷",
    href: "/streets",
    intro: "日常扫街、城市街头、夜晚、路人、灯牌与市场。",
    description:
      "用于记录日常扫街、城市街头、夜晚、路人、灯牌、市场、天桥等。它们不追求完整叙事，只保存偶然出现的一束光。",
  },
  places: {
    number: "04",
    label: "Places",
    zh: "到达之地",
    href: "/places",
    intro: "按地点归档，把到达过的城市、山野和边界放在一起。",
    description:
      "按地点归档，例如 Macau、Hong Kong、Wuhan、Changsha、Tibet、Shanxi、Xinjiang、Singapore 等。地点不是清单，而是记忆的索引。",
  },
};

export const works: Work[] = [
  {
    id: "wuhan-to-changsha-ride",
    title: "Wuhan to Changsha Ride",
    subtitle: "江岸、乡路与长途骑行",
    location: "Wuhan / Changsha",
    year: "2025",
    category: "journeys",
    image: "/photos/placeholder-1.jpg",
    excerpt:
      "从武汉到长沙的移动记录，沿着道路、渡口和小城镇，把速度放慢成可以观看的距离。",
    tags: ["Ride", "Road", "Hunan"],
  },
  {
    id: "maclehose-trail",
    title: "MacLehose Trail",
    subtitle: "山海之间的一段长路",
    location: "Hong Kong",
    year: "2025",
    category: "trails",
    image: "/photos/placeholder-2.jpg",
    excerpt:
      "海风、山脊、碎石路和远处的城市边缘，构成麦理浩径上缓慢展开的层次。",
    tags: ["Trail", "Hong Kong", "Sea"],
  },
  {
    id: "mount-wutai",
    title: "Mount Wutai",
    subtitle: "清晨山寺与冷空气",
    location: "Shanxi",
    year: "2024",
    category: "trails",
    image: "/photos/placeholder-3.jpg",
    excerpt:
      "五台山的清晨有低温、钟声和薄雾，路上的人影像被风吹慢的标点。",
    tags: ["Mountain", "Temple", "Shanxi"],
  },
  {
    id: "tibet-kula-kangri",
    title: "Tibet Kula Kangri",
    subtitle: "高原、雪线与营地",
    location: "Tibet",
    year: "2024",
    category: "trails",
    image: "/photos/placeholder-1.jpg",
    excerpt:
      "库拉岗日的山体在云层之间显现，营地和湖面让时间变得安静而稀薄。",
    tags: ["Tibet", "Snow Mountain", "Camp"],
  },
  {
    id: "macau-streets",
    title: "Macau Streets",
    subtitle: "坡道、旧墙与午后光线",
    location: "Macau",
    year: "2025",
    category: "streets",
    image: "/photos/placeholder-2.jpg",
    excerpt:
      "澳门街巷里的葡式墙面、窄坡与路人，让城市像一本翻旧了的旅行杂志。",
    tags: ["Macau", "Street", "Light"],
  },
  {
    id: "hong-kong-streets",
    title: "Hong Kong Streets",
    subtitle: "天桥下的霓虹与人流",
    location: "Hong Kong",
    year: "2025",
    category: "streets",
    image: "/photos/placeholder-3.jpg",
    excerpt:
      "天桥、市场、雨后的路面和灯牌，组成香港街头密度很高却又不断流动的画面。",
    tags: ["Hong Kong", "Night", "Market"],
  },
  {
    id: "singapore-fragments",
    title: "Singapore Fragments",
    subtitle: "热带城市的短暂停留",
    location: "Singapore",
    year: "2025",
    category: "places",
    image: "/photos/placeholder-1.jpg",
    excerpt:
      "新加坡的片段来自树影、地铁出口、街角建筑和热空气里短暂停下来的午后。",
    tags: ["Singapore", "Fragments", "City"],
  },
];

export const places = [
  "Macau",
  "Hong Kong",
  "Wuhan",
  "Changsha",
  "Tibet",
  "Shanxi",
  "Xinjiang",
  "Singapore",
];

export const placeArchives: PlaceArchive[] = [
  {
    id: "macau",
    name: "Macau",
    englishName: "Macau",
    tags: ["Street", "City"],
    description:
      "坡道、旧墙、葡式窗框和午后光线，适合收集细小但有温度的街头片段。",
    image: "/photos/placeholder-2.jpg",
    note: "Street archive / old town light",
  },
  {
    id: "hong-kong",
    name: "Hong Kong",
    englishName: "Hong Kong",
    tags: ["Street", "Trail", "City"],
    description:
      "高密度城市、天桥、市场和山海步道并置，像一份不断折叠展开的地图。",
    image: "/photos/placeholder-3.jpg",
    note: "City layers / trails and streets",
  },
  {
    id: "wuhan",
    name: "Wuhan",
    englishName: "Wuhan",
    tags: ["Journey", "City"],
    description:
      "江岸、桥、骑行出发点和日常街道，把城市记录成一段旅程的起笔。",
    image: "/photos/placeholder-1.jpg",
    note: "River city / departure notes",
  },
  {
    id: "changsha",
    name: "Changsha",
    englishName: "Changsha",
    tags: ["Journey", "City"],
    description:
      "长途抵达后的夜色、街口、桥下灯光和城市气味，适合成为路线的终章。",
    image: "/photos/placeholder-2.jpg",
    note: "Arrival city / road ending",
  },
  {
    id: "tibet",
    name: "Tibet",
    englishName: "Tibet",
    tags: ["Trail", "Mountain"],
    description:
      "高原、雪线、湖面和营地，在稀薄空气里留下更慢、更安静的影像索引。",
    image: "/photos/placeholder-1.jpg",
    note: "Plateau archive / snow line",
  },
  {
    id: "shanxi",
    name: "Shanxi",
    englishName: "Shanxi",
    tags: ["Trail", "Heritage"],
    description:
      "山寺、古建、冷空气与清晨路面，记录时间沉下来的北方质地。",
    image: "/photos/placeholder-3.jpg",
    note: "Temples / mountains / cold mornings",
  },
  {
    id: "singapore",
    name: "Singapore",
    englishName: "Singapore",
    tags: ["City", "Fragments"],
    description:
      "热带树影、地铁出口、街角建筑和短暂停留，把城市切成轻盈的片段。",
    image: "/photos/placeholder-1.jpg",
    note: "Tropical fragments / city shade",
  },
  {
    id: "xinjiang",
    name: "Xinjiang",
    englishName: "Xinjiang",
    tags: ["Journey", "Landscape"],
    description:
      "辽阔道路、荒漠边缘、远山和长距离移动，适合归档那些关于空间的照片。",
    image: "/photos/placeholder-2.jpg",
    note: "Open road / distant landscape",
  },
];

export function getWorksByCategory(category: WorkCategory) {
  return works.filter((work) => work.category === category);
}
