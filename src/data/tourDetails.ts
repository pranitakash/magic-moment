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
  "himachal-pradesh-mountain-odyssey": {
    slug: "himachal-pradesh-mountain-odyssey",
    longDesc:
      "Himachal Pradesh is the crown jewel of the Indian Himalayas — from Spiti's cold desert at 12,500 ft where ancient Tibetan Buddhist monasteries perch on barren cliffs, to the lush pine valleys of Kullu and Manali where the Beas River rushes through emerald gorges. This 8-day odyssey takes you through the most dramatic landscapes in the state, from the thousand-year-old Key Monastery to the crescent-shaped Chandratal Lake, and back through the Rohtang corridor into the flower-filled Kullu valley.",
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
  "rajasthan-royal-heritage-trail": {
    slug: "rajasthan-royal-heritage-trail",
    longDesc:
      "Rajasthan, the Land of Kings, is India's most colorful state — a realm of golden desert forts, shimmering lake palaces, and centuries of Rajput valor. From Jaisalmer's massive sandstone fort glowing amber in the sunset to Udaipur's romantic lakes reflecting marble palaces, this 7-day royal heritage trail weaves together the grandeur of three iconic cities. Ride camels across the Thar dunes, explore ornately carved havelis, glide across Lake Pichola, and lose yourself in the vibrant bazaars of the Pink City.",
    highlights: [
      "Explore the 12th-century Jaisalmer Fort — one of the world's largest living forts",
      "Ride camels across the Sam Sand Dunes at golden hour",
      "Sunset boat ride on Lake Pichola with views of the Lake Palace",
      "Experience live Manganiyar folk music and Kalbelia dance performances",
      "Visit the magnificent City Palace of Udaipur — Rajasthan's largest palace complex",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Jaisalmer", desc: "Check into a heritage haveli hotel. Evening walking tour through the golden fort's narrow lanes, Jain temples, and sunset views from the ramparts." },
      { day: 2, title: "Fort, Haveli & Desert Safari", desc: "Guided tour of Patwon Ki Haveli and the Folklore Museum. Afternoon camel safari across the Sam Sand Dunes with bonfire and folk music." },
      { day: 3, title: "Desert Camp & Kuldhara", desc: "Sunrise on the dunes. Visit the ghost village of Kuldhara. Desert jeep safari through remote villages. Drive onward to Jodhpur." },
      { day: 4, title: "Jodhpur — Blue City", desc: "Explore the mighty Mehrangarh Fort, Jaswant Thada, and the blue-washed lanes of the old city. Evening at the Clock Tower bazaar." },
      { day: 5, title: "Jodhpur to Udaipur via Ranakpur", desc: "Drive through the Aravalli hills, stopping at the stunning Ranakpur Jain temples with their 1,444 carved marble pillars." },
      { day: 6, title: "Udaipur — City of Lakes", desc: "Full day exploring City Palace, Saheliyon Ki Bari gardens, and Jagdish Temple. Sunset boat ride on Lake Pichola." },
      { day: 7, title: "Departure", desc: "Morning visit to the Vintage Car Museum. Last-minute shopping in Hathi Pol bazaar before departure." },
    ],
    inclusions: ["Heritage hotels throughout", "All breakfasts, camp meals", "Camel safari and jeep safari", "Boat ride on Lake Pichola", "Local heritage guides", "All entry fees and transfers"],
    exclusions: ["Flights", "Personal shopping", "Travel insurance", "Alcoholic beverages"],
    gallery: ["/images/tour-rajasthan.png", "/images/detail-rajasthan-1.png", "/images/detail-rajasthan-2.png", "/images/detail-rajasthan-3.png"],
    bestTime: "October to March",
    groupSize: "2 — 10 travelers",
  },

  /* ── KERALA ── */
  "kerala-god-s-own-country-escape": {
    slug: "kerala-god-s-own-country-escape",
    longDesc:
      "Kerala — God's Own Country — is a tropical paradise where emerald backwaters wind through palm-fringed villages, rolling tea plantations drape over misty Western Ghat hills, and ancient Ayurvedic traditions promise deep rejuvenation. This 6-day escape takes you from the colonial charm of Fort Kochi to the serene backwaters of Alleppey aboard a traditional kettuvallam houseboat, then up into the cool tea hills of Munnar, where the endangered Nilgiri Tahr graze in high-altitude grasslands.",
    highlights: [
      "Overnight stay on a traditional kettuvallam houseboat cruising the backwaters",
      "Walk through working tea plantations with a tea master in Munnar",
      "Experience a full Ayurvedic wellness session with traditional therapies",
      "Spot the endangered Nilgiri Tahr at Eravikulam National Park",
      "Taste authentic Kerala cuisine — fresh seafood, appam, and toddy",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", desc: "Explore Fort Kochi — the Chinese fishing nets, St. Francis Church, and the Jewish quarter. Evening Kathakali dance performance." },
      { day: 2, title: "Kochi to Alleppey Houseboat", desc: "Drive to Alleppey and board your private houseboat. Cruise through the backwaters as the chef prepares fresh Kerala meals onboard." },
      { day: 3, title: "Village Canoe & Cooking Class", desc: "Morning canoe ride through narrow canals. Visit a toddy tapper and coir-making village. Afternoon Kerala cooking class with local spices." },
      { day: 4, title: "Alleppey to Munnar", desc: "Drive up through cardamom and tea plantations into the Western Ghats. Check into a plantation resort. Evening nature walk through the estate." },
      { day: 5, title: "Eravikulam & Tea Museum", desc: "Morning safari at Eravikulam National Park to spot Nilgiri Tahr. Afternoon visit to the KDHP Tea Museum with guided tea tasting." },
      { day: 6, title: "Plantation Walk & Departure", desc: "Guided walk through the tea plantation with a master. Learn about plucking, processing, and grading. Depart with fresh Munnar tea." },
    ],
    inclusions: ["Houseboat with private cabin", "Plantation resort in Munnar", "Hotels in Kochi", "All meals on houseboat", "Ayurvedic spa session", "Canoe tour & cooking class", "All transfers"],
    exclusions: ["Flights", "Personal expenses", "Travel insurance", "Meals not mentioned"],
    gallery: ["/images/tour-kerala.png", "/images/detail-kerala-1.png", "/images/detail-kerala-2.png", "/images/tour-kerala.png"],
    bestTime: "September to March",
    groupSize: "2 — 10 travelers",
  },

  /* ── NEPAL ── */
  "nepal-himalayan-adventure": {
    slug: "nepal-himalayan-adventure",
    longDesc:
      "Nepal is the ultimate Himalayan destination — home to eight of the world's fourteen 8,000-meter peaks, ancient temple-studded cities, and the legendary warmth of Sherpa hospitality. This 10-day adventure weaves together the spiritual richness of the Kathmandu Valley, the lakeside paradise of Pokhara, and the raw mountain grandeur of the Everest region. Explore UNESCO World Heritage sites, paraglide over Phewa Lake, and trek through rhododendron forests beneath the world's highest peaks.",
    highlights: [
      "Trek through the Everest region with views of the world's highest peaks",
      "Explore seven UNESCO World Heritage sites in the Kathmandu Valley",
      "Paraglide over Phewa Lake with views of the Annapurna massif",
      "Sunrise at Sarangkot — one of the best Himalayan viewpoints",
      "Experience the warmth of Sherpa hospitality in mountain teahouses",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", desc: "Airport pickup. Evening stroll through Thamel and welcome dinner with Nepali cuisine." },
      { day: 2, title: "Kathmandu Heritage", desc: "Full day visiting Swayambhunath (Monkey Temple), Boudhanath Stupa, and Pashupatinath Temple with evening aarti." },
      { day: 3, title: "Patan & Bhaktapur", desc: "Explore the artistic city of Patan and the medieval wonderland of Bhaktapur — pottery square, Nyatapola Temple, and Juju Dhau." },
      { day: 4, title: "Fly to Lukla & Trek to Phakding", desc: "Scenic mountain flight to Lukla (2,860m). Begin the trek through lush forests along the Dudh Kosi river." },
      { day: 5, title: "Phakding to Namche Bazaar", desc: "Cross suspension bridges, enter Sagarmatha National Park, and climb to Namche Bazaar (3,440m) — the Sherpa capital." },
      { day: 6, title: "Acclimatization in Namche", desc: "Hike to Everest View Hotel for first views of Everest. Visit the Sherpa Museum and explore the vibrant market." },
      { day: 7, title: "Namche to Tengboche", desc: "Trek through rhododendron forests to Tengboche (3,870m). Visit the famous monastery with Everest and Ama Dablam views." },
      { day: 8, title: "Return Trek to Lukla", desc: "Begin the descent, retracing steps through familiar villages. The return trek is faster with thicker air and lighter spirits." },
      { day: 9, title: "Fly to Pokhara & Paragliding", desc: "Morning flight to Pokhara. Afternoon tandem paragliding over Phewa Lake with Annapurna views. Evening at the Lakeside promenade." },
      { day: 10, title: "Return & Departure", desc: "Sunrise at Sarangkot. Fly back to Kathmandu. Transfer to airport." },
    ],
    inclusions: ["Hotels in Kathmandu & Pokhara", "Teahouse accommodation on trek", "All meals on trek", "Domestic flights", "Sherpa guide and porters", "Paragliding in Pokhara", "All entry fees and permits"],
    exclusions: ["International flights", "Nepal visa fees", "Travel insurance (mandatory)", "Personal trekking gear", "Tips for guides and porters"],
    gallery: ["/images/tour-nepal.png", "/images/detail-nepal-1.png", "/images/tour-nepal.png", "/images/detail-nepal-1.png"],
    bestTime: "March to May, September to November",
    altitude: "2,860m — 3,870m",
    groupSize: "4 — 12 travelers",
  },

  /* ── JAMMU & KASHMIR ── */
  "jammu-kashmir-paradise-on-earth": {
    slug: "jammu-kashmir-paradise-on-earth",
    longDesc:
      "Jammu & Kashmir has been called 'Paradise on Earth' for centuries — and this 7-day journey reveals why. From the shikaras gliding across Dal Lake's floating gardens and the magnificent Mughal terraced gardens of Srinagar, to the snow-dusted slopes of Gulmarg with Asia's highest gondola, and the alpine meadows of Pahalgam — this is Kashmir at its most enchanting. Stay in a heritage houseboat, ride the gondola to 13,780 ft, and shop for the world's finest Pashmina shawls.",
    highlights: [
      "Stay on a heritage houseboat on Dal Lake",
      "Shikara ride through the floating markets and lotus gardens",
      "Ride Asia's highest gondola in Gulmarg to Apharwat Peak at 13,780 ft",
      "Explore Betaab Valley and Aru Valley in Pahalgam",
      "Shop for Pashmina shawls, saffron, and walnut wood crafts",
    ],
    itinerary: [
      { day: 1, title: "Arrive Srinagar", desc: "Airport pickup, settle into a heritage houseboat on Dal Lake. Evening shikara ride through the floating gardens." },
      { day: 2, title: "Mughal Gardens", desc: "Visit the three grand Mughal gardens — Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Afternoon at the Hazratbal Shrine." },
      { day: 3, title: "Gulmarg Excursion", desc: "Day trip to Gulmarg. Ride the Gondola to Kongdoori and Apharwat Peak. Walk through meadows with views of Nanga Parbat." },
      { day: 4, title: "Gulmarg Adventure Day", desc: "Choose your adventure: skiing (winter), snowboarding, or a trek through snow-covered pine forests. Evening Kashmiri Wazwan feast." },
      { day: 5, title: "Pahalgam & Betaab Valley", desc: "Drive to Pahalgam through the saffron fields of Pampore. Explore Betaab Valley and Aru Valley." },
      { day: 6, title: "Old City & Markets", desc: "Walking tour through Srinagar's old city — the Jama Masjid, Khanqah-e-Moula. Afternoon shopping for Pashmina and crafts." },
      { day: 7, title: "Departure", desc: "Final sunrise shikara ride. Transfer to airport." },
    ],
    inclusions: ["Heritage houseboat (2 nights) & hotel (4 nights)", "All breakfasts", "Shikara rides", "Gulmarg Gondola Phase 1 & 2", "All transfers and day trips", "Local guide"],
    exclusions: ["Flights", "Lunches and dinners", "Personal expenses", "Travel insurance"],
    gallery: ["/images/tour-kashmir.png", "/images/detail-kashmir-1.png", "/images/detail-kashmir-2.png", "/images/tour-kashmir.png"],
    bestTime: "March to October (summer), December to February (snow)",
    altitude: "5,200 ft — 13,780 ft",
    groupSize: "2 — 12 travelers",
  },

  /* ── UTTARAKHAND ── */
  "uttarakhand-devbhoomi-trail": {
    slug: "uttarakhand-devbhoomi-trail",
    longDesc:
      "Uttarakhand, the 'Land of the Gods' (Devbhoomi), is where spirituality meets raw Himalayan wilderness. From the world's highest Shiva temple at Tungnath to the thundering rapids of Rishikesh, this 6-day trail takes you through ancient rhododendron forests, past pristine alpine lakes, and to summit viewpoints offering 360-degree panoramas of Nanda Devi, Trisul, Chaukhamba, and Kedarnath. End with the timeless Ganga Aarti on the banks of the holy river.",
    highlights: [
      "Visit Tungnath — the world's highest Shiva temple",
      "Summit Chandrashila Peak for 360-degree Himalayan panorama",
      "Trek through ancient rhododendron and oak forests",
      "Views of Nanda Devi, Trisul, Chaukhamba, Kedarnath, and Bandarpunch",
      "Experience the sacred Ganga Aarti at Rishikesh",
    ],
    itinerary: [
      { day: 1, title: "Haridwar/Rishikesh to Chopta", desc: "Scenic drive through the Garhwal hills via Devprayag and Ukhimath. Arrive at Chopta, the 'Mini Switzerland of India'." },
      { day: 2, title: "Chopta to Tungnath to Chandrashila", desc: "Trek through rhododendron forests to Tungnath temple (3.5 km). Continue 1.5 km to Chandrashila summit for sunrise views. Return to Chopta." },
      { day: 3, title: "Deoria Tal", desc: "Drive to Sari village and trek to Deoria Tal — a pristine lake reflecting the Chaukhamba peaks. Return to Chopta." },
      { day: 4, title: "Chopta to Rishikesh", desc: "Morning at leisure in the meadows. Drive back to Rishikesh. Evening at the Ganga Aarti at Triveni Ghat." },
      { day: 5, title: "Rishikesh Adventure", desc: "Morning river rafting on the Ganges (16 km stretch). Afternoon visit to Beatles Ashram and Lakshman Jhula." },
      { day: 6, title: "Departure", desc: "Morning yoga session by the Ganges. Explore local markets and depart." },
    ],
    inclusions: ["Camps/guesthouses", "All meals on trek", "Experienced trek leader", "All transfers", "Camping gear", "Forest permits", "River rafting"],
    exclusions: ["Travel to Rishikesh/Haridwar", "Personal trekking gear", "Travel insurance", "Tips"],
    gallery: ["/images/tour-uttarakhand.png", "/images/detail-uttarakhand-1.png", "/images/tour-uttarakhand.png", "/images/detail-uttarakhand-1.png"],
    bestTime: "March to June, September to November",
    altitude: "8,790 ft — 13,123 ft",
    groupSize: "6 — 15 trekkers",
  },

  /* ── UTTAR PRADESH ── */
  "uttar-pradesh-heritage-trail": {
    slug: "uttar-pradesh-heritage-trail",
    longDesc:
      "Uttar Pradesh is the heartland of Indian civilization — home to the Taj Mahal, one of the world's oldest continuously inhabited cities (Varanasi), and the grandeur of Mughal architecture. This 5-day heritage trail connects Agra's ethereal beauty with the ancient spiritual traditions of Varanasi. Witness the Taj at sunrise, explore the abandoned Mughal city of Fatehpur Sikri, attend the mesmerizing Ganga Aarti, and take a dawn boat ride past the timeless ghats of the Ganges.",
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
  "sikkim-mountain-kingdom": {
    slug: "sikkim-mountain-kingdom",
    longDesc:
      "Sikkim is India's most underrated Himalayan gem — a pocket-sized mountain kingdom where Buddhist monasteries nestle in cloud forests, Kanchenjunga dominates every horizon, and sacred lakes sit frozen at impossible altitudes. This 7-day expedition covers the best of all Sikkim — from the charming capital Gangtok and the restricted North Sikkim frontier with Gurudongmar Lake at 17,800 ft, to unobstructed Kanchenjunga sunrises from Pelling and the towering Buddha statue at Ravangla.",
    highlights: [
      "Visit Gurudongmar Lake at 17,800 ft — one of the world's highest lakes",
      "Sunrise view of Kanchenjunga from Pelling — arguably the best in Sikkim",
      "Explore Rumtek Monastery, seat of the Karmapa",
      "Yak safari at Tsomgo (Changu) Lake",
      "Drive through Yumthang Valley — the Valley of Flowers",
    ],
    itinerary: [
      { day: 1, title: "Arrive Gangtok", desc: "Arrive via Bagdogra airport. Drive to Gangtok (5,400 ft). Evening walk along MG Marg and visit the Enchey Monastery." },
      { day: 2, title: "Gangtok Sightseeing", desc: "Visit Rumtek Monastery, Do Drul Chorten, Namgyal Institute of Tibetology. Afternoon at Tashi Viewpoint for Kanchenjunga views." },
      { day: 3, title: "Gangtok to Lachen", desc: "Drive north through dramatic river valleys and waterfalls to Lachen (8,838 ft) in North Sikkim." },
      { day: 4, title: "Gurudongmar Lake", desc: "Early morning drive to Gurudongmar Lake (17,800 ft). One of the highest and most sacred lakes, partially frozen year-round. Return to Lachen." },
      { day: 5, title: "Lachen to Lachung & Yumthang", desc: "Drive to Lachung. Visit the Valley of Flowers (Yumthang) and drive to Zero Point (15,300 ft) at the Indo-China border." },
      { day: 6, title: "Return to Gangtok & Tsomgo Lake", desc: "Return to Gangtok. Visit Tsomgo Lake and Baba Harbhajan Singh Temple. Yak ride at the lake." },
      { day: 7, title: "Departure", desc: "Morning visit to a local market. Transfer to Bagdogra airport." },
    ],
    inclusions: ["Hotels and homestays", "All meals in North Sikkim", "Protected Area Permits", "4x4 vehicle throughout", "Local guide", "Yak ride at Tsomgo"],
    exclusions: ["Flights to Bagdogra", "Travel insurance", "Personal expenses", "Tips"],
    gallery: ["/images/tour-sikkim.png", "/images/detail-sikkim-1.png", "/images/tour-sikkim.png", "/images/detail-sikkim-1.png"],
    bestTime: "March to June, October to December",
    altitude: "5,400 ft — 17,800 ft",
    groupSize: "4 — 10 travelers",
  },

  /* ── MEGHALAYA ── */
  "meghalaya-abode-of-clouds": {
    slug: "meghalaya-abode-of-clouds",
    longDesc:
      "Meghalaya — the 'Abode of Clouds' — is home to one of the most extraordinary human-made natural wonders on Earth: living root bridges. The Khasi tribe has trained the roots of Ficus elastica trees across rivers and gorges for centuries, creating bridges that grow stronger with time. This 6-day adventure takes you from Shillong's vibrant live music scene through the misty valleys of Cherrapunji to trek to these living marvels, boat on Dawki's crystal-clear Umngot River, and stay with Khasi families in traditional village homestays.",
    highlights: [
      "Trek to the iconic Double Decker Living Root Bridge at Nongriat",
      "Visit Nohkalikai Falls — India's tallest plunge waterfall (1,115 ft)",
      "Boat on the crystal-clear Umngot River at Dawki — boats appear to float on glass",
      "Experience Shillong's vibrant live music scene",
      "Stay with a Khasi family in a traditional village homestay",
    ],
    itinerary: [
      { day: 1, title: "Guwahati to Shillong", desc: "Drive from Guwahati to Shillong. Evening walk around Ward's Lake and Police Bazaar. Live music at a local cafe." },
      { day: 2, title: "Shillong to Cherrapunji", desc: "Drive to Cherrapunji (Sohra). Visit Nohkalikai Falls, Mawsmai Caves, and the Seven Sisters Falls viewpoint." },
      { day: 3, title: "Nongriat Root Bridge Trek", desc: "The main event: descend 3,500 steps into the valley to reach the Double Decker Living Root Bridge. Swim in the natural rock pools." },
      { day: 4, title: "Mawlynnong & Dawki", desc: "Visit Asia's cleanest village Mawlynnong. Drive to Dawki and boat on the crystal-clear Umngot River." },
      { day: 5, title: "Village Homestay & Kayaking", desc: "Morning kayaking and cliff jumping on the Umngot. Afternoon transfer to a Khasi village for a traditional homestay experience." },
      { day: 6, title: "Return & Departure", desc: "Morning with the Khasi family. Drive back to Guwahati. Visit Kamakhya Temple if time permits. Transfer to airport." },
    ],
    inclusions: ["Hotels, riverside camp, village homestay", "All breakfasts", "Trek guide for Nongriat", "Dawki boat ride", "Kayaking session", "All transfers"],
    exclusions: ["Flights to Guwahati", "Lunches and dinners", "Personal expenses", "Travel insurance"],
    gallery: ["/images/tour-meghalaya.png", "/images/detail-meghalaya-1.png", "/images/tour-meghalaya.png", "/images/detail-meghalaya-1.png"],
    bestTime: "October to April (dry), June to September (monsoon magic)",
    groupSize: "4 — 12 travelers",
  },
};
