import type { Metadata } from "next";
import "./globals.css";
import { bellotaText } from "../../fonts/fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";



export const metadata: Metadata = {
  title: "Sabe aMOR",
  description: "Flor de jamaica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={bellotaText.className}
      >
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
