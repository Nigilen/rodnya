'use client'

import { Logo } from "@/src/components/svg/logo";
import Link from "next/link";
import { FC, useState } from "react";
import styles from "./navigation.module.css";
import { Menu } from "../menu/menu";
import { Burger } from "@/src/ui-kit/burger/burger";
import { usePathname } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/constants";

export const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const color = pathname === '/' || pathname === '/cases' ? "#FF213C" : "#ffffff";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <Link href={APP_ROUTES.ROOT} className={styles.nav_link} aria-label="На главную страницу">
        <Logo fill={color} />
      </Link>
      <Burger handler={handleClick} color={color} />
      <Menu isOpen={isOpen} handler={handleClick} />
    </nav>
  )
}