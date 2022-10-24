import { useEffect, useState } from 'react';
import { calculateTimeLeft } from './utils/token-counter-util';

import styles from "../counter.module.css";

export const TokenCounter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <div className={styles.container}> 
      <h1 className={styles.h1}>Token pre-ICO ends in</h1>
     <div className={styles.counter}>
      <div className={styles.counterItem}>
        <span className={styles.value}>
          {String(timeLeft.days).padStart(2, '0')}
        </span>
        <span className={styles.label}>Days</span>
      </div>

      <div className={styles.counterItem}>
        <span className={styles.value}>
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className={styles.label}>Hours</span>
      </div>

      <div className={styles.counterItem}>
        <span className={styles.value}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className={styles.label}>Minutes</span>
      </div>

      <div className={styles.counterItem}>
        <span className={styles.value}>
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className={styles.label}>Seconds</span>
      </div>
     </div>
    </div>
  );
};