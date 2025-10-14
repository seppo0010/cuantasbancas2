import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "¿Cuántas bancas?",
  description: "Simulador de distribución de las elecciones legislativas de 2025",
  openGraph: {
    siteName: '¿Cuántas bancas?',
    images: 'http://simulador.poderciudadano.org/card.png',
    url: 'http://simulador.poderciudadano.org/',
    countryName: 'Argentina',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
