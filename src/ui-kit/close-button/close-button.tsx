import { CloseIcon } from "@/src/components/svg/close-icon/close-icon";
import { FC } from "react";
import styles from "./close-button.module.css";

type TCloseButtonProps = {
  handler: () => void
}

export const CloseButton: FC<TCloseButtonProps> = ({handler}) => {
  return (
    <button className={styles.close_button} onClick={handler}>
      <CloseIcon />
    </button>
  )
}