import { FC } from 'react';
import styles from './services-list.module.css';
import { TList } from '@/src/components/sections/services/services';


type TServicesListProps = {
  list: TList[]
};

// typeguard


export const ServicesList: FC<TServicesListProps> = ({list}) => {
  return (
    <ul className={styles.list}>
      {list.map((item, i) => (
        <li className={styles.list_item} key={i}>{item.item}</li>
      ))}
    </ul>
  );
};