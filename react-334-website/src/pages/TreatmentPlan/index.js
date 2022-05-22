import React from 'react';

import SearchBar from '../../components/SearchBar';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'

import MedicalCard from '../../components/MedicalCard';

// hoc  
import statusWrapper from '../../hoc/statusWrapper';

const TreatmentPlan = () => {
  return (
    <Container>
      <Title>Treatment plans</Title>
      <SearchBar placeholder="treatment plans" /> 
      
      <MedicalCard title="Medical intervention 1" />
    </Container>
  );
}

export default statusWrapper(TreatmentPlan);