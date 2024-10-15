'use client'

import { FC, useState } from 'react';
import styles from './case-video.module.css';

type Props = {
  video: string;
  preview: string;
};

export const CaseVideo: FC<Props> = ({ video, preview }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className={styles.video} style={{ backgroundImage: `linear-gradient(to bottom, black -50%, transparent 30%), url(${preview})` }}>
      {!isActive && <button className={styles.play} type='button' onClick={() => setIsActive(!isActive)}>
        <img src="/play.svg" alt="play" />
      </button>
      }
      {isActive && <iframe
        width="100%"
        height="100%"
        src={video}
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />}
    </div>
  );
}