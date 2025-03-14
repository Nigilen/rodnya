import { FC, ReactNode } from "react";
import styles from "./couple-columns.module.css";
import "./modifiers.css";
import cn from "classnames";

type Props = {
  heading?: string,
  border?: boolean,
  project?: string, 
  children: ReactNode,
  classModifier?: string,
}

export const CoupleColumns: FC<Props> = ({heading, border, project, children, classModifier}) => {
  return (
    <>{project && <div className={styles.project_name}>{project}</div>}
      <div className={cn(styles.couple_columns, border && [styles.top_border], classModifier)}>
        <h2 className={styles.couple_columns__title}>{heading}</h2>
        <div className={styles.couple_columns__content}>
          {children}
        </div>
      </div>
    </>
  )
}