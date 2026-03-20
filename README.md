# Ephravilla Construction Limited — Website

> **Building with Integrity** — Official website for Ephravilla Construction Limited, serving Nairobi, Kiambu and Murang'a.

A production-ready **Next.js 14** website for a professional construction company, featuring a full project gallery, equipment leasing catalog, contact form and floating WhatsApp integration.

---

## Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Framework  | Next.js 14 (App Router)  |
| UI Library | React 18                 |
| Styling    | Tailwind CSS v3           |
| Language   | TypeScript               |
| Fonts      | Geist Sans / Geist Mono  |
| Email      | Resend (optional)        |

---

## Running Locally

### 1. Clone and install

```bash
git clone https://github.com/your-org/ephravilla-construction.git
cd ephravilla-construction
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=254798900032
RESEND_API_KEY=re_your_key_here
```

### 3. Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### 4. Other commands

```bash
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking (no emit)
```

---

## Project Structure

```
ephravilla-construction/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — Navbar, Footer, WhatsApp
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Tailwind + global styles
│   ├── loading.tsx               # Global loading skeleton
│   ├── not-found.tsx             # Custom 404 page
│   ├── sitemap.ts                # Auto-generated /sitemap.xml
│   ├── robots.ts                 # Auto-generated /robots.txt
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx              # Services listing
│   │   └── [slug]/page.tsx       # Individual service detail
│   ├── projects/
│   │   ├── page.tsx              # Filterable project gallery
│   │   └── [slug]/page.tsx       # Project detail with gallery
│   ├── equipment/page.tsx        # Equipment catalog with filter
│   ├── contact/page.tsx          # Contact form + info
│   └── api/contact/route.ts      # Contact form API handler
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky nav, mobile hamburger
│   │   └── Footer.tsx            # Full footer with CTA strip
│   ├── forms/
│   │   └── ContactForm.tsx       # Validated contact form
│   └── common/
│       └── WhatsAppButton.tsx    # Floating + inline WhatsApp CTAs
│
├── lib/
│   ├── data/
│   │   ├── services.ts           # 7 services with full content
│   │   ├── projects.ts           # 8 projects with images
│   │   └── equipment.ts          # 8 equipment items with specs
│   └── utils/
│       ├── whatsapp.ts           # WhatsApp URL builder
│       └── seo.tsx               # JSON-LD schema helpers
│
├── types/index.ts                # All TypeScript interfaces
├── tailwind.config.ts
├── next.config.js
├── package.json
└── .env.example
```

---

## Pages

| Route                  | Description                                      |
|------------------------|--------------------------------------------------|
| `/`                    | Hero, about, services grid, projects, CTAs       |
| `/about`               | Company story, mission/vision, values, timeline  |
| `/services`            | All 7 services, process steps, FAQ               |
| `/services/[slug]`     | Service detail — scope, benefits, related        |
| `/projects`            | Filterable gallery (residential/commercial/etc.) |
| `/projects/[slug]`     | Project detail — gallery, services used, nav     |
| `/equipment`           | Equipment catalog with category filter           |
| `/contact`             | Contact form + WhatsApp + service areas          |

---

## Data Layer

All content lives in `lib/data/` as TypeScript arrays. To update:

- **Services** — edit `lib/data/services.ts`
- **Projects** — edit `lib/data/projects.ts` (swap Unsplash URLs for real photos)
- **Equipment** — edit `lib/data/equipment.ts`

To connect a headless CMS (Sanity, Contentful, etc.) in future, replace the data imports in each page with `async` fetch calls — the page interfaces stay identical.

---

## Contact Form Email Setup

The form posts to `app/api/contact/route.ts`. Add your email provider:

### Option A — Resend (recommended)

```bash
npm install resend
```

Uncomment and fill in `app/api/contact/route.ts`:

```typescript
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "website@ephravilla.com",
  to:   "accounts@ephravilla.com",
  subject: `New enquiry from ${name}`,
  html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone ?? "—"}</p>
    <p><strong>Service:</strong> ${service ?? "—"}</p>
    <p><strong>Project type:</strong> ${projectType ?? "—"}</p>
    <p><strong>Message:</strong><br>${message}</p>
  `,
});
```

### Option B — Nodemailer / SMTP

```bash
npm install nodemailer @types/nodemailer
```

Configure using `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` env vars.

---

## Deploying to Vercel

### Method 1 — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Method 2 — GitHub integration (recommended for teams)

1. Push your code to a GitHub repository
2. Go to **https://vercel.com/new**
3. Click **"Import Git Repository"** and select your repo
4. Vercel auto-detects Next.js — no build settings needed
5. Click **"Deploy"**

### Method 3 — Manual deploy (specific branch)

```bash
vercel --prod          # Deploy to production
vercel --prebuilt      # Deploy a pre-built output
```

### Environment variables on Vercel

After deployment, go to your project in the Vercel dashboard:

1. **Settings → Environment Variables**
2. Add the following:

| Variable                        | Value                      | Environment       |
|---------------------------------|----------------------------|-------------------|
| `NEXT_PUBLIC_SITE_URL`          | `https://ephravilla.com`   | Production        |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`   | `254798900032`             | All               |
| `RESEND_API_KEY`                | `re_xxxx...`               | Production        |

3. **Redeploy** after adding variables.

### Custom domain on Vercel

1. Go to **Project → Settings → Domains**
2. Add `ephravilla.com` and `www.ephravilla.com`
3. Update your domain registrar's DNS:
   - **A record**: `@` → `76.76.19.61`
   - **CNAME**: `www` → `cname.vercel-dns.com`

---

## Pre-Launch Checklist

- [ ] Replace all `images.unsplash.com` URLs with real project photos
- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Configure email service in `app/api/contact/route.ts`
- [ ] Add real logo SVG to `public/icons/logo.svg`
- [ ] Create OG image at `public/og-image.jpg` (1200×630 px)
- [ ] Create PWA icons: `public/icons/icon-192.png` and `icon-512.png`
- [ ] Add `public/favicon.ico` and `public/apple-touch-icon.png`
- [ ] Register on Google Search Console after deployment
- [ ] Set up Google Business Profile and link in `localBusinessSchema()`
- [ ] Test contact form end-to-end in production
- [ ] Run Lighthouse audit — target 90+ on all metrics

---

## Company Details

| Detail          | Value                    |
|-----------------|--------------------------|
| Company         | Ephravilla Construction Limited |
| Tagline         | Building with Integrity  |
| Founded         | 2024                     |
| Phone/WhatsApp  | 0798 900 032             |
| Email           | accounts@ephravilla.com  |
| Hours           | Mon–Sat, 8 AM–5 PM       |
| Office          | Kiambu (opening soon)    |
| Service Areas   | Nairobi, Kiambu, Murang'a|

---

## License

Private — all rights reserved by Ephravilla Construction Limited.
