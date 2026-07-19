// ── Media resolution ────────────────────────────────────────────────
// Images are committed to the repo and served from /public/media.
// Videos are large, so they live on Cloudflare R2 (free egress) instead of git.
//
// In production, set NEXT_PUBLIC_MEDIA_BASE_URL to your R2 public bucket URL
// (e.g. https://media.devbyfree.com). Upload videos preserving the "media/"
// prefix so keys line up 1:1 with the paths used in the data files:
//   /media/neurosis-final.mp4  ->  <base>/media/neurosis-final.mp4
//
// Left unset (local dev), videos are served straight from /public/media.

const MEDIA_BASE = (process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? '').replace(/\/+$/, '');

/**
 * Resolve a video path. Only videos are offloaded to R2 — images always stay
 * local, so never pass image paths (or video posters) through this helper.
 */
export function videoSrc(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path; // already absolute
  if (!MEDIA_BASE) return path; // local dev / no CDN configured
  return `${MEDIA_BASE}${path.startsWith('/') ? '' : '/'}${path}`;
}
