"use client";

import { useEffect, HTMLProps } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import styles from "./modal.module.css";

interface IModalProps extends HTMLProps<HTMLDivElement> {
  opened?: boolean;
  onClose: () => void;
}

const ModalChild: React.FC<IModalProps> = ({
  onClose,
  className,
  children,
  ...props
}) => {
  useEffect(() => {
    const handleOnEscape = (e: globalThis.KeyboardEvent) =>
      e.key == "Escape" && onClose();

    const elem = document.getElementById("portal");

    if (elem) {
      document.addEventListener("keydown", handleOnEscape, false);
    }

    return () => {
      document.removeEventListener("keydown", handleOnEscape, false);
    };
  }, [onClose]);

  return (
    <div className={styles.portal} id="portal">
      <div {...props} className={cn(styles.wrapper, className)}>
        {children}
      </div>
    </div>
  );
};

export const Modal: React.FC<IModalProps> = ({ opened, ...props }) => {
  if (!opened) return null;

  return createPortal(<ModalChild {...props} />, document.body);
};

export default Modal;
