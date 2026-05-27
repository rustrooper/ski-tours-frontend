type Props = {
  size?: number;
  color?: string;
  accent?: string;
};

export function LogoMark({
  size = 18,
  color = 'var(--color-fg-0)',
  accent = 'var(--color-ice)',
}: Props) {
  return (
    <span className="logo-mark" style={{ fontSize: size, color }}>
      <svg width={size + 4} height={size + 2} viewBox="0 0 24 22" fill="none" aria-hidden>
        <path
          d="M2 20 L9 6 L13 14 L16 10 L22 20 Z"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="9" cy="6" r="1.3" fill={accent} />
      </svg>
      <span className="inline-flex items-baseline">
        <span className="font-semibold">sanek</span>
        <span className="ml-1 font-light opacity-70">tours</span>
      </span>
    </span>
  );
}
