import { FC } from 'react';
import styles from './accordion-item.module.css';

type TAccordionItemProps = {
  title: string,
  children: React.ReactNode;
};

export const AccordionItem: FC<TAccordionItemProps> = ({ title, children }) => {
  return (
    <li className={styles.accordion_item}>
      <h3 className={styles.accordion_item__title}>{title}</h3>
      {children}
    </li>
  );
};