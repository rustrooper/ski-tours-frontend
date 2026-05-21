import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';

type Props = {
  src: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
  heroLight?: boolean;
  objectPosition?: string;
  sizes?: string;
  preload?: boolean;
  children?: ReactNode;
};

export function Photo({
  src,
  label,
  className = '',
  style,
  heroLight = false,
  objectPosition = 'center',
  sizes = '100vw',
  preload = false,
  children,
}: Props) {
  return (
    <figure className={`photo ${className}`} style={style}>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        preload={preload}
        style={{ objectFit: 'cover', objectPosition, zIndex: 0 }}
      />
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
      {label && <figcaption className="photo-label">{label}</figcaption>}
      {children}
    </figure>
  );
}
