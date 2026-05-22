import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-label">[ Contact me ]</div>

      <Reveal>
        <h2 className="contact-headline t-display">
          I&apos;M A MOTION<br />
          DESIGNER STILL<br />
          <span className="line-accent">CREATING DAILY</span>
        </h2>
      </Reveal>

      <div className="contact-body">
        <Reveal>
          <p className="contact-blurb">
            So most likely I&apos;m deep in a project. Please give me at least
            3–5 business days to respond. Thank you. Respectfully,
            Aamori Freeman.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="contact-links-heading">Connect with me</div>
          <div className="contact-links">
            <a className="contact-link-item" href="https://www.instagram.com/aamorifree" target="_blank" rel="noopener">
              @aamorifree — Instagram
            </a>
            <a className="contact-link-item" href="mailto:hello@devbyfree.com">
              hello@devbyfree.com
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <a className="contact-cta" href="mailto:hello@devbyfree.com">
          <div className="cta-arrow">→</div>
          <span className="cta-text">Reach Out</span>
        </a>
      </Reveal>
    </section>
  );
}
