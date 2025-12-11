import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: {
    default: 'VengaYa | Créditos que te acercan a tus metas',
    template: '%s | VengaYa',
  },
  description:
    'Solicita tu crédito en línea con VengaYa. Préstamos personales, por libranza y para negocios desde 1 hasta 50 millones. 100% digital, seguro y confiable.',
  generator: 'Next.js',
  applicationName: 'VengaYa',
  keywords: [
    'vengaya',
    'fintech Colombia',
    'créditos digitales',
    'crédito en línea',
    'préstamos rápidos',
    'cuotas fijas',
    'asesoría financiera',
  ],
  authors: [
    { name: 'Vengal SAS', url: 'https://www.vengaya.com.co' },
    { name: 'Leopoldo Caraballo', url: 'https://github.com/leopoldocaraballo' },
  ],
  creator: 'Leopoldo Caraballo',
  metadataBase: new URL('https://www.vengaya.com.co'),
  openGraph: {
    title: 'VengaYa | Créditos que te acercan a tus metas',
    description:
      'Solicita tu crédito en línea con VengaYa. Rápido, digital y confiable. Desde 1 hasta 50 millones de pesos con cuotas fijas y asesoría personalizada.',
    url: 'https://www.vengaya.com.co',
    siteName: 'VengaYa',
    images: [
      {
        url: 'https://www.vengaya.com.co/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VengaYa - Crédito rápido y seguro',
      },
    ],
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VengaYa | Créditos que te acercan a tus metas',
    description:
      'Solicita tu crédito digital con VengaYa. Desde 1 hasta 50 millones de pesos con asesoría personalizada.',
    site: '@vengaya_co',
    creator: '@leopoldocaraballo',
    images: ['https://www.vengaya.com.co/og-image.jpg'],
  },
};
