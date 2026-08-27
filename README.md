# NOCTRA Web Application

NOCTRA adalah platform aplikasi web modern yang dibangun menggunakan ekosistem React. Proyek ini berfokus pada performa yang cepat, antarmuka yang responsif dengan nuansa monokrom (hitam-putih), dan pengalaman pengguna yang mulus.

## Tech Stack

- Framework: React.js + Vite
- Styling: Tailwind CSS
- Routing: React Router DOM
- Backend/Serverless: Vercel Serverless Functions
- Deployment: Vercel

## Cara Menjalankan Proyek (Lokal)

Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi di komputer lokal:

1. Clone repository ini
```bash
git clone [https://github.com/WahyuRahmadHidayat/noctrav2.git](https://github.com/WahyuRahmadHidayat/noctrav2.git)

## Development Lokal dengan Vercel CLI

Proyek ini menggunakan Vercel Serverless Functions di folder `/api`. Agar backend dan frontend berjalan di port yang sama secara lokal (menghindari isu CORS), **WAJIB** menjalankan proyek dengan Vercel CLI.

1. Install Vercel CLI: `npm i -g vercel`
2. Link proyek ke Vercel: `vercel link`
3. Tarik environment variables: `vercel env pull .env.local`
4. Jalankan development server: `vercel dev` (JANGAN gunakan `npm run dev`)