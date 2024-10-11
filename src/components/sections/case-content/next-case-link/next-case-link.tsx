import Link from "next/link";
import styles from "./next-case-link.module.css";
import cn from "classnames";
import { FC } from "react";
import { FRONT_BASE_URL } from "@/src/utils/config";

type Props = {
  slug?: string;
};

export const NextCaseLink: FC<Props> = ({slug}) => {
  return (
    <div className={styles.next_case_link_wrapper}>
      <Link className={cn(styles.next_case_link, 'button-link')} href={`${FRONT_BASE_URL}/cases/${slug}`}>Следующий кейс</Link>
    </div>
  );
}