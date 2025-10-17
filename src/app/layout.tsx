import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "./Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "¿Cuántas bancas? - Simulador electoral 2025",
  description: "Simulá la distribución de bancas en las elecciones legislativas de Argentina 2025. Probá diferentes resultados y conocé cómo funciona el sistema D'Hondt.",
  keywords: ["elecciones", "argentina", "2025", "simulador", "bancas", "diputados", "senadores", "d'hondt"],
  authors: [{ name: "Poder Ciudadano" }],
  openGraph: {
    title: "¿Cuántas bancas? - Simulador electoral 2025",
    description: "Simulá la distribución de bancas en las elecciones legislativas de Argentina 2025",
    siteName: '¿Cuántas bancas?',
    images: [
      {
        url: 'https://simulador.poderciudadano.org/card.png',
        width: 1200,
        height: 630,
        alt: 'Simulador electoral ¿Cuántas bancas?',
      }
    ],
    url: 'https://simulador.poderciudadano.org/',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "¿Cuántas bancas? - Simulador electoral 2025",
    description: "Simulá la distribución de bancas en las elecciones legislativas de Argentina 2025",
    images: ['https://simulador.poderciudadano.org/card.png'],
    creator: '@poderciudadano',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        {children}
        <Footer />
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="9ad3c476-6612-4e72-a1eb-1316df12d4a9"
          data-utcoffset="-3"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
