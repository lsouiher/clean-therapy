# Deployment Guide — Clean Therapy by Lauren

## Quick Deploy to Vercel (Recommended)

### Step 1: Connect to Vercel *(manual — one time)*
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New Project"**
3. Import the `clean-therapy` repository
4. Vercel auto-detects Next.js — no build settings to change
5. Click **Deploy**

> You'll get a live URL like `clean-therapy-abc123.vercel.app`

---

### Step 2: Set Up Formspree *(manual — one time)*
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click **"New Form"**, name it "Clean Therapy Contact"
3. Copy the form endpoint (looks like `https://formspree.io/f/xABCDEFG`)
   -locally Edit .env.local and replace YOUR_FORM_ID with it :  NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID  
   Restart the dev server Ctrl+C then npm run dev 
4. In Vercel dashboard → your project → **Settings → Environment Variables**
5. Add:
   - **Key:** `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - **Value:** your endpoint from step 3
6. Redeploy (Settings → Deployments → click the `...` → Redeploy)                                  
---

### Step 3: Connect Custom Domain *(manual — one time, optional)*
1. In Vercel → your project → **Settings → Domains**
2. Type your domain (e.g. `cleantherapybylauren.com`) and click Add
3. Vercel shows DNS records to add at your domain registrar
4. Update DNS at your registrar (GoDaddy, Namecheap, etc.)
5. SSL certificate is automatic — no action needed

---

## Ongoing Updates

### What's Automated (zero-touch after setup)
| What | How |
|---|---|
| **Build & deploy on every push** | Vercel watches your GitHub repo — any push to `main` triggers a new build and deploy automatically |
| **SSL certificates** | Auto-provisioned and renewed by Vercel |
| **CDN / edge caching** | Vercel serves static pages from edge locations globally — no config needed |
| **Image optimization** | Next.js `<Image>` handles format conversion and resizing at build time |
| **Preview deploys** | Every pull request gets its own preview URL automatically |

### What Requires a Manual Push
| Task | What to do |
|---|---|
| **Add photos** | Drop files in `/public/images/`, update the array in the component, push to GitHub → auto-deploys |
| **Add videos** | Edit `videos.config.ts`, push to GitHub → auto-deploys |
| **Update testimonials** | Edit `components/Testimonials.tsx`, push → auto-deploys |
| **Update service areas** | Edit `components/ServiceArea.tsx`, push → auto-deploys |

> **Pattern:** Edit file → `git add . && git commit -m "update X" && git push` → Vercel deploys automatically within ~60 seconds.

---

## Summary

| Step | Manual or Automated | Frequency |
|---|---|---|
| Vercel account + import repo | Manual | Once |
| Formspree setup + env var | Manual | Once |
| Custom domain + DNS | Manual | Once |
| SSL certificate | **Automated** | Never |
| Build & deploy on push | **Automated** | Every push |
| CDN distribution | **Automated** | Every deploy |
| Preview URLs for PRs | **Automated** | Every PR |
| Content updates (photos, videos, text) | Edit + push | As needed |
