// Shared primitives for Sanek Tours landing — placeholders, icons, ridges
// Loaded before desktop.jsx / mobile.jsx / system.jsx

// ── Mountain ridge placeholder ──────────────────────────────────────────────
// Layered triangle silhouettes over a graded sky. Variants give every photo
// its own composition so cards don't feel cloned.
function Ridge({ d, fill, opacity = 1, style }) {
  return (
    <svg
      className="ridge"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      style={{ width: '110%', ...style }}
    >
      <polygon points={d} fill={fill} opacity={opacity} />
    </svg>
  );
}

// d-strings for ridge layers, back to front
const RIDGES = {
  sheregesh: [
    {
      d: '0,400 0,210 140,140 240,200 360,110 480,170 600,90 720,160 840,120 960,180 1080,140 1200,200 1200,400',
      fill: 'oklch(0.32 0.020 230)',
      o: 0.85,
    },
    {
      d: '0,400 0,260 100,220 220,260 340,200 460,250 580,190 700,240 820,210 940,250 1080,220 1200,260 1200,400',
      fill: 'oklch(0.22 0.014 230)',
      o: 0.95,
    },
    {
      d: '0,400 0,320 160,290 280,320 400,280 540,310 680,275 820,310 960,290 1100,320 1200,300 1200,400',
      fill: 'oklch(0.14 0.010 240)',
      o: 1,
    },
  ],
  hibiny: [
    {
      d: '0,400 0,180 100,210 200,150 320,200 440,130 580,180 720,120 860,170 1000,140 1120,180 1200,160 1200,400',
      fill: 'oklch(0.30 0.018 230)',
      o: 0.85,
    },
    {
      d: '0,400 0,250 120,230 260,260 380,220 520,250 660,225 800,255 940,230 1080,260 1200,240 1200,400',
      fill: 'oklch(0.20 0.012 230)',
      o: 0.95,
    },
    {
      d: '0,400 0,330 140,310 280,330 420,300 580,325 720,305 860,330 1000,310 1140,325 1200,315 1200,400',
      fill: 'oklch(0.12 0.008 240)',
      o: 1,
    },
  ],
  dombay: [
    {
      d: '0,400 0,230 90,160 180,220 280,100 380,180 480,80 600,160 720,70 840,150 960,90 1080,170 1200,130 1200,400',
      fill: 'oklch(0.34 0.024 235)',
      o: 0.85,
    },
    {
      d: '0,400 0,280 130,240 260,280 380,230 520,270 660,230 800,265 940,240 1080,270 1200,250 1200,400',
      fill: 'oklch(0.21 0.014 235)',
      o: 0.95,
    },
    {
      d: '0,400 0,340 180,320 320,340 480,310 640,335 800,315 960,335 1120,320 1200,330 1200,400',
      fill: 'oklch(0.13 0.010 240)',
      o: 1,
    },
  ],
  hero: [
    {
      d: '0,400 0,150 90,180 180,80 280,160 380,40 480,140 580,50 700,140 820,60 940,140 1060,80 1200,130 1200,400',
      fill: 'oklch(0.34 0.024 220)',
      o: 0.7,
    },
    {
      d: '0,400 0,220 100,200 220,240 340,180 460,230 580,170 720,220 840,190 960,235 1080,200 1200,225 1200,400',
      fill: 'oklch(0.22 0.018 225)',
      o: 0.9,
    },
    {
      d: '0,400 0,310 140,290 280,315 420,280 580,305 720,285 860,310 1000,290 1140,310 1200,300 1200,400',
      fill: 'oklch(0.14 0.012 240)',
      o: 1,
    },
  ],
  cta: [
    {
      d: '0,400 0,110 110,160 220,70 340,150 460,40 580,130 700,30 820,140 940,50 1060,150 1200,90 1200,400',
      fill: 'oklch(0.30 0.022 220)',
      o: 0.7,
    },
    {
      d: '0,400 0,200 120,170 240,210 360,150 500,200 640,140 780,200 920,160 1060,210 1200,180 1200,400',
      fill: 'oklch(0.20 0.016 225)',
      o: 0.9,
    },
    {
      d: '0,400 0,290 160,265 320,295 480,260 640,285 800,265 960,290 1120,270 1200,285 1200,400',
      fill: 'oklch(0.12 0.009 240)',
      o: 1,
    },
  ],
  about1: [
    {
      d: '0,400 0,200 110,150 230,220 340,160 470,210 600,130 720,200 840,150 960,200 1080,170 1200,210 1200,400',
      fill: 'oklch(0.30 0.020 230)',
      o: 0.85,
    },
    {
      d: '0,400 0,280 140,250 280,290 420,240 560,275 700,250 840,285 980,260 1120,290 1200,270 1200,400',
      fill: 'oklch(0.18 0.012 240)',
      o: 1,
    },
  ],
  about2: [
    {
      d: '0,400 0,180 100,210 220,140 340,200 460,100 580,170 700,80 820,180 940,110 1060,200 1200,150 1200,400',
      fill: 'oklch(0.34 0.024 225)',
      o: 0.85,
    },
    {
      d: '0,400 0,260 140,230 280,265 420,220 560,260 700,225 840,265 980,240 1120,265 1200,250 1200,400',
      fill: 'oklch(0.16 0.011 240)',
      o: 1,
    },
  ],
};

