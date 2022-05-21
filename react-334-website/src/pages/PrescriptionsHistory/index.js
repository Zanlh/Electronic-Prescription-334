import React from 'react';
import PrescriptionCard from '../../components/PrescriptionCard';
import SearchBar from '../../components/SearchBar';

import styles from './style.module.css';

const PrescriptionHistory = () => {
  console.log('prescription');
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Prescriptions history</h2>
      <SearchBar placeholder="Prescriptions" />

      <PrescriptionCard title="Prescriptions 1" issue="Issued by Dr. Angela Kings 12/1/2023" />
    </div>
  );
}

export default PrescriptionHistory;