import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './style.module.css';

import { RightArrow } from '../../commom-ui/Arrow';
import { UserInfoContext } from '../../context/userContext';

const COLOR = {
  user: '#12266D',
  phar: '#003300',
  doctor: '#5F0C0C',
};

const PrescriptionCard = (props) => {
  const { userInfo } = useContext(UserInfoContext);
  const { title, issue } = props;
  return (
    <div className={cx(styles.container, styles[`border-${userInfo.role}`])}>
      <div className={styles.titleContainer}>
        <div className={cx(styles.title, styles[`title-${userInfo.role}`])}>{title}</div>      
        <div className={cx(styles.issue, styles[`issue-${userInfo.role}`])}>{issue}</div>
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
        <RightArrow color={COLOR[userInfo.role]}/>
      </div>
    </div>
  );
}

export default PrescriptionCard;