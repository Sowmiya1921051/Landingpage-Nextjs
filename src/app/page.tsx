import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Showcase1 from '@/components/Showcase1';
import HeroBanner from '@/components/HeroBanner';
import BrandGrid from '@/components/BrandGrid';
import CardGrid from '@/components/CardGrid';
import StudioHero from '@/components/StudioHero';
import RequestQuoteForm from '@/components/RequestQuoteForm';
import AppPromo from '@/components/AppPromo';
import MotoShowcase from '@/components/MotoShowcase';
import TestimonialSection from '@/components/TestimonialSection';
import CollaborationSection from '@/components/CollaborationSection';

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
      <MotoShowcase />
      <TestimonialSection />
      <CollaborationSection />
    </div>
  );
}
