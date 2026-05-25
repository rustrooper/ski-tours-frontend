'use client';

import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  srcWebm?: string;
  poster: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  heroLight?: boolean;
  objectPosition?: string;
  sizes?: string;
  preload?: boolean;
  children?: ReactNode;
};

export function Video({
  src,
  srcWebm,
  poster,
  alt = '',
  className = '',
  style,
  heroLight = false,
  objectPosition = 'center',
  sizes = '100vw',
  preload = false,
  children,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      const v = videoRef.current;
      if (!v) return;
      if (mq.matches) v.pause();
      else void v.play().catch(() => {});
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <div className={`photo ${className}`} style={style}>
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        style={{ objectFit: 'cover', objectPosition, zIndex: 0 }}
      />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition,
          zIndex: 0,
        }}
      >
        {srcWebm && <source src={srcWebm} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
      {heroLight && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            background:
              'radial-gradient(70% 60% at 30% 30%, oklch(0.78 0.06 215 / 0.22), transparent 60%)',
          }}
        />
      )}
      <div className="grain" />
      <div className="vignette" />
      {children}
    </div>
  );
}
