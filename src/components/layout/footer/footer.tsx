'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";
import styles from "./footer.module.css";
import { FC } from "react";
import { FooterMainPage } from './footer-main-page/footer-main-page';


export const Footer: FC = ({}) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/' ? 
        <footer className={styles.footer}>
          <div>
            <section className={styles.footer_bottom}>
              <p>ООО&nbsp;«Креативные&nbsp;ПИАР-решения»</p>
              <Link href="/privacy" className="privacy">Политика конфиденциальности</Link>
              <p>©2024</p>
            </section>
          </div>
        </footer>
      : 
      <FooterMainPage />
      }
    </>
  )
}