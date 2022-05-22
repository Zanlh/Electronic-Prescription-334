import React from 'react';
import PrescriptionCard from '../../components/PrescriptionCard';
import SearchBar from '../../components/SearchBar';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'

// hoc  
import statusWrapper from '../../hoc/statusWrapper';

const PrescriptionHistory = () => {
  console.log('prescription');
  return (
    <Container>
      <Title>Prescriptions history</Title>
      <SearchBar placeholder="Prescriptions" />

      <PrescriptionCard title="Prescriptions 1" issue="Issued by Dr. Angela Kings 12/1/2023" />
    </Container>
  );
}

export default statusWrapper(PrescriptionHistory);