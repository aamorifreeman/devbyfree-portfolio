'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const links = [
  { href: '#about',    label: 'About' },
  { href: '#work',     label: 'Work' },
  { href: '#visuals',  label: 'Visuals' },
  { href: '#graphics', label: 'Graphics' },
  { href: '#contact',  label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let last = 0;
    const nav = navRef.current;
    if (!nav) return;
    nav.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    const onScroll = () => {
      const cur = window.scrollY;
      nav.style.transform = cur > last && cur > 100 ? 'translateY(-100%)' : 'translateY(0)';
      last = cur;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav ref={navRef}>
        <Link href="/" className="nav-logo">[ DBF ]</Link>
        <div className="nav-right">
          <Link href="#contact" className="nav-cta">
            <span className="arrow">→</span> Let&apos;s work
          </Link>
          <button
            className={`menu-btn${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            MENU <span className="plus">+</span>
          </button>
        </div>
      </nav>

      <div className={`menu-overlay${open ? ' open' : ''}`} role="dialog" aria-label="Navigation menu">
        <ul className="menu-links">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="menu-footer">
          <div className="menu-footer-links">
            <a href="https://www.instagram.com/aamorifree" target="_blank" rel="noopener">Instagram</a>
            <a href="mailto:hello@devbyfree.com">Email</a>
          </div>
          <span className="t-label">© 2025 Aamori Freeman</span>
        </div>
      </div>
    </>
  );
}
