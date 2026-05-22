import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';

type Props = {
  preview?: boolean;
};

export default function About({ preview = false }: Props) {
  return (
    <section id="about" className={preview ? 'about-preview' : undefined}>
      <div className="about-grid">
        <Reveal>
          <div className="about-stacked-text">
            <div className="about-word-stack">
              <span>ABOUT</span>
              <span>ABOUT</span>
              <span>ABOUT</span>
              <span>ABOUT</span>
            </div>
          </div>
        </Reveal>

        <div className="about-photo-col">
          <Reveal delay={0.1}>
            <div className="about-photo-wrap">
              <Image
                src="/media/DSCF2949.png"
                alt="Aamori Freeman"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="about-content">
              <div className="about-label">About me</div>
              <div className="about-name-large">Aamori Freeman</div>
              <p className="about-bio">
                Motion designer and creative technologist whose work merges graphic design,
                real-time visuals, and experimental animation. She creates polished, high-impact
                visuals that sit at the intersection of art, technology, and culture — from
                concert-style loops and immersive backgrounds to interactive media and editorial design.
              </p>
              <div className="about-tags">
                {['After Effects', 'TouchDesigner', 'Photoshop', 'Premiere Pro', 'Illustrator', 'Real-Time Visuals'].map(t => (
                  <span key={t} className="about-tag">{t}</span>
                ))}
              </div>
              {preview && (
                <Link href="/about" className="section-cta-link">More about →</Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
