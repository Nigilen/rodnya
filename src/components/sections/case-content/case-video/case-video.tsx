"use client";

import { FC, useState } from "react";
import Modal from "@/src/components/layout/modal";
import { CloseIcon } from "@/src/components/svg/close-icon/close-icon";

import styles from "./case-video.module.css";

type Props = {
  video: string;
  preview: string;
};

export const CaseVideo: FC<Props> = ({ video, preview }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={styles.video}
      style={{
        backgroundImage: `linear-gradient(to bottom, black -50%, transparent 30%), url(${preview})`,
      }}
    >
      {!isActive && (
        <button
          className={styles.play}
          type="button"
          onClick={() => setIsActive(!isActive)}
        >
          <img src="/play.svg" alt="play" />
        </button>
      )}
      <Modal
        opened={isActive}
        onClose={() => {
          setIsActive(false);
        }}
        style={{
          padding: "120px 10%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <button
          style={{
            marginBottom: 12,
          }}
          onClick={() => {
            setIsActive(false);
          }}
        >
          <CloseIcon />
        </button>
        <iframe
          width="100%"
          src={video}
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            border: 0,
            aspectRatio: "16 / 9",
            maxHeight: "calc(100% - 120px)",
          }}
        />
      </Modal>
    </div>
  );
};
