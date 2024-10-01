import Link from "next/link";
import styles from "./next-case-link.module.css"

export const NextCaseLink = () => {
  return (
    <div className={styles.next_case_link_wrapper}>
      <Link className={styles.next_case_link} href="#">Следующий кейс</Link>
    </div>
  );
}