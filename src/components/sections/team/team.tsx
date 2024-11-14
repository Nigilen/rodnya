"use client";

import { FC, useState } from "react";

import cn from "classnames";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";

import { IconArrow } from "@/src/components/svg/icon-arrow";

import styles from "./team.module.css";

import "swiper/css";
import "swiper/css/pagination";

type TTeamProps = {
  name: string;
  members: {
    id: string;
    name: string;
    position: string;
    photo: string;
  }[];
};

export const Team: FC<TTeamProps> = ({ name, members }) => {
  const [swiperState, setSwiperState] = useState<SwiperClass>();

  const [swiperNavigationState, setSwiperNavigationState] = useState<{
    prevEnabled: boolean;
    nextEnabled: boolean;
  }>({ prevEnabled: false, nextEnabled: true });

  const swiperNavigate = (direction: "backward" | "forward") => {
    switch (direction) {
      case "backward":
        swiperState?.slidePrev();
        break;

      case "forward":
        swiperState?.slideNext();
        break;

      default:
        break;
    }
  };

  return (
    <section className={cn(styles.team, styles.wrapper)}>
      <h2 className={cn(styles.team__heading)}>
        <span>{name}</span>
        <div className={styles.controls_top}>
          <button
            onClick={() => swiperNavigate("backward")}
            disabled={!swiperNavigationState.prevEnabled}
          >
            <IconArrow className={styles.controls_icon} />
          </button>
          <button
            onClick={() => swiperNavigate("forward")}
            disabled={!swiperNavigationState.nextEnabled}
          >
            <IconArrow className={styles.controls_icon} direction="forward" />
          </button>
        </div>
      </h2>
      <div className={cn(styles.team__wrapper, "remove_swiper_overflow")}>
        <Swiper
          onSwiper={(swiper) => setSwiperState(swiper)}
          onSlideChange={(swiper) =>
            setSwiperNavigationState({
              prevEnabled: !swiper.isBeginning,
              nextEnabled: !swiper.isEnd,
            })
          }
          slidesPerView={3.3}
          spaceBetween={30}
          pagination={{
            clickable: false,
          }}
          modules={[Navigation, Mousewheel]}
          navigation={{
            disabledClass: styles.control__disabled,
            prevEl: ".control__left",
            nextEl: ".control__right",
          }}
          wrapperClass="team-container"
          simulateTouch={true}
          scrollbar={false}
          breakpoints={{
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
            },
          }}
          className={styles.members}
        >
          {members.map((member) => (
            <SwiperSlide className={styles.member} key={member.id}>
              <picture className={styles.member__img_wrapper}>
                <img
                  className={styles.member__img}
                  src={member.photo}
                  alt={member.name}
                  width={395}
                  height={284}
                />
              </picture>
              <h3 className={styles.member__name}>{member.name}</h3>
              <p className={styles.member__position}>{member.position}</p>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </section>
  );
};
