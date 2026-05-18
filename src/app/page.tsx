import { HeaderSection } from '@/components/sections/HeaderSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PhotosSection } from '@/components/sections/PhotosSection';
import { ToursSection } from '@/components/sections/ToursSection';

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main className="flex-1">
        <HeroSection />
        <PhotosSection />
        <ToursSection />
      </main>
    </>
  );
}
