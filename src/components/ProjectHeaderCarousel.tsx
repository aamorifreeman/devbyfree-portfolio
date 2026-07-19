'use client';

import Image from 'next/image';
import type { CarouselMedia } from '@/data/projects';
import { videoSrc } from '@/lib/media';

type Props = {
  media: CarouselMedia[];
};

function staggerCarouselVideo(video: HTMLVideoElement, src: string, index: number, track: CarouselMedia[]) {
  const slots = track
    .map((item, i) => (item.type === 'video' && item.src === src ? i : -1))
    .filter((i) => i >= 0);
  const position = slots.indexOf(index);
  const total = slots.length;
  if (position < 0 || total <= 1) return;

  const apply = () => {
    const { duration } = video;
    if (duration && Number.isFinite(duration)) {
      video.currentTime = (duration / total) * position;
    } else {
      video.currentTime = position * 2.5;
    }
  };

  if (video.readyState >= 1) apply();
  else video.addEventListener('loadedmetadata', apply, { once: true });
}

export default function ProjectHeaderCarousel({ media }: Props) {
  const base: CarouselMedia[] =
    media.length > 0 ? media : [{ src: '/media/main.png', type: 'image' }];
  const slides = base.length < 4 ? [...base, ...base, ...base] : base;
  const track = [...slides, ...slides];

  return (
    <div className="project-header-carousel" aria-hidden>
      <div className="project-header-carousel-track">
        {track.map((item, i) => (
          <div className="project-header-carousel-slide" key={`${item.src}-${i}`}>
            {item.type === 'video' ? (
              <video
                src={videoSrc(item.src)}
                autoPlay
                muted
                loop
                playsInline
                poster={item.poster}
                className="project-header-carousel-img"
                onLoadedMetadata={(e) =>
                  staggerCarouselVideo(e.currentTarget, item.src, i, track)
                }
              />
            ) : (
              <Image
                src={item.src}
                alt=""
                width={1080}
                height={1350}
                sizes="320px"
                className="project-header-carousel-img"
              />
            )}
          </div>
        ))}
      </div>
      <div className="project-header-carousel-overlay" />
    </div>
  );
}
