# Clean Therapy by Lauren

Professional residential cleaning service website for Greater Cleveland, Ohio.

**Tech:** Next.js 14 · Tailwind CSS · Framer Motion · Formspree

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push the repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Add the environment variable in Vercel dashboard:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = your Formspree endpoint (e.g. `https://formspree.io/f/xABCDEFG`)
4. Deploy

## How to Update Content

### Add Photos

1. Drop image files into `/public/images/`
2. Update the `photos` array in `components/MediaShowcase/PhotoGallery.tsx`
3. For before/after images, update `components/MediaShowcase/BeforeAfter.tsx`

### Add Videos

Edit `videos.config.ts` at the project root:

```ts
export const videos = [
  {
    id: "1",
    type: "youtube",
    src: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    caption: "Kitchen deep clean — Cleveland Heights, OH",
    featured: true,
  },
];
```

Supported types: `youtube`, `tiktok`, `mp4`, `instagram`

For MP4 files, drop them in `/public/videos/` and use the path like `/videos/my-clip.mp4`.

### Update Testimonials

Edit the `testimonials` array in `components/Testimonials.tsx`.

### Update Service Areas

Edit the `areas` array in `components/ServiceArea.tsx`.

### Connect a Custom Domain

1. Go to your Vercel project → Settings → Domains
2. Add your domain and follow the DNS instructions

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Sign up at [formspree.io](https://formspree.io) to get your form ID.
