import type { RidgeKind } from '@/components/brand/Photo';
import { Icon } from '@/components/brand/Icon';
import { Photo } from '@/components/brand/Photo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Destination = {
  kind: RidgeKind;
  name: string;
  region: string;
  tag: string;
  src: string;
  pos: string;
  desc: string;
  stats: string[];
};

const DESTINATIONS: Destination[] = [
  {
    kind: 'sheregesh',
    name: 'Шерегеш',
    region: 'Кемеровская область',
    tag: 'Powder · Resort',
    src: '/img/sheregesh.png',
    pos: '50% 40%',
    desc: 'Самый снежный и тусовочный курорт России. Гигантский пухляк, длинный сезон, лес для фрирайда.',
    stats: ['Декабрь — Май', 'до 4 м снега', '15 трасс'],
  },
  {
    kind: 'hibiny',
    name: 'Кировск',
    region: 'Хибины, Мурманская обл.',
    tag: 'Freeride · Arctic',
    src: '/img/kirovsk.png',
    pos: '50% 35%',
    desc: 'Бескомпромиссный фрирайд и суровый заполярный драйв. Север, тишина, северное сияние.',
    stats: ['Январь — Июнь', '67° с.ш.', 'хели-ски опция'],
  },
  {
    kind: 'dombay',
    name: 'Домбай',
    region: 'Кавказ, Карачаево-Черкесия',
    tag: 'Classic · Panorama',
    src: '/img/dombay.png',
    pos: '50% 45%',
    desc: 'Кавказская классика с панорамами на 360°. Демократичные цены, тёплый юг и широкие склоны.',
    stats: ['Декабрь — Апрель', '3 200 м', 'панорама 360°'],
  },
];

export function DestinationsSection() {
  return (
    <section id="destinations" className="bg-bg-1 px-5 py-20 md:px-16 md:pt-40 md:pb-35">
      <div className="mx-auto w-full max-w-360">
        <div className="mb-12 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between md:gap-12">
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
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <article key={d.name} className="dest-card h-110 md:h-145">
              <Photo
                kind={d.kind}
                src={d.src}
                objectPosition={d.pos}
                style={{ position: 'absolute', inset: 0 }}
              />
              <div className="scrim" />
              <div className="body">
                <div className="absolute top-6 right-6 left-6 z-4 flex items-start justify-between">
                  <Badge variant="chip">{d.tag}</Badge>
                  <span className="text-fg-1 font-mono text-[11px] opacity-70">0{i + 1}</span>
                </div>

                <span className="text-fg-2 font-mono text-[11px] tracking-[0.1em] uppercase">
                  {d.region}
                </span>
                <h3 className="font-display m-0 mt-2 mb-3.5 text-[42px] leading-[0.95] tracking-[-0.04em] md:text-[56px]">
                  {d.name}
                </h3>
                <p className="text-fg-1 m-0 max-w-80 text-[15px] leading-[1.5]">{d.desc}</p>

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
            </article>
          ))}
        </div>

        <div className="border-hairline-strong mt-8 flex flex-col gap-4 rounded-[20px] border border-dashed p-7 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <span className="text-fg-2 font-mono text-[11px] tracking-[0.1em]">COMING / 25–26</span>
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
        </div>
      </div>
    </section>
  );
}
