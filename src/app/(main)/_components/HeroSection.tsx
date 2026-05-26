'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

import { Icon } from '@/components/brand/Icon';
import { Video } from '@/components/brand/Video';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EASE_OUT_EXPO, EASE_OUT_QUINT } from '@/lib/motion';

const TRUST = [
  ['12', 'регионов'],
  ['340+', 'райдеров в сезоне'],
  ['4.9', 'средняя оценка'],
] as const;

const formatClock = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

const lineUp: Variants = {
  hidden: { y: '110%' },
  visible: (i: number = 0) => ({
    y: 0,
    transition: { duration: 0.95, ease: EASE_OUT_EXPO, delay: 0.45 + i * 0.18 },
  }),
};

const fadeUp = (delay: number, y = 14): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_QUINT, delay },
  },
});

const barDraw: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.55, ease: EASE_OUT_QUINT, delay: 0.1 },
  },
};

export function HeroSection() {
  const [remaining, setRemaining] = useState(14);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-svh min-h-160 md:min-h-230">
        <Video
          src="/video/heroVideo.mp4"
          srcWebm="/video/heroVideo.webm"
          poster="/img/sheregesh.png"
          heroLight
          preload
          onProgress={({ currentTime, duration }) => {
            if (!duration) return;
            setRemaining(Math.max(0, Math.ceil(duration - currentTime)));
          }}
          style={{ position: 'absolute', inset: 0 }}
        />
        <motion.div
          className="absolute inset-0 z-2"
          style={{
            background:
              'linear-gradient(180deg, oklch(0 0 0 / 0.5) 0%, oklch(0 0 0 / 0.2) 30%, oklch(0 0 0 / 0.1) 55%, oklch(0.13 0.012 240 / 0.85) 100%)',
          }}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
        />

        <motion.div
          className="absolute top-28 right-5 z-5 hidden md:right-16 md:flex"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_QUINT, delay: 1.55 }}
        >
          <Badge
            variant="chip"
            className="border-hairline-strong px-3.5 py-2 backdrop-blur-md"
            style={{ background: 'oklch(0 0 0 / 0.35)' }}
          >
            <span className="live-dot mr-1" /> FHD · LOOP · {formatClock(remaining)}
          </Badge>
        </motion.div>

        <div className="relative z-4 flex h-full flex-col items-start justify-end px-5 pb-20 md:justify-center md:px-16 md:pt-32 md:pb-16">
          <div className="mb-5 inline-flex items-center gap-2.5 md:mb-7">
            <motion.span
              aria-hidden
              initial="hidden"
              animate="visible"
              variants={barDraw}
              style={{
                display: 'inline-block',
                width: 24,
                height: 1,
                background: 'var(--color-ice-2)',
                transformOrigin: 'left center',
              }}
            />
            <motion.span
              className="font-mono uppercase"
              style={{
                fontSize: 11,
                letterSpacing: '0.18em',
                color: 'var(--color-ice-2)',
              }}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT_QUINT, delay: 0.3 }}
            >
              season 25 / 26 · авторские туры
            </motion.span>
          </div>

          <h1 className="st-h1 m-0 max-w-295">
            <span className="line-mask">
              <motion.span
                style={{ display: 'inline-block' }}
                initial="hidden"
                animate="visible"
                variants={lineUp}
                custom={0}
              >
                Туда, где живёт
              </motion.span>
            </span>
            <span className="line-mask">
              <motion.span
                style={{ display: 'inline-block' }}
                initial="hidden"
                animate="visible"
                variants={lineUp}
                custom={1}
              >
                <span className="text-ice ice-glint font-medium italic">пухляк.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="st-lede on-media mt-6 max-w-135 md:mt-8"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.95)}
          >
            Авторские горнолыжные туры по России от тех, кто сам катается. Логистика, жильё,
            ски-пассы — на нас. Ваше дело — линия и снег.
          </motion.p>

          <motion.div
            className="mt-7 flex w-full flex-col items-stretch gap-2.5 md:mt-11 md:w-auto md:flex-row md:items-center md:gap-3"
            initial="hidden"
            animate="visible"
            variants={fadeUp(1.1)}
          >
            <Button asChild variant="ice" size="pill-lg" className="w-full md:w-auto">
              <a href="#cta">
                Подобрать тур
                <Icon.arrowRight />
              </a>
            </Button>
            <Button asChild variant="ghost-pill" size="pill-lg" className="w-full md:w-auto">
              <a href="#destinations">
                Смотреть направления
                <Icon.arrowDown />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="text-fg-2 mt-12 hidden items-center gap-10 text-[13px] md:mt-22 md:flex"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { delayChildren: 1.35, staggerChildren: 0.1 },
              },
            }}
          >
            {TRUST.map(([n, l]) => (
              <motion.div
                key={l}
                className="flex items-baseline gap-2.5"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: EASE_OUT_QUINT },
                  },
                }}
              >
                <span className="font-display text-fg-0 text-[28px]">{n}</span>
                <span>{l}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
