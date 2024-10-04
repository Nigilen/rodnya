import { FC } from "react";
import styles from "./container.module.css";

type TContainerProps = {
  children: React.ReactNode
}

export const Container: FC<TContainerProps> = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}