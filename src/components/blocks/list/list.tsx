import { FC } from 'react';
import styles from './list.module.css';

type TListProps = {
  children: React.ReactNode;
};

export const List: FC<TListProps> = ({ children }) => {
  return (
    <ul className={styles.list}>
      {children}
    </ul>
  );
};