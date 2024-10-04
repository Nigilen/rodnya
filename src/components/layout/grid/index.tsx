import { FC } from "react";
import styles from "./grid.module.css";
import cn from 'classnames';

type TGridProps = {
  children: React.ReactNode;
};

export const Grid: FC<TGridProps> = ({children}) => {
  return (
    <ul className={cn(styles.grid, styles.wrapper, 'container')}>
      {children}
    </ul>
  );
}