/* Elegant inline SVG icon library — replace emojis site-wide */

const paths: Record<string, string> = {
  mountain:
    "M13 2L3 17h6l1-3h4l1 3h6L13 2zM10.5 13L13 6.5l2.5 6.5h-5z M2 20h20",
  stars:
    "M12 2l1.09 3.35L16.44 6l-2.68 2.11L14.47 12 12 9.78 9.53 12l.71-3.89L7.56 6l3.35-.65L12 2z M19 9l.54 1.66L21.2 11l-1.33 1.05L20.22 14 19 12.89 17.78 14l.35-1.95L16.8 11l1.66-.34L19 9z M5 15l.54 1.66L7.2 17l-1.33 1.05L6.22 20 5 18.89 3.78 20l.35-1.95L2.8 17l1.66-.34L5 15z",
  sun:
    "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42",
  tent:
    "M12 2L2 22h20L12 2z M12 2v20 M7.5 12l4.5 10 4.5-10",
  castle:
    "M3 21h18 M4 21V11l4-4 4 4 4-4 4 4v10 M9 21v-4h6v4 M3 7h2v2H3z M19 7h2v2h-2z M11 7h2v2h-2z",
  anchor:
    "M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M12 8v14 M5 12H2a10 10 0 0 0 20 0h-3",
  palmtree:
    "M13 8c0-2.76-2.46-5-5.5-5C5.73 3 4 4.9 4 6.83 4 8.76 5.73 11 7.5 11H13z M13 8c0-2.76 2.46-5 5.5-5C20.27 3 22 4.9 22 6.83 22 8.76 20.27 11 18.5 11H13z M13 8v14 M9 19c-1 1.5-3 2-5 2 M17 19c1 1.5 3 2 5 2",
  leaf:
    "M11 20A7 7 0 0 0 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-3.8 10-10 10z M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
  binoculars:
    "M4 8V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4 M16 8V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4 M4 8a4 4 0 0 0-2 3.46V16a4 4 0 0 0 8 0v-4.54A4 4 0 0 0 4 8z M20 8a4 4 0 0 0-6 3.46V16a4 4 0 0 0 8 0v-4.54A4 4 0 0 0 20 8z M8 14h8",
  flag:
    "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7",
  temple:
    "M12 2L2 8h20L12 2z M6 8v8 M10 8v8 M14 8v8 M18 8v8 M2 16h20 M4 22h16 M2 22h20",
  wind:
    "M9.59 4.59A2 2 0 1 1 11 8H2 M12.59 19.41A2 2 0 1 0 14 16H2 M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2",
  flower:
    "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M4.93 19.07l1.41-1.41 M17.66 6.34l1.41-1.41",
  snowflake:
    "M12 2v20 M4.93 7l14.14 10 M19.07 7L4.93 17 M2 12h20 M7 2.6l5 4.3 5-4.3 M7 21.4l5-4.3 5 4.3 M2.6 7l4.3 5-4.3 5 M21.4 7l-4.3 5 4.3 5",
  flame:
    "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14 0-5.5 2-7 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.5-2.3 1.5-3.5l2 2z",
  droplets:
    "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z",
  waves:
    "M2 6c.6.5 1.2 1 2.5 1C6 7 7 5 8.5 5c1.5 0 2.1 1.5 3.5 2 1.3.5 2.5-1 4-1s2.5 1.5 3.5 1.5 1.9-.5 2.5-1 M2 12c.6.5 1.2 1 2.5 1 1.5 0 2.5-2 4-2s2.1 1.5 3.5 2c1.3.5 2.5-1 4-1s2.5 1.5 3.5 1.5 1.9-.5 2.5-1 M2 18c.6.5 1.2 1 2.5 1 1.5 0 2.5-2 4-2s2.1 1.5 3.5 2c1.3.5 2.5-1 4-1s2.5 1.5 3.5 1.5 1.9-.5 2.5-1",
  music:
    "M9 18V5l12-2v13 M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  sunrise:
    "M17 18a5 5 0 0 0-10 0 M12 2v7 M4.22 10.22l1.42 1.42 M1 18h2 M21 18h2 M18.36 11.64l1.42-1.42 M23 22H1 M8 6l4-4 4 4",
  mapPin:
    "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  clock:
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2",
  trending:
    "M23 6l-9.5 9.5-5-5L1 18",
};

export function TourIcon({ name, size = 16, className = "" }: { name: string; size?: number; className?: string }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {d.split(" M").map((seg, i) => (
        <path key={i} d={i === 0 ? seg : `M${seg}`} />
      ))}
    </svg>
  );
}

/* Convenience icons for urgency, location, etc. */
export function MapPinIcon({ size = 14 }: { size?: number }) {
  return <TourIcon name="mapPin" size={size} />;
}

export function ClockIcon({ size = 14 }: { size?: number }) {
  return <TourIcon name="clock" size={size} />;
}

export function TrendingIcon({ size = 14 }: { size?: number }) {
  return <TourIcon name="trending" size={size} />;
}

export function FlameIcon({ size = 14 }: { size?: number }) {
  return <TourIcon name="flame" size={size} />;
}

export function MountainEmptyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
      <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
    </svg>
  );
}
