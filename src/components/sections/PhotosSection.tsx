import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const photos = [
  { src: '/placeholder_hero.jpg', title: 'Шерегеш', caption: 'Сибирский паудер' },
  { src: '/placeholder_hero.jpg', title: 'Эльбрус', caption: 'Альпийские маршруты' },
  { src: '/placeholder_hero.jpg', title: 'Архыз', caption: 'Семейный отдых' },
  { src: '/placeholder_hero.jpg', title: 'Красная Поляна', caption: 'Олимпийские склоны' },
  { src: '/placeholder_hero.jpg', title: 'Хибины', caption: 'Северное сияние' },
  { src: '/placeholder_hero.jpg', title: 'Домбай', caption: 'Кавказские пейзажи' },
];

export function PhotosSection() {
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Галерея</h2>
          <p className="text-muted-foreground mt-3 text-base sm:text-lg">
            Несколько кадров с наших последних туров.
          </p>
        </div>

        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.title} className="sm:basis-1/2 lg:basis-1/3">
                <figure className="border-border bg-card overflow-hidden rounded-xl border shadow-sm">
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-4">
                    <h3 className="font-semibold tracking-tight">{photo.title}</h3>
                    <p className="text-muted-foreground text-sm">{photo.caption}</p>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
