'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { getVisualSections, type VisualProject } from '@/data/visuals';
import { videoSrc } from '@/lib/media';

const LONG_VIDEO_SECONDS = 10;

type MediaOrientation = 'landscape' | 'portrait' | 'square';

function orientationFromDimensions(width: number, height: number): MediaOrientation {
  const ratio = width / height;
  if (ratio > 1.05) return 'landscape';
  if (ratio < 0.95) return 'portrait';
  return 'square';
}

function VisualCard({ project }: { project: VisualProject }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const [duration, setDuration] = useState(0);
  const [orientation, setOrientation] = useState<MediaOrientation>(
    project.orientation ?? 'landscape'
  );
  const showControls = hovering && duration > LONG_VIDEO_SECONDS;

  const handleHoverEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    const long =
      Number.isFinite(video.duration) && video.duration > LONG_VIDEO_SECONDS;
    setHovering(true);
    video.currentTime = 0;
    video.loop = !long;
    video.play().catch(() => {});
  };

  const handleHoverLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    setHovering(false);
    video.loop = true;
    video.play().catch(() => {});
  };

  useEffect(() => {
    if (project.mediaType !== 'video') return;
    const el = itemRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const onMeta = () => {
      const { videoWidth: w, videoHeight: h, duration: d } = video;
      if (w > 0 && h > 0) setOrientation(orientationFromDimensions(w, h));
      if (Number.isFinite(d) && d > 0) setDuration(d);
    };

    video.addEventListener('loadedmetadata', onMeta, { once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (hovering) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2, rootMargin: '80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [project.mediaType, hovering]);

  return (
    <article
      ref={itemRef}
      className={`vis-card vis-card--${orientation}${hovering ? ' is-hovering' : ''}${showControls ? ' has-controls' : ''}`}
      onMouseEnter={project.mediaType === 'video' ? handleHoverEnter : undefined}
      onMouseLeave={project.mediaType === 'video' ? handleHoverLeave : undefined}
    >
      <div className="vis-card-media">
        {project.mediaType === 'video' ? (
          <video
            ref={videoRef}
            src={videoSrc(project.src)}
            muted
            loop={!showControls}
            playsInline
            preload="metadata"
            controls={showControls}
            className="vis-card-video"
          />
        ) : (
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="vis-card-img"
            sizes="(max-width: 640px) 50vw, 33vw"
            unoptimized
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth && img.naturalHeight) {
                setOrientation(
                  orientationFromDimensions(img.naturalWidth, img.naturalHeight)
                );
              }
            }}
          />
        )}
        <div className="vis-card-overlay" aria-hidden />
        <p className="vis-card-title">{project.title}</p>
      </div>
    </article>
  );
}

export default function Visuals() {
  const sections = getVisualSections();

  return (
    <section id="visuals" className="visuals-page">
      <header className="visuals-page-header">
        <div className="section-number t-label">[ 02 ] — Motion &amp; video</div>
        <Reveal>
          <h1 className="visuals-page-title t-display">Visuals</h1>
        </Reveal>
        <p className="visuals-page-lead">
          Motion, concert art, and experimental work — organized by type.
        </p>
      </header>

      <div className="visuals-catalog">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className="visuals-category"
            aria-labelledby={`visuals-cat-${section.id}`}
          >
            <h2 id={`visuals-cat-${section.id}`} className="visuals-category-label">
              {section.label}
            </h2>
            <div className="visuals-grid">
              {section.projects.map((project) => (
                <VisualCard key={project.id} project={project} />
              ))}
            </div>
            {index < sections.length - 1 ? (
              <hr className="visuals-category-rule" aria-hidden />
            ) : null}
          </section>
        ))}
      </div>
    </section>
  );
}
