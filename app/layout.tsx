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
          showSystemCursor={true}
          innerSize={24}
          outerSize={22}
          color='181, 181, 181'
          outerAlpha={0.9}
          innerScale={0.1}
          outerScale={2}
          trailingSpeed={1}
          outerStyle={{
            filter: 'blur(3px)',
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
