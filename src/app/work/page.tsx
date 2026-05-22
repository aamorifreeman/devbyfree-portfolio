import type { Metadata } from 'next';
import Work from '@/components/Work';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Work — Dev By Free',
  description: 'Selected projects — motion design, visuals, and creative technology.',
};

export default function WorkPage() {
  return (
    <main>
      <Work />
      <Footer />
    </main>
  );
}
