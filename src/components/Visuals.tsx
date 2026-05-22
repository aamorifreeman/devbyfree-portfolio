'use client';
import Reveal from './Reveal';

type GridItem = {
  src: string;
  type: 'video' | 'image';
  label: string;
  className: string;
};

const items: GridItem[] = [
  { src: '/media/neurosis-final.mp4',   type: 'video', label: 'Neurosis — Experimental Visualizer', className: 'vis-item wide tall' },
  { src: '/media/FINALVID.mp4',          type: 'video', label: 'FPSD — Motion Graphics',             className: 'vis-item medium tall' },
  { src: '/media/doneskiii.mp4',         type: 'video', label: 'Taste of Howard — Promo',            className: 'vis-item small' },
  { src: '/media/BLK.mp4',              type: 'video', label: 'FPSD — Dark Edit',                    className: 'vis-item small' },
  { src: '/media/water2.mp4',            type: 'video', label: 'Neurosis — Water Simulation',        className: 'vis-item medium' },
  { src: '/media/NIGHT-FINAL.mp4',       type: 'video', label: 'Night — Motion Graphics',            className: 'vis-item wide' },
  { src: '/media/excessus2.0_1.mp4',     type: 'video', label: 'Excessus — Concert Art',             className: 'vis-item medium' },
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
              <video
                src={item.src}
                muted
                loop
                playsInline
                preload="none"
                onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                onMouseLeave={e => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
              />
              <div className="vis-item-label">{item.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
