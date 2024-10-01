import { FC } from "react";
import styles from "./burger.module.css";

type TBurgerProps = {
  handler: () => void,
  color: string
}

export const Burger: FC<TBurgerProps> = ({handler, color}) => {
  return (
    <button className={styles.burger} onClick={handler}>
      <span style={{backgroundColor: color}}></span>
      <span style={{backgroundColor: color}}></span>
    </button>
  )
}