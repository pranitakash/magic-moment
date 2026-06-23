export interface Tour {
  id: number;
  slug: string;
  title: string;
  tags: string[];
  desc: string;
  days: number;
  persons: number;
  priceOld: number | null;
  priceNew: number;
  image: string;
  icons: string[];
  destination: string;
  difficulty: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    slug: "manali-mountain-escape",
    title: "Manali — Mountain Escape",
    tags: ["snow trek", "river rafting", "cafe hopping"],
    desc: "Pine forests, snow peaks and Old Manali's laid-back cafe scene.",
    days: 6,
    persons: 2,
    priceOld: 18500,
    priceNew: 15200,
    image: "/images/tour-manali.png",
    icons: ["🏔️", "🛶"],
    destination: "Manali",
    difficulty: "Moderate",
  },
  {
    id: 2,
    slug: "sissu-beyond-the-tunnel",
    title: "Sissu — Beyond the Tunnel",
    tags: ["lake views", "camping", "stargazing"],
    desc: "Crystal-clear lakes and snow peaks just past Atal Tunnel, far from the crowds.",
    days: 3,
    persons: 2,
    priceOld: null,
    priceNew: 9800,
    image: "/images/tour-sissu.png",
    icons: ["⛺", "✨"],
    destination: "Sissu",
    difficulty: "Easy",
  },
  {
    id: 3,
    slug: "kasol-parvati-valley-trail",
    title: "Kasol — Parvati Valley Trail",
    tags: ["village trekking", "riverside cafes", "forest camping"],
    desc: "Wander cafe-lined lanes and pine trails along the Parvati river.",
    days: 5,
    persons: 1,
    priceOld: 13000,
    priceNew: 10500,
    image: "/images/tour-kasol.png",
    icons: ["🌲", "☕"],
    destination: "Kasol",
    difficulty: "Moderate",
  },
  {
    id: 4,
    slug: "valley-of-flowers-bloom-trek",
    title: "Valley of Flowers — Bloom Trek",
    tags: ["high-altitude trek", "alpine meadows", "wildlife"],
    desc: "A UNESCO meadow bursting with rare Himalayan blooms, open only a few months a year.",
    days: 6,
    persons: 2,
    priceOld: null,
    priceNew: 16800,
    image: "/images/tour-valley-flowers.png",
    icons: ["🌸", "🦋"],
    destination: "Valley of Flowers",
    difficulty: "Challenging",
  },
  {
    id: 5,
    slug: "rishikesh-river-yoga-retreat",
    title: "Rishikesh — River & Yoga Retreat",
    tags: ["white-water rafting", "yoga", "ganga aarti"],
    desc: "Raft the rapids by day, find stillness by the Ganga at sunset.",
    days: 4,
    persons: 1,
    priceOld: 9500,
    priceNew: 7900,
    image: "/images/tour-rishikesh.png",
    icons: ["🧘", "🌊"],
    destination: "Rishikesh",
    difficulty: "Easy",
  },
  {
    id: 6,
    slug: "jibhi-hidden-tirthan-valley",
    title: "Jibhi — Hidden Tirthan Valley",
    tags: ["waterfall trek", "trout fishing", "village stay"],
    desc: "An undiscovered valley of wooden cottages, waterfalls and slow mountain mornings.",
    days: 3,
    persons: 2,
    priceOld: null,
    priceNew: 8200,
    image: "/images/tour-jibhi.png",
    icons: ["🏡", "🐟"],
    destination: "Jibhi",
    difficulty: "Easy",
  },
];

export const allDestinations = [...new Set(tours.map((t) => t.destination))];
export const allDifficulties = ["Easy", "Moderate", "Challenging"];
export const allTags = [...new Set(tours.flatMap((t) => t.tags))];

export function formatPrice(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}
