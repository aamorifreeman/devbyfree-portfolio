import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import projects, { getProjectBySlug, getProjectCarouselMedia, getFeaturedProjects } from '@/data/projects';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import ProjectHeaderCarousel from '@/components/ProjectHeaderCarousel';
import { videoSrc } from '@/lib/media';

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

  const featured = getFeaturedProjects();
  const featuredIndex = featured.findIndex(p => p.slug === slug);
  const next =
    featured.length > 1 && featuredIndex >= 0
      ? featured[(featuredIndex + 1) % featured.length]
      : featured.length > 0 && featuredIndex < 0
        ? featured[0]
        : undefined;

  return (
    <>
      <main className="project-detail">
        {/* Back / Next navigation */}
        <div className="project-nav">
          <Link href="/work" className="project-nav-link">← Back to work</Link>
          {next && (
            <Link href={`/projects/${next.slug}`} className="project-nav-link">
              {next.title} →
            </Link>
          )}
        </div>

        {/* Header */}
        <Reveal>
          <div className="project-header">
            <ProjectHeaderCarousel media={getProjectCarouselMedia(project)} />
            <div className="project-header-content">
              <div className="project-cat-year">{project.category} — {project.year}</div>
              <h1 className="project-big-title t-display">{project.title}</h1>
            </div>
          </div>
        </Reveal>

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

        {/* Hero + gallery */}
        <Reveal>
          <div className="project-gallery">
            <div className={`project-gallery-item${project.gallery.length === 0 ? ' full' : ''}`}>
              {project.heroType === 'video' ? (
                <video
                  src={videoSrc(project.heroMedia)}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  poster={project.poster}
                  className="project-gallery-video"
                />
              ) : (
                <Image src={project.heroMedia} alt={project.title} width={1080} height={1350} style={{ width: '100%', height: 'auto', display: 'block' }} />
              )}
            </div>
            {project.gallery.map((item, i) => (
              <div key={i} className="project-gallery-item">
                {item.type === 'video' ? (
                  <video
                    src={videoSrc(item.src)}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="project-gallery-video"
                  />
                ) : (
                  <Image src={item.src} alt={item.caption ?? ''} width={1080} height={1350} style={{ width: '100%', height: 'auto', display: 'block' }} />
                )}
                {item.caption && (
                  <div className="project-gallery-caption">{item.caption}</div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* More work marquee */}
        <Marquee items={['More Work', 'View Projects', 'Dev By Free', 'Aamori Freeman']} />
        <div className="project-more-work">
          {projects.filter(p => p.slug !== slug).slice(0, 3).map(p => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="film-card"
              style={{ textDecoration: 'none' }}
            >
              <div className="film-card-media">
                {p.heroType === 'video' ? (
                  <video src={videoSrc(p.heroMedia)} muted playsInline preload="none" poster={p.poster} />
                ) : (
                  <Image src={p.heroMedia} alt={p.title} fill style={{ objectFit: 'contain' }} />
                )}
                <div className="film-card-overlay"><span className="film-card-arrow">↗</span></div>
              </div>
              <div className="film-card-info">
                <div className="film-card-cat">{p.category}</div>
                <div className="film-card-title">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
