import type { Metadata } from 'next';
import Graphics from '@/components/Graphics';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Graphics — Dev By Free',
  description: 'Posters, flyers, and studio shoot graphics.',
};

export default function GraphicsPage() {
  return (
    <main>
      <Graphics />
      <Footer />
    </main>
  );
}
