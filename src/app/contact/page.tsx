import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact — Dev By Free',
  description: 'Get in touch with Aamori Freeman.',
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <Footer />
    </main>
  );
}
