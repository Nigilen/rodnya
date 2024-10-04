import { FC } from "react";
import styles from "./header.module.css";
import { Navigation } from "../navigation/navigation";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  )
}