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
