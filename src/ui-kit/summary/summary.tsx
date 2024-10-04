import { FC } from "react";
import styles from "./summary.module.css";

type TSummaryP = {
  termin: string;
  definition: string;
};

export const Summary: FC<TSummaryP> = ({termin, definition}) => {
  return (
    <div className={styles.summary}>
      <dt className={styles.summary_termin}>{termin}</dt>
      <dd className={styles.summary_definition}>{definition}</dd>
    </div>
  );
};