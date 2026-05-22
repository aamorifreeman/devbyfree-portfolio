import Image from 'next/image';
import Reveal from './Reveal';

const posters = [
  { src: '/media/2.png',                   label: 'Cluttered Creations — Cover I' },
  { src: '/media/3.png',                   label: 'Cluttered Creations — Visual Story' },
  { src: '/media/TasteHoward.png',         label: 'Taste of Howard' },
  { src: '/media/bisonweek_events.png',    label: 'Bison Stream' },
  { src: '/media/anothavers copy.png',     label: 'HUSA — PR Department' },
  { src: '/media/Untitled-4_01.jpg',       label: 'HUS Magazine — Cover I' },
  { src: '/media/Earl_poster_2.jpg',       label: 'Earl Sweatshirt' },
  { src: '/media/BloodOrange Poster.jpg',  label: 'Blood Orange' },
];

const shoots = [
  { src: '/media/DSCF2949.png',  label: 'Sincerely 20 — I' },
  { src: '/media/main.png',      label: 'Sincerely 20 — II' },
  { src: '/media/DSCF2988.png',  label: 'Sincerely 20 — III' },
];

export default function Graphics() {
  return (
    <section id="graphics">
      <div className="section-header">
        <div>
          <div className="section-number t-label">[ 03 ] — Design work</div>
          <Reveal><h2 className="section-title t-display">GRAPHICS</h2></Reveal>
        </div>
      </div>

      <div className="graphics-subhead">Posters + Flyers</div>
      <Reveal>
        <div className="graphics-grid">
          {posters.map(p => (
            <div key={p.src} className="graphic-card">
              <Image src={p.src} alt={p.label} fill style={{ objectFit: 'cover' }} />
              <div className="graphic-card-label"><span>{p.label}</span></div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="shoots-header">Studio Shoots</div>
      <Reveal>
        <div className="shoots-strip">
          {shoots.map(s => (
            <div key={s.src} className="shoot-item">
              <Image src={s.src} alt={s.label} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
