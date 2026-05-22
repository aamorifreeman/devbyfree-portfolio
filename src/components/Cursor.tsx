'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px';
      el.style.top  = e.clientY + 'px';
    };

    const grow = () => el.classList.add('grow');
    const shrink = () => el.classList.remove('grow');

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .film-card, .graphic-card, .vis-item, .project-row, .film-strip')
      .forEach(el => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });

    return () => {
      document.removeEventListener('mousemove', move);
    };
  }, []);

  return <div className="cursor" ref={cursorRef} />;
}
