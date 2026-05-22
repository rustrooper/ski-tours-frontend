'use client';

import { useEffect, useState } from 'react';
import Fade from 'embla-carousel-fade';

import { Icon } from '@/components/brand/Icon';
import { Photo } from '@/components/brand/Photo';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

const SLIDES = [
  { src: '/img/kirovsk.png', label: "PHOTO · TEAM TRIP — KIROVSK '24" },
  { src: '/img/sheregesh.png', label: "PHOTO · TEAM TRIP — KAMCHATKA '25" },
  { src: '/img/dombay.png', label: "PHOTO · TEAM TRIP — DOMBAY '25" },
  { src: '/img/kirovsk.png', label: "PHOTO · TEAM TRIP — KOLA '24" },
  { src: '/img/sheregesh.png', label: "PHOTO · TEAM TRIP — SHEREGESH '25" },
  { src: '/img/dombay.png', label: "PHOTO · TEAM TRIP — ARKHYZ '25" },
] as const;

const STATS = [
  ['7', 'лет в горах'],
  ['12', 'регионов'],
  ['840', 'дней на склоне'],
] as const;

export function AboutSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const sync = () => {
      setCurrent(api.selectedScrollSnap());
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };

    sync();
    api.on('select', sync);
    api.on('reInit', sync);

    return () => {
      api.off('select', sync);
      api.off('reInit', sync);
    };
  }, [api]);

  const total = SLIDES.length;
  const badge = `${String(current + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  return (
    <section id="about" className="bg-bg-0 px-5 py-20 md:px-16 md:py-35">
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.05fr] md:gap-24">
        <div className="md:sticky md:top-30">
          <div className="section-num mb-4 block md:mb-6">01 / О нас</div>
          <h2 className="st-h2 m-0 mb-8 max-w-135 md:mb-9">
            Россия — рай
            <br />
            для райдера.
          </h2>

          <div className="flex max-w-120 flex-col gap-7">
            <p className="st-body">
              Найти идеальный склон, мягкий пухляк и работающий подъёмник без «сюрпризов» может
              только местный эксперт. Мы стали теми, кто закрыл вопрос «куда поехать» для сотен
              райдеров.
            </p>

            <div>
              <h4 className="st-h4 text-ice m-0 mb-2.5">Мы — не агрегатор.</h4>
              <p className="st-body">
                Мы команда фанатов, которые живут горами. Лично объездили все популярные и дикие
                курорты от Кольского до Камчатки. Отбираем только лучшее: трассы, жильё в шаговой
                доступности от подъёмника, никакого скрытого подвоха.
              </p>
            </div>

            <div>
              <h4 className="st-h4 m-0 mb-2.5">Философия — просто катайся.</h4>
              <p className="st-body">
                Всю логистику — трансферы, проживание, ски-пассы, и даже компанию для катания — мы
                берём на себя.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-3">
              <Button variant="ghost-pill" size="pill">
                Познакомиться с командой
                <Icon.arrowRight />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Carousel
            className="relative"
            setApi={setApi}
            opts={{ align: 'start', duration: 30 }}
            plugins={[Fade()]}
          >
            <CarouselContent className="ml-0">
              {SLIDES.map((s, i) => (
                <CarouselItem
                  key={`slide-${i}`}
                  className="relative aspect-4/5 overflow-hidden rounded-lg pl-0"
                >
                  <figure className="absolute inset-0 m-0">
                    <Photo src={s.src} alt={s.label} style={{ position: 'absolute', inset: 0 }} />
                    <figcaption className="photo-label">{s.label}</figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute right-6 bottom-6 z-4 flex gap-2">
              <Button
                variant="ghost-pill"
                size="icon-pill"
                aria-label="Назад"
                onClick={() => api?.scrollPrev()}
                disabled={!canPrev}
              >
                <Icon.chevL />
              </Button>
              <Button
                variant="ghost-pill"
                size="icon-pill"
                aria-label="Вперёд"
                onClick={() => api?.scrollNext()}
                disabled={!canNext}
              >
                <Icon.chevR />
              </Button>
            </div>
            <div className="border-hairline bg-overlay-soft text-fg-0 absolute top-6 left-6 z-4 rounded-full border px-3 py-1.5 font-mono text-[12px] tracking-[0.08em]">
              {badge}
            </div>
          </Carousel>

          <div className="mt-3 grid grid-cols-6 gap-2">
            {SLIDES.map((s, i) => {
              const active = i === current;
              return (
                <button
                  key={`thumb-${i}`}
                  type="button"
                  aria-label={`Слайд ${i + 1}`}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => api?.scrollTo(i)}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-sm border-0 bg-transparent p-0 transition-opacity"
                  style={{
                    outline: active
                      ? '2px solid var(--color-ice)'
                      : '1px solid var(--color-hairline)',
                    outlineOffset: active ? -2 : -1,
                    opacity: active ? 1 : 0.55,
                  }}
                >
                  <Photo src={s.src} alt="" style={{ position: 'absolute', inset: 0 }} />
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-3">
            <Separator className="bg-hairline col-span-3" />
            {STATS.map(([n, l], i) => (
              <div
                key={l}
                className="py-6"
                style={{
                  borderLeft: i > 0 ? '1px solid var(--color-hairline)' : 'none',
                  paddingLeft: i > 0 ? 24 : 0,
                }}
              >
                <div className="font-display text-fg-0 text-[44px] tracking-[-0.04em]">{n}</div>
                <div className="text-fg-2 mt-1 text-[13px]">{l}</div>
              </div>
            ))}
            <Separator className="bg-hairline col-span-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
