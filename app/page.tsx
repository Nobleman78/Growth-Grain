
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Solutions from '../components/sections/Solutions';
import Innovation from '../components/sections/Innovation';
import Benefits from '../components/sections/Benefits';
import Cta from '../components/sections/Cta';
import Faq from '../components/sections/Faq';
import Marquee from '@/components/ui/Marquee';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* <Navbar /> */}
      <Hero />
      <Stats />
      <Solutions />
      <Innovation />
      <Benefits />
      <Marquee/> 
      <Cta />
      <Faq />
      {/* <Footer /> */}
    </div>
  );
}
