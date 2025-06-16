import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Showcase1 from '@/components/Showcase1';
import HeroBanner from '@/components/HeroBanner';
import BrandGrid from '@/components/BrandGrid';
import CardGrid from '@/components/CardGrid';
import StudioHero from '@/components/StudioHero';
import RequestQuoteForm from '@/components/RequestQuoteForm';
import AppPromo from '@/components/AppPromo';

export default function Home() {
  return (
    <div>
      <Hero />
      <Showcase />
      <Showcase1/>
      <HeroBanner/>
      <BrandGrid />
      <CardGrid />
      <StudioHero />
      <RequestQuoteForm />
      <AppPromo />
    </div>
  );
}
