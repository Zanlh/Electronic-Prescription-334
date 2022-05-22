import React, { useState } from 'react';

import styles from './style.module.css';

import * as DropBox from '../../commom-ui/DropBoxIcon';

const MedicalCard = (props) => {
  const { title } = props;

  const [drop, setDrop] = useState(1);

  const changeDropBox = () => {
    console.log(drop);
    if (drop <= 1) setDrop(1 - drop);
    else {
      // TODO
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span>{title}</span>
        <div className={styles.icon} onClick={changeDropBox}>
          {
            drop === 0 ? <DropBox.Down /> : 
            drop === 1 ? <DropBox.Up /> :
            drop === 2 && <DropBox.Close />
          } 
        </div>
      </div>

      {drop === 0 && (
        <div className={styles.text}>
          Medication 2
        </div>
      )}
    </div>
  );   
}

export default MedicalCard;