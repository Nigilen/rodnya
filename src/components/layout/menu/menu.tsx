import Link from "next/link";
import { FC } from "react";
import cn from "classnames";
import styles from "./menu.module.css";
import { NAV_LINKS } from "@/src/utils/constants";
import { CloseIcon } from "../../svg/close-icon/close-icon";

type TMenuProps = {
  isOpen: boolean;
  handler: () => void;
};

export const Menu: FC<TMenuProps> = ({isOpen, handler}) => {
  return (
    <>
      {isOpen && <div className={styles.nav_bg} onClick={handler}>
        <div className={styles.nav_overlay}></div></div>}
      <div className={cn(styles.menu, { [styles.menu__open]: isOpen })}>
        <ul className={styles.menu__list}>
          {NAV_LINKS.map((link, i) => (
            <li className={styles.nav_item} key={link.id} data-lol={i}>
              <Link 
                style={{ transitionDelay: `${i*0.1}s` }}
                className={styles.nav_item_link} href={link.route} onClick={handler}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <button className={styles.close_button} onClick={handler}>
          <CloseIcon />
        </button>
        <footer className={styles.nav_footer}>
          <div className={styles.nav_footer_company}>
            <p>ООО&nbsp;«Креативные&nbsp;ПИАР-решения»</p>
            <a href="./policy.docx" target="_blank" download className={styles.nav_footer_privacy}>Политика конфиденциальности</a>
          </div>
          <p className={styles.nav_footer_copyright}>©2024</p>
        </footer>
      </div>
    </>
  );
};