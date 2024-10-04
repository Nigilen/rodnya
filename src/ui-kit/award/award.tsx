import { FC } from 'react';
import styles from './award.module.css';

export type TAward = {
  text: string;
  counter: number;
};

export const Award: FC<TAward> = ({ text, counter }) => {
  return (
    <li className={styles.award}>
      <p className={styles.award__text}>{text}</p>
      <sup className={styles.award__counter}>({counter})</sup>
    </li>
  )
};