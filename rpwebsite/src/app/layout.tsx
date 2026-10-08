import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { site } from "@/data/content";

// self-hosted at build time (no request to Google Fonts from the visitor's browser)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${site.projectId} · ${site.title}`, template: `%s · ${site.projectId}` },
  description: site.subtitle,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${site.projectId} — ${site.title}`,
    description: site.subtitle,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${rubik.variable}`}>
      <body className="font-sans">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
