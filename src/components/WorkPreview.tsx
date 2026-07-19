'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import projects from '@/data/projects';
import { videoSrc } from '@/lib/media';

export default function WorkPreview() {
  const stripRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const featured = projects.filter((p) => p.featured);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (stripRef.current?.offsetLeft ?? 0);
    scrollLeft.current = stripRef.current?.scrollLeft ?? 0;
    if (stripRef.current) stripRef.current.style.cursor = 'grabbing';
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (stripRef.current) stripRef.current.style.cursor = 'grab';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !stripRef.current) return;
    e.preventDefault();
    const x = e.pageX - (stripRef.current.offsetLeft ?? 0);
    stripRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.6;
  };

  return (
    <section id="work" className="work-preview">
      <div className="section-header">
        <div>
          <div className="section-number t-label">[ 01 ] — Selected work</div>
          <Reveal><h2 className="section-title t-display">PROJECTS</h2></Reveal>
        </div>
        <Link href="/work" className="view-all-link">View all work →</Link>
      </div>

      <div
        className="film-strip"
        ref={stripRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {featured.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="film-card"
            style={{ textDecoration: 'none' }}
          >
            <div className="film-card-media">
              {project.heroType === 'video' ? (
                <video
                  src={videoSrc(project.heroMedia)}
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={project.poster}
                  onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                  onMouseLeave={(e) => {
                    const v = e.currentTarget as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                />
              ) : (
                <Image src={project.heroMedia} alt={project.title} fill style={{ objectFit: 'contain' }} />
              )}
              <div className="film-card-overlay">
                <span className="film-card-arrow">↗</span>
              </div>
            </div>
            <div className="film-card-info">
              <div className="film-card-cat">{project.category}</div>
              <div className="film-card-title">{project.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
