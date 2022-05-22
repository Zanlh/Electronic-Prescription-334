import React from 'react';
import styles from './style.module.css';

const CLASSES = ['name', 'dod', 'dosage', 'quantity', 'advice', 'reaction'];
const HEADING = ['Name', 'Date of dispensed', 'Dosage', 'Quantity', 'Advice', 'Reaction'];

const ROWS = [
  ['Pill 1', '12/01/2022', '3 times per day', '42', 'Take with food', ''],
  ['Pill 2', '12/02/2022', '1 times per day', '14', 'Take with food', 'Pill 4'],
  ['Pill 3', '12/01/2022', '3 times per day', '42', 'Before eating', ''],
]

const PrescriptionTable = () => {
  return (
    <table cellspacing="0" cellpadding="5" className={styles.table}>
      <tr className={styles.heading}>
        {HEADING.map((heading, id) => (
          <th className={styles[CLASSES[id]]}>{heading}</th>
          ))}
      </tr>

      {ROWS.map((row) => (
        <tr>
          {row.map((text, id) => (
            <td className={styles[CLASSES[id]]}>{text}</td>
            ))}
        </tr>
      ))}
    </table>
  ); 
}

export default PrescriptionTable;