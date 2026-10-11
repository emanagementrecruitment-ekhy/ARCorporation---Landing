# AR Corporation, Landing Page

Situs resmi: https://officialarcorporation.my.id

Landing page untuk AR Corporation (Integrated HR System Management di Lapangan).
Dibangun dengan React 19, TypeScript, Vite, Tailwind CSS 4, dan Motion.

## Menjalankan di komputer

```
npm install
npm run dev      # pengembangan, http://localhost:5173
npm run build    # build produksi ke folder dist
npm run preview  # coba hasil build
```

## Mengubah isi situs

- `src/lib/site.ts`: kontak, alamat, link sosial media, tautan aplikasi, dan saklar `SHOW`.
- `src/components/Pricing.tsx`: paket dan harga.
- `src/components/Faq.tsx`: pertanyaan umum.
- `src/components/Services.tsx`, `Process.tsx`: layanan dan alur kerja.
- `index.html`: judul, deskripsi, Open Graph, dan data terstruktur (SEO).

## Bagian yang masih disembunyikan

Metrik, studi kasus, dan testimoni masih berisi contoh, jadi disembunyikan lewat `SHOW` di `src/lib/site.ts`.
Isi dengan data asli (`TrustMetrics.tsx`, `CaseStudies.tsx`, `Testimonials.tsx`), lalu ubah saklarnya menjadi `true`.

## Deploy

Repo ini terhubung ke Vercel. Push ke branch `main` otomatis memperbarui situs produksi.
