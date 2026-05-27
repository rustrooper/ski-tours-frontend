import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const Icon = {
  arrowRight: (p: IconProps) => (
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
  arrowDown: (p: IconProps) => (
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
  arrowUpRight: (p: IconProps) => (
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
  chevL: (p: IconProps) => (
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
  chevR: (p: IconProps) => (
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
  menu: (p: IconProps) => (
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
  close: (p: IconProps) => (
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
  tg: (p: IconProps) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M21.5 4.3 18.4 19.2c-.2 1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.2-8.3c.4-.4-.1-.6-.6-.2L5.8 13l-4.9-1.5c-1-.3-1-1 .2-1.5L20.1 3c.9-.3 1.7.2 1.4 1.3z" />
    </svg>
  ),
  wa: (p: IconProps) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.7 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-2-.1a14 14 0 0 1-7-6.2c-.6-1-1-2-1-2.9 0-.9.4-1.7.9-2 .2-.2.4-.2.6-.2h.5c.2 0 .4 0 .6.4l.8 2c.1.2 0 .4 0 .5l-.4.5-.3.4c-.1.1-.2.3 0 .5a8 8 0 0 0 1.5 1.9c.8.7 1.5 1 1.8 1.1.2.1.4.1.5 0l.6-.8c.2-.2.3-.2.5-.1l1.7.8c.3.2.6.3.6.4.1.1.1.5-.1 1z" />
    </svg>
  ),
  inst: (p: IconProps) => (
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
  vk: (p: IconProps) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M3 6h4l1.5 4.5L10 6h4l-2.5 5.5L15 18h-4l-1.7-3.5L7.5 18H3l3-6L3 6z" />
    </svg>
  ),
  shield: (p: IconProps) => (
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
};
