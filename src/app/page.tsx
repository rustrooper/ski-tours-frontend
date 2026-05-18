import { SiteGallery } from '@/components/site/site-gallery';
import { SiteHeader } from '@/components/site/site-header';
import { SiteHero } from '@/components/site/site-hero';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <SiteHero />
        <SiteGallery />
      </main>
    </>
  );
}
