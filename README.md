# Portfolio Profesional - Arga Bayu Ramadhan

Website portfolio profesional untuk Arga Bayu Ramadhan sebagai Frontend Developer. Dibuat menggunakan Next.js, TypeScript, dan Tailwind CSS dengan desain modern, responsif, cepat, serta siap deploy ke Vercel.

## Fitur Utama

- Hero section dengan CTA jelas.
- About section untuk personal branding.
- Services section untuk penawaran jasa frontend.
- Projects section untuk showcase portfolio.
- Skills section untuk stack teknis.
- Workflow section untuk menjelaskan proses kerja.
- Testimonials placeholder.
- Contact section dengan form mailto, email, WhatsApp, dan social links.
- SEO metadata, robots.txt, dan sitemap.xml.
- Responsive mobile-first.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- next/font

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build Production

```bash
npm run build
npm start
```

## Deploy

Direkomendasikan deploy ke Vercel:

1. Push repository ke GitHub.
2. Import project di Vercel.
3. Deploy dengan pengaturan default Next.js.

## Struktur Penting

```text
app/
  layout.tsx
  page.tsx
  globals.css
public/
  robots.txt
  sitemap.xml
PRD.md
README.md
```

## Catatan Konten

Beberapa data seperti link GitHub, LinkedIn, email, dan nomor WhatsApp masih memakai placeholder yang mudah diganti di `app/page.tsx`.