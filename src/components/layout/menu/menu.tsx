import Link from "next/link";
import { FC } from "react";
import cn from "classnames";
import styles from "./menu.module.css";
import { CloseButton } from "@/src/ui-kit/close-button/close-button";

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
          <li className="nav-item">
            <Link className="nav-item-link" href="/" onClick={handler}>Главная</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" href="/about" onClick={handler}>О нас</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" href="/cases" onClick={handler}>Кейсы</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" href="/contacts" onClick={handler}>Контакты</Link>
          </li>
        </ul>
        <CloseButton handler={handler} />
        <footer className="nav_footer">Footer of Navigation</footer>
      </div>
    </>
  );
};