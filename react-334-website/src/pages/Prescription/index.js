import React, { useContext } from 'react';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'
import SearchBar from '../../components/SearchBar';

import { UserInfoContext } from '../../context/userContext';

const Prescription = () => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  
  return (
    <Container>
      <Title>My prescriptions</Title>
      <SearchBar placeholder="prescription" />
    </Container>
  );  
}

export default Prescription;