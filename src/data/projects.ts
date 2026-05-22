export type GalleryItem = {
  src: string;
  type: 'video' | 'image';
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  heroMedia: string;
  heroType: 'video' | 'image';
  poster?: string;
  gallery: GalleryItem[];
  featured: boolean;
};

const projects: Project[] = [
  // ── 8 featured projects (from Drive folders) ──────────────────
  {
    slug: 'husa-cabinet-shoot',
    title: 'HUSA Cabinet Shoot',
    category: 'Photography / Editorial',
    year: '2024',
    description:
      'Official photography and editorial design for the Howard University Student Association Cabinet. Portraits and department layouts produced for HUS Magazine — blending documentary photography with clean editorial composition.',
    tags: ['Photography', 'Art Direction', 'Editorial Design', 'HUS Magazine'],
    heroMedia: '/media/anothavers copy.png',
    heroType: 'image',
    gallery: [
      { src: '/media/Untitled-4_01.jpg', type: 'image', caption: 'HUS Magazine — Cover I' },
      { src: '/media/Untitled-4_02.jpg', type: 'image', caption: 'HUS Magazine — Cover II' },
    ],
    featured: true,
  },
  {
    slug: 'cluttered-creations',
    title: 'Cluttered Creations',
    category: 'Art Direction / Editorial',
    year: '2024',
    description:
      'Art direction and graphic design for Cluttered Creations — a lo-fi creative magazine and visual project. Cover design, editorial layouts, and a chaotic, warm-toned portrait series that captures the spirit of creative disorder.',
    tags: ['Art Direction', 'Graphic Design', 'Editorial', 'Photography'],
    heroMedia: '/media/2.png',
    heroType: 'image',
    gallery: [
      { src: '/media/TEN05646.JPG', type: 'image', caption: 'Cluttered Creations — Editorial Portrait' },
      { src: '/media/Artboard 1.png', type: 'image', caption: 'Composite Cover' },
      { src: '/media/3.png', type: 'image', caption: 'Cluttered Creation — A Visual Story' },
    ],
    featured: true,
  },
  {
    slug: 'sincerely-20',
    title: 'Sincerely 20',
    category: 'Art Direction / Studio Shoot',
    year: '2024',
    description:
      'A self-directed studio shoot exploring softness, intimacy, and identity at 20. Shot against a silk satin canvas, the series plays with light, texture, and quiet vulnerability — a letter to the self through imagery.',
    tags: ['Photography', 'Art Direction', 'Studio', 'Self-Portrait'],
    heroMedia: '/media/main.png',
    heroType: 'image',
    gallery: [
      { src: '/media/DSCF2949.png', type: 'image', caption: 'Sincerely 20 — I' },
      { src: '/media/DSCF2988.png', type: 'image', caption: 'Sincerely 20 — II' },
    ],
    featured: true,
  },
  {
    slug: 'the-bay',
    title: 'The Bay',
    category: 'Photo Collage / Editorial',
    year: '2023',
    description:
      'A photo collage series documenting time spent in the Bay Area — San Jose hills, San Francisco streets, and the quiet in between. Constructed from film-taped Polaroids and handwritten notes, the pieces feel like memory made physical.',
    tags: ['Photo Collage', 'Editorial', 'Documentary', 'Mixed Media'],
    heroMedia: '/media/Artboard 2hh.jpg',
    heroType: 'image',
    gallery: [
      { src: '/media/Artboard 1hh.jpg', type: 'image', caption: 'The Bay — Silhouette Study' },
    ],
    featured: true,
  },
  {
    slug: 'fpsd',
    title: 'FPSD',
    category: 'Motion Graphics',
    year: '2024',
    description:
      'Motion graphics and visual identity work for FPSD — a fast-cut visual piece combining kinetic typography, abstract shapes, and high-contrast color transitions. Built in After Effects with a focus on pacing and rhythm.',
    tags: ['After Effects', 'Motion Graphics', 'Visual Identity', 'Kinetic Typography'],
    heroMedia: '/media/FINALVID.mp4',
    heroType: 'video',
    gallery: [
      { src: '/media/BLK.mp4', type: 'video', caption: 'FPSD — Dark Edit' },
    ],
    featured: true,
  },
  {
    slug: 'bison-stream',
    title: 'Bison Stream',
    category: 'Event Design',
    year: '2024',
    description:
      'Event design and promotional graphics for Howard University\'s Bison Week — a multi-day celebration of campus culture. The design system unified multiple events under a single cohesive visual identity.',
    tags: ['Event Design', 'Graphic Design', 'Howard University', 'Branding'],
    heroMedia: '/media/bisonweek_events.png',
    heroType: 'image',
    gallery: [],
    featured: true,
  },
  {
    slug: 'taste-of-howard',
    title: 'Taste of Howard',
    category: 'Event Design / Motion',
    year: '2024',
    description:
      'Motion piece and event collateral for Taste of Howard — Howard University\'s annual outdoor showcase. The Western-themed concept was translated into a full visual package: animated promos, 3D typography, and bold poster design.',
    tags: ['After Effects', 'Premiere Pro', 'Event Design', '3D Typography'],
    heroMedia: '/media/doneskiii.mp4',
    heroType: 'video',
    gallery: [
      { src: '/media/TasteHoward.png', type: 'image', caption: 'Taste of Howard — Poster' },
    ],
    featured: true,
  },
  {
    slug: 'neurosis',
    title: 'Neurosis',
    category: 'Experimental / Visualizer',
    year: '2024',
    description:
      'An experimental audio-reactive visualizer exploring anxiety, flow, and sensory overload. Fluid water simulations react in real time to audio input, creating a hypnotic loop between chaos and stillness.',
    tags: ['TouchDesigner', 'Audio Reactive', 'Real-Time Visuals', 'Experimental'],
    heroMedia: '/media/neurosis-final.mp4',
    heroType: 'video',
    gallery: [
      { src: '/media/water2.mp4', type: 'video', caption: 'Water — fluid simulation' },
      { src: '/media/2.mp4',      type: 'video', caption: 'Neurosis — alternate loop' },
    ],
    featured: true,
  },

  // ── Archive (non-featured, referenced in old graphics/visuals sections) ───
  {
    slug: 'humble',
    title: 'Humble',
    category: 'Audio Reactive',
    year: '2024',
    description:
      'An audio-reactive visualizer built in TouchDesigner that responds to the dynamics of Kendrick Lamar\'s "Humble." Particle systems, generative geometry, and real-time feedback loops react to every beat and frequency shift.',
    tags: ['TouchDesigner', 'Audio Reactive', 'Real-Time Visuals'],
    heroMedia: '/media/ABOUT.mp4',
    heroType: 'video',
    poster: '/media/DSCF2949.png',
    gallery: [{ src: '/media/ABOUT.mp4', type: 'video' }],
    featured: false,
  },
  {
    slug: 'night',
    title: 'Night',
    category: 'Motion Graphics',
    year: '2024',
    description:
      'A motion graphics piece exploring nocturnal themes through fluid typography and atmospheric visual language. Created in After Effects with custom frame-by-frame texture work.',
    tags: ['After Effects', 'Motion Graphics', 'Typography'],
    heroMedia: '/media/NIGHT-FINAL.mp4',
    heroType: 'video',
    poster: '/media/2.png',
    gallery: [{ src: '/media/NIGHT-FINAL.mp4', type: 'video' }],
    featured: false,
  },
  {
    slug: 'excessus',
    title: 'Excessus',
    category: 'Concert Art',
    year: '2024',
    description:
      'Concert visualizer and stage art built for a live performance experience. Generative real-time visuals designed to fill a full stage LED wall, reacting to the DJ set in real time.',
    tags: ['TouchDesigner', 'Concert Art', 'Real-Time Visuals'],
    heroMedia: '/media/excessus2.0_1.mp4',
    heroType: 'video',
    gallery: [{ src: '/media/ectasyy2.0.mp4', type: 'video' }],
    featured: false,
  },
  {
    slug: 'earl-sweatshirt',
    title: 'Earl Sweatshirt',
    category: 'Graphic Design',
    year: '2023',
    description:
      'Editorial poster series for Earl Sweatshirt — pulling from the raw, underground visual language of his discography.',
    tags: ['Photoshop', 'Editorial', 'Collage'],
    heroMedia: '/media/Earl_poster_2.jpg',
    heroType: 'image',
    gallery: [{ src: '/media/Earl_poster_2.jpg', type: 'image' }],
    featured: false,
  },
  {
    slug: 'blood-orange',
    title: 'Blood Orange',
    category: 'Editorial Poster',
    year: '2023',
    description:
      'An editorial poster for Dev Hynes\' Blood Orange — mixing photographic collage with typographic layering.',
    tags: ['Photoshop', 'Illustrator', 'Editorial'],
    heroMedia: '/media/BloodOrange Poster.jpg',
    heroType: 'image',
    gallery: [{ src: '/media/BloodOrange Poster.jpg', type: 'image' }],
    featured: false,
  },
];

export default projects;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
