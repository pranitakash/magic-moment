"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { tours, formatPrice, allDestinations, allStates, allDifficulties, allTags } from "@/data/tours";
import type { Tour } from "@/data/tours";
import { TourIcon, MapPinIcon, ClockIcon, FlameIcon, MountainEmptyIcon } from "@/components/TourIcons";

/* ─────────── SVG ICONS ─────────── */
function SearchIcon() {
  return (
    <svg className="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
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

/* ─────────── SORT OPTIONS ─────────── */
type SortKey = "default" | "price-low" | "price-high" | "duration-short" | "duration-long";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "default", label: "Featured" },
  { value: "price-low", label: "Price: Low → High" },
  { value: "price-high", label: "Price: High → Low" },
  { value: "duration-short", label: "Duration: Short" },
  { value: "duration-long", label: "Duration: Long" },
];

/* ─────────── TOURS PAGE CONTENT ─────────── */
function ToursPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 90000]);
  const [durationRange, setDurationRange] = useState<[number, number]>([1, 15]);
  const [sortBy, setSortBy] = useState<SortKey>("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [compareList, setCompareList] = useState<Tour[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Sync search query with URL
  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const toggleFilter = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const activeFilterCount =
    selectedStates.length +
    selectedDestinations.length +
    selectedDifficulties.length +
    selectedTags.length +
    (priceRange[0] > 0 || priceRange[1] < 90000 ? 1 : 0) +
    (durationRange[0] > 1 || durationRange[1] < 15 ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedStates([]);
    setSelectedDestinations([]);
    setSelectedDifficulties([]);
    setSelectedTags([]);
    setPriceRange([0, 90000]);
    setDurationRange([1, 15]);
    setSearchQuery("");
    setSortBy("default");
  };

  const handleCompareToggle = (tour: Tour) => {
    setCompareList((prev) => {
      const exists = prev.find((t) => t.id === tour.id);
      if (exists) return prev.filter((t) => t.id !== tour.id);
      if (prev.length >= 2) {
        // Replace the oldest selection if trying to select a 3rd
        return [prev[1], tour];
      }
      return [...prev, tour];
    });
  };

  /* ─── Filter + Sort logic ─── */
  const filteredTours = useMemo(() => {
    let result = [...tours];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.desc.toLowerCase().includes(q) ||
          t.destination.toLowerCase().includes(q) ||
          t.state.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // State filter
    if (selectedStates.length > 0) {
      result = result.filter((t) => selectedStates.includes(t.state));
    }

    // Destination filter
    if (selectedDestinations.length > 0) {
      result = result.filter((t) => selectedDestinations.includes(t.destination));
    }

    // Difficulty filter
    if (selectedDifficulties.length > 0) {
      result = result.filter((t) => selectedDifficulties.includes(t.difficulty));
    }

    // Tags filter
    if (selectedTags.length > 0) {
      result = result.filter((t) => t.tags.some((tag) => selectedTags.includes(tag)));
    }

    // Price filter
    result = result.filter((t) => t.priceNew >= priceRange[0] && t.priceNew <= priceRange[1]);

    // Duration filter
    result = result.filter((t) => t.days >= durationRange[0] && t.days <= durationRange[1]);

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.priceNew - b.priceNew);
        break;
      case "price-high":
        result.sort((a, b) => b.priceNew - a.priceNew);
        break;
      case "duration-short":
        result.sort((a, b) => a.days - b.days);
        break;
      case "duration-long":
        result.sort((a, b) => b.days - a.days);
        break;
    }

    return result;
  }, [searchQuery, selectedStates, selectedDestinations, selectedDifficulties, selectedTags, priceRange, durationRange, sortBy]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    router.push(`/tours${params.toString() ? "?" + params.toString() : ""}`);
  };

  /* ─── Filter Sidebar Component ─── */
  const FilterSidebar = () => (
    <aside className={`tours-sidebar${showMobileFilters ? " open" : ""}`}>
      <div className="sidebar-header">
        <h3>Filters</h3>
        <div className="sidebar-header-actions">
          {activeFilterCount > 0 && (
            <button className="btn-clear-filters" onClick={clearAllFilters}>
              Clear all
            </button>
          )}
          <button className="btn-close-filters" onClick={() => setShowMobileFilters(false)}>
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Search in filters */}
      <div className="filter-group">
        <label className="filter-label">Search</label>
        <form onSubmit={handleSearchSubmit}>
          <div className="filter-search">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search tours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      {/* State / Region */}
      <div className="filter-group">
        <label className="filter-label">State / Region</label>
        <div className="filter-chips">
          {allStates.map((state) => (
            <button
              key={state}
              className={`filter-chip${selectedStates.includes(state) ? " active" : ""}`}
              onClick={() => toggleFilter(selectedStates, setSelectedStates, state)}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* Destination */}
      <div className="filter-group">
        <label className="filter-label">Destination</label>
        <div className="filter-chips">
          {allDestinations.map((dest) => (
            <button
              key={dest}
              className={`filter-chip${selectedDestinations.includes(dest) ? " active" : ""}`}
              onClick={() => toggleFilter(selectedDestinations, setSelectedDestinations, dest)}
            >
              {dest}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div className="filter-group">
        <label className="filter-label">Difficulty</label>
        <div className="filter-chips">
          {allDifficulties.map((d) => (
            <button
              key={d}
              className={`filter-chip${selectedDifficulties.includes(d) ? " active" : ""}`}
              onClick={() => toggleFilter(selectedDifficulties, setSelectedDifficulties, d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Duration Range */}
      <div className="filter-group">
        <label className="filter-label">
          Duration
          <span className="filter-value">{durationRange[0]} — {durationRange[1]} days</span>
        </label>
        <div className="range-inputs">
          <input
            type="range"
            min={1}
            max={15}
            step={1}
            value={durationRange[0]}
            onChange={(e) => setDurationRange([Math.min(Number(e.target.value), durationRange[1] - 1), durationRange[1]])}
          />
          <input
            type="range"
            min={1}
            max={15}
            step={1}
            value={durationRange[1]}
            onChange={(e) => setDurationRange([durationRange[0], Math.max(Number(e.target.value), durationRange[0] + 1)])}
          />
        </div>
      </div>

      {/* Activity Tags */}
      <div className="filter-group">
        <label className="filter-label">Activities</label>
        <div className="filter-chips">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-chip small${selectedTags.includes(tag) ? " active" : ""}`}
              onClick={() => toggleFilter(selectedTags, setSelectedTags, tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* ──── HEADER ──── */}
      <header className="header tours-header" id="header">
        <div className="header-inner">
          <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/PHOTO.png" alt="Magic Moment Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
            Magic moment
          </a>
          <nav className="nav-links">
            <a href="/tours" className="active">Tours</a>
            <a href="/#destinations">Destinations</a>
            <a href="/#about">About Us</a>
            <a href="/#blog">Blog</a>
            <a href="/#contact">Contact</a>
          </nav>
          <div className="nav-right">
            <button className="btn-whatsapp" aria-label="WhatsApp">
              <WhatsAppIcon />
            </button>
            <a href="/#contact" className="btn-book-now">Book Now</a>
          </div>
        </div>
      </header>

      {/* ──── PAGE HERO ──── */}
      <section className="tours-hero">
        <div className="tours-hero-bg" />
        <div className="tours-hero-content container">
          <span className="tours-hero-eyebrow">EXPLORE ALL</span>
          <h1 className="tours-hero-title">
            {searchQuery ? `Results for "${searchQuery}"` : "Our Tours & Treks"}
          </h1>
          <p className="tours-hero-sub">
            Handpicked experiences across India & Nepal — from serene backwaters to high-altitude adventures.
          </p>
        </div>
      </section>

      {/* ──── TOOLBAR ──── */}
      <div className="tours-toolbar container">
        <div className="toolbar-left">
          <button
            className="btn-mobile-filter"
            onClick={() => setShowMobileFilters(true)}
          >
            <FilterIcon />
            Filters
            {activeFilterCount > 0 && (
              <span className="filter-badge">{activeFilterCount}</span>
            )}
          </button>
          <span className="tours-count">
            {filteredTours.length} {filteredTours.length === 1 ? "tour" : "tours"} found
          </span>
        </div>
        <div className="toolbar-right">
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="view-toggle">
            <button
              className={`view-btn${viewMode === "grid" ? " active" : ""}`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <GridIcon />
            </button>
            <button
              className={`view-btn${viewMode === "list" ? " active" : ""}`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <ListIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ──── MAIN CONTENT ──── */}
      <main className="tours-main container">
        <FilterSidebar />

        {/* Overlay for mobile */}
        {showMobileFilters && (
          <div className="sidebar-overlay" onClick={() => setShowMobileFilters(false)} />
        )}

        <section className="tours-content">
          {filteredTours.length === 0 ? (
            <div className="tours-empty">
              <div className="tours-empty-icon"><MountainEmptyIcon /></div>
              <h3>No tours found</h3>
              <p>Try adjusting your filters or search for something different.</p>
              <button className="btn-clear-all" onClick={clearAllFilters}>
                Clear all filters
              </button>
            </div>
          ) : (
            <div className={`tours-grid ${viewMode}`}>
              {filteredTours.map((tour) => (
                <TourCard 
                  key={tour.id} 
                  tour={tour} 
                  viewMode={viewMode} 
                  onCompareToggle={handleCompareToggle}
                  compareList={compareList}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* ──── COMPARISON WIDGETS ──── */}
      {compareList.length > 0 && (
        <div className="comparison-bar">
          <div className="container comparison-bar-inner">
            <div className="compare-info">
              <span className="compare-count">{compareList.length} tour{compareList.length > 1 ? 's' : ''} selected</span>
              {compareList.length === 1 && <span className="compare-hint">Select 1 more to compare</span>}
            </div>
            <div className="compare-actions">
              <button className="btn-clear-compare" onClick={() => setCompareList([])}>Clear</button>
              <button 
                className="btn-compare-now" 
                disabled={compareList.length < 2} 
                onClick={() => setShowCompareModal(true)}
              >
                Compare Tours
              </button>
            </div>
          </div>
        </div>
      )}

      {showCompareModal && compareList.length === 2 && (
        <div className="comparison-overlay">
          <div className="comparison-modal">
            <button className="btn-close-modal" onClick={() => setShowCompareModal(false)}>✕</button>
            <h2 className="comparison-title">Compare Tours</h2>
            <div className="comparison-grid">
              <div className="compare-col feature-labels">
                <div className="compare-cell compare-header"></div>
                <div className="compare-cell">Duration</div>
                <div className="compare-cell">Difficulty</div>
                <div className="compare-cell">Price</div>
                <div className="compare-cell">Highlights</div>
              </div>
              {compareList.map((t) => (
                <div className="compare-col" key={t.id}>
                  <div className="compare-cell compare-header">
                    <Image src={t.image} alt={t.title} width={150} height={100} style={{ objectFit: "cover", borderRadius: "8px" }} />
                    <h3 className="compare-tour-title">{t.title}</h3>
                  </div>
                  <div className="compare-cell"><strong>{t.days}</strong> Days</div>
                  <div className="compare-cell"><span className={`difficulty-tag ${t.difficulty.toLowerCase()}`}>{t.difficulty}</span></div>
                  <div className="compare-cell price-cell">{formatPrice(t.priceNew)}</div>
                  <div className="compare-cell highlights-cell">
                    {t.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ──── FOOTER ──── */}
      <footer className="footer">
        <div className="container">
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

/* ─────────── TOUR CARD ─────────── */
function TourCard({ tour, viewMode, onCompareToggle, compareList }: { tour: Tour; viewMode: string; onCompareToggle: (tour: Tour) => void; compareList: Tour[] }) {
  return (
    <article className={`tours-page-card ${viewMode}`} id={`tour-${tour.slug}`}>
      <div className="tours-page-card-image">
        <Image
          src={tour.image}
          alt={tour.title}
          width={500}
          height={300}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div className="tours-page-card-badges">
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
      <div className="tours-page-card-body">
        <div className="tours-page-card-tags">
          {tour.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <h3 className="tours-page-card-title">{tour.title}</h3>
        <p className="tours-page-card-desc">{tour.desc}</p>
        <div className="tours-page-card-meta">
          <span className="meta-item">
            <CalendarIcon /> {tour.days} Days
          </span>
          <span className="meta-item">
            <UserIcon /> {tour.persons} Person
          </span>
          <span className="meta-item destination-meta">
            <MapPinIcon /> {tour.destination}
          </span>
        </div>
        <div className="tours-page-card-footer">
          <span className="tour-state-label">{tour.state}</span>
          <a href={`/tours/${tour.slug}`} className="btn-card-book">VIEW DETAILS</a>
        </div>
      </div>
    </article>
  );
}

/* ─────────── PAGE WRAPPER (Suspense for searchParams) ─────────── */
export default function ToursPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#8A8A8A' }}>Loading tours…</p>
      </div>
    }>
      <ToursPageContent />
    </Suspense>
  );
}
