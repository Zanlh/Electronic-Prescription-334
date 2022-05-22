import React, { useContext, useState, useEffect } from 'react';

import { apiGetPrescriptions } from '../../api';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'
import SearchBar from '../../components/SearchBar';

import PrescriptionCard from '../../components/PrescriptionCard';

import { UserInfoContext } from '../../context/userContext';

// hoc  
import statusWrapper from '../../hoc/statusWrapper';

const Prescription = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [prescriptions, setPrescriptions] = useState([]);  
  const [progress, setProgress] = useState(0);

  console.log(userInfo);
  // useEffect(() => {
  //   const fetchPrescriptions = async () => {
  //     const { result, message, data } = await apiGetPrescriptions({ token: userInfo.token });
  //     if (result !== "1" || !data) {
  //       setProgress(1);
  //     } else {
  //       setProgress(2);
  //       setPrescriptions([...data.data.prescriptions]);
  //     }
  //   }
    
  //   fetchPrescriptions();
  // }, [userInfo.token]);


  return (
    <Container>
      <Title>My prescriptions</Title>
      <SearchBar placeholder="prescription" />


    </Container>
  );  
}

export default statusWrapper(Prescription);