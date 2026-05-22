'use client';

import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Icon } from '@/components/brand/Icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

type Review = {
  name: string;
  initials: string;
  dest: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: 'Александр М.',
    initials: 'АМ',
    dest: 'Шерегеш · Февраль 25',
    text: 'Ребята вписали меня в группу за три дня до вылета — и не подвели ни на секунду. Жильё в 200 метрах от Е, ски-пасс на руках, нашли мне попутчиков моего уровня. На третий день поймали пухляк по пояс. Возвращаюсь.',
  },
  {
    name: 'Дарья К.',
    initials: 'ДК',
    dest: 'Кировск · Январь 25',
    text: 'Ехала на Хибины первый раз и боялась организационных моментов. Sanek закрыли всё: трансфер из Мурманска, тёплая база, гид с локациями, ратрак для туристов. Сияние поймали на четвёртый день. До сих пор отхожу.',
  },
  {
    name: 'Никита В.',
    initials: 'НВ',
    dest: 'Домбай · Март 25',
    text: 'Бюджет был небольшой, но получили максимум. Канатка, склоны, виды — всё, как обещали. Отдельно — местный шашлык и баня после катания. Ребята реально знают курорт изнутри, а не по картинкам с сайта.',
  },
  {
    name: 'Саня К.',
    initials: 'НВ',
    dest: 'Домбай · Март 25',
    text: 'Бюджет был небольшой, но получили максимум. Канатка, склоны, виды — всё, как обещали. Отдельно — местный шашлык и баня после катания. Ребята реально знают курорт изнутри, а не по картинкам с сайта.',
  },
  {
    name: 'Витя Е.',
    initials: 'НВ',
    dest: 'Домбай · Март 25',
    text: 'Бюджет был небольшой, но получили максимум. Канатка, склоны, виды — всё, как обещали. Отдельно — местный шашлык и баня после катания. Ребята реально знают курорт изнутри, а не по картинкам с сайта.',
  },
  {
    name: 'Илья И.',
    initials: 'НВ',
    dest: 'Домбай · Март 25',
    text: 'Бюджет был небольшой, но получили максимум. Канатка, склоны, виды — всё, как обещали. Отдельно — местный шашлык и баня после катания. Ребята реально знают курорт изнутри, а не по картинкам с сайта.',
  },
];

export function ReviewsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [autoplay] = useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  useEffect(() => {
    if (!api) return;

    const sync = () => setCurrent(api.selectedScrollSnap());

    sync();
    api.on('select', sync);
    api.on('reInit', sync);

    return () => {
      api.off('select', sync);
      api.off('reInit', sync);
    };
  }, [api]);

  const total = REVIEWS.length;
  const badge = `${String(current + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  return (
    <section id="reviews" className="bg-bg-1 px-5 py-20 md:px-16 md:py-35">
      <div className="mx-auto w-full max-w-360">
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-num mb-4 block md:mb-6">03 / Отзывы</div>
            <h2 className="st-h2 m-0 max-w-175">
              Что говорят те, кто
              <br />
              уже съездил.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-fg-2 mr-2 font-mono text-[11px] tracking-widest">{badge}</span>
            <Button
              variant="ghost-pill"
              size="icon-pill"
              aria-label="Назад"
              onClick={() => api?.scrollPrev()}
            >
              <Icon.chevL />
            </Button>
            <Button
              variant="ghost-pill"
              size="icon-pill"
              aria-label="Вперёд"
              onClick={() => api?.scrollNext()}
            >
              <Icon.chevR />
            </Button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true, duration: 30 }}
          plugins={[autoplay]}
          className="relative"
        >
          <CarouselContent className="-ml-5">
            {REVIEWS.map((r) => (
              <CarouselItem key={r.name} className="basis-full pl-5 md:basis-1/3">
                <Card className="border-hairline bg-bg-2 min-h-90 gap-6 rounded-lg p-8 ring-0">
                  <CardHeader className="flex flex-row items-center justify-between gap-2 p-0">
                    <span className="font-display text-ice text-[80px] leading-[0.6] font-semibold opacity-40">
                      {'“'}
                    </span>
                    <Badge variant="chip">{r.dest}</Badge>
                  </CardHeader>
                  <CardContent className="text-fg-0 m-0 flex-1 p-0 text-base leading-relaxed">
                    {r.text}
                  </CardContent>
                  <CardFooter className="m-0 flex flex-col gap-3.5 border-0 bg-transparent p-0">
                    <Separator className="bg-hairline" />
                    <div className="flex w-full items-center gap-3.5">
                      <Avatar
                        size="lg"
                        className="bg-linear-to-br from-[oklch(0.36_0.04_230)] to-[oklch(0.24_0.02_230)]"
                      >
                        <AvatarFallback className="font-display text-fg-0 bg-transparent text-base font-semibold">
                          {r.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-fg-0 text-sm font-semibold">{r.name}</div>
                        <div className="text-fg-2 text-[13px]">★★★★★</div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-12 flex justify-center">
          <div className="dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Отзыв ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                onClick={() => api?.scrollTo(i)}
                className={`d ${i === current ? 'on' : ''} cursor-pointer border-0 p-0`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
