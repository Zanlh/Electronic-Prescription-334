import React, { useContext, useState, useEffect } from 'react';

import SearchBar from '../../components/SearchBar';

import Title from '../../commom-ui/Title';
import Container from '../../commom-ui/Container'

import MedicalCard from '../../components/MedicalCard';

// hoc  
import statusWrapper from '../../hoc/statusWrapper';

import { apiUserTreatment, apiCreateTreatment, apiDoctorTreatment } from '../../api/treatment';

import { UserInfoContext } from '../../context/userContext';
import Button from '../../commom-ui/Button';
import InputForm from '../../commom-ui/InputForm';

import PrescriptionTable from '../../components/PrescriptionTable'

const CLASSES = ['name', 'description'];
const HEADING = ['Name', 'Description'];

const labels = {
  name: 'Name',
  description: 'Description',
};

const TreatmentPlan = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [treatment, setTreament] = useState([]);  
  const [progress, setProgress] = useState(0);

  const [add, setAdd] = useState(0);
  const [info, setInfo] = useState({});

  const getTreatment = async ({ token, id}) => {
    if (userInfo.role === 'user') return await apiUserTreatment({ token });
    if (userInfo.role === 'doctor') return await apiDoctorTreatment({ token , id });
  }

  console.log(userInfo);
  const fetchTreatment = async () => {
    const { result, message, data } = await getTreatment({ token: userInfo.token, id: userInfo.userId });
    console.log(result, message, data);
    if (result !== "1" || !data) {
      setProgress(1);
    } else {
      setProgress(2);
      console.log(data.data.treatments);
      setTreament([...data.data.treatments]);
    }
  }

  useEffect(() => {
    fetchTreatment();
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

  const onCreateTreatment = async () => {
    const { result, data, message} = await apiCreateTreatment({ ...info, token: userInfo.token });
    if (result === "1" && data) {
      fetchTreatment();
    }
  }

  return (
    <Container>
      <Title>Treatment</Title>
      <SearchBar placeholder="medication" />
      {userInfo.role === 'user' && <Button type="primary" onClick={() => setAdd(1)}>Add</Button>}

      {add === 1 ? (
        <MedicalCard drop={2} onClose={() => setAdd(0)}>
          <InputForm { ...DefaultProps('name') } type="textArea" />
          <InputForm { ...DefaultProps('description') } sz="big" type="textArea" />
          <Button type="secondary" onClick={() => onCreateTreatment()}>Add</Button>
        </MedicalCard>
      ) : null}

      <PrescriptionTable type="medication" classes={CLASSES} heading={HEADING} data={treatment}/>
    </Container>
  );
}

export default statusWrapper(TreatmentPlan);