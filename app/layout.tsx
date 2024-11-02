import "./globals.css";
import { Footer } from "@/src/components/layout/footer/footer";
import { Header } from "@/src/components/layout/header/header";
import styles from "./layout.module.css";
import { Cursor } from "@/src/ui-kit/cursor/cursor";
import type { Metadata } from 'next';
import { FRONT_BASE_URL } from "@/src/utils/config";

export const metadata: Metadata = {
  title: 'RODNYA Creative PR Studio',
  description: 'Креатив, который становится новостью',
  openGraph: {
    title: 'RODNYA Creative PR Studio',
    url: FRONT_BASE_URL,
    description: 'Креатив, который становится новостью',
    siteName: 'RODNYA Creative PR Studio',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className='page'>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}
