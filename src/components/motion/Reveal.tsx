'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

import { EASE_OUT_QUINT, dur, viewportOnce, viewportOnceLoose } from '@/lib/motion';

type RevealProps = Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'whileInView'> & {
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  loose?: boolean;
  as?: 'div' | 'section' | 'article' | 'header' | 'p' | 'h2' | 'h3' | 'span';
};

export function Reveal({
  delay = 0,
  y = 16,
  duration = dur.reveal,
  once = true,
  loose = false,
  children,
  ...rest
}: RevealProps) {
  void once;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={loose ? viewportOnceLoose : viewportOnce}
      transition={{ duration, ease: EASE_OUT_QUINT, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
