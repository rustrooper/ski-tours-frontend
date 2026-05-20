import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';
import { DestinationsSection } from '@/components/sections/DestinationsSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { HeaderSection } from '@/components/sections/HeaderSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main className="flex-1">
        <HeroSection />
        <DestinationsSection />
        <AboutSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
