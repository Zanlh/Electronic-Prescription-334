import React from 'react';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container';

import PrescriptionTable from '../../components/PrescriptionTable';

// hoc  
import statusWrapper from '../../hoc/statusWrapper';

const PrescriptionDetail = (props) => {
  return (
    <Container>
      <Title>Prescription 1</Title>

      <PrescriptionTable />
    </Container>
  );
}

export default statusWrapper(PrescriptionDetail);