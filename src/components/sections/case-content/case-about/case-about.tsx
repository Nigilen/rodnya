import { FC } from "react";
import styles from "./case-about.module.css";

type TCaseAbout = {
  works: {
    title: string;
    link: string;
  }[],
  awards: {
    name: string,
    number: number;
  }[]
}

export const CaseAbout: FC<TCaseAbout> = ({works, awards}) => {
  return (
    <div className={styles.case_info}>
      {works.length > 0 && 
        <ul className={styles.works_list}>
          {works.map(work => 
            <li className={styles.work} key={work.title}>
              <a className='button-link' href={work.link} target="blank">
                {work.title}
              </a>
            </li>
          )}
        </ul>
      }
      {awards.length > 0 && 
        <section>
          <h3 className={styles.awards_list_heading}>Награды:</h3>
          <ul className={styles.awards_list}>
            {awards.map(award => 
              <li className={styles.award} key={award.name}>
                <p className={styles.award__text}>
                  {award.name}
                  <span className={styles.award__counter}>
                    ({award.number})
                  </span>
                </p>
              </li>
            )}
          </ul>
        </section>
      }
    </div>
  )
}