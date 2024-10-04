'use client'

import { FC } from "react";
import Image from "next/image";
import styles from "./hero-carousel.module.css";
import cn from "classnames";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

type Item = {
  link: string,
  alt: string
}

type THeroCarouselP = {
  heading: string,
  items: Item[]
}

export const HeroCarousel: FC<THeroCarouselP> = ({ heading, items }) => {


  return (
    <section className={styles.hero_cases}>
      <h1>{heading}</h1>
      <div className={cn(styles.carousel, 'swiper')}>
        <Swiper 
          spaceBetween={0}
          centeredSlides={false}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 1000,
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
          {items.map((item, index) => (
            <SwiperSlide className={styles.carousel__item} key={index}>
              <Image className={styles.carousel__img} src={item.link} width={1440} height={645} alt={item.alt} />
            </SwiperSlide>
          ))}
          <div className={cn(styles.carousel__nav, 'swiper-pagination')}></div>
        </Swiper>
      </div>
    </section>
  );
};