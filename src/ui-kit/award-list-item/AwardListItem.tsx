import { FC } from 'react';
import styles from './AwardListItem.module.css';

type Props = {
  text: string;
  counter: number;
};

export const AwardListItem: FC<Props> = ({ text, counter }) => {
  return (
    <li className={styles.award}>
      <p className={styles.award__text}>{text}</p>
      <sup className={styles.award__counter}>({counter})</sup>
    </li>
  )
};