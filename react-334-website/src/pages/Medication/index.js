import React, { useContext, useEffect, useState } from 'react';

import SearchBar from '../../components/SearchBar';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'

import MedicalCard from '../../components/MedicalCard';

// hoc  
import statusWrapper from '../../hoc/statusWrapper';

// api
import { apiUserMedicine, apiCreateUserMedication, apiDoctorMedicine } from '../../api';

import { UserInfoContext } from '../../context/userContext';
import PrescriptionTable from '../../components/PrescriptionTable';

import Button from '../../commom-ui/Button';

import InputForm from '../../commom-ui/InputForm';

const CLASSES = ['name', 'description'];
const HEADING = ['Name', 'Description'];

const labels = {
  name: 'Name',
  description: 'Description',
};

const Medication = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [medication, setMedication] = useState([]);  
  const [progress, setProgress] = useState(0);
  const [add, setAdd] = useState(0);
  const [info, setInfo] = useState({});

  console.log(userInfo);
  const getMedication = async ({ token, id }) => {
    if (userInfo.role === 'user') return await apiUserMedicine({ token });
    else if (userInfo.role === 'doctor') return await apiDoctorMedicine({ token, id });
  }

  const fetchMedication = async () => {
    const { result, message, data } = await getMedication({ token: userInfo.token, id: userInfo.userId });
    console.log(result, message, data);
    if (result !== "1" || !data) {
      setProgress(1);
    } else {
      setProgress(2);
      console.log(data.data.medicines);
      setMedication([...data.data.medicines]);
    }
  }

  useEffect(() => { 
    fetchMedication();
  }, [userInfo.token]);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setInfo({ ...info, [id] : value});
  }

  const DefaultProps = (name) => ({
    id: name,
    label: labels[name],
    value: info[name],
    onChange: onInputChange,
  });

  const onCreateMedication = async () => {
    const { result, data, message} = await apiCreateUserMedication({ ...info, token: userInfo.token });
    if (result === "1" && data) {
      fetchMedication();
    }
  }

  return (
    <Container>
      <Title>Medications</Title>
      <SearchBar placeholder="medication" />
      {userInfo.role === 'user' && <Button type="primary" onClick={() => setAdd(1)}>Add</Button>}

      {add === 1 ? (
        <MedicalCard drop={2} onClose={() => setAdd(0)}>
          <InputForm { ...DefaultProps('name') } type="textArea" />
          <InputForm { ...DefaultProps('description') } sz="big" type="textArea" />
          <Button type="secondary" onClick={() => onCreateMedication()}>Add</Button>
        </MedicalCard>
      ) : null}

      <PrescriptionTable type="medication" classes={CLASSES} heading={HEADING} data={medication}/>
    </Container>
  );
}

export default statusWrapper(Medication);