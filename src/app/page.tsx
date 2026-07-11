"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { tours, formatPrice } from "@/data/tours";
import { TourIcon, MapPinIcon, ClockIcon, FlameIcon } from "@/components/TourIcons";

/* ─────────────── DATA ─────────────── */
const stats = [
  { number: "18,50,000+", label: "Kilometres Trekked" },
  { number: "5,000+", label: "Happy Travelers" },
  { number: "320+", label: "Five-Star Reviews" },
  { number: "8", label: "Years on the Trail" },
];

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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}


function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
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

/* ─────────────── FAQS ─────────────── */
const faqs = [
  {
    question: "How do I book a tour?",
    answer: "You can book directly by clicking the 'Book Now' button on any tour card, which will connect you to our team via WhatsApp for a personalized booking experience.",
  },
  {
    question: "What is the best time to visit Himachal?",
    answer: "The best time to visit is from March to June for pleasant weather, or September to November for clear skies and autumn colors. Winter (Dec-Feb) is perfect for snow lovers.",
  },
  {
    question: "Are your treks suitable for beginners?",
    answer: "Yes! We offer a range of treks from Easy to Challenging. We recommend starting with an 'Easy' trek like the Jibhi or Sissu getaways if you are a beginner.",
  },
  {
    question: "What is included in the tour price?",
    answer: "Our prices typically include accommodation, local transport, guided treks, and breakfast. Detailed inclusions will be shared with you during the booking process.",
  }
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section container" id="faq">
      <div className="section-header" style={{ marginBottom: "24px" }}>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
            <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {faq.question}
              <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ─────────────── WHY US SECTION ─────────────── */
function WhyUsSection() {
  return (
    <section className="why-us-section container" id="why-us">
      <div className="section-header why-us-header">
        <span className="why-us-eyebrow">THE MAGIC MOMENT DIFFERENCE</span>
        <h2>Why Travel With Us</h2>
      </div>
      <div className="why-us-grid">
        <div className="why-us-card">
          <div className="why-us-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h3>SEBI-Insured Travel</h3>
          <p>Your peace of mind is guaranteed with our fully insured group travel packages.</p>
        </div>
        <div className="why-us-card">
          <div className="why-us-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          </div>
          <h3>Certified Local Guides</h3>
          <p>Explore hidden trails safely with our expert, certified local mountain guides.</p>
        </div>
        <div className="why-us-card">
          <div className="why-us-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3>Small Batch Sizes</h3>
          <p>We cap our groups at 12 people to ensure a personal, uncrowded experience.</p>
        </div>
        <div className="why-us-card">
          <div className="why-us-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <h3>100% Customizable</h3>
          <p>Want to change the itinerary? We tailor your trip exactly to your preferences.</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── NEWSLETTER POPUP ─────────────── */
function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds if not already shown in this session (using sessionStorage for demo)
    const hasSeenPopup = sessionStorage.getItem("hasSeenNewsletter");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenNewsletter", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        closePopup();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="newsletter-overlay">
      <div className="newsletter-modal">
        <button className="btn-close-modal" onClick={closePopup}>✕</button>
        {submitted ? (
          <div className="newsletter-success">
            <h3>Awesome!</h3>
            <p>Your free 2026 Himachal Trek Calendar is on its way to your inbox.</p>
          </div>
        ) : (
          <div className="newsletter-content">
            <span className="newsletter-badge">FREE GUIDE</span>
            <h2>Get our Free Himachal Trek Calendar 2026</h2>
            <p>Plan your year of adventure. Discover the best times to visit every valley and peak.</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-subscribe">SEND IT TO ME</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  const router = useRouter();
  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxIndex = tours.length - 3;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const calendarRef = useRef<HTMLDivElement>(null);

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    if (searchDate) params.set("date", searchDate);
    router.push(`/tours${params.toString() ? "?" + params.toString() : ""}`);
  };

  /* Contact form state */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    message: "",
  });
  const [formSending, setFormSending] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSending(true);

    // Build a personalized WhatsApp message
    const whatsappNumber = "919991835906";
    const greeting = `Hi Magic Moment!`;
    const intro = `I'm *${formData.name}* and I'd love to plan a trip with you!`;
    const details = [
      formData.email ? `Email: ${formData.email}` : "",
      formData.phone ? `Phone: ${formData.phone}` : "",
      formData.destination ? `Interested in: *${formData.destination}*` : "",
      formData.travelers ? `Travelers: ${formData.travelers}` : "",
    ].filter(Boolean).join("\n");
    const msg = formData.message ? `\nMessage:\n${formData.message}` : "";
    const closing = `\nLooking forward to hearing from you!`;

    const fullMessage = `${greeting}\n\n${intro}\n\n${details}${msg}\n${closing}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setFormSending(false);
    }, 1500);
  };

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
  const contactRef = useInView();

  return (
    <>
      <NewsletterPopup />
      {/* ──── HEADER ──── */}
      <header className="header" id="header">
        <div className="header-inner">
          <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Image src="/PHOTO.png" alt="Magic Moment Logo" width={50} height={60} style={{ objectFit: 'contain' }} />
            Magic moment
          </a>
          <nav className="nav-links">
            <a href="/tours">Tours</a>
            <a href="#destinations">Destinations</a>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-right">
            <a href="https://wa.me/919991835906" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
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
        <form
          className="search-bar"
          onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
        >
          <SearchIcon />
          <input
            className="search-input"
            type="text"
            placeholder="Enter tour name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-divider" />
          <div className="search-date" ref={calendarRef} style={{ position: "relative", display: "flex", alignItems: "center", gap: "8px" }}>
            <CalendarIcon />
            <button
              type="button"
              className="search-date-input"
              onClick={() => setCalendarOpen(!calendarOpen)}
              aria-label="Select date"
            >
              {searchDate
                ? new Date(searchDate + "T00:00:00").toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
                : "Select date"}
            </button>
            {calendarOpen && (() => {
              const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
              const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
              const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
              const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
              const today = new Date();
              const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
              const days: (number | null)[] = [];
              for (let i = 0; i < firstDay; i++) days.push(null);
              for (let i = 1; i <= daysInMonth; i++) days.push(i);

              const prevMonth = () => {
                if (calendarMonth === 0) { setCalendarMonth(11); setCalendarYear(calendarYear - 1); }
                else setCalendarMonth(calendarMonth - 1);
              };
              const nextMonth = () => {
                if (calendarMonth === 11) { setCalendarMonth(0); setCalendarYear(calendarYear + 1); }
                else setCalendarMonth(calendarMonth + 1);
              };
              const selectDay = (day: number) => {
                const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                setSearchDate(dateStr);
                setCalendarOpen(false);
              };

              return (
                <div className="custom-calendar">
                  <div className="cal-header">
                    <button type="button" className="cal-nav" onClick={prevMonth} aria-label="Previous month">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    <span className="cal-title">{monthNames[calendarMonth]} {calendarYear}</span>
                    <button type="button" className="cal-nav" onClick={nextMonth} aria-label="Next month">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                  </div>
                  <div className="cal-days-header">
                    {dayNames.map((d) => <span key={d} className="cal-day-name">{d}</span>)}
                  </div>
                  <div className="cal-grid">
                    {days.map((day, i) => {
                      if (day === null) return <span key={`e-${i}`} className="cal-empty" />;
                      const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                      const isSelected = dateStr === searchDate;
                      const isToday = dateStr === todayStr;
                      return (
                        <button
                          key={day}
                          type="button"
                          className={`cal-day${isSelected ? " cal-selected" : ""}${isToday ? " cal-today" : ""}`}
                          onClick={() => selectDay(day)}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                  <div className="cal-footer">
                    <button type="button" className="cal-footer-btn" onClick={() => { setSearchDate(""); setCalendarOpen(false); }}>Clear</button>
                    <button type="button" className="cal-footer-btn" onClick={() => { setSearchDate(todayStr); setCalendarMonth(today.getMonth()); setCalendarYear(today.getFullYear()); setCalendarOpen(false); }}>Today</button>
                  </div>
                </div>
              );
            })()}
          </div>
          <button type="submit" className="search-btn">SEARCH TOURS</button>
        </form>
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
          <a href="/tours" className="all-tours-link">
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
                    {tour.iconKeys.map((key, i) => (
                      <span className="badge badge-icon" key={i}><TourIcon name={key} size={14} /></span>
                    ))}
                  </div>
                  <div className="tours-page-card-difficulty">
                    <span className={`difficulty-tag ${tour.difficulty.toLowerCase()}`}>
                      {tour.difficulty}
                    </span>
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
                    <a href={`/tours/${tour.slug}`} className="btn-card-book">VIEW DETAILS</a>
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

      {/* ──── WHY US ──── */}
      <WhyUsSection />

      {/* ──── ABOUT US ──── */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            {/* Left: Story */}
            <div className="about-text">
              <span className="about-eyebrow">ABOUT US</span>
              <h2 className="about-title">We Don&apos;t Just Plan Trips.<br />We Craft Memories.</h2>
              <p className="about-desc">
                Born out of a love for the mountains and a passion for authentic travel, <strong>Magic Moment</strong> started
                as a small group of friends who believed the best journeys aren&apos;t found in brochures — they&apos;re felt
                in shared laughter around a campfire, in the silence of a snow-capped summit at dawn, and in the warmth of
                a village homestay.
              </p>
              <p className="about-desc">
                Based in the heart of Himachal Pradesh, we handpick every trail, every stay, and every experience so you
                can travel without the stress. Whether it&apos;s a solo trek through Spiti or a family holiday in Kerala,
                our team of local experts and seasoned guides make sure every moment is — well — <em>magical</em>.
              </p>
              <div className="about-values">
                <div className="about-value-item">
                  <span className="about-value-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </span>
                  <div>
                    <strong>Locally Rooted</strong>
                    <span>Guides who grew up in these mountains</span>
                  </div>
                </div>
                <div className="about-value-item">
                  <span className="about-value-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  </span>
                  <div>
                    <strong>Handcrafted Trips</strong>
                    <span>Every itinerary tailored to you</span>
                  </div>
                </div>
                <div className="about-value-item">
                  <span className="about-value-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </span>
                  <div>
                    <strong>Small Groups</strong>
                    <span>Intimate trips, never overcrowded</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Highlights */}
            <div className="about-highlights">
              <div className="about-features-grid">
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </span>
                  <strong>Himachal Based</strong>
                  <span>Operating from the heart of the Himalayas</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <strong>9 Destinations</strong>
                  <span>Across India &amp; Nepal</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </span>
                  <strong>End-to-End</strong>
                  <span>We handle everything, you just show up</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <strong>Always Reachable</strong>
                  <span>WhatsApp support before, during &amp; after</span>
                </div>
              </div>
              <div className="about-quote-card">
                <svg className="about-quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>
                <p>&ldquo;They didn&apos;t just show us the mountains — they made us feel at home in them. Best travel decision we ever made.&rdquo;</p>
                <span className="about-quote-author">— Priya &amp; Rahul, Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ──── FAQ ──── */}
      <FaqAccordion />


      {/* ──── CONTACT SECTION ──── */}
      <section
        className="contact-section"
        id="contact"
        ref={contactRef.ref}
        style={{
          opacity: contactRef.isVisible ? 1 : 0,
          transform: contactRef.isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div className="contact-inner container">
          {/* Section Header */}
          <div className="contact-header">
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h2 className="contact-title">Let&apos;s Plan Your Adventure</h2>
            <p className="contact-subtitle">
              Have a question or ready to book your dream Himalayan getaway?
              Fill in the form and we&apos;ll get back to you via WhatsApp instantly.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left: Contact Form */}
            <div className="contact-form-card">
              <form onSubmit={handleFormSubmit} className="contact-form" id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone *</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-travelers">No. of Travelers</label>
                    <input
                      type="number"
                      id="contact-travelers"
                      name="travelers"
                      placeholder="e.g. 4"
                      min="1"
                      value={formData.travelers}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-destination">Preferred Destination</label>
                  <select
                    id="contact-destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleFormChange}
                  >
                    <option value="">Select a destination</option>
                    <option value="Himachal Pradesh">Himachal Pradesh — Mountain Odyssey</option>
                    <option value="Rajasthan">Rajasthan — Royal Heritage Trail</option>
                    <option value="Kerala">Kerala — God&apos;s Own Country</option>
                    <option value="Nepal">Nepal — Himalayan Adventure</option>
                    <option value="Jammu & Kashmir">Jammu &amp; Kashmir — Paradise on Earth</option>
                    <option value="Uttarakhand">Uttarakhand — Devbhoomi Trail</option>
                    <option value="Uttar Pradesh">Uttar Pradesh — Heritage Trail</option>
                    <option value="Sikkim">Sikkim — Mountain Kingdom</option>
                    <option value="Meghalaya">Meghalaya — Abode of Clouds</option>
                    <option value="Custom">Custom / Not Sure Yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your dream trip — dates, preferences, anything!"
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                  />
                </div>
                <button
                  type="submit"
                  className={`btn-submit-contact${formSending ? " sending" : ""}`}
                  disabled={formSending}
                  id="contact-submit"
                >
                  {formSending ? (
                    <>Sending via WhatsApp…</>
                  ) : (
                    <>
                      <WhatsAppIcon /> Send via WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="contact-info-side">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <PhoneIcon />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:+919991835906" style={{color: 'inherit', textDecoration: 'none'}}>+91 99918 35906</a></p>
                  <p className="contact-info-sub">Mon — Sat, 9 AM – 7 PM</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MailIcon />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:work.yourmagicmoments@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>work.yourmagicmoments@gmail.com</a></p>
                  <p className="contact-info-sub">We reply within 24 hours</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Manali, Himachal Pradesh</p>
                  <p className="contact-info-sub">India — 175131</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <ClockIcon size={20} />
                </div>
                <div>
                  <h4>Office Hours</h4>
                  <p>Mon – Sat: 9 AM – 7 PM</p>
                  <p className="contact-info-sub">Sunday: Closed</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="contact-socials">
                <p className="socials-label">Follow Us</p>
                <div className="socials-row">
                  <a href="https://www.instagram.com/yourmagicmoments.in?igsh=MW9haGNhbTgxZzYzbg==" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram" id="social-instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.facebook.com/share/1GaMBtuTa5/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook" id="social-facebook">
                    <FacebookIcon />
                  </a>
                  <a href="https://wa.me/919991835906" target="_blank" rel="noopener noreferrer" className="social-icon-link whatsapp" aria-label="WhatsApp" id="social-whatsapp">
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
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
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Image src="/PHOTO.png" alt="Magic Moment Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
                Magic moment
              </div>
              <p className="footer-tagline">
                Handpicked Himalayan treks & getaways. Making every moment magical since 2018.
              </p>
              <div className="footer-socials">
                <a href="https://www.instagram.com/yourmagicmoments.in?igsh=MW9haGNhbTgxZzYzbg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                <a href="https://www.facebook.com/share/1GaMBtuTa5/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
                <a href="https://wa.me/919991835906" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <a href="#tours">Tours</a>
              <a href="#destinations">Destinations</a>
              <a href="#contact">Contact Us</a>
              <a href="#about">About Us</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Top Destinations</h4>
              <a href="#">Manali</a>
              <a href="#">Kasol</a>
              <a href="#">Rishikesh</a>
              <a href="#">Valley of Flowers</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Contact</h4>
              <a href="tel:+919991835906">+91 99918 35906</a>
              <a href="mailto:work.yourmagicmoments@gmail.com">work.yourmagicmoments@gmail.com</a>
              <a href="#">Manali, Himachal Pradesh</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-text">
              © {new Date().getFullYear()} Magic Moment. All rights reserved. Handpicked Himalayan experiences.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
