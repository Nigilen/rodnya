'use client'

import { FC } from 'react';
import styles from './team-t.module.css';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconArrow } from '../../svg/icon-arrow';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  name: string;
  members: {
    id: string;
    name: string;
    position: string;
    photo: string;
  }[];
}

export const TeamT: FC<Props> = ({ name, members }) => {
  return (
    <section className={styles.team}>

      <div className={styles.team_header}>
        <h2 className={styles.team_title}>{name}</h2>
        <div className={styles.controls}>
          <button className={cn(styles.control, styles.control_prev, 'prev')} type='button'>
            <IconArrow className={styles.controls_icon} direction="backward" />
          </button>
          <button className={cn(styles.control, styles.control_next, 'next')} type='button'>
            <IconArrow className={styles.controls_icon} direction="forward" />
          </button>
        </div>
      </div>

      <Swiper 
        className={styles.team_list}
        modules={[Navigation]}
        scrollbar={false}
        slidesOffsetAfter={56}
        slidesOffsetBefore={56}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
          disabledClass: styles.control__disabled,
        }}
        
        slidesPerView={3.3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesOffsetAfter: 16,
            slidesOffsetBefore: 16
          },
          375: {
            slidesPerView: 1.25,
            spaceBetween: 20,
            slidesOffsetAfter: 16,
            slidesOffsetBefore: 16
          },
          768: {
            slidesPerView: 1.7,
            spaceBetween: 55,
            slidesOffsetAfter: 40,
            slidesOffsetBefore: 40
          },
          900: {
            slidesPerView: 2.3,
            spaceBetween: 55,
            slidesOffsetAfter: 40,
            slidesOffsetBefore: 40
          },
          1024: {
            slidesPerView: 2.7,
            spaceBetween: 55,
            slidesOffsetAfter: 40,
            slidesOffsetBefore: 40
          },
          1440: {
            slidesPerView: 3.3,
            spaceBetween: 55,
            slidesOffsetAfter: 56,
            slidesOffsetBefore: 56
          },
          1920: {
            slidesPerView: 4.4,
            spaceBetween: 55
          },
          2560: {
            slidesPerView: 5.7,
            spaceBetween: 55
          },
        }}
      >
        {members.map((member) => (
            <SwiperSlide className={styles.member} key={member.id}>
              <picture className={styles.member_img__wrapper}>
                <img
                  className={styles.member_img}
                  src={member.photo}
                  alt={member.name}
                  width={395}
                  height={584}
                  loading="lazy"
                />
              </picture>
              <h3 className={styles.member__name}>{member.name}</h3>
              <p className={styles.member__position}>{member.position}</p>
            </SwiperSlide>
          ))}
      </Swiper>


    </section>
  );
}