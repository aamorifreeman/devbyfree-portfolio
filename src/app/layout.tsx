import type { Metadata } from 'next';
import { Anton, IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Cursor from '@/components/Cursor';

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' });
const mono  = IBM_Plex_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Developed By Free — Aamori Freeman',
  description: 'Motion designer and creative technologist. Real-time visuals, concert art, graphic design, and editorial media.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${mono.variable} ${inter.variable}`}>
      <body>
        <div className="grain" />
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
