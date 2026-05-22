import Image from 'next/image';
import Reveal from './Reveal';

const posters = [
  { src: '/media/2.png',                        label: 'Cluttered Creations — Cover I' },
  { src: '/media/3.png',                        label: 'Cluttered Creations — Visual Story' },
  { src: '/media/WHITEPARTY.png',               label: 'White Party — Flyer' },
  { src: '/media/ABBY full cover_revised.jpg',  label: 'ABBY — Album Cover' },
  { src: '/media/TasteHoward.png',              label: 'Taste of Howard — Poster' },
  { src: '/media/anothavers copy.png',          label: 'HUSA — PR Department' },
  { src: '/media/Untitled-4_01.jpg',            label: 'HUS Magazine — Cover I' },
  { src: '/media/Donda_Cover.jpg',              label: 'Donda — Cover Art' },
  { src: '/media/bisonweek_events.png',         label: 'Bison Stream' },
  { src: '/media/Halloween_Aamori.jpg',         label: 'Halloween — Flyer' },
  { src: '/media/HW2.jpg',                      label: 'Howard — Flyer' },
  { src: '/media/Aamori_HW6.jpg',               label: 'Howard — Flyer VI' },
  { src: '/media/Giveaway.png',                 label: 'Giveaway — Flyer' },
  { src: '/media/flower123.jpg',                label: 'Flower — Poster' },
  { src: '/media/photowanted.png',              label: 'Photo Wanted — Flyer' },
  { src: '/media/proclothinhdrive.png',         label: 'Pro Clothing — Flyer' },
  { src: '/media/lololol.png',                  label: 'HUSA — Event Flyer' },
  { src: '/media/lord.png',                     label: 'Lord — Flyer' },
  { src: '/media/Earl_poster_2.jpg',            label: 'Earl Sweatshirt' },
  { src: '/media/BloodOrange Poster.jpg',       label: 'Blood Orange' },
  { src: '/media/AAAAA.png',                    label: 'HUSA — Flyer' },
  { src: '/media/yuh.png',                      label: 'Yuh — Flyer' },
  { src: '/media/6.png',                        label: 'Editorial — Graphic' },
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
