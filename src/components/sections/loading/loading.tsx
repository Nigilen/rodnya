'use client'

import { useEffect, useState } from 'react';
import styles from './loading.module.css'

export default function Loading() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 100) {
      return
    }
    setTimeout(() => {
      setCount(count + 25)
    }, 1000)
  }, [count])

  return (
    <div className={styles.loading}>
      <p className={styles.loading_title}>RODNYA  Creative PR Studio</p>
      <div className={styles.loading_description}>
        <div className={styles.first_line}>
          <span>Креатив, </span>&nbsp;
          <span>который </span>
        </div>
        <div className={styles.second_line}>
          <span>становится </span>
        </div>
        <div className={styles.third_line}>
          <span>новостью </span>
        </div>
      </div>
      <div className={styles.loading_progress}>
        <div className={styles.count_column}>
          <div>2</div>
          <div>5</div>
          <div>7</div>
          <div>10</div>
        </div>
        <div className={styles.count_column}>
          <div>5</div>
          <div>0</div>
          <div>5</div>
          <div>0</div>
        </div>
        %
      </div>
    </div>
  )
}