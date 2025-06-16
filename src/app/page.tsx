import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Showcase1 from '@/components/Showcase1';
import HeroBanner from '@/components/HeroBanner';
import BrandGrid from '../components/BrandGrid';

export default function Home() {
  return (
    <div>
      <Hero />
      <Showcase />
      <Showcase1/>
      <HeroBanner/>
      <BrandGrid />
    </div>
  );
}
