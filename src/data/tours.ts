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
  iconKeys: string[];
  destination: string;
  state: string;
  difficulty: string;
  urgencyMsg?: string;
  spotsLeft?: number;
}

export const tours: Tour[] = [
  /* ── HIMACHAL PRADESH ── */
  {
    id: 1,
    slug: "himachal-pradesh-mountain-odyssey",
    title: "Himachal Pradesh — Mountain Odyssey",
    tags: ["monastery tour", "high-altitude drive", "astrophotography", "valley trek"],
    desc: "From Spiti's cold desert to Kullu's lush valleys — explore ancient monasteries, camp under billion-star skies and drive through the most dramatic Himalayan passes.",
    days: 8,
    persons: 2,
    priceOld: 28000,
    priceNew: 23500,
    image: "/images/tour-spiti.png",
    iconKeys: ["mountain", "stars"],
    destination: "Spiti, Manali & Kullu",
    state: "Himachal Pradesh",
    difficulty: "Challenging",
  },

  /* ── RAJASTHAN ── */
  {
    id: 2,
    slug: "rajasthan-royal-heritage-trail",
    title: "Rajasthan — Royal Heritage Trail",
    tags: ["camel safari", "desert camping", "palace tour", "heritage walk"],
    desc: "Ride camels across the golden Thar dunes, explore living forts, glide across shimmering lakes and lose yourself in the colors of the Land of Kings.",
    days: 7,
    persons: 2,
    priceOld: 22000,
    priceNew: 17800,
    image: "/images/tour-rajasthan.png",
    iconKeys: ["sun", "castle"],
    destination: "Jaisalmer, Udaipur & Jaipur",
    state: "Rajasthan",
    difficulty: "Easy",
  },

  /* ── KERALA ── */
  {
    id: 3,
    slug: "kerala-god-s-own-country-escape",
    title: "Kerala — God's Own Country Escape",
    tags: ["houseboat stay", "backwaters", "tea plantation", "ayurveda spa"],
    desc: "Drift through emerald backwaters on a traditional houseboat, walk rolling tea estates in Munnar and rejuvenate with ancient Ayurvedic wellness rituals.",
    days: 6,
    persons: 2,
    priceOld: 26000,
    priceNew: 21000,
    image: "/images/tour-kerala.png",
    iconKeys: ["anchor", "palmtree"],
    destination: "Alleppey, Munnar & Kochi",
    state: "Kerala",
    difficulty: "Easy",
  },

  /* ── NEPAL ── */
  {
    id: 4,
    slug: "nepal-himalayan-adventure",
    title: "Nepal — Himalayan Adventure",
    tags: ["high-altitude trek", "sherpa culture", "temple tour", "paragliding"],
    desc: "Stand at the foot of the world's highest peak, explore ancient Durbar squares, paraglide over Phewa Lake and soak in the spiritual heartbeat of Nepal.",
    days: 10,
    persons: 1,
    priceOld: 85000,
    priceNew: 72000,
    image: "/images/tour-nepal.png",
    iconKeys: ["mountain", "flag"],
    destination: "Kathmandu, Pokhara & Everest Region",
    state: "Nepal",
    difficulty: "Challenging",
  },

  /* ── JAMMU & KASHMIR ── */
  {
    id: 5,
    slug: "jammu-kashmir-paradise-on-earth",
    title: "Jammu & Kashmir — Paradise on Earth",
    tags: ["shikara ride", "mughal gardens", "skiing", "gondola ride"],
    desc: "Glide across Dal Lake on a Shikara, stroll through Mughal gardens, ride Asia's highest gondola and trek through snow-draped pine forests.",
    days: 7,
    persons: 2,
    priceOld: 32000,
    priceNew: 26500,
    image: "/images/tour-kashmir.png",
    iconKeys: ["anchor", "snowflake"],
    destination: "Srinagar, Gulmarg & Pahalgam",
    state: "Jammu & Kashmir",
    difficulty: "Moderate",
  },

  /* ── UTTARAKHAND ── */
  {
    id: 6,
    slug: "uttarakhand-devbhoomi-trail",
    title: "Uttarakhand — Devbhoomi Trail",
    tags: ["temple trek", "summit climb", "rhododendron trail", "river rafting"],
    desc: "Trek to the highest Shiva temple in the world, summit Chandrashila for 360° Himalayan views and raft through the holy rapids of Rishikesh.",
    days: 6,
    persons: 2,
    priceOld: 14000,
    priceNew: 11500,
    image: "/images/tour-uttarakhand.png",
    iconKeys: ["temple", "mountain"],
    destination: "Chopta, Rishikesh & Mussoorie",
    state: "Uttarakhand",
    difficulty: "Moderate",
  },

  /* ── UTTAR PRADESH ── */
  {
    id: 7,
    slug: "uttar-pradesh-heritage-trail",
    title: "Uttar Pradesh — Heritage Trail",
    tags: ["Taj Mahal", "ganga aarti", "heritage walk", "spiritual journey"],
    desc: "Witness the Taj Mahal at sunrise, explore Mughal forts and experience the timeless ghats and sacred Ganga Aarti of Varanasi.",
    days: 5,
    persons: 2,
    priceOld: 19000,
    priceNew: 15500,
    image: "/images/tour-uttarpradesh.png",
    iconKeys: ["castle", "flame"],
    destination: "Agra, Varanasi & Lucknow",
    state: "Uttar Pradesh",
    difficulty: "Easy",
  },

  /* ── SIKKIM ── */
  {
    id: 8,
    slug: "sikkim-mountain-kingdom",
    title: "Sikkim — Mountain Kingdom",
    tags: ["high-altitude lake", "monastery visit", "yak safari", "mountain views"],
    desc: "Journey to the sacred Gurudongmar Lake at 17,800 ft, wake up to Kanchenjunga views, explore vibrant monasteries and trek to hidden waterfalls.",
    days: 7,
    persons: 2,
    priceOld: 35000,
    priceNew: 29000,
    image: "/images/tour-sikkim.png",
    iconKeys: ["mountain", "flag"],
    destination: "Gangtok, Pelling & Lachung",
    state: "Sikkim",
    difficulty: "Moderate",
  },

  /* ── MEGHALAYA ── */
  {
    id: 9,
    slug: "meghalaya-abode-of-clouds",
    title: "Meghalaya — Abode of Clouds",
    tags: ["root bridge trek", "waterfall rappelling", "boating", "village homestay"],
    desc: "Descend into misty valleys to walk across living root bridges, boat over crystal-clear rivers, rappel down waterfalls and stay with Khasi families.",
    days: 6,
    persons: 2,
    priceOld: 28000,
    priceNew: 23000,
    image: "/images/tour-meghalaya.png",
    iconKeys: ["leaf", "droplets"],
    destination: "Shillong, Cherrapunji & Dawki",
    state: "Meghalaya",
    difficulty: "Moderate",
  },
];

export const allDestinations = [...new Set(tours.map((t) => t.destination))];
export const allStates = [...new Set(tours.map((t) => t.state))];
export const allDifficulties = ["Easy", "Moderate", "Challenging"];
export const allTags = [...new Set(tours.flatMap((t) => t.tags))];

export function formatPrice(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}
