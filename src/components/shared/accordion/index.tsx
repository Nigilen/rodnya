import { FC } from 'react';
import styles from './accordion.module.css';

type TAccordionProps = {
  children: React.ReactNode;
};

export const Accordion: FC<TAccordionProps> = ({children}) => {
  return (
    <ul className={styles.accordion}>
      {children}
    </ul>
  );
};