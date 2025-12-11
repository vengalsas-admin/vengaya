import { IBM_Plex_Sans } from 'next/font/google';

export const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  fallback: ['sans-serif'],
  preload: true,
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});
