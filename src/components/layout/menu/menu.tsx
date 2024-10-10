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
          {NAV_LINKS.map((link) => (
            <li className={styles.nav_item} key={link.id}>
              <Link className={styles.nav_item_link} href={link.route} onClick={handler}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <button className={styles.close_button} onClick={handler}>
          <CloseIcon />
        </button>
        <footer className={styles.nav_footer}>
          <div>
            <p className={styles.nav_footer_company}>ООО&nbsp;«Креативные&nbsp;ПИАР-решения»</p>
            <Link href="/privacy" className={styles.nav_footer_privacy}>Политика конфиденциальности</Link>
          </div>
          <p className={styles.nav_footer_copyright}>©2024</p>
        </footer>
      </div>
    </>
  );
};