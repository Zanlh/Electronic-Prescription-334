import React from 'react';

import styles from './style.module.css';

import SearchBar from '../../components/SearchBar';

import TokenImage from '../../img/token.png'
const TokenPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Token</h2>
      <SearchBar placeholder="token" />

      <div className={styles.token}>
        <img className={styles.qr} src={TokenImage} alt="token" />
        <div className={styles.text}>123456</div>
        <div className={styles.text}>Prescription 1</div>
      </div>
    </div>
  ); 
}

export default TokenPage;