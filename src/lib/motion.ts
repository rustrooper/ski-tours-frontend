import type { Variants } from 'framer-motion';

export const EASE_OUT_QUINT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

export const dur = {
  micro: 0.18,
  state: 0.28,
  reveal: 0.7,
  hero: 0.95,
};

export const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.reveal, ease: EASE_OUT_QUINT },
  },
};

export const revealLong: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.hero, ease: EASE_OUT_EXPO },
  },
};

export const bar: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.55, ease: EASE_OUT_QUINT },
  },
};

export const stagger = (childrenDelay = 0.08, startDelay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: startDelay,
      staggerChildren: childrenDelay,
    },
  },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: dur.reveal, ease: EASE_OUT_QUART },
  },
};

export const viewportOnce = { once: true, amount: 0.35 } as const;
export const viewportOnceLoose = { once: true, amount: 0.15 } as const;
