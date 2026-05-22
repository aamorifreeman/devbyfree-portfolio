import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Work from '@/components/Work';
import Visuals from '@/components/Visuals';
import Graphics from '@/components/Graphics';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const skills   = ['Motion Design', 'Real-Time Visuals', 'Concert Art', 'Graphic Design', 'Audio Reactive', 'Editorial', 'Creative Technology'];
const identity = ['Howard University', 'Washington D.C.', 'Dev By Free', 'Mori'];

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee items={skills} />
      <About />
      <Marquee items={identity} reverse />
      <Work />
      <Visuals />
      <Graphics />
      <Contact />
      <Footer />
    </main>
  );
}
