import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './style.module.css';
import { UserInfoContext } from '../../context/userContext';

const CLASSES = ['name', 'dod', 'dosage', 'quantity', 'advice', 'reaction'];
const HEADING = ['Name', 'Date of dispensed', 'Dosage', 'Quantity', 'Advice', 'Reaction'];

const ROWS = [
  ['Pill 1', '12/01/2022', '3 times per day', '42', 'Take with food', ''],
  ['Pill 2', '12/02/2022', '1 times per day', '14', 'Take with food', 'Pill 4'],
  ['Pill 3', '12/01/2022', '3 times per day', '42', 'Before eating', ''],
]

const PrescriptionTable = () => {
  const { userInfo } = useContext(UserInfoContext);
  console.log(userInfo.role);
  return (
    <table cellspacing="0" cellpadding="5" className={cx(styles.table, styles[`table-border-${userInfo.role}`])}>
      <tr className={cx(styles.heading, styles[`heading-${userInfo.role}`])}>
        {HEADING.map((heading, id) => (
          <th className={styles[CLASSES[id]]}>{heading}</th>
          ))}
      </tr>

      {ROWS.map((row) => (
        <tr className={styles[`tr-${userInfo.role}`]}>
          {row.map((text, id) => (
            <td className={styles[CLASSES[id]]}>{text}</td>
          ))}
        </tr>
      ))}
    </table>
  ); 
}

export default PrescriptionTable;