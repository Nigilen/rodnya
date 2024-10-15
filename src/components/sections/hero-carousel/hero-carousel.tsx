'use client'

import { FC } from "react";
import styles from "./hero-carousel.module.css";
import cn from "classnames";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


type THeroCarouselP = {
  heading: string,
  items: string[],
  preview: string
}

export const HeroCarousel: FC<THeroCarouselP> = ({ heading, items, preview }) => {
  return (
    <section className={styles.hero_cases}>
      <h1>{heading}</h1>
      <div className={cn(styles.carousel, 'swiper')}>
        {items.length < 1 ?
          <img className={styles.carousel__img} src={preview} />
        : 
          <Swiper 
            spaceBetween={0}
            centeredSlides={false}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: styles.nav_dot,
              bulletActiveClass: styles.nav_dot__current,
            }}
            navigation={false}
            modules={[Autoplay, Pagination]}
            className={styles.carousel__track}
          >
            {items.map((item, i) => (
              <SwiperSlide className={styles.carousel__item} key={i}>
                <img className={styles.carousel__img} src={item} width={1440} height={645} />
              </SwiperSlide>
            ))}
            <div className={cn(styles.carousel__nav, 'swiper-pagination')}></div>
          </Swiper>
        }
      </div>
    </section>
  );
};