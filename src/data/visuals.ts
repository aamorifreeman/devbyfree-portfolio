export type VisualCategory =
  | 'concert'
  | 'motion-reels'
  | 'visualizers'
  | 'edits-promos';

export type VisualMediaType = 'video' | 'image';

/** Uniform card ratio — keeps the grid aligned */
export type VisualAspectRatio = '16/9' | '4/5' | '1/1';

export type VisualOrientation = 'landscape' | 'portrait';

export type VisualProject = {
  id: string;
  title: string;
  category: VisualCategory;
  mediaType: VisualMediaType;
  src: string;
  /** Set for 1080×1920 (etc.) so the card renders rotated-size immediately */
  orientation?: VisualOrientation;
  aspectRatio?: VisualAspectRatio;
};

export const VISUAL_CATEGORIES: { id: VisualCategory; label: string }[] = [
  { id: 'concert', label: 'Concert & Live Visuals' },
  { id: 'motion-reels', label: 'Motion Reels' },
  { id: 'visualizers', label: '3D Modeling / Animations' },
  { id: 'edits-promos', label: 'Edits & Promos' },
];

/**
 * Add new work here — it will appear in the matching category section automatically.
 */
export const visualProjects: VisualProject[] = [
  // Concert & live visuals
  {
    id: 'neurosis',
    title: 'Neurosis',
    category: 'concert',
    mediaType: 'video',
    src: '/media/neurosis-final.mp4',
  },

  // Motion reels
  {
    id: 'excessus',
    title: 'Excessus',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/excessus2.0_1.mp4',
  },
  {
    id: 'erotica',
    title: 'Erotica 3.0',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/erotica3.0.mp4',
  },
  {
    id: 'ecstasy',
    title: 'Ecstasy 2.0',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/ectasyy2.0.mp4',
  },
  {
    id: 'main-comp',
    title: 'Main Comp',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/MAIN_4.mp4',
  },
  {
    id: 'burn-logo',
    title: 'Burn Logo',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/burnlogo.mp4',
  },
  {
    id: 'all-comp',
    title: 'All Comp',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/All Comp_2.mp4',
  },
  {
    id: 'day-final',
    title: 'Day Final',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/DAY-final.mp4',
  },
  {
    id: 'night',
    title: 'Night Motion Graphics',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/NIGHT-FINAL.mp4',
  },
  {
    id: 'dev-by-free',
    title: 'Dev By Free Reel',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/DEVBYMORIVID.mp4',
  },
  {
    id: 'fpsd-motion',
    title: 'FPSD Motion Graphics',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/FINALVID.mp4',
  },
  {
    id: 'morph',
    title: 'Morph',
    category: 'motion-reels',
    mediaType: 'video',
    src: '/media/morph_black_fixed.mp4',
  },

  // 3D modeling / animations
  {
    id: 'gold-chain',
    title: 'Gold Chain',
    category: 'visualizers',
    mediaType: 'video',
    src: '/media/gold_chain_new.mp4',
  },
  {
    id: 'gif-visualizer',
    title: 'GIF Visualizer',
    category: 'visualizers',
    mediaType: 'image',
    src: '/media/gif_version.gif',
  },

  // Edits & promos
  {
    id: 'final-reel',
    title: 'Final Reel',
    category: 'edits-promos',
    mediaType: 'video',
    orientation: 'portrait',
    src: '/media/FINALFINALIINSTA.mp4',
  },
  {
    id: 'drew-stroll',
    title: 'Drew Stroll',
    category: 'edits-promos',
    mediaType: 'video',
    src: '/media/DREWSTROLLDONE.mp4',
  },
  {
    id: 'taste-of-howard',
    title: 'Taste of Howard',
    category: 'edits-promos',
    mediaType: 'video',
    src: '/media/doneskiii.mp4',
  },
  {
    id: 'mona-lisa',
    title: 'Mona Lisa',
    category: 'edits-promos',
    mediaType: 'video',
    src: '/media/mona.mp4',
  },
  {
    id: 'asap',
    title: 'ASAP',
    category: 'edits-promos',
    mediaType: 'video',
    src: '/media/asap edit.mp4',
  },
  {
    id: 'sami',
    title: 'Sami',
    category: 'edits-promos',
    mediaType: 'video',
    src: '/media/samivid.mp4',
  },
  {
    id: 'fpsd-dark',
    title: 'FPSD Dark Edit',
    category: 'edits-promos',
    mediaType: 'video',
    src: '/media/BLK.mp4',
  },
];

export type VisualSection = {
  id: VisualCategory;
  label: string;
  projects: VisualProject[];
};

/** Sections that always render a heading even with no projects yet */
const ALWAYS_VISIBLE_SECTIONS: VisualCategory[] = ['concert'];

export function getVisualSections(): VisualSection[] {
  return VISUAL_CATEGORIES.map((cat) => ({
    id: cat.id,
    label: cat.label,
    projects: visualProjects.filter((p) => p.category === cat.id),
  })).filter(
    (section) =>
      section.projects.length > 0 ||
      ALWAYS_VISIBLE_SECTIONS.includes(section.id)
  );
}

export function aspectRatioToCss(ratio: VisualAspectRatio = '16/9'): string {
  return ratio.replace('/', ' / ');
}
