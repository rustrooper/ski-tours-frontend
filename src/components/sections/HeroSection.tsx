import { Icon } from '@/components/brand/Icon';
import { Photo } from '@/components/brand/Photo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const TRUST = [
  ['12', 'регионов'],
  ['340+', 'райдеров в сезоне'],
  ['4.9', 'средняя оценка'],
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-svh min-h-160 md:h-230">
        <Photo kind="hero" heroLight style={{ position: 'absolute', inset: 0 }} />
        <div
          className="absolute inset-0 z-2"
          style={{
            background:
              'linear-gradient(180deg, oklch(0 0 0 / 0.5) 0%, oklch(0 0 0 / 0.2) 30%, oklch(0 0 0 / 0.1) 55%, oklch(0.13 0.012 240 / 0.85) 100%)',
          }}
        />

        <Badge
          variant="chip"
          className="border-hairline-strong absolute top-28 right-5 z-5 hidden px-3.5 py-2 backdrop-blur-md md:right-16 md:flex"
          style={{ background: 'oklch(0 0 0 / 0.35)' }}
        >
          <span className="live-dot mr-1" /> 4K · LOOP · 00:38
        </Badge>

        <div className="relative z-4 flex h-full flex-col items-start justify-end px-5 pb-20 md:justify-center md:px-16 md:pt-32 md:pb-16">
          <div className="st-eyebrow mb-5 md:mb-7">season 25 / 26 · авторские туры</div>

          <h1 className="st-h1 m-0 max-w-295">
            Туда, где живёт
            <br />
            <span className="text-ice font-medium italic">пухляк.</span>
          </h1>

          <p className="st-lede mt-6 max-w-135 md:mt-8">
            Авторские горнолыжные туры по России от тех, кто сам катается. Логистика, жильё,
            ски-пассы — на нас. Ваше дело — линия и снег.
          </p>

          <div className="mt-7 flex w-full flex-col items-stretch gap-2.5 md:mt-11 md:w-auto md:flex-row md:items-center md:gap-3">
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
          </div>

          <div className="text-fg-2 mt-12 hidden items-center gap-10 text-[13px] md:mt-22 md:flex">
            {TRUST.map(([n, l]) => (
              <div key={l} className="flex items-baseline gap-2.5">
                <span className="font-display text-fg-0 text-[28px]">{n}</span>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-5 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="text-fg-2 font-mono text-[10px] tracking-[0.2em] uppercase">scroll</span>
          <div className="scroll-cue" />
        </div>
      </div>
    </section>
  );
}
