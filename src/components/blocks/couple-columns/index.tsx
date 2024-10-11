import { FC, ReactNode } from "react";
import styles from "./couple-columns.module.css";
import cn from "classnames";

type TCoupleColumnsProps = {
  heading?: string,
  border?: boolean,
  project?: string, 
  children: ReactNode
}

export const CoupleColumns: FC<TCoupleColumnsProps> = ({heading, border, project, children}) => {
  return (
    <>{project && <div className={styles.project_name}>{project}</div>}
      <div className={cn(styles.couple_columns, border && [styles.top_border])}>
        <h2 className={styles.couple_columns__title}>{heading}</h2>
        <div className={styles.couple_columns__content}>
          {children}
        </div>
      </div>
    </>
  )
}