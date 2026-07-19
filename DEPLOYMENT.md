# Deployment

The site is a static Next.js app. **Images** ship inside the repo; **videos**
live on **Cloudflare R2** (free egress) and are resolved at runtime via
`NEXT_PUBLIC_MEDIA_BASE_URL` (see `src/lib/media.ts`). Locally, videos are
served from `public/media/` and no env var is needed.

## Architecture

| Asset | Where it lives | How it's served |
|-------|----------------|-----------------|
| Code + images | GitHub repo | Deployed with the app |
| Videos (23 files, ~688 MB) | Cloudflare R2 bucket | `NEXT_PUBLIC_MEDIA_BASE_URL` |
| CMS / contact form (Phase 2) | Supabase | _not built yet_ |

---

## Phase 1 — Ship the static site

### 1. Cloudflare R2 (videos) — *you must create the account*
1. Create a Cloudflare account → **R2** → **Create bucket** (e.g. `devbyfree-media`).
2. Enable public access: bucket → **Settings** → allow public access (R2.dev URL),
   or connect a **custom domain** like `media.devbyfree.com`.
3. Upload the videos **into a `media/` folder** so keys match code paths
   (`/media/neurosis-final.mp4` → `<bucket>/media/neurosis-final.mp4`).
   - Small enough to drag-and-drop the 23 files in the dashboard, **or** use rclone:
     ```
     brew install rclone
     rclone config   # new remote, type = "s3", provider = "Cloudflare", paste R2 keys
     rclone copy public/media r2:devbyfree-media/media \
       --include "*.mp4" --include "*.mov" --progress
     ```
4. Note the public base URL (R2.dev or your custom domain).

### 2. GitHub
```
gh repo create portfolio-website-v2 --private --source=. --remote=origin
git add -A
git commit -m "Portfolio site ready for hosting"
git push -u origin main
```
(Already authenticated as `aamorifreeman`.)

### 3. Vercel — *you must create/connect the account*
1. vercel.com → **Add New Project** → import the GitHub repo (auto-detects Next.js).
2. **Environment Variables** → add `NEXT_PUBLIC_MEDIA_BASE_URL` = your R2 base URL.
3. Deploy. Add a custom domain in Vercel → **Domains** if you have one.

---

## Phase 2 — Supabase (CMS + contact form), later
- Move project/visual data out of `src/data/*.ts` into Supabase tables so work
  can be added without code changes.
- Wire the contact form to a Supabase table / email function.
- Not required for the initial launch.

## Notes
- Only the 23 *referenced* videos need uploading; ~9 unused files in
  `public/media` can be ignored.
- Images are committed at full size (optimization deferred). The About photo
  `DSCF2949.png` is 35 MB — worth compressing later for faster loads.
