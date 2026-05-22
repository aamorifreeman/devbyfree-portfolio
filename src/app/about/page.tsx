import type { Metadata } from 'next';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About — Dev By Free',
  description: 'About Aamori Freeman — motion designer and creative technologist.',
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Footer />
    </main>
  );
}
