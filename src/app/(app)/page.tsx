import { AboutSection } from '@sections/AboutSection';
import { CTASection } from '@sections/CTASection';
import { DestinationsSection } from '@sections/DestinationsSection';
import { HeroSection } from '@sections/HeroSection';
import { ReviewsSection } from '@sections/ReviewsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <AboutSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
