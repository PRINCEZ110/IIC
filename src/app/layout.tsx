import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iic.edu.np'),
  title: {
    default: 'IIC - International Institute of Computer Science | Leading IT Education in Nepal',
    template: '%s | IIC',
  },
  description: 'International Institute of Computer Science (IIC) - Nepal\'s premier institution for IT and Computer Science education. Offering undergraduate and postgraduate programs in computing, software engineering, and data science.',
  keywords: ['IIC', 'International Institute of Computer Science', 'IT education Nepal', 'computer science degree', 'software engineering', 'data science', 'BSc Computing', 'MSc Computing'],
  authors: [{ name: 'IIC' }],
  creator: 'IIC',
  publisher: 'IIC',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_NP',
    url: 'https://iic.edu.np',
    siteName: 'IIC - International Institute of Computer Science',
    title: 'IIC - International Institute of Computer Science',
    description: 'Nepal\'s premier institution for IT and Computer Science education',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IIC Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIC - International Institute of Computer Science',
    description: 'Nepal\'s premier institution for IT and Computer Science education',
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#080B3D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}