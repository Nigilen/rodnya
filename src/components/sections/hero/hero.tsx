import { FC } from "react";
import styles from "./hero.module.css";
import cn from "classnames";

type HeroProps = {
  title: string,
  description?: string,
  background?: string,
  video?: string,
};

export const Hero: FC<HeroProps> = ({title, description, background, video}) => {

  return (
    <section 
      className={cn(styles.hero, background && [styles.hero__with_bg], video && [styles.hero__with_bg])} 
      style={{ backgroundImage: `url(${background})` }}
    >
      <video className={styles.hero_video} width="auto" height="100%" preload="true" autoPlay muted loop playsInline>
        <source src={video} type="video/webm" />
      </video>
      <div className={cn(styles.hero_content, background && [styles.hero_content__proportional] || video && [styles.hero_content__proportional])}>
        <h1 className={styles.hero_title}>{ title }</h1>
        { description && <p className={styles.hero_description}>{description}</p> }
      </div>
    </section>
  )
}