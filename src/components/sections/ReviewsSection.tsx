import { Icon } from '@/components/brand/Icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
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
];

export function ReviewsSection() {
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
            <span className="text-fg-2 mr-2 font-mono text-[11px] tracking-widest">01 / 12</span>
            <Button variant="ghost-pill" size="icon-pill" aria-label="Назад">
              <Icon.chevL />
            </Button>
            <Button variant="ghost-pill" size="icon-pill" aria-label="Вперёд">
              <Icon.chevR />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <Card
              key={r.name}
              className="border-hairline bg-bg-2 min-h-90 gap-6 rounded-lg p-8 ring-0"
            >
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
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="dots">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`d ${i === 0 ? 'on' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
