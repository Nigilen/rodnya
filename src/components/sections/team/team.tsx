'use client'

import { FC } from 'react';
import styles from './team.module.css';
import cn from 'classnames';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Mousewheel, Navigation } from 'swiper/modules';

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
      <div className={cn(styles.team__wrapper, 'remove_swiper_overflow')}>
        <Swiper
          slidesPerView={3.3}
          spaceBetween={30}
          pagination={{
            clickable: false,
          }}
          modules={[Navigation, Mousewheel]}
          navigation={{
            disabledClass: styles.control__disabled,
            prevEl: '.control__left',
            nextEl: '.control__right',
          }}
          // mousewheel={{
          //   forceToAxis: false,
          //   sensitivity: 1,
          //   releaseOnEdges: true,
          // }}
          wrapperClass='team-container'
          simulateTouch={true}
          scrollbar={false}
          // scrollbar={{
          //   el: '.swiper-scrollbar',
          //   hide: true,
          //   enabled: false,
          //   draggable: false,
          // }}
          breakpoints={
            {
              0: {
                slidesPerView: 1,
              },
              375: {
                slidesPerView: 1.2,
                // simulateTouch: true
              },
              768: {
                slidesPerView: 2.3,
                // simulateTouch: true
              },
              1440: {
                slidesPerView: 3.3,
                // simulateTouch: false
              },
              1920: {
                slidesPerView: 4.3,
                // simulateTouch: false
              },
              2560: {
                slidesPerView: 5.7,
                // simulateTouch: false
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
              <h3 className={styles.member__name} >{member.name}</h3>
              <p className={styles.member__position} >{member.position}</p>
            </SwiperSlide>
          ))}
          <button className={cn(styles.controls, styles.control__left, 'control__left')}>
            <Image src={'./arrow-left.svg'} alt={''} width={24} height={62.57}/>
          </button>
          <button className={cn(styles.controls, styles.control__right, 'control__right')}>
            <Image src={'./arrow-right.svg'} alt={''} width={24} height={62.57}/>
          </button>
        </Swiper>
      </div>
    </section>
  );
};