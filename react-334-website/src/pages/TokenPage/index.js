import React from 'react';

import styles from './style.module.css';

import SearchBar from '../../components/SearchBar';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'

import TokenImage from '../../img/token.png'
const TokenPage = () => {
  return (
    <Container>
      <Title>Token</Title>
      <SearchBar placeholder="token" />

      <div className={styles.token}>
        <img className={styles.qr} src={TokenImage} alt="token" />
        <div className={styles.text}>123456</div>
        <div className={styles.text}>Prescription 1</div>
      </div>
    </Container>
  ); 
}

export default TokenPage;