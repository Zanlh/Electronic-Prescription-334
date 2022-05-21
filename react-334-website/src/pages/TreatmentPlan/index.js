import React from 'react';

import SearchBar from '../../components/SearchBar';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'

import MedicalCard from '../../components/MedicalCard';

const TreatmentPlan = () => {
  return (
    <Container>
      <Title>Treatment plans</Title>
      <SearchBar placeholder="treatment plans" /> 
      
      <MedicalCard title="Medical intervention 1" />
    </Container>
  );
}

export default TreatmentPlan;