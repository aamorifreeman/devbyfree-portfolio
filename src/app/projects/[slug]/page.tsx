import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import projects, { getProjectBySlug } from '@/data/projects';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} — Dev By Free` : 'Project' };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <>
      <main className="project-detail">
        {/* Back / Next navigation */}
        <div className="project-nav">
          <Link href="/" className="project-nav-link">← Back to work</Link>
          {next && (
            <Link href={`/projects/${next.slug}`} className="project-nav-link">
              {next.title} →
            </Link>
          )}
        </div>

        {/* Header */}
        <Reveal>
          <div className="project-header">
            <div className="project-cat-year">{project.category} — {project.year}</div>
            <h1 className="project-big-title t-display">{project.title}</h1>
          </div>
        </Reveal>

        {/* Hero media */}
        <div className="project-hero-media">
          {project.heroType === 'video' ? (
            <video src={project.heroMedia} autoPlay muted loop playsInline poster={project.poster} />
          ) : (
            <Image src={project.heroMedia} alt={project.title} fill style={{ objectFit: 'cover' }} />
          )}
        </div>

        {/* Description + tags */}
        <Reveal>
          <div className="project-body">
            <p className="project-description">{project.description}</p>
            <div className="project-tags-col">
              <div className="project-tags-heading">Tools &amp; Disciplines</div>
              {project.tags.map(tag => (
                <span key={tag} className="project-tag-item">{tag}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <Reveal>
            <div className="project-gallery">
              {project.gallery.map((item, i) => (
                <div
                  key={i}
                  className={`project-gallery-item${i === 0 && project.gallery.length > 2 ? ' full' : ''}`}
                >
                  {item.type === 'video' ? (
                    <video src={item.src} autoPlay muted loop playsInline />
                  ) : (
                    <Image src={item.src} alt={item.caption ?? ''} fill style={{ objectFit: 'cover' }} />
                  )}
                  {item.caption && (
                    <div className="project-gallery-caption">{item.caption}</div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* More work marquee */}
        <Marquee items={['More Work', 'View Projects', 'Dev By Free', 'Aamori Freeman']} />
        <div style={{ padding: '60px 40px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {projects.filter(p => p.slug !== slug).slice(0, 3).map(p => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              style={{ textDecoration: 'none', flex: '1 1 260px' }}
            >
              <div className="film-card" style={{ width: '100%' }}>
                <div className="film-card-media">
                  {p.heroType === 'video' ? (
                    <video src={p.heroMedia} muted playsInline preload="none" poster={p.poster} />
                  ) : (
                    <Image src={p.heroMedia} alt={p.title} fill style={{ objectFit: 'cover' }} />
                  )}
                  <div className="film-card-overlay"><span className="film-card-arrow">↗</span></div>
                </div>
                <div className="film-card-info">
                  <div className="film-card-cat">{p.category}</div>
                  <div className="film-card-title">{p.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
