import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { CursorEffect } from '@/components/layout/CursorEffect';
import { StructuredData } from '@/components/ui/StructuredData';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://www.advokatskakancelarijasavic.com';
const title = 'Advokatska Kancelarija Savić';
const description =
  'Advokatska kancelarija Savic pruža vrhunsku pravnu podršku fizičkim i pravnim licima iz oblasti građanskog, privrednog, bankarskog, radnog i poreskog prava širom Srbije.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Advokatska Kancelarija Savić',
  },
  description,
  keywords: [
    'advokatska kancelarija',
    'advokat Novi Sad',
    'privredno pravo',
    'nekretnine',
    'radno pravo',
    'restitucija',
  ],
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: siteUrl,
    siteName: 'Advokatska Kancelarija',
    title,
    description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Advokatska Kancelarija' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <StructuredData />
        <LoadingScreen />
        <ScrollProgress />
        <CursorEffect />
        <SmoothScrollProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
