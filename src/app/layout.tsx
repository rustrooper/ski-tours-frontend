import type { Metadata } from 'next';
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google';

import { FooterSection } from '@/components/layout/FooterSection';
import { HeaderSection } from '@/components/layout/HeaderSection';

import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sanek Tours — авторские горнолыжные туры по России',
  description:
    'Туда, где живёт пухляк. Авторские горнолыжные туры по России от тех, кто сам катается. Логистика, жильё, ски-пассы — на нас.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <HeaderSection />
        <main className="flex-1">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
