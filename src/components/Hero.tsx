'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero">
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        src="/media/DEVBYMORIVID.mp4"
      />

      <div className="hero-headline t-display">
        <motion.div
          className="hero-line"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          DEVELOPED
        </motion.div>
        <motion.div
          className="hero-line indent"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          BY &nbsp;<span className="accent">FREE</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-sub"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="hero-sub-left">
          <div className="hero-name">Aamori Freeman</div>
          <div className="hero-role">Motion Designer &amp; Creative Technologist</div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </motion.div>
    </section>
  );
}
