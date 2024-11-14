"use client";

import { usePathname } from "next/navigation";
import styles from "./footer.module.css";
import { FC } from "react";
import { FooterMainPage } from "./footer-main-page/footer-main-page";

export const Footer: FC = ({}) => {
  const pathname = usePathname();

  return (
    <>
      { pathname !== "/" &&
        <footer className={styles.footer}>
          <div>
            <section className={styles.footer_bottom}>
              <p className={styles.company}>ООО&nbsp;«Креативные&nbsp;ПИАР-решения»</p>
              <a
                target="_blank"
                rel="noopener"
                href="/rodnya_policy.docx"
                className="privacy"
              >
                Политика конфиденциальности
              </a>
              <p className={styles.copyrite}>©2024</p>
            </section>
          </div>
        </footer>
      }
      { pathname === "/" && <FooterMainPage />}
    </>
  );
};
