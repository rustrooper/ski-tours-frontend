import type { CSSProperties, ReactNode } from 'react';

type RidgeKind = 'sheregesh' | 'hibiny' | 'dombay' | 'hero' | 'cta' | 'about1' | 'about2';

type Ridge = { d: string; fill: string; o: number };

const RIDGES: Record<RidgeKind, Ridge[]> = {
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

type Props = {
  kind?: RidgeKind;
  src?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
  heroLight?: boolean;
  objectPosition?: string;
  children?: ReactNode;
};

export function Photo({
  kind = 'hero',
  src,
  label,
  className = '',
  style,
  heroLight = false,
  objectPosition = 'center',
  children,
}: Props) {
  const ridges = RIDGES[kind] ?? RIDGES.hero;
  return (
    <div className={`photo ${className}`} style={style}>
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
        // eslint-disable-next-line @next/next/no-img-element
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
          <svg
            key={i}
            className="ridge"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              left: '-5%',
              right: '-5%',
              bottom: 0,
              width: '110%',
              height: `${100 - i * 8}%`,
            }}
          >
            <polygon points={r.d} fill={r.fill} opacity={r.o} />
          </svg>
        ))
      )}
      <div className="grain" />
      <div className="vignette" />
      {label && <div className="photo-label">{label}</div>}
      {children}
    </div>
  );
}

export type { RidgeKind };
