"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

/* ─────────────── DATA ─────────────── */
const tours = [
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
  },
];

const stats = [
  { number: "18,50,000+", label: "Kilometres Trekked" },
  { number: "5,000+", label: "Happy Travelers" },
  { number: "320+", label: "Five-Star Reviews" },
  { number: "8", label: "Years on the Trail" },
];

/* ─────────────── HELPERS ─────────────── */
function formatPrice(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

/* ─────────────── SVG Icons ─────────────── */
function SearchIcon() {
  return (
    <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MountainSvg({ className }: { className?: string }) {
  return (
    <svg className={className} width="40" height="28" viewBox="0 0 40 28" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="2,26 14,4 22,18 26,12 38,26" />
      <polyline points="10,14 14,8 18,14" opacity="0.5" />
    </svg>
  );
}


/* ─────────────── INTERSECTION OBSERVER HOOK ─────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}


/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxIndex = tours.length - 3;

  const scrollCarousel = (dir: number) => {
    const next = Math.max(0, Math.min(carouselIndex + dir, maxIndex));
    setCarouselIndex(next);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / tours.length;
      carouselRef.current.scrollTo({ left: cardWidth * next, behavior: "smooth" });
    }
  };

  /* Auto-rotate hero dots */
  useEffect(() => {
    const timer = setInterval(() => setActiveDot((p) => (p + 1) % 5), 4000);
    return () => clearInterval(timer);
  }, []);

  const specialRef = useInView();
  const statsRef = useInView();
  const destRef = useInView();

  return (
    <>
      {/* ──── HEADER ──── */}
      <header className="header" id="header">
        <div className="header-inner">
          <a href="/" className="logo">Magic moment</a>
          <nav className="nav-links">
            <a href="#tours">Tours</a>
            <a href="#destinations">Destinations</a>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-right">
            <button className="btn-whatsapp" aria-label="WhatsApp">
              <WhatsAppIcon />
            </button>
            <button className="btn-book-now">Book Now</button>
          </div>
        </div>
      </header>

      {/* ──── HERO ──── */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.svg"
            alt="Himalayan sunrise over Manali snow peaks"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow animate-fade-in-up">WELCOME TO YOUR</span>
          <h1 className="hero-brand animate-fade-in-up animate-delay-1">
            Magic moment
          </h1>
          <p className="hero-subtext animate-fade-in-up animate-delay-2">
            We organize handpicked treks and getaways across the Himalayas.
            Discover Himachal &amp; Uttarakhand&apos;s hidden valleys with Magic Moment.
          </p>
          <div className="hero-dots animate-fade-in-up animate-delay-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`hero-dot${activeDot === i ? " active" : ""}`}
                onClick={() => setActiveDot(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ──── SEARCH WIDGET ──── */}
      <div className="search-widget container" id="search">
        <div className="search-bar">
          <SearchIcon />
          <input className="search-input" type="text" placeholder="Enter tour name" />
          <span className="search-divider" />
          <span className="search-date">
            <CalendarIcon /> &nbsp;Select dates
          </span>
          <button className="search-btn">SEARCH TOURS</button>
        </div>
      </div>

      {/* ──── SPECIAL FOR YOU ──── */}
      <section
        className="section-special container"
        id="tours"
        ref={specialRef.ref}
        style={{ opacity: specialRef.isVisible ? 1 : 0, transform: specialRef.isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
      >
        <div className="section-header">
          <h2>Special for you</h2>
          <a href="#" className="all-tours-link">
            all tours <ArrowRight />
          </a>
        </div>

        <div className="carousel-wrapper">
          {carouselIndex > 0 && (
            <button
              className="carousel-arrow left"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous tours"
            >
              <ChevronLeft />
            </button>
          )}
          <div className="carousel-track" ref={carouselRef}>
            {tours.map((tour) => (
              <article className="tour-card" key={tour.id}>
                <div className="tour-card-image">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    width={400}
                    height={240}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                  <div className="tour-card-badges">
                    {tour.icons.map((ico, i) => (
                      <span className="badge" key={i}>{ico}</span>
                    ))}
                  </div>
                </div>
                <div className="tour-card-body">
                  <div className="tour-card-tags">
                    {tour.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <h3 className="tour-card-title">{tour.title}</h3>
                  <p className="tour-card-desc">{tour.desc}</p>
                  <div className="tour-card-meta">
                    <span className="meta-item">
                      <CalendarIcon /> {tour.days} Days
                    </span>
                    <span className="meta-item">
                      <UserIcon /> {tour.persons} Person
                    </span>
                  </div>
                  <div className="tour-card-footer">
                    <div className="price-group">
                      {tour.priceOld ? (
                        <>
                          <span className="price-old">{formatPrice(tour.priceOld)}</span>
                          <span className="price-new">{formatPrice(tour.priceNew)}</span>
                        </>
                      ) : (
                        <span className="price-only">{formatPrice(tour.priceNew)}</span>
                      )}
                    </div>
                    <button className="btn-card-book">BOOK</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {carouselIndex < maxIndex && (
            <button
              className="carousel-arrow right"
              onClick={() => scrollCarousel(1)}
              aria-label="Next tours"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </section>

      {/* ──── STATS ──── */}
      <section
        className="stats-section container"
        id="stats"
        ref={statsRef.ref}
        style={{ opacity: statsRef.isVisible ? 1 : 0, transform: statsRef.isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}
      >
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ──── DESTINATION SPOTLIGHT ──── */}
      <section
        className="destination-section"
        id="destinations"
        ref={destRef.ref}
        style={{ opacity: destRef.isVisible ? 1 : 0, transition: 'opacity 0.9s ease 0.2s' }}
      >
        {/* Full-bleed background image */}
        <div className="destination-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/destination-himachal.svg"
            alt="Trekkers at a Himalayan viewpoint"
          />
        </div>
        <div className="destination-overlay" />

        {/* Content grid over the image */}
        <div className="destination-inner">
          {/* Left: text content */}
          <div className="destination-info">
            <div className="destination-eyebrow">GET TO KNOW</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <MountainSvg className="mountain-icon" />
            </div>
            <h2>The Himachal Circuit</h2>
            <p className="destination-desc">
              Snow-dusted peaks, pine valleys and riverside villages strung along one
              unforgettable road trip — this is Himachal at its most untouched.
            </p>
            <div className="destination-links">
              <a href="#" className="dest-link">attractions <ArrowRight /></a>
              <a href="#" className="dest-link">similar destinations <ArrowRight /></a>
            </div>
            <button className="btn-choose-tour">CHOOSE A TOUR</button>
          </div>

          {/* Right: route map overlay */}
          <div className="destination-map-area">
            <div className="route-points">
              {/* Dotted route line SVG */}
              <svg
                className="route-line"
                width="100%"
                height="100%"
                viewBox="0 0 500 400"
                preserveAspectRatio="xMidYMid meet"
                style={{ position: 'absolute', inset: 0 }}
              >
                <path
                  d="M 100,60 C 150,100 220,80 300,140 C 360,180 280,240 300,300 C 310,340 380,320 420,350"
                  fill="none"
                  stroke="rgba(245,241,232,0.45)"
                  strokeWidth="1.8"
                  strokeDasharray="6,5"
                />
              </svg>
              <div className="route-point" style={{ left: '18%', top: '12%' }}>
                <span className="route-dot" />
                <span className="route-label">Manali</span>
              </div>
              <div className="route-point" style={{ left: '56%', top: '28%' }}>
                <span className="route-dot" />
                <span className="route-label">Sissu</span>
              </div>
              <div className="route-point" style={{ left: '50%', top: '58%' }}>
                <span className="route-dot" />
                <span className="route-label">Kasol</span>
              </div>
              <div className="route-point" style={{ right: '8%', bottom: '8%' }}>
                <span className="route-dot" />
                <span className="route-label">Jibhi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-brand">Magic moment</div>
          <p className="footer-text">
            © {new Date().getFullYear()} Magic Moment. Handpicked Himalayan experiences.
          </p>
        </div>
      </footer>
    </>
  );
}
