import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arga-bayu-ramadhan.vercel.app"),
  title: {
    default: "Arga Bayu Ramadhan - Frontend Developer",
    template: "%s | Arga Bayu Ramadhan"
  },
  description:
    "Portfolio profesional Arga Bayu Ramadhan, Frontend Developer yang membangun website modern, responsif, cepat, dan SEO-friendly menggunakan React, Next.js, dan Tailwind CSS.",
  keywords: [
    "Arga Bayu Ramadhan",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Indonesia",
    "Portfolio Frontend Developer",
    "Landing Page Developer"
  ],
  authors: [{ name: "Arga Bayu Ramadhan" }],
  creator: "Arga Bayu Ramadhan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://arga-bayu-ramadhan.vercel.app",
    title: "Arga Bayu Ramadhan - Frontend Developer",
    description:
      "Saya membantu bisnis dan tim produk mengubah ide/desain menjadi pengalaman web yang modern, rapi, dan siap digunakan.",
    siteName: "Portfolio Arga Bayu Ramadhan"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arga Bayu Ramadhan - Frontend Developer",
    description:
      "Portfolio profesional Frontend Developer dengan fokus React, Next.js, Tailwind CSS, responsive UI, dan performance."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}