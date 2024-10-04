import Link from "next/link";
import styles from "./next-case-link.module.css";
import cn from "classnames";

export const NextCaseLink = () => {
  return (
    <div className={styles.next_case_link_wrapper}>
      <Link className={cn(styles.next_case_link, 'button-link')} href="#">Следующий кейс</Link>
    </div>
  );
}