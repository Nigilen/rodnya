import { FC } from "react";
import styles from "./burger.module.css";

type TBurgerProps = {
  handler: () => void,
  color: string
}

export const Burger: FC<TBurgerProps> = ({handler, color}) => {
  return (
    <button className={styles.burger} onClick={handler}>
      <span className={styles.burger_line} style={{backgroundColor: color}}></span>
      <span className={styles.burger_line} style={{backgroundColor: color}}></span>
    </button>
  )
}