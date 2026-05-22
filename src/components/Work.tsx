'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import projects from '@/data/projects';

export default function Work() {
  const stripRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const featured = projects.filter(p => p.featured);
  const indexed  = projects.slice(0, 6);

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
    <section id="work">
      <div className="section-header">
        <div>
          <div className="section-number t-label">[ 01 ] — Selected work</div>
          <Reveal><h2 className="section-title t-display">PROJECTS</h2></Reveal>
        </div>
        <a href="#work" className="view-all-link">All projects →</a>
      </div>

      {/* Film strip */}
      <div
        className="film-strip"
        ref={stripRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {featured.map((project, i) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="film-card" style={{ textDecoration: 'none' }}>
            <div className="film-card-media">
              {project.heroType === 'video' ? (
                <video
                  src={project.heroMedia}
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={project.poster}
                  onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                  onMouseLeave={e => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                />
              ) : (
                <Image src={project.heroMedia} alt={project.title} fill style={{ objectFit: 'cover' }} />
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

      {/* Project index */}
      <div className="project-index">
        {indexed.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <Link href={`/projects/${project.slug}`} className="project-row" style={{ textDecoration: 'none', display: 'grid' }}>
              <span className="project-row-num">0{i + 1}</span>
              <span className="project-row-title">{project.title}</span>
              <span className="project-row-cat">{project.category}</span>
              <span className="project-row-arrow">→</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
