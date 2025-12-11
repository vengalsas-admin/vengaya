import '@/styles/globals/globals.css';
import { ibmPlexSans } from '@/configs/fonts';
import { metadata, viewport } from '@/configs/metadata';
import { LayoutShell } from '@/components/layout/LayoutShell';
import type { ReactNode } from 'react';
import WhatsAppButton from '@/components/whatsAppButton/WhatsAppButton';
import { Toaster } from 'react-hot-toast';

export { metadata, viewport };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={ibmPlexSans.className}>
        <LayoutShell>
          {children}
          <Toaster position="bottom-center" reverseOrder={false} />
        </LayoutShell>
        <WhatsAppButton />
      </body>
    </html>
  );
}
