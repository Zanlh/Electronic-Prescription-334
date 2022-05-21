import React from 'react';

import styles from './style.module.css';

import RightArrow from '../../commom-ui/RightArrow';

const PrescriptionCard = (props) => {
  const { title, issue } = props;
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>      
        <div className={styles.issue}>{issue}</div>
      </div>

      <div className={styles.info}>
        <ul>
          <li>Pill 1 x 1</li>
          <li>Pill 4 x 2</li>
          <li>Pill 12 x 2</li>
        </ul>
      </div>

      <div className={styles.info}>
        <ul>
          <li>3 time(s) a day</li>
          <li>1 time(s) a day</li>
          <li>2 time(s) a day</li>
        </ul>
      </div>

      <div className={styles.button}>
        <RightArrow />
      </div>
    </div>
  );
}

export default PrescriptionCard;