import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import WorkPreview from '@/components/WorkPreview';
import Footer from '@/components/Footer';
import { identity, skills } from '@/lib/site';

export default function Home() {
  return (
    <main className="home">
      <Hero showScroll />
      <Marquee items={skills} />
      <About preview />
      <Marquee items={identity} reverse />
      <WorkPreview />
      <Footer />
    </main>
  );
}
