import { FC } from 'react';
import styles from './team.module.css';
import Image from 'next/image';
import cn from 'classnames';

type TTeamProps = {
  name: string,
  members: { 
    id: string,
    name: string, 
    position: string,
    image: string
  }[];
};

export const Team: FC<TTeamProps> = ({ name, members }) => {
  return (
    <section className={cn(styles.team, styles.wrapper, 'container')}>
      <h2 className={styles.team__heading}>{name}</h2>
      <ul className={styles.members}>
        {members.map((member) => (
          <li className={styles.member} key={member.id}>
            <picture className={styles.member__img_wrapper}>
              <Image className={styles.member__img} src={member.image} alt={member.name} width={395} height={284}/>
            </picture>
            <h3 className={styles.member__position} >{member.position}</h3>
            <p className={styles.member__name} >{member.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};