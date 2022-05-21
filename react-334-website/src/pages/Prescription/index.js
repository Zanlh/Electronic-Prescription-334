import React from 'react';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'
import SearchBar from '../../components/SearchBar';

const Prescription = () => {
  return (
    <Container>
      <Title>My prescriptions</Title>
      <SearchBar placeholder="prescription" />
    </Container>
  );  
}

export default Prescription;