import "./globals.css";
import { Footer } from "@/src/components/layout/footer/footer";
import { Header } from "@/src/components/layout/header/header";
import styles from "./layout.module.css";
import { Cursor } from "@/src/ui-kit/cursor/cursor";

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
