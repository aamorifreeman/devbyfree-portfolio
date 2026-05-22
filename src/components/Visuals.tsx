'use client';
import Image from 'next/image';
import Reveal from './Reveal';

type GridItem = {
  src: string;
  type: 'video' | 'image';
  label: string;
  className: string;
};

const items: GridItem[] = [
  // Featured — full width
  { src: '/media/neurosis-final.mp4',          type: 'video', label: 'Neurosis — Experimental Visualizer',  className: 'vis-item wide' },
  // Row 1
  { src: '/media/FINALVID.mp4',                type: 'video', label: 'FPSD — Motion Graphics',              className: 'vis-item' },
  { src: '/media/doneskiii.mp4',               type: 'video', label: 'Taste of Howard — Promo',             className: 'vis-item' },
  // Row 2
  { src: '/media/BLK.mp4',                     type: 'video', label: 'FPSD — Dark Edit',                   className: 'vis-item' },
  { src: '/media/water2.mp4',                  type: 'video', label: 'Neurosis — Water Simulation',        className: 'vis-item' },
  // Row 3
  { src: '/media/NIGHT-FINAL.mp4',             type: 'video', label: 'Night — Motion Graphics',            className: 'vis-item' },
  { src: '/media/excessus2.0_1.mp4',           type: 'video', label: 'Excessus — Concert Art',             className: 'vis-item' },
  // Featured — full width
  { src: '/media/All Comp_2.mp4',              type: 'video', label: 'All Comp — Motion Reel',             className: 'vis-item wide' },
  // Row 4
  { src: '/media/MAIN_4.mp4',                  type: 'video', label: 'Main Comp',                          className: 'vis-item' },
  { src: '/media/FINALCHRISELITE.mp4',         type: 'video', label: 'Chris Elite — Edit',                 className: 'vis-item' },
  // Row 5
  { src: '/media/DAY-final.mp4',               type: 'video', label: 'Day — Final',                        className: 'vis-item' },
  { src: '/media/morph_black_fixed.mp4',       type: 'video', label: 'Morph — Dark Edit',                  className: 'vis-item' },
  // Row 6
  { src: '/media/Main_2.mp4',                  type: 'video', label: 'Main Edit II',                       className: 'vis-item' },
  { src: '/media/mona.mp4',                    type: 'video', label: 'Mona Lisa — Edit',                   className: 'vis-item' },
  // Row 7
  { src: '/media/gold_chain_new.mp4',          type: 'video', label: 'Gold Chain',                         className: 'vis-item' },
  { src: '/media/DREWSTROLLDONE.mp4',          type: 'video', label: 'Drew Stroll — Done',                 className: 'vis-item' },
  // Row 8
  { src: '/media/burnlogo.mp4',                type: 'video', label: 'Burn Logo — Motion',                 className: 'vis-item' },
  { src: '/media/FINALFINALIINSTA.mp4',        type: 'video', label: 'Final — Reel',                       className: 'vis-item' },
  // Row 9
  { src: '/media/erotica3.0.mp4',              type: 'video', label: 'Erotica 3.0',                        className: 'vis-item' },
  { src: '/media/ectasyy2.0.mp4',              type: 'video', label: 'Ecstasy 2.0',                        className: 'vis-item' },
  // Row 10
  { src: '/media/samivid.mp4',                 type: 'video', label: 'Sami — Video',                       className: 'vis-item' },
  { src: '/media/gif_version.gif',             type: 'image', label: 'GIF Visualizer',                     className: 'vis-item' },
  // Featured — full width
  { src: '/media/highest in the room edit.mp4', type: 'video', label: 'Highest in the Room — Edit',        className: 'vis-item wide' },
  // Row 11
  { src: '/media/asap edit.mp4',               type: 'video', label: 'ASAP — Edit',                        className: 'vis-item' },
  { src: '/media/DEVBYMORIVID.mp4',            type: 'video', label: 'Dev By Free — Reel',                 className: 'vis-item' },
];

export default function Visuals() {
  return (
    <section id="visuals">
      <div className="section-header">
        <div>
          <div className="section-number t-label">[ 02 ] — Motion &amp; video</div>
          <Reveal><h2 className="section-title t-display">VISUALS</h2></Reveal>
        </div>
      </div>

      <Reveal>
        <div className="visuals-grid">
          {items.map((item, i) => (
            <div key={i} className={item.className}>
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="none"
                  onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                  onMouseLeave={e => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              )}
              <div className="vis-item-label">{item.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
