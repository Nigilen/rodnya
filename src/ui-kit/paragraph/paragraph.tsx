import { FC } from "react";
import styles from "./paragraph.module.css";

type TParagraphP = {
  text: string
}

export const Paragraph: FC<TParagraphP> = ({text}) => {
  return (
    <p className={styles.paragraph}>
      {text}
    </p>
  );
}