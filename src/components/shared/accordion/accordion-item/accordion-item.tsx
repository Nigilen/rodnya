'use client'

import { FC, useState } from 'react';
import styles from './accordion-item.module.css';
import cn from 'classnames';
import { IconPlus } from '@/src/components/svg/icon-plus';

type TAccordionItemProps = {
  title: string;
  children: React.ReactNode;
};

export const AccordionItem: FC<TAccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className={styles.accordion_item}>
      <div className={styles.accordion_item_heading} onClick={handleClick}>
        <h3 className={styles.accordion_item__title}>{title}</h3>
        <IconPlus fill="#000000" className={cn([styles.accordion_item__icon, isOpen && styles.rotate])} />
      </div>
      <div className={cn(styles.accordion_content, [isOpen && styles.show_content])}>
        {children}
      </div>
    </li>
  );
};