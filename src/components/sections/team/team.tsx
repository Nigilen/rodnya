'use client'

import { FC } from 'react';
import styles from './team.module.css';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Navigation } from 'swiper/modules';

type TTeamProps = {
  name: string,
  members: { 
    id: string,
    name: string, 
    position: string,
    photo: string
  }[];
};

export const Team: FC<TTeamProps> = ({ name, members }) => {
  return (
    <section className={cn(styles.team, styles.wrapper)}>
      <h2 className={cn(styles.team__heading, 'container')}>{name}</h2>
      <div className={styles.team__wrapper}>
        <Swiper
          slidesPerView={3.3}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: '.control__left',
            nextEl: '.control__right',
          }}
          wrapperClass='container'
          breakpoints={
            {
              0: {
                slidesPerView: 1,
              },
              375: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2.3,
              },
              1440: {
                slidesPerView: 3.3,
              }
            }
          }
          className={styles.members}
        >
          {members.map((member) => (
            <SwiperSlide className={styles.member} key={member.id}>
              <picture className={styles.member__img_wrapper}>
                <img className={styles.member__img} src={member.photo} alt={member.name} width={395} height={284}/>
              </picture>
              <h3 className={styles.member__position} >{member.position}</h3>
              <p className={styles.member__name} >{member.name}</p>
            </SwiperSlide>
          ))}
          <button className={cn(styles.controls, styles.control__left, 'control__left')}></button>
          <button className={cn(styles.controls, styles.control__right, 'control__right')}></button>
        </Swiper>
      </div>
    </section>
  );
};