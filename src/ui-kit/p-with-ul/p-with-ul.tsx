import { FC } from 'react';
import styles from './p-with-ul.module.css';

type TPWithUlProps = {
  text: string;
  list?: string[];
};

export const PWithUl: FC<TPWithUlProps> = ({text, list}) => {
  return (
    <div className={styles.p_with_ul}>
      <p className={styles.text}>{text}</p>
      {list ? 
        <ul className={styles.list}>
          {list?.map((item, index) => (
            <li className={styles.list__item} key={index}>{item}</li>
          ))}
        </ul> : null
      }
    </div>
  );
};