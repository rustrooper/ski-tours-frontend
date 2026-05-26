'use client';

import { motion } from 'framer-motion';

import { Icon } from '@/components/brand/Icon';
import { Photo } from '@/components/brand/Photo';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger } from '@/components/motion/Stagger';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EASE_OUT_QUINT, viewportOnce } from '@/lib/motion';

type Destination = {
  name: string;
  region: string;
  tag: string;
  src: string;
  alt: string;
  pos: string;
  desc: string;
  stats: string[];
};

const DESTINATIONS: Destination[] = [
  {
    name: 'Шерегеш',
    region: 'Кемеровская область',
    tag: 'Powder · Resort',
    src: '/img/sheregesh.png',
    alt: 'Заснеженные склоны Шерегеша в густом лесу, вид с подъёмника',
    pos: '50% 40%',
    desc: 'Самый снежный и тусовочный курорт России. Гигантский пухляк, длинный сезон, лес для фрирайда.',
    stats: ['Декабрь — Май', 'до 4 м снега', '15 трасс'],
  },
  {
    name: 'Кировск',
    region: 'Хибины, Мурманская обл.',
    tag: 'Freeride · Arctic',
    src: '/img/kirovsk.png',
    alt: 'Хибины в Кировске: открытые фрирайд-склоны под полярным небом',
    pos: '50% 35%',
    desc: 'Бескомпромиссный фрирайд и суровый заполярный драйв. Север, тишина, северное сияние.',
    stats: ['Январь — Июнь', '67° с.ш.', 'хели-ски опция'],
  },
  {
    name: 'Домбай',
    region: 'Кавказ, Карачаево-Черкесия',
    tag: 'Classic · Panorama',
    src: '/img/dombay.png',
    alt: 'Панорама кавказских вершин над Домбаем, снежные трассы на переднем плане',
    pos: '50% 45%',
    desc: 'Кавказская классика с панорамами на 360°. Демократичные цены, тёплый юг и широкие склоны.',
    stats: ['Декабрь — Апрель', '3 200 м', 'панорама 360°'],
  },
];

export function DestinationsSection() {
  return (
    <section id="destinations" className="bg-bg-1 px-5 py-20 md:px-16 md:pt-40 md:pb-35">
      <div className="mx-auto w-full max-w-360">
        <Reveal
          className="reveal-in mb-12 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between md:gap-12"
          y={20}
        >
          <div>
            <div className="section-num mb-4 md:mb-6">02 / Направления</div>
            <h2 className="st-h2 m-0 max-w-220">
              Курорты, которые
              <br />
              мы <em className="text-ice font-medium italic">знаем</em> лично.
            </h2>
          </div>
          <p className="st-lede m-0 max-w-95">
            Каждое направление — наш базовый лагерь. Мы катаемся там сами и знаем, где лежит самый
            мягкий пухляк, а какой подъёмник простоит весь день.
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          childrenDelay={0.09}
          loose
        >
          {DESTINATIONS.map((d, i) => (
            <motion.article
              key={d.name}
              className="dest-card h-110 md:h-145"
              variants={{
                hidden: { opacity: 0, y: 26 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.75, ease: EASE_OUT_QUINT },
                },
              }}
            >
              <DestinationCardInner d={d} i={i} />
            </motion.article>
          ))}
        </Stagger>

        <motion.div
          className="border-hairline-strong mt-8 flex flex-col gap-4 rounded-lg border border-dashed p-7 md:flex-row md:items-center md:justify-between md:px-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE_OUT_QUINT, delay: 0.1 }}
        >
          <div>
            <span className="text-fg-2 font-mono text-[11px] tracking-widest">COMING / 25–26</span>
            <div className="text-fg-0 mt-2.5 flex flex-wrap gap-x-6 gap-y-1 text-[16px]">
              <span>Камчатка</span>
              <span className="text-fg-3">·</span>
              <span>Архыз</span>
              <span className="text-fg-3">·</span>
              <span>Терскол</span>
              <span className="text-fg-3">·</span>
              <span>Красная Поляна</span>
            </div>
          </div>
          <Button variant="link-cool" size="pill" className="self-start px-0 md:self-auto">
            Все направления
            <Icon.arrowUpRight />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function DestinationCardInner({ d, i }: { d: Destination; i: number }) {
  return (
    <>
      <Photo
        src={d.src}
        alt={d.alt}
        objectPosition={d.pos}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="scrim" />
      <div className="body">
        <div className="absolute top-6 right-6 left-6 z-4 flex items-start justify-between">
          <Badge variant="chip">{d.tag}</Badge>
          <span className="text-fg-1 font-mono text-[11px] opacity-70">0{i + 1}</span>
        </div>

        <span className="text-fg-2 font-mono text-[11px] tracking-widest uppercase">
          {d.region}
        </span>
        <h3 className="font-display m-0 mt-2 mb-3.5 text-[42px] leading-[0.95] tracking-[-0.04em] md:text-[56px]">
          {d.name}
        </h3>
        <p className="text-fg-1 m-0 max-w-80 text-[15px] leading-normal">{d.desc}</p>

        <div className="reveal mt-5">
          <div className="mb-5 flex flex-wrap gap-2">
            {d.stats.map((s) => (
              <Badge key={s} variant="chip">
                {s}
              </Badge>
            ))}
          </div>
          <Button variant="ice" size="pill">
            Подробнее
            <Icon.arrowUpRight />
          </Button>
        </div>
      </div>
    </>
  );
}
