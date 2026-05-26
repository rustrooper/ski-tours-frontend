'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

import { EASE_OUT_QUINT, dur, stagger, viewportOnce, viewportOnceLoose } from '@/lib/motion';

type StaggerProps = Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'whileInView'> & {
  childrenDelay?: number;
  startDelay?: number;
  loose?: boolean;
};

export function Stagger({
  childrenDelay = 0.08,
  startDelay = 0,
  loose = false,
  children,
  ...rest
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={loose ? viewportOnceLoose : viewportOnce}
      variants={stagger(childrenDelay, startDelay)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'variants'> & {
  y?: number;
  duration?: number;
};

export function StaggerItem({
  y = 18,
  duration = dur.reveal,
  children,
  ...rest
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: EASE_OUT_QUINT },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
