import { FC } from "react";
import styles from "./hero.module.css";
import cn from "classnames";

type HeroProps = {
  title: string,
  description?: string,
  background?: string
};

export const Hero: FC<HeroProps> = ({title, description, background}) => {

  return (
    <section 
      className={cn(styles.hero, background && [styles.hero__with_bg])} 
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={cn(styles.hero_content, background && [styles.hero_content__proportional])}>
        <h1 className={styles.hero_title}>{ title }</h1>
        { description ? 
          <p className={styles.hero_description}>{description}</p> 
          : null 
        }
      </div>
    </section>
  )
}