import { FC } from "react";
import styles from "./paragraph.module.css";
import { HTMLBlock } from "@/src/utils/html-block";

type TParagraphP = {
  text: string
}

export const Paragraph: FC<TParagraphP> = ({text}) => {
  return (
    <p className={styles.paragraph}>
      <HTMLBlock rawHtml={text} />
    </p>
  );
}