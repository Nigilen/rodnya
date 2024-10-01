import { FC } from "react";
import Image from "next/image";
import styles from "./hero-carousel.module.css";
import cn from "classnames";

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
      <div className={styles.carousel}>
        <ul className={styles.carousel__track}>
          {items.map((item, index) => (
            <li className={styles.carousel__item} key={index}>
              <Image className={styles.carousel__img} src={item.link} width={1440} height={645} alt={item.alt} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.carousel__nav}>
        <button className={cn(styles.nav_dot, styles.nav_dot__current)}></button>
        <button className={styles.nav_dot}></button>
      </div>
    </section>
  );
};