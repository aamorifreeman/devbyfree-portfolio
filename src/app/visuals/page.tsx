import type { Metadata } from 'next';
import Visuals from '@/components/Visuals';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Visuals — Dev By Free',
  description: 'Motion visuals, experiments, and real-time work.',
};

export default function VisualsPage() {
  return (
    <main>
      <Visuals />
      <Footer />
    </main>
  );
}
