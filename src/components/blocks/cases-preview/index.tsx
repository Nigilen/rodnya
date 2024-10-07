import Link from "next/link";
import { FC } from "react";
import styles from "./cases-preview.module.css";

type TCasesPreviewProps = {
  company: string,
  title: string,
  img: string,
  alias: string
}

export const CasesPreview: FC<TCasesPreviewProps> = ({ title, company, img, alias }) => {
  return (
    <li className={styles.case_preview}>
      <Link href={alias} className={styles.case_preview__link}>
        <img className={styles.case_preview__img} src={img} alt={`Кейс ${title}`} width={894} height={584} />
        <p className={styles.case_preview__company}>{company}</p>
        <h2 className={styles.case_preview__title}>{title}</h2>
      </Link>
    </li>
  )
}