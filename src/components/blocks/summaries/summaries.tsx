import { FC } from "react";
import styles from "./summaries.module.css";

type TSummariesProps = {
  children: React.ReactNode;
};

export const Summaries: FC<TSummariesProps> = ({children}) => {
  return (
    <dl className={styles.summaries}>
      {children}
    </dl>
  );
};