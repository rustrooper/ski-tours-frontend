import { AboutSection } from './_components/AboutSection';
import { CTASection } from './_components/CTASection';
import { DestinationsSection } from './_components/DestinationsSection';
import { HeroSection } from './_components/HeroSection';
import { ReviewsSection } from './_components/ReviewsSection';

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