function Photo({
  kind = 'hero',
  src,
  label,
  children,
  style,
  className = '',
  heroLight = false,
  objectPosition = 'center',
}) {
  const ridges = RIDGES[kind] || RIDGES.hero;
  return (
    <div className={`photo ${className}`} style={style}>
      {/* sky tint accent for hero */}
      {heroLight && !src && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            background:
              'radial-gradient(70% 60% at 30% 30%, oklch(0.78 0.06 215 / 0.22), transparent 60%)',
          }}
        />
      )}
      {src ? (
        <img
          src={src}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition,
            zIndex: 0,
          }}
        />
      ) : (
        ridges.map((r, i) => (
          <Ridge
            key={i}
            d={r.d}
            fill={r.fill}
            opacity={r.o}
            style={{
              position: 'absolute',
              left: '-5%',
              right: '-5%',
              bottom: 0,
              height: `${100 - i * 8}%`,
            }}
          />
        ))
      )}
      <div className="grain" />
      <div className="vignette" />
      {label && <div className="label">{label}</div>}
      {children}
    </div>
  );
}

// ── Logo mark ──────────────────────────────────────────────────────────────
function LogoMark({ size = 18, color = 'var(--fg-0)', accent = 'var(--ice)' }) {
  return (
    <span className="logo-mark" style={{ fontSize: size, color }}>
      <svg width={size + 4} height={size + 2} viewBox="0 0 24 22" fill="none">
        <path
          d="M2 20 L9 6 L13 14 L16 10 L22 20 Z"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="9" cy="6" r="1.3" fill={accent} />
      </svg>
      <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 0 }}>
        <span style={{ fontWeight: 600 }}>sanek</span>
        <span style={{ fontWeight: 300, opacity: 0.7, marginLeft: 4 }}>tours</span>
      </span>
    </span>
  );
}

// ── Icons (stroke, 24×24) ──────────────────────────────────────────────────
const Icon = {
  arrowRight: (p) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowDown: (p) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  ),
  arrowUpRight: (p) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
  chevL: (p) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M15 6l-6 6 6 6" />
    </svg>
  ),
  chevR: (p) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  ),
  play: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  menu: (p) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      {...p}
    >
      <path d="M4 8h16M4 16h16" />
    </svg>
  ),
  close: (p) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      {...p}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  tg: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M21.5 4.3 18.4 19.2c-.2 1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.2-8.3c.4-.4-.1-.6-.6-.2L5.8 13l-4.9-1.5c-1-.3-1-1 .2-1.5L20.1 3c.9-.3 1.7.2 1.4 1.3z" />
    </svg>
  ),
  wa: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.7 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-2-.1a14 14 0 0 1-7-6.2c-.6-1-1-2-1-2.9 0-.9.4-1.7.9-2 .2-.2.4-.2.6-.2h.5c.2 0 .4 0 .6.4l.8 2c.1.2 0 .4 0 .5l-.4.5-.3.4c-.1.1-.2.3 0 .5a8 8 0 0 0 1.5 1.9c.8.7 1.5 1 1.8 1.1.2.1.4.1.5 0l.6-.8c.2-.2.3-.2.5-.1l1.7.8c.3.2.6.3.6.4.1.1.1.5-.1 1z" />
    </svg>
  ),
  inst: (p) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  ),
  vk: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M3 6h4l1.5 4.5L10 6h4l-2.5 5.5L15 18h-4l-1.7-3.5L7.5 18H3l3-6L3 6z" />
    </svg>
  ),
  shield: (p) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />
    </svg>
  ),
  snowflake: (p) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      {...p}
    >
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />
    </svg>
  ),
};

// Export to window for other babel scripts
Object.assign(window, { Photo, Ridge, LogoMark, Icon, RIDGES });
