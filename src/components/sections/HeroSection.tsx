import Image from 'next/image';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-svh w-full overflow-hidden">
      <Image
        src="/placeholder_hero.jpg"
        alt="Лыжник на склоне в солнечный день"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-5xl font-bold tracking-tight drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
          Ski tours
        </h1>
        <Button asChild size="lg" className="mt-8">
          <a href="#order">Заказать тур</a>
        </Button>
      </div>
    </section>
  );
}
