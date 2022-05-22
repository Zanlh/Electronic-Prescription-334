import React from 'react';

import SearchBar from '../../components/SearchBar';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'

import MedicalCard from '../../components/MedicalCard';

// hoc  
import statusWrapper from '../../hoc/statusWrapper';


const Medication = () => {
  return (
    <Container>
      <Title>Medications</Title>
      <SearchBar placeholder="medication" />

      <MedicalCard title="Medication 1" />
    </Container>
  );
}

export default statusWrapper(Medication);