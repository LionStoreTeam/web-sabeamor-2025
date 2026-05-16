import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ContactWhatsAppButton } from "./components/ContactWhatsappButton";
import { bellotaText } from "../fonts/fonts";

export const metadata: Metadata = {
  title: "Sabe aMOR",
  description: "Venta de flor de jamaica de la mejor calidad",

  keywords: ['Jamaica', 'Flor de Jamaica', 'Agua de Jamaica', 'La Jamaica', 'Beneficios de la Jamaica'],
  authors: [{ name: 'Sabe aMOR', url: 'https://web-sabeamor-2025.vercel.app/' }],
  creator: 'Sabe aMOR',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://web-sabeamor-2025.vercel.app/',
    siteName: 'Sabe aMOR',
    title: 'Sabe aMOR | Venta de Flor de Jamaica',
    description: 'Venta de flor de jamaica de la mejor calidad',
    images: [
      {
        url: '/logo-t.png',
        width: 1200,
        height: 630,
        alt: 'Sabe aMOR- Venta de Flor de Jamaica',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', media: '(prefers-color-scheme: light)' },
      { url: '/favicon/favicon-96x96.png', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es_MX">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Sabe aMOR" />
      </head>
      <body
        className={bellotaText.className}
      >
        <Navbar />
        {children}
        <ContactWhatsAppButton />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
