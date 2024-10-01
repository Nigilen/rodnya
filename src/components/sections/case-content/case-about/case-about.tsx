import { TAward } from "@/src/ui-kit/award/award";
import { FC } from "react";
import styles from "./case-about.module.css";

type TCaseAbout = {
  works: string[];
  awards: TAward[];
}

export const CaseAbout: FC<TCaseAbout> = ({works, awards}) => {
  return (
    <div className={styles.case_info}>
      <ul className={styles.works_list}>
        {works.map(work => 
          <li className={styles.work} key={work}>
            {work}
          </li>
        )}
      </ul>
      <h3 className={styles.awards_list_heading}>Награды:</h3>
      <ul className={styles.awards_list}>
        {awards.map(award => 
          <li className={styles.award} key={award.text}>
            <p className={styles.award__text}>
              {award.text}
              <span className={styles.award__counter}>
                ({award.counter})
              </span>
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}