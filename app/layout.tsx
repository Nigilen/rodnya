import "./globals.css";
import { Footer } from "@/src/components/layout/footer/footer";
import { Header } from "@/src/components/layout/header/header";
import styles from "./layout.module.css";
import AnimatedCursor from "react-animated-cursor";

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
        <AnimatedCursor 
          innerSize={24}
          outerSize={0}
          color='181, 181, 181'
          outerAlpha={1}
          innerScale={2}
          outerScale={0}
          outerStyle={{
            filter: 'blur(14px)'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link-cursor',
          ]}
        />
      </body>
    </html>
  );
}
