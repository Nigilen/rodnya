import { FC } from "react";
import styles from "./footer-main-page.module.css";


export const FooterMainPage: FC = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__index}>
        <p className={styles.footer__index_left}>Креатив, который становится&nbsp;новостью</p>
        <p className={styles.footer__index_right}>RODNYA<br/>Creative&nbsp;PR&nbsp;Studio</p>
      </div>
    </footer>
  )
}