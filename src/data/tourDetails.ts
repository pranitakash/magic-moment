/* Extended tour detail data — itinerary, highlights, gallery, inclusions */

export interface TourDetail {
  slug: string;
  longDesc: string;
  highlights: string[];
  itinerary: { day: number; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
  bestTime: string;
  altitude?: string;
  groupSize: string;
}

export const tourDetails: Record<string, TourDetail> = {
  /* ── HIMACHAL PRADESH ── */
  "spiti-valley-cold-desert-expedition": {
    longDesc:
      "Spiti Valley is one of the most remote and dramatic landscapes in India — a cold desert at 12,500 ft where ancient Tibetan Buddhist monasteries perch on barren cliffs, the Spiti River carves through impossibly deep gorges, and the night sky explodes with more stars than you've ever seen. This 8-day expedition takes you through the heart of this otherworldly valley, from the thousand-year-old Key Monastery to the crescent-shaped Chandratal Lake.",
    highlights: [
      "Visit Key Monastery, a 1,000-year-old Tibetan Buddhist gompa perched dramatically on a hilltop",
      "Camp beside Chandratal Lake at 14,100 ft — one of India's most beautiful high-altitude lakes",
      "Drive through Kunzum Pass (15,060 ft) with panoramic Himalayan views",
      "Experience the fossil-rich villages of Langza and Hikkim — the world's highest post office",
      "Stargaze in one of the darkest, clearest skies on Earth",
    ],
    itinerary: [
      { day: 1, title: "Shimla to Narkanda", desc: "Begin the journey from Shimla, driving through apple orchards and deodar forests to the charming hill town of Narkanda." },
      { day: 2, title: "Narkanda to Sangla Valley", desc: "Drive through the dramatic Kinnaur valley along the Sutlej river. Arrive at Sangla, nestled in the Baspa valley." },
      { day: 3, title: "Sangla to Chitkul & Kalpa", desc: "Visit Chitkul — India's last inhabited village before the Tibet border. Drive to Kalpa with views of Kinner Kailash." },
      { day: 4, title: "Kalpa to Tabo", desc: "Cross into Spiti through the stunning Nako village. Reach Tabo and explore the UNESCO-listed Tabo Monastery." },
      { day: 5, title: "Tabo to Kaza via Dhankar", desc: "Visit the cliff-hanging Dhankar Monastery, then drive to Kaza — the administrative capital of Spiti." },
      { day: 6, title: "Key, Kibber, Langza & Hikkim", desc: "Full day exploring the iconic Key Monastery, the highest village Kibber, fossil village Langza, and Hikkim post office." },
      { day: 7, title: "Kaza to Chandratal Lake", desc: "Drive to the mesmerizing Chandratal (Moon Lake). Camp by the lake and enjoy an unforgettable sunset and stargazing session." },
      { day: 8, title: "Chandratal to Manali", desc: "Cross the Kunzum Pass and drive through the Rohtang area into the lush Kullu valley, arriving in Manali." },
    ],
    inclusions: ["Accommodation in guesthouses and camps", "All meals (breakfast, lunch, dinner)", "Private 4x4 vehicle throughout", "Experienced local guide", "All permits and entry fees", "Camping gear at Chandratal"],
    exclusions: ["Personal expenses", "Travel insurance", "Tips and gratuities", "Flights or trains to Shimla/Manali"],
    gallery: ["/images/tour-spiti.png", "/images/detail-spiti-1.png", "/images/detail-spiti-2.png", "/images/detail-spiti-3.png"],
    bestTime: "June to September",
    altitude: "12,500 ft — 15,060 ft",
    groupSize: "4 — 12 travelers",
  },

  /* ── RAJASTHAN ── */
  "jaisalmer-golden-desert-safari": {
    longDesc:
      "Jaisalmer, the Golden City, rises from the Thar Desert like a mirage — its massive sandstone fort glowing amber in the sunset, narrow lanes winding past ornately carved havelis, and the vast desert stretching to the horizon. This 5-day journey combines the architectural grandeur of the living fort with an authentic desert safari experience, complete with camel rides, luxury desert camps, and evenings of Rajasthani folk music under a canopy of stars.",
    highlights: [
      "Explore the 12th-century Jaisalmer Fort — one of the world's largest living forts",
      "Ride camels across the Sam Sand Dunes at golden hour",
      "Stay in a luxury desert camp with traditional Rajasthani hospitality",
      "Experience live Manganiyar folk music and Kalbelia dance performances",
      "Visit the exquisite Patwon Ki Haveli with its intricate stone carvings",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Jaisalmer", desc: "Check into a heritage haveli hotel. Evening walking tour through the golden fort's narrow lanes, Jain temples, and sunset views from the ramparts." },
      { day: 2, title: "Fort & Haveli Exploration", desc: "Guided tour of Patwon Ki Haveli, Salim Singh Ki Haveli, and the Folklore Museum. Afternoon at Gadisar Lake with its ornate gateway." },
      { day: 3, title: "Desert Safari", desc: "Drive to Sam Sand Dunes. Afternoon camel safari across the dunes. Evening bonfire with Rajasthani folk music, dance, and dinner under the stars." },
      { day: 4, title: "Desert Camp & Kuldhara", desc: "Sunrise on the dunes. Visit the ghost village of Kuldhara, abandoned overnight 200 years ago. Desert jeep safari through remote villages." },
      { day: 5, title: "Departure", desc: "Morning at leisure. Visit the War Museum or browse Jaisalmer's craft bazaars for leather goods and textiles before departure." },
    ],
    inclusions: ["Heritage hotel & luxury desert camp", "All breakfasts, camp meals", "Camel safari and jeep safari", "Local guide and driver", "Folk music evening", "All entry fees"],
    exclusions: ["Flights to Jaisalmer", "Personal shopping", "Travel insurance", "Alcoholic beverages"],
    gallery: ["/images/tour-rajasthan.png", "/images/detail-rajasthan-1.png", "/images/detail-rajasthan-2.png", "/images/detail-rajasthan-3.png"],
    bestTime: "October to March",
    groupSize: "2 — 10 travelers",
  },
  "udaipur-royal-lakes-heritage": {
    longDesc:
      "Udaipur, the Venice of the East, is a city of shimmering lakes, marble palaces, and centuries of Mewar royalty. From the iconic Lake Palace floating on Lake Pichola to the sprawling City Palace complex, every corner tells a story of Rajput valor and artistic splendor. This 4-day heritage journey immerses you in the romance of India's most beautiful city.",
    highlights: [
      "Sunset boat ride on Lake Pichola with views of the Lake Palace and Jag Mandir",
      "Explore the magnificent City Palace — Rajasthan's largest palace complex",
      "Wander the art galleries and studios of the old city",
      "Visit the Saheliyon Ki Bari gardens and Jagdish Temple",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Lake Pichola", desc: "Check into a lakeside heritage hotel. Evening boat ride on Lake Pichola at sunset, passing the Lake Palace and Jag Mandir." },
      { day: 2, title: "City Palace & Old City", desc: "Full morning at the City Palace museum. Afternoon heritage walk through the old city, visiting Jagdish Temple and local art studios." },
      { day: 3, title: "Excursion to Kumbhalgarh", desc: "Day trip to the massive Kumbhalgarh Fort (the Great Wall of India) and the ancient Ranakpur Jain temples with their 1,444 carved pillars." },
      { day: 4, title: "Gardens & Departure", desc: "Visit Saheliyon Ki Bari and the Vintage Car Museum. Last-minute shopping in Hathi Pol bazaar before departure." },
    ],
    inclusions: ["Heritage lakeside hotel", "All breakfasts", "Boat ride on Lake Pichola", "Kumbhalgarh day trip with transport", "Local heritage guide", "All entry fees"],
    exclusions: ["Flights/trains", "Lunches and dinners (except day trip)", "Personal expenses"],
    gallery: ["/images/tour-rajasthan.png", "/images/detail-rajasthan-3.png", "/images/detail-rajasthan-1.png", "/images/detail-rajasthan-2.png"],
    bestTime: "September to March",
    groupSize: "2 — 8 travelers",
  },

  /* ── KERALA ── */
  "alleppey-backwater-houseboat-cruise": {
    longDesc:
      "Kerala's backwaters are a labyrinth of emerald canals, palm-fringed lagoons, and quiet villages where life moves to the rhythm of the water. This 5-day journey takes you from the serene backwaters of Alleppey aboard a traditional kettuvallam houseboat to rejuvenating Ayurvedic spa treatments, all wrapped in the warm hospitality that makes Kerala 'God's Own Country'.",
    highlights: [
      "Overnight stay on a traditional kettuvallam houseboat cruising the backwaters",
      "Watch the world's oldest martial art, Kalaripayattu, performed live",
      "Experience a full Ayurvedic wellness session with traditional therapies",
      "Taste authentic Kerala cuisine — fresh seafood, appam, and toddy",
      "Canoe through narrow village canals inaccessible to houseboats",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", desc: "Explore Fort Kochi — the Chinese fishing nets, St. Francis Church, and the Jewish quarter. Evening Kathakali dance performance." },
      { day: 2, title: "Kochi to Alleppey Houseboat", desc: "Drive to Alleppey and board your private houseboat. Cruise through the backwaters as the chef prepares fresh Kerala meals onboard." },
      { day: 3, title: "Village Canoe & Cooking Class", desc: "Morning canoe ride through narrow canals. Visit a toddy tapper and coir-making village. Afternoon Kerala cooking class with local spices." },
      { day: 4, title: "Ayurveda & Beach", desc: "Morning Ayurvedic spa session. Afternoon at Marari Beach — one of Kerala's most pristine and uncrowded beaches." },
      { day: 5, title: "Departure", desc: "Visit the Alleppey lighthouse and local market. Transfer to Kochi airport." },
    ],
    inclusions: ["Houseboat with private cabin", "Hotels in Kochi & Alleppey", "All meals on houseboat", "Ayurvedic spa session", "Canoe tour & cooking class", "All transfers"],
    exclusions: ["Flights", "Personal expenses", "Travel insurance", "Meals not mentioned"],
    gallery: ["/images/tour-kerala.png", "/images/detail-kerala-1.png", "/images/detail-kerala-2.png", "/images/tour-kerala.png"],
    bestTime: "September to March",
    groupSize: "2 — 8 travelers",
  },
  "munnar-tea-hills-retreat": {
    longDesc:
      "Munnar is a hill station unlike any other — endless carpets of manicured tea bushes drape over rolling hills, the mist parts to reveal Anamudi (South India's highest peak), and rare Nilgiri Tahr graze in the high-altitude grasslands of Eravikulam. This 4-day retreat combines the natural beauty of the Western Ghats with the relaxing rhythm of plantation life.",
    highlights: [
      "Walk through working tea plantations with a tea master",
      "Spot the endangered Nilgiri Tahr at Eravikulam National Park",
      "Visit the KDHP Tea Museum and learn the art of tea processing",
      "Wake up to misty panoramic views of the Western Ghats",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Munnar", desc: "Drive up through cardamom and tea plantations. Check into a plantation resort. Evening nature walk through the estate." },
      { day: 2, title: "Eravikulam & Tea Museum", desc: "Morning safari at Eravikulam National Park to spot Nilgiri Tahr. Afternoon visit to the KDHP Tea Museum with guided tea tasting." },
      { day: 3, title: "Top Station & Mattupetty", desc: "Drive to Top Station for panoramic views of the Tamil Nadu plains. Visit Mattupetty Dam and Echo Point. Evening bonfire at the resort." },
      { day: 4, title: "Plantation Walk & Departure", desc: "Guided walk through the tea plantation with a master. Learn about plucking, processing, and grading. Depart with fresh Munnar tea." },
    ],
    inclusions: ["Plantation resort stay", "All breakfasts", "Eravikulam entry", "Tea Museum visit & tasting", "Local nature guide", "All transfers"],
    exclusions: ["Flights/trains", "Lunches and dinners", "Personal expenses"],
    gallery: ["/images/tour-kerala.png", "/images/detail-kerala-2.png", "/images/detail-kerala-1.png", "/images/tour-kerala.png"],
    bestTime: "September to May",
    groupSize: "2 — 10 travelers",
  },

  /* ── NEPAL ── */
  "everest-base-camp-trek": {
    longDesc:
      "The Everest Base Camp trek is the ultimate Himalayan pilgrimage — a 14-day journey through the heart of the Khumbu region to the foot of the world's highest mountain. You'll walk through rhododendron forests, cross swaying suspension bridges, visit ancient Sherpa monasteries, and stand at 5,364 meters (17,598 ft) with the ice giants of Everest, Lhotse, and Nuptse towering above you.",
    highlights: [
      "Stand at Everest Base Camp (5,364m) with panoramic views of the Khumbu Icefall",
      "Sunrise from Kala Patthar (5,545m) — the most iconic Everest viewpoint",
      "Visit the famous Tengboche Monastery with Everest as its backdrop",
      "Cross thrilling suspension bridges over deep Himalayan gorges",
      "Experience the warmth of Sherpa hospitality in mountain teahouses",
    ],
    itinerary: [
      { day: 1, title: "Fly Kathmandu to Lukla", desc: "Scenic mountain flight to Lukla (2,860m). Trek to Phakding through lush forests and along the Dudh Kosi river." },
      { day: 2, title: "Phakding to Namche Bazaar", desc: "Cross suspension bridges, enter Sagarmatha National Park, and climb to Namche Bazaar (3,440m) — the Sherpa capital." },
      { day: 3, title: "Acclimatization Day in Namche", desc: "Hike to Everest View Hotel for first views of Everest. Visit the Sherpa Museum and explore the vibrant Saturday market." },
      { day: 4, title: "Namche to Tengboche", desc: "Trek through rhododendron forests to Tengboche (3,870m). Visit the famous monastery with Everest and Ama Dablam views." },
      { day: 5, title: "Tengboche to Dingboche", desc: "Descend to Imja river, then climb to Dingboche (4,410m) in the Imja Valley with views of Island Peak and Lhotse." },
      { day: 6, title: "Acclimatization at Dingboche", desc: "Day hike to Nangkartshang Peak (5,083m) for spectacular views. Rest and prepare for higher altitudes." },
      { day: 7, title: "Dingboche to Lobuche", desc: "Pass the Thukla memorial cairns honoring fallen climbers. Arrive at Lobuche (4,940m) beneath the Khumbu Glacier." },
      { day: 8, title: "Lobuche to Gorak Shep to EBC", desc: "Trek to Gorak Shep (5,164m), drop bags, and continue to Everest Base Camp (5,364m). Stand at the foot of the world!" },
      { day: 9, title: "Kala Patthar Sunrise", desc: "Pre-dawn hike to Kala Patthar (5,545m) for the most iconic sunrise panorama of Everest. Descend to Pheriche." },
      { day: 10, title: "Pheriche to Namche", desc: "Long descent retracing steps through familiar villages. The return is faster with thicker air and lighter spirits." },
      { day: 11, title: "Namche to Lukla", desc: "Final day of trekking. Farewell dinner with your Sherpa team in Lukla." },
      { day: 12, title: "Fly Lukla to Kathmandu", desc: "Morning flight back to Kathmandu. Rest day and celebration dinner." },
      { day: 13, title: "Kathmandu Heritage Tour", desc: "Visit Boudhanath Stupa, Pashupatinath Temple, and Durbar Square. Shopping for souvenirs in Thamel." },
      { day: 14, title: "Departure", desc: "Transfer to airport. End of an extraordinary journey." },
    ],
    inclusions: ["Domestic flights (KTM-Lukla-KTM)", "Teahouse accommodation throughout", "All meals on trek", "Experienced Sherpa guide and porters", "Sagarmatha National Park permits", "TIMS card", "First aid kit"],
    exclusions: ["International flights", "Nepal visa fees", "Travel insurance (mandatory)", "Personal trekking gear", "Tips for guides and porters", "Hot showers and charging on trek"],
    gallery: ["/images/tour-nepal.png", "/images/detail-nepal-1.png", "/images/tour-nepal.png", "/images/detail-nepal-1.png"],
    bestTime: "March to May, September to November",
    altitude: "2,860m — 5,545m (17,598 ft)",
    groupSize: "4 — 12 trekkers",
  },
  "kathmandu-pokhara-cultural-odyssey": {
    longDesc:
      "This 7-day cultural odyssey weaves together Nepal's two most iconic cities — the ancient, temple-studded Kathmandu Valley and the lakeside paradise of Pokhara, gateway to the Annapurna range. Explore UNESCO World Heritage sites, paraglide over Phewa Lake with the Himalayas as your backdrop, and experience the living spiritual traditions that make Nepal truly unique.",
    highlights: [
      "Explore seven UNESCO World Heritage sites in the Kathmandu Valley",
      "Paraglide over Phewa Lake with views of the Annapurna massif",
      "Sunrise at Sarangkot — one of the best Himalayan viewpoints",
      "Walk through the medieval Durbar Squares of Kathmandu, Patan, and Bhaktapur",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", desc: "Airport pickup. Evening stroll through Thamel and welcome dinner with Nepali cuisine." },
      { day: 2, title: "Kathmandu Heritage", desc: "Full day visiting Swayambhunath (Monkey Temple), Boudhanath Stupa, and Pashupatinath Temple with evening aarti." },
      { day: 3, title: "Patan & Bhaktapur", desc: "Explore the artistic city of Patan and the medieval wonderland of Bhaktapur — pottery square, Nyatapola Temple, and Juju Dhau." },
      { day: 4, title: "Drive to Pokhara", desc: "Scenic drive through hills and river valleys to Pokhara. Evening at the Lakeside promenade with live music." },
      { day: 5, title: "Sarangkot Sunrise & Paragliding", desc: "Pre-dawn drive to Sarangkot for sunrise over Annapurna, Dhaulagiri, and Machhapuchhre. Afternoon tandem paragliding over Phewa Lake." },
      { day: 6, title: "Pokhara Exploration", desc: "Visit the International Mountain Museum, Devi's Falls, Gupteshwor Cave, and World Peace Pagoda. Boating on Phewa Lake." },
      { day: 7, title: "Return & Departure", desc: "Fly or drive back to Kathmandu. Transfer to airport." },
    ],
    inclusions: ["Hotels in Kathmandu & Pokhara", "All breakfasts", "Heritage guide for Kathmandu", "Paragliding in Pokhara", "Sarangkot sunrise transfer", "All entry fees"],
    exclusions: ["International flights", "Visa fees", "Lunches and dinners", "Personal expenses"],
    gallery: ["/images/tour-nepal.png", "/images/detail-nepal-1.png", "/images/tour-nepal.png", "/images/detail-nepal-1.png"],
    bestTime: "October to April",
    groupSize: "2 — 10 travelers",
  },

  /* ── JAMMU & KASHMIR ── */
  "srinagar-paradise-on-earth": {
    longDesc:
      "Kashmir has been called 'Paradise on Earth' for centuries, and a visit to Srinagar makes it clear why. Dal Lake, with its shikaras gliding past floating gardens, the magnificent Mughal gardens cascading down hillsides, and the warmth of Kashmiri hospitality — this 6-day journey immerses you in the valley's timeless beauty.",
    highlights: [
      "Stay on a heritage houseboat on Dal Lake",
      "Shikara ride through the floating markets and lotus gardens",
      "Explore Nishat Bagh, Shalimar Bagh, and Chashme Shahi — the great Mughal gardens",
      "Day trip to the meadow of Gulmarg or the alpine village of Pahalgam",
      "Shop for Pashmina shawls, saffron, and walnut wood crafts",
    ],
    itinerary: [
      { day: 1, title: "Arrive Srinagar", desc: "Airport pickup, settle into a heritage houseboat on Dal Lake. Evening shikara ride through the floating gardens." },
      { day: 2, title: "Mughal Gardens", desc: "Visit the three grand Mughal gardens — Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Afternoon at the Hazratbal Shrine." },
      { day: 3, title: "Gulmarg Excursion", desc: "Day trip to Gulmarg. Ride the Gondola to Kongdoori and Apharwat Peak. Walk through meadows with views of Nanga Parbat." },
      { day: 4, title: "Pahalgam & Betaab Valley", desc: "Drive to Pahalgam through the saffron fields of Pampore. Explore Betaab Valley and Aru Valley." },
      { day: 5, title: "Old City & Markets", desc: "Walking tour through Srinagar's old city — the Jama Masjid, Khanqah-e-Moula. Afternoon shopping for Pashmina and crafts." },
      { day: 6, title: "Departure", desc: "Final sunrise shikara ride. Transfer to airport." },
    ],
    inclusions: ["Heritage houseboat (2 nights) & hotel (3 nights)", "All breakfasts", "Shikara rides", "Gulmarg Gondola Phase 1", "All transfers and day trips", "Local guide"],
    exclusions: ["Flights", "Gondola Phase 2", "Lunches and dinners", "Personal expenses"],
    gallery: ["/images/tour-kashmir.png", "/images/detail-kashmir-1.png", "/images/detail-kashmir-2.png", "/images/tour-kashmir.png"],
    bestTime: "March to October",
    groupSize: "2 — 10 travelers",
  },
  "gulmarg-snow-adventure": {
    longDesc:
      "Gulmarg, meaning 'Meadow of Flowers,' transforms into a winter wonderland from December to February — India's premier skiing destination with Asia's highest gondola reaching 13,780 ft. This 5-day adventure combines the thrill of skiing and snowboarding with the serene beauty of snow-blanketed pine forests and panoramic views of Nanga Parbat and the Pir Panjal range.",
    highlights: [
      "Ride Asia's highest gondola to Apharwat Peak at 13,780 ft",
      "Ski or snowboard on world-class powder slopes",
      "Trek through pristine snow-covered pine and fir forests",
      "Enjoy a traditional Kashmiri Wazwan feast",
    ],
    itinerary: [
      { day: 1, title: "Srinagar to Gulmarg", desc: "Airport pickup in Srinagar. Scenic drive to Gulmarg. Check in and evening walk through the snow-covered meadow." },
      { day: 2, title: "Gondola & Skiing", desc: "Full day on the slopes. Gondola ride to Phase 1 and Phase 2. Beginners get a ski lesson; experienced skiers hit the powder." },
      { day: 3, title: "Snow Trekking", desc: "Guided snow trek to Khilanmarg meadow. Afternoon sledging and snowman-building. Evening Kashmiri Wazwan dinner." },
      { day: 4, title: "Adventure Day", desc: "Choose your adventure: advanced skiing, snowboarding, or a snow-shoe trek to Alpather Lake area." },
      { day: 5, title: "Departure", desc: "Morning at leisure. Drive back to Srinagar airport." },
    ],
    inclusions: ["Hotel in Gulmarg", "All breakfasts", "Gondola tickets (Phase 1 & 2)", "Ski equipment rental", "One ski lesson for beginners", "All transfers"],
    exclusions: ["Flights", "Lunches and dinners (except Wazwan)", "Travel insurance", "Personal expenses"],
    gallery: ["/images/tour-kashmir.png", "/images/detail-kashmir-2.png", "/images/detail-kashmir-1.png", "/images/tour-kashmir.png"],
    bestTime: "December to February (skiing), May to October (meadows)",
    altitude: "8,694 ft — 13,780 ft",
    groupSize: "4 — 12 travelers",
  },

  /* ── UTTARAKHAND ── */
  "chopta-tungnath-chandrashila-trek": {
    longDesc:
      "The Chopta-Tungnath-Chandrashila trek is one of India's most rewarding short treks. Tungnath, at 12,073 ft, is the highest Shiva temple in the world, and the summit of Chandrashila (12,083 ft) offers a jaw-dropping 360-degree panorama of peaks including Nanda Devi, Trisul, Chaukhamba, and Kedarnath. The trail passes through dense rhododendron forests that burst into crimson bloom in spring.",
    highlights: [
      "Visit Tungnath — the world's highest Shiva temple",
      "Summit Chandrashila Peak for 360-degree Himalayan panorama",
      "Trek through ancient rhododendron and oak forests",
      "Views of Nanda Devi, Trisul, Chaukhamba, Kedarnath, and Bandarpunch",
    ],
    itinerary: [
      { day: 1, title: "Haridwar/Rishikesh to Chopta", desc: "Scenic drive through the Garhwal hills via Devprayag and Ukhimath. Arrive at Chopta, the 'Mini Switzerland of India'." },
      { day: 2, title: "Chopta to Tungnath to Chandrashila", desc: "Trek through rhododendron forests to Tungnath temple (3.5 km). Continue 1.5 km to Chandrashila summit for sunrise views. Return to Chopta." },
      { day: 3, title: "Deoria Tal", desc: "Drive to Sari village and trek to Deoria Tal — a pristine lake reflecting the Chaukhamba peaks. Return to Chopta." },
      { day: 4, title: "Chopta to Rishikesh", desc: "Morning at leisure in the meadows. Drive back to Rishikesh. Evening at the Ganga Aarti at Triveni Ghat." },
      { day: 5, title: "Departure", desc: "Explore Rishikesh — Beatles Ashram, Lakshman Jhula. Depart." },
    ],
    inclusions: ["Camps/guesthouses", "All meals on trek", "Experienced trek leader", "All transfers", "Camping gear", "Forest permits"],
    exclusions: ["Travel to Rishikesh/Haridwar", "Personal trekking gear", "Travel insurance", "Tips"],
    gallery: ["/images/tour-uttarakhand.png", "/images/detail-uttarakhand-1.png", "/images/tour-uttarakhand.png", "/images/detail-uttarakhand-1.png"],
    bestTime: "March to June, September to November",
    altitude: "8,790 ft — 13,123 ft",
    groupSize: "6 — 15 trekkers",
  },

  /* ── UTTAR PRADESH ── */
  "agra-varanasi-golden-triangle-extension": {
    longDesc:
      "This heritage trail connects two of India's most iconic cities — Agra, home to the Taj Mahal, and Varanasi, one of the world's oldest continuously inhabited cities. From the ethereal beauty of the Taj at sunrise to the ancient rituals on the ghats of the Ganges, this 5-day journey is a profound encounter with India's living history and spiritual traditions.",
    highlights: [
      "Witness the Taj Mahal at sunrise — the most romantic building ever created",
      "Explore Agra Fort and the abandoned Mughal city of Fatehpur Sikri",
      "Attend the mesmerizing Ganga Aarti ceremony at Dashashwamedh Ghat",
      "Take a dawn boat ride on the Ganges past the ancient ghats of Varanasi",
      "Wander the silk-weaving lanes of Varanasi's old city",
    ],
    itinerary: [
      { day: 1, title: "Arrive Agra", desc: "Check into a Taj-facing hotel. Afternoon visit to Agra Fort and Mehtab Bagh for sunset views of the Taj Mahal." },
      { day: 2, title: "Taj Mahal & Fatehpur Sikri", desc: "Sunrise visit to the Taj Mahal. After breakfast, drive to the ghost city of Fatehpur Sikri — Akbar's abandoned capital." },
      { day: 3, title: "Agra to Varanasi", desc: "Morning flight or train to Varanasi. Afternoon walk through the old city's lanes. Evening Ganga Aarti at Dashashwamedh Ghat." },
      { day: 4, title: "Dawn on the Ganges", desc: "Pre-dawn boat ride past the burning ghats and ancient temples. Visit Sarnath — where Buddha gave his first sermon." },
      { day: 5, title: "Departure", desc: "Visit the silk weavers of Varanasi. Shopping for Banarasi silk. Transfer to airport." },
    ],
    inclusions: ["Hotels with Taj view / Ganges view", "All breakfasts", "Taj Mahal sunrise visit", "Boat ride on Ganges", "Heritage guide in both cities", "Agra-Varanasi transfer"],
    exclusions: ["Flights to Agra / from Varanasi", "Lunches and dinners", "Personal shopping", "Camera fees at monuments"],
    gallery: ["/images/tour-uttarpradesh.png", "/images/detail-uttarpradesh-1.png", "/images/tour-uttarpradesh.png", "/images/detail-uttarpradesh-1.png"],
    bestTime: "October to March",
    groupSize: "2 — 10 travelers",
  },

  /* ── SIKKIM ── */
  "gangtok-lachen-gurudongmar-expedition": {
    longDesc:
      "Sikkim is India's most underrated Himalayan state — a pocket-sized paradise where Buddhist monasteries nestle in cloud forests, Kanchenjunga dominates every horizon, and the sacred Gurudongmar Lake sits frozen at 17,800 ft, one of the highest lakes in the world. This 7-day expedition takes you from the charming capital Gangtok deep into the restricted North Sikkim frontier.",
    highlights: [
      "Visit Gurudongmar Lake at 17,800 ft — one of the world's highest lakes",
      "Explore Rumtek Monastery, seat of the Karmapa",
      "Yak safari at Tsomgo (Changu) Lake",
      "Drive through Lachung to Zero Point at the Indo-China border",
      "Experience Sikkimese cuisine — momos, thukpa, and chhang",
    ],
    itinerary: [
      { day: 1, title: "Arrive Gangtok", desc: "Arrive via Bagdogra airport. Drive to Gangtok (5,400 ft). Evening walk along MG Marg and visit the Enchey Monastery." },
      { day: 2, title: "Gangtok Sightseeing", desc: "Visit Rumtek Monastery, Do Drul Chorten, Namgyal Institute of Tibetology. Afternoon at Tashi Viewpoint for Kanchenjunga views." },
      { day: 3, title: "Gangtok to Lachen", desc: "Drive north through dramatic river valleys and waterfalls to Lachen (8,838 ft) in North Sikkim." },
      { day: 4, title: "Gurudongmar Lake", desc: "Early morning drive to Gurudongmar Lake (17,800 ft). One of the highest and most sacred lakes, partially frozen year-round. Return to Lachen." },
      { day: 5, title: "Lachen to Lachung", desc: "Drive to Lachung through stunning scenery. Afternoon visit to Lachung Monastery." },
      { day: 6, title: "Yumthang Valley & Zero Point", desc: "Visit the Valley of Flowers (Yumthang) and drive to Zero Point (15,300 ft) at the Indo-China border. Return to Gangtok." },
      { day: 7, title: "Tsomgo Lake & Departure", desc: "Visit Tsomgo Lake and Baba Harbhajan Singh Temple. Yak ride at the lake. Transfer to Bagdogra airport." },
    ],
    inclusions: ["Hotels and homestays", "All meals in North Sikkim", "Protected Area Permits", "4x4 vehicle throughout", "Local guide", "Yak ride at Tsomgo"],
    exclusions: ["Flights to Bagdogra", "Travel insurance", "Personal expenses", "Tips"],
    gallery: ["/images/tour-sikkim.png", "/images/detail-sikkim-1.png", "/images/tour-sikkim.png", "/images/detail-sikkim-1.png"],
    bestTime: "March to June, October to December",
    altitude: "5,400 ft — 17,800 ft",
    groupSize: "4 — 10 travelers",
  },
  "pelling-ravangla-west-south-sikkim": {
    longDesc:
      "While North Sikkim gets the headlines, the western and southern reaches offer something equally magical — unobstructed Kanchenjunga views from Pelling, the towering 130-ft Buddha statue at Ravangla, ancient monasteries hidden in rhododendron forests, and pristine waterfalls. This 5-day journey reveals Sikkim's gentler, more contemplative side.",
    highlights: [
      "Sunrise view of Kanchenjunga from Pelling — arguably the best in Sikkim",
      "Visit the stunning 130-ft Tathagata Tsal Buddha statue in Ravangla",
      "Explore 330-year-old Pemayangtse Monastery",
      "Trek to Kanchenjunga Falls and Rimbi Waterfalls",
    ],
    itinerary: [
      { day: 1, title: "Bagdogra to Pelling", desc: "Drive through the lush Teesta valley to Pelling (6,800 ft). Evening views of Kanchenjunga at sunset." },
      { day: 2, title: "Pelling Heritage", desc: "Visit Pemayangtse Monastery, Rabdentse Ruins (old Sikkimese capital), and the Skywalk. Trek to Kanchenjunga Falls." },
      { day: 3, title: "Pelling to Ravangla", desc: "Drive through tea gardens to Ravangla. Visit the magnificent Buddha Park (Tathagata Tsal). Evening walk through the village." },
      { day: 4, title: "Ravangla to Namchi", desc: "Visit Ralang Monastery and drive to Namchi. See the Samdruptse Hill with the 135-ft Guru Padmasambhava statue." },
      { day: 5, title: "Departure", desc: "Morning tea garden walk in Temi. Drive to Bagdogra airport." },
    ],
    inclusions: ["Hotels throughout", "All breakfasts", "All transfers", "Local guide", "Entry fees to monasteries and parks"],
    exclusions: ["Flights to Bagdogra", "Lunches and dinners", "Personal expenses"],
    gallery: ["/images/tour-sikkim.png", "/images/detail-sikkim-1.png", "/images/tour-sikkim.png", "/images/detail-sikkim-1.png"],
    bestTime: "March to May, October to December",
    groupSize: "2 — 10 travelers",
  },

  /* ── MEGHALAYA ── */
  "cherrapunji-living-root-bridges": {
    longDesc:
      "Meghalaya — the 'Abode of Clouds' — is home to one of the most extraordinary human-made natural wonders on Earth: living root bridges. The Khasi tribe has trained the roots of Ficus elastica trees across rivers and gorges for centuries, creating bridges that grow stronger with time. This 6-day adventure takes you deep into the misty valleys of Cherrapunji to trek to these living marvels, rappel down waterfalls, and explore vast limestone caves.",
    highlights: [
      "Trek to the iconic Double Decker Living Root Bridge at Nongriat",
      "Visit Nohkalikai Falls — India's tallest plunge waterfall (1,115 ft)",
      "Rappel down the Garden of Caves waterfall complex",
      "Explore the Mawsmai limestone caves",
      "Witness the rainiest place on Earth during monsoon season",
    ],
    itinerary: [
      { day: 1, title: "Guwahati to Shillong", desc: "Drive from Guwahati to Shillong. Evening walk around Ward's Lake and Police Bazaar. Live music at a local cafe." },
      { day: 2, title: "Shillong to Cherrapunji", desc: "Drive to Cherrapunji (Sohra). Visit Nohkalikai Falls, Mawsmai Caves, and the Seven Sisters Falls viewpoint." },
      { day: 3, title: "Nongriat Root Bridge Trek", desc: "The main event: descend 3,500 steps into the valley to reach the Double Decker Living Root Bridge. Swim in the natural rock pools." },
      { day: 4, title: "Garden of Caves & Rappelling", desc: "Visit the Garden of Caves — a stunning waterfall and cave complex. Rappelling adventure down a 40-ft waterfall." },
      { day: 5, title: "Mawlynnong & Dawki", desc: "Visit Asia's cleanest village Mawlynnong. Drive to Dawki and boat on the crystal-clear Umngot River." },
      { day: 6, title: "Return & Departure", desc: "Drive back to Guwahati. Visit Kamakhya Temple if time permits. Transfer to airport." },
    ],
    inclusions: ["Hotels and guesthouses", "All breakfasts", "Trek guide for Nongriat", "Rappelling equipment and instructor", "Dawki boat ride", "All transfers"],
    exclusions: ["Flights to Guwahati", "Lunches and dinners", "Personal expenses", "Travel insurance"],
    gallery: ["/images/tour-meghalaya.png", "/images/detail-meghalaya-1.png", "/images/tour-meghalaya.png", "/images/detail-meghalaya-1.png"],
    bestTime: "October to April (dry), June to September (monsoon magic)",
    groupSize: "4 — 12 travelers",
  },
  "shillong-dawki-crystal-waters": {
    longDesc:
      "Shillong — the 'Scotland of the East' — pulses with live music, colonial charm, and the warmth of Khasi culture, while Dawki's Umngot River is so crystal-clear that boats appear to float on air. This 5-day journey combines the cultural vibrancy of Meghalaya's capital with the natural wonders of its countryside, including village homestays with Khasi families.",
    highlights: [
      "Boat on the crystal-clear Umngot River at Dawki — boats appear to float on glass",
      "Experience Shillong's vibrant live music scene at iconic cafes",
      "Stay with a Khasi family in a traditional village homestay",
      "Visit the sacred forests and waterfalls of the East Khasi Hills",
    ],
    itinerary: [
      { day: 1, title: "Arrive Shillong", desc: "Drive from Guwahati to Shillong. Evening walk through Police Bazaar. Live music at Dylan's Cafe or Cloud Nine." },
      { day: 2, title: "Shillong Sightseeing", desc: "Visit Don Bosco Museum, Elephant Falls, Shillong Peak, and the sacred Mawphlang forest with its ancient monoliths." },
      { day: 3, title: "Dawki & Shnongpdeng", desc: "Drive to Dawki. Boat on the transparent Umngot River. Visit the India-Bangladesh border. Stay at a riverside camp in Shnongpdeng." },
      { day: 4, title: "Village Homestay & Kayaking", desc: "Morning kayaking and cliff jumping on the Umngot. Afternoon transfer to a Khasi village for a traditional homestay experience." },
      { day: 5, title: "Departure", desc: "Morning with the Khasi family — learn about betel nut, Jadoh rice, and matrilineal traditions. Drive to Guwahati airport." },
    ],
    inclusions: ["Hotels, riverside camp, village homestay", "All breakfasts", "Dawki boat ride", "Kayaking session", "Sacred forest guide", "All transfers"],
    exclusions: ["Flights to Guwahati", "Lunches and dinners", "Personal expenses"],
    gallery: ["/images/tour-meghalaya.png", "/images/detail-meghalaya-1.png", "/images/tour-meghalaya.png", "/images/detail-meghalaya-1.png"],
    bestTime: "October to April",
    groupSize: "2 — 10 travelers",
  },
};
