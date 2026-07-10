"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { tours } from "@/data/tours";
import { tourDetails } from "@/data/tourDetails";
import { TourIcon, MapPinIcon } from "@/components/TourIcons";

/* ─── SVG Icons ─── */
function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function MountainIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function TourDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const tour = tours.find((t) => t.slug === slug);
  const detail = tourDetails[slug];

  if (!tour || !detail) {
    return (
      <div className="tour-detail-not-found">
        <h1>Tour not found</h1>
        <p>Sorry, we could not find the tour you are looking for.</p>
        <a href="/tours" className="btn-back-tours">Browse all tours</a>
      </div>
    );
  }

  const g = detail.gallery; // shorthand

  return (
    <>
      {/* ── HEADER ── */}
      <header className="header tours-header" id="header">
        <div className="header-inner">
          <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Image src="/PHOTO.png" alt="Magic Moment Logo" width={50} height={60} style={{ objectFit: 'contain' }} />
            Magic moment
          </a>
          <nav className="nav-links">
            <a href="/tours">Tours</a>
            <a href="/#destinations">Destinations</a>
            <a href="/#about">About Us</a>
            <a href="/#blog">Blog</a>
            <a href="/#contact">Contact</a>
          </nav>
          <div className="nav-right">
            <a href="https://wa.me/919991835906" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href="/#contact" className="btn-book-now">Book Now</a>
          </div>
        </div>
      </header>

      {/* ── BREADCRUMB ── */}
      <div className="container td-breadcrumb">
        <a href="/">Home</a>
        <span className="td-breadcrumb-sep">/</span>
        <a href="/tours">Tours</a>
        <span className="td-breadcrumb-sep">/</span>
        <span>{tour.title}</span>
      </div>

      {/* ── MAIN CONTENT ── */}
      <main className="container td-main">
        <div className="td-content">

          {/* ── Title Block ── */}
          <div className="td-title-block">
            <div className="td-tags">
              {tour.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <h1 className="td-title">{tour.title}</h1>
            <div className="td-meta-row">
              <span className="td-meta-item"><MapPinIcon size={16} /> {tour.destination}, {tour.state}</span>
              <span className="td-meta-item"><CalendarIcon /> {tour.days} Days</span>
              <span className="td-meta-item"><UserIcon /> {tour.persons}+ Person</span>
              <span className={`difficulty-tag ${tour.difficulty.toLowerCase()}`}>{tour.difficulty}</span>
            </div>
          </div>

          {/* ── Image 1: beside overview ── */}
          <section className="td-section td-split">
            <div className="td-split-text">
              <h2 className="td-section-title">Overview</h2>
              <p className="td-long-desc">{detail.longDesc}</p>
            </div>
            <div className="td-split-image">
              <Image
                src={g[0]}
                alt={`${tour.title} — overview`}
                width={520}
                height={360}
                style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "12px" }}
              />
            </div>
          </section>

          {/* ── Highlights with Image 2 ── */}
          <section className="td-section td-split reverse">
            <div className="td-split-image">
              <Image
                src={g[1]}
                alt={`${tour.title} — highlight`}
                width={520}
                height={360}
                style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "12px" }}
              />
            </div>
            <div className="td-split-text">
              <h2 className="td-section-title">Highlights</h2>
              <ul className="td-highlights">
                {detail.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="td-highlight-icon"><CheckIcon /></span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Image 3: full-width break before itinerary ── */}
          <div className="td-full-image">
            <Image
              src={g[2]}
              alt={`${tour.title} — landscape`}
              width={1100}
              height={400}
              style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "12px" }}
            />
          </div>

          {/* ── Itinerary ── */}
          <section className="td-section">
            <h2 className="td-section-title">Day-by-Day Itinerary</h2>
            <div className="td-itinerary">
              {detail.itinerary.map((item) => (
                <div className="td-itin-item" key={item.day}>
                  <div className="td-itin-day">
                    <span className="td-itin-day-num">Day {item.day}</span>
                  </div>
                  <div className="td-itin-body">
                    <h3 className="td-itin-title">{item.title}</h3>
                    <p className="td-itin-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Image 4: beside inclusions ── */}
          <section className="td-section td-split">
            <div className="td-split-text">
              <div className="td-inc-exc-stack">
                <div className="td-inc-box">
                  <h3 className="td-inc-title">Inclusions</h3>
                  <ul className="td-inc-list">
                    {detail.inclusions.map((item, i) => (
                      <li key={i}><span className="td-check"><CheckIcon /></span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="td-exc-box">
                  <h3 className="td-exc-title">Exclusions</h3>
                  <ul className="td-exc-list">
                    {detail.exclusions.map((item, i) => (
                      <li key={i}><span className="td-x"><XIcon /></span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="td-split-image">
              <Image
                src={g[3]}
                alt={`${tour.title} — experience`}
                width={520}
                height={480}
                style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "12px" }}
              />
            </div>
          </section>

        </div>

        {/* ── SIDEBAR ── */}
        <aside className="td-sidebar">
          <div className="td-sidebar-card">
            <h3 className="td-sidebar-title">Quick Info</h3>
            <div className="td-sidebar-info">
              <div className="td-info-row">
                <span className="td-info-icon"><CalendarIcon /></span>
                <div>
                  <span className="td-info-label">Duration</span>
                  <span className="td-info-value">{tour.days} Days</span>
                </div>
              </div>
              <div className="td-info-row">
                <span className="td-info-icon"><SunIcon /></span>
                <div>
                  <span className="td-info-label">Best Time</span>
                  <span className="td-info-value">{detail.bestTime}</span>
                </div>
              </div>
              {detail.altitude && (
                <div className="td-info-row">
                  <span className="td-info-icon"><MountainIcon /></span>
                  <div>
                    <span className="td-info-label">Altitude</span>
                    <span className="td-info-value">{detail.altitude}</span>
                  </div>
                </div>
              )}
              <div className="td-info-row">
                <span className="td-info-icon"><UsersIcon /></span>
                <div>
                  <span className="td-info-label">Group Size</span>
                  <span className="td-info-value">{detail.groupSize}</span>
                </div>
              </div>
              <div className="td-info-row">
                <span className="td-info-icon"><MapPinIcon size={16} /></span>
                <div>
                  <span className="td-info-label">Destination</span>
                  <span className="td-info-value">{tour.destination}</span>
                </div>
              </div>
            </div>
            <a href="/#contact" className="td-btn-book">Book This Tour</a>
          </div>

          {/* Icon Badges */}
          <div className="td-sidebar-badges">
            {tour.iconKeys.map((key, i) => (
              <span className="td-badge" key={i}>
                <TourIcon name={key} size={20} />
              </span>
            ))}
          </div>
        </aside>
      </main>

      {/* ── CTA ── */}
      <section className="td-cta">
        <div className="container td-cta-inner">
          <h2>Ready for this adventure?</h2>
          <p>Get in touch and we will craft the perfect itinerary for your group.</p>
          <a href="/#contact" className="td-cta-btn">Plan My Trip</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; 2026 Magic Moment. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
