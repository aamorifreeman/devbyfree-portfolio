import Image from 'next/image';
import Reveal from './Reveal';

const posters = [
  { src: '/media/WHITEPARTY.png',               label: 'White Party — Flyer' },
  { src: '/media/ABBY full cover_revised.jpg',  label: 'ABBY — Album Cover' },
  { src: '/media/Donda_Cover.jpg',              label: 'Donda — Cover Art' },
  { src: '/media/Halloween_Aamori.jpg',         label: 'Halloween — Flyer' },
  { src: '/media/HW2.jpg',                      label: 'Howard — Flyer' },
  { src: '/media/Aamori_HW6.jpg',               label: 'Howard — Flyer VI' },
  { src: '/media/Giveaway.png',                 label: 'Giveaway — Flyer' },
  { src: '/media/flower123.jpg',                label: 'Flower — Poster' },
  { src: '/media/photowanted.png',              label: 'Photo Wanted — Flyer' },
  { src: '/media/proclothinhdrive.png',         label: 'Pro Clothing — Flyer' },
  { src: '/media/lololol.png',                  label: 'HUSA — Event Flyer' },
  { src: '/media/lord.png',                     label: 'Lord — Flyer' },
  { src: '/media/AAAAA.png',                    label: 'HUSA — Flyer' },
  { src: '/media/yuh.png',                      label: 'Yuh — Flyer' },
  { src: '/media/6.png',                        label: 'Editorial — Graphic' },
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
              <Image src={p.src} alt={p.label} width={1080} height={1350} style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div className="graphic-card-label"><span>{p.label}</span></div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
