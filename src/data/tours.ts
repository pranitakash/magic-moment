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
    slug: "spiti-valley-cold-desert-expedition",
    title: "Spiti — Cold Desert Expedition",
    tags: ["monastery tour", "high-altitude drive", "astrophotography"],
    desc: "Drive through the moon-like landscapes of Spiti, visit ancient monasteries and sleep under billion-star skies.",
    days: 8,
    persons: 2,
    priceOld: 28000,
    priceNew: 23500,
    image: "/images/tour-spiti.png",
    iconKeys: ["mountain", "stars"],
    destination: "Spiti Valley",
    state: "Himachal Pradesh",
    difficulty: "Challenging",
    urgencyMsg: "Limited window",
    spotsLeft: 3,
  },

  /* ── RAJASTHAN ── */
  {
    id: 2,
    slug: "jaisalmer-golden-desert-safari",
    title: "Jaisalmer — Golden Desert Safari",
    tags: ["camel safari", "desert camping", "folk music"],
    desc: "Ride camels across the golden Thar dunes, sleep in luxury desert camps and explore the living fort.",
    days: 5,
    persons: 2,
    priceOld: 22000,
    priceNew: 17800,
    image: "/images/tour-rajasthan.png",
    iconKeys: ["sun", "tent"],
    destination: "Jaisalmer",
    state: "Rajasthan",
    difficulty: "Easy",
    urgencyMsg: "Best season now",
    spotsLeft: 5,
  },
  {
    id: 3,
    slug: "udaipur-royal-lakes-heritage",
    title: "Udaipur — Royal Lakes & Heritage",
    tags: ["palace tour", "boat ride", "heritage walk"],
    desc: "Glide across Lake Pichola, explore ornate palaces and lose yourself in the City of Lakes.",
    days: 4,
    persons: 2,
    priceOld: null,
    priceNew: 14500,
    image: "/images/tour-rajasthan.png",
    iconKeys: ["castle", "anchor"],
    destination: "Udaipur",
    state: "Rajasthan",
    difficulty: "Easy",
  },

  /* ── KERALA ── */
  {
    id: 4,
    slug: "alleppey-backwater-houseboat-cruise",
    title: "Alleppey — Backwater Houseboat Cruise",
    tags: ["houseboat stay", "backwaters", "ayurveda spa"],
    desc: "Drift through emerald backwaters on a traditional kettuvallam, indulge in fresh seafood and Ayurvedic wellness.",
    days: 5,
    persons: 2,
    priceOld: 26000,
    priceNew: 21000,
    image: "/images/tour-kerala.png",
    iconKeys: ["anchor", "palmtree"],
    destination: "Alleppey",
    state: "Kerala",
    difficulty: "Easy",
    urgencyMsg: "Monsoon special",
    spotsLeft: 4,
  },
  {
    id: 5,
    slug: "munnar-tea-hills-retreat",
    title: "Munnar — Tea Hills Retreat",
    tags: ["tea plantation", "wildlife safari", "mountain views"],
    desc: "Walk through rolling tea estates, spot Nilgiri Tahr in Eravikulam and wake up to misty mountain panoramas.",
    days: 4,
    persons: 2,
    priceOld: null,
    priceNew: 16500,
    image: "/images/tour-kerala.png",
    iconKeys: ["leaf", "binoculars"],
    destination: "Munnar",
    state: "Kerala",
    difficulty: "Easy",
  },

  /* ── NEPAL ── */
  {
    id: 6,
    slug: "everest-base-camp-trek",
    title: "Everest Base Camp — The Ultimate Trek",
    tags: ["high-altitude trek", "sherpa culture", "mountain flight"],
    desc: "Stand at the foot of the world's highest peak, trek through Sherpa villages and witness sunrises that redefine beauty.",
    days: 14,
    persons: 1,
    priceOld: 85000,
    priceNew: 72000,
    image: "/images/tour-nepal.png",
    iconKeys: ["mountain", "flag"],
    destination: "Everest Base Camp",
    state: "Nepal",
    difficulty: "Challenging",
    urgencyMsg: "Peak season slots",
    spotsLeft: 2,
  },
  {
    id: 7,
    slug: "kathmandu-pokhara-cultural-odyssey",
    title: "Kathmandu & Pokhara — Cultural Odyssey",
    tags: ["temple tour", "paragliding", "lakeside dining"],
    desc: "Explore ancient Durbar squares, paraglide over Phewa Lake and soak in the spiritual heartbeat of Nepal.",
    days: 7,
    persons: 2,
    priceOld: 45000,
    priceNew: 38000,
    image: "/images/tour-nepal.png",
    iconKeys: ["temple", "wind"],
    destination: "Kathmandu & Pokhara",
    state: "Nepal",
    difficulty: "Easy",
  },

  /* ── JAMMU & KASHMIR ── */
  {
    id: 8,
    slug: "srinagar-paradise-on-earth",
    title: "Srinagar — Paradise on Earth",
    tags: ["shikara ride", "mughal gardens", "houseboat stay"],
    desc: "Glide across Dal Lake on a Shikara, stroll through Mughal gardens and stay in a heritage houseboat.",
    days: 6,
    persons: 2,
    priceOld: 32000,
    priceNew: 26500,
    image: "/images/tour-kashmir.png",
    iconKeys: ["anchor", "flower"],
    destination: "Srinagar",
    state: "Jammu & Kashmir",
    difficulty: "Easy",
    urgencyMsg: "Tulip season!",
    spotsLeft: 3,
  },
  {
    id: 9,
    slug: "gulmarg-snow-adventure",
    title: "Gulmarg — Snow Adventure",
    tags: ["skiing", "gondola ride", "snow trekking"],
    desc: "Ride Asia's highest gondola, ski pristine slopes and trek through snow-draped pine forests.",
    days: 5,
    persons: 2,
    priceOld: null,
    priceNew: 24000,
    image: "/images/tour-kashmir.png",
    iconKeys: ["snowflake", "mountain"],
    destination: "Gulmarg",
    state: "Jammu & Kashmir",
    difficulty: "Moderate",
    spotsLeft: 5,
  },

  /* ── UTTARAKHAND ── */
  {
    id: 10,
    slug: "chopta-tungnath-chandrashila-trek",
    title: "Chopta — Tungnath & Chandrashila Trek",
    tags: ["temple trek", "summit climb", "rhododendron trail"],
    desc: "Trek to the highest Shiva temple in the world and summit Chandrashila for 360° Himalayan views.",
    days: 5,
    persons: 2,
    priceOld: 14000,
    priceNew: 11500,
    image: "/images/tour-uttarakhand.png",
    iconKeys: ["temple", "mountain"],
    destination: "Chopta",
    state: "Uttarakhand",
    difficulty: "Moderate",
    spotsLeft: 6,
  },

  /* ── UTTAR PRADESH ── */
  {
    id: 11,
    slug: "agra-varanasi-golden-triangle-extension",
    title: "Agra & Varanasi — Heritage Trail",
    tags: ["Taj Mahal", "ganga aarti", "heritage walk"],
    desc: "Witness the Taj Mahal at sunrise, explore Mughal forts and experience the timeless ghats of Varanasi.",
    days: 5,
    persons: 2,
    priceOld: 19000,
    priceNew: 15500,
    image: "/images/tour-uttarpradesh.png",
    iconKeys: ["castle", "flame"],
    destination: "Agra & Varanasi",
    state: "Uttar Pradesh",
    difficulty: "Easy",
    urgencyMsg: "Cultural special",
    spotsLeft: 8,
  },

  /* ── SIKKIM ── */
  {
    id: 12,
    slug: "gangtok-lachen-gurudongmar-expedition",
    title: "Gangtok & Gurudongmar — Sikkim Heights",
    tags: ["high-altitude lake", "monastery visit", "yak safari"],
    desc: "Journey to the sacred Gurudongmar Lake at 17,800 ft, explore vibrant monasteries and ride yaks in Tsomgo.",
    days: 7,
    persons: 2,
    priceOld: 35000,
    priceNew: 29000,
    image: "/images/tour-sikkim.png",
    iconKeys: ["mountain", "flag"],
    destination: "Gangtok & North Sikkim",
    state: "Sikkim",
    difficulty: "Moderate",
    urgencyMsg: "Permit limited",
    spotsLeft: 4,
  },
  {
    id: 13,
    slug: "pelling-ravangla-west-south-sikkim",
    title: "Pelling & Ravangla — Kanchenjunga Views",
    tags: ["mountain views", "tea garden", "waterfall trek"],
    desc: "Wake up to Kanchenjunga from Pelling, visit the towering Buddha Park and trek to hidden waterfalls.",
    days: 5,
    persons: 2,
    priceOld: null,
    priceNew: 22000,
    image: "/images/tour-sikkim.png",
    iconKeys: ["sunrise", "leaf"],
    destination: "Pelling & Ravangla",
    state: "Sikkim",
    difficulty: "Easy",
  },

  /* ── MEGHALAYA ── */
  {
    id: 14,
    slug: "cherrapunji-living-root-bridges",
    title: "Cherrapunji — Living Root Bridges",
    tags: ["root bridge trek", "waterfall rappelling", "caving"],
    desc: "Descend into misty valleys to walk across living root bridges, rappel down waterfalls and explore limestone caves.",
    days: 6,
    persons: 2,
    priceOld: 28000,
    priceNew: 23000,
    image: "/images/tour-meghalaya.png",
    iconKeys: ["leaf", "droplets"],
    destination: "Cherrapunji",
    state: "Meghalaya",
    difficulty: "Moderate",
    urgencyMsg: "Monsoon magic",
    spotsLeft: 5,
  },
  {
    id: 15,
    slug: "shillong-dawki-crystal-waters",
    title: "Shillong & Dawki — Crystal Waters",
    tags: ["boating", "live music", "village homestay"],
    desc: "Boat over the crystal-clear Umngot river, groove to live music in Shillong and stay with Khasi families.",
    days: 5,
    persons: 2,
    priceOld: null,
    priceNew: 19500,
    image: "/images/tour-meghalaya.png",
    iconKeys: ["waves", "music"],
    destination: "Shillong & Dawki",
    state: "Meghalaya",
    difficulty: "Easy",
    spotsLeft: 7,
  },
];

export const allDestinations = [...new Set(tours.map((t) => t.destination))];
export const allStates = [...new Set(tours.map((t) => t.state))];
export const allDifficulties = ["Easy", "Moderate", "Challenging"];
export const allTags = [...new Set(tours.flatMap((t) => t.tags))];

export function formatPrice(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}
