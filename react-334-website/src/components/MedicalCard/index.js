import React, { useState, useContext } from 'react';
import cx from 'classnames';
import styles from './style.module.css';

import * as DropBox from '../../commom-ui/DropBoxIcon';

import { UserInfoContext } from '../../context/userContext';

const MedicalCard = (props) => {
  const { title } = props;
  const { userInfo } = useContext(UserInfoContext);

  const [drop, setDrop] = useState(props.drop ? props.drop : 0);

  const changeDropBox = () => {
    console.log(drop);
    if (drop <= 1) setDrop(1 - drop);
    else {
      props.onClose();
    }
  }

  return (
    <div className={cx(styles.container, styles[`border-${userInfo.role}`])}>
      <div className={cx(styles.heading, styles[`heading-${userInfo.role}`])}>
        <span>{title}</span>
        <div className={styles.icon} onClick={changeDropBox}>
          {
            drop === 0 ? <DropBox.Down /> : 
            drop === 1 ? <DropBox.Up /> :
            drop === 2 && <DropBox.Close />
          } 
        </div>
      </div>

      {drop !== 0 && (
        <div className={styles.text}>
          {props.children}
        </div>
      )}
    </div>
  );   
}

export default MedicalCard;