import React, { useContext } from 'react';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container';

import PrescriptionTable from '../../components/PrescriptionTable';

// hoc  
import statusWrapper from '../../hoc/statusWrapper';

// common-ui
import { LeftArrow } from '../../commom-ui/Arrow';

import styles from './style.module.css';
import { UserInfoContext } from '../../context/userContext';

const COLOR = {
  user: '#12266D',
  phar: '#003300',
  doctor: '#5F0C0C',
};

const PrescriptionDetail = (props) => {
  const { userInfo } = useContext(UserInfoContext);
  return (
    <Container>
      <Title>Prescription 1</Title>

      <PrescriptionTable />

      <div className={styles.back}>
        <LeftArrow color={COLOR[userInfo.role]} />
      </div>
    </Container>
  );
}

export default statusWrapper(PrescriptionDetail);