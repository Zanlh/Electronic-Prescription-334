import React, { useContext, useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import SearchBar from "../../components/SearchBar";

import Title from "../../commom-ui/Title";
import Container from "../../commom-ui/Container";

import MedicalCard from "../../components/MedicalCard";

// hoc
import statusWrapper from "../../hoc/statusWrapper";

import {
  apiUserTreatment,
  apiCreateTreatment,
  apiDoctorTreatment,
} from "../../api/treatment";

import { UserInfoContext } from "../../context/userContext";
import Button from "../../commom-ui/Button";
import Popup from "../../commom-ui/Popup";
import InputForm from "../../commom-ui/InputForm";

import PrescriptionTable from "../../components/PrescriptionTable";

import { TextMatching } from "../../algo";

const CLASSES = ["name", "description"];
const HEADING = ["Name", "Description"];

const labels = {
  name: "Name",
  description: "Description",
};

const PROGRESS_STATUS = [
  '',
  'error',
  'success',
  'loading',
]

const TreatmentPlan = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [treatment, setTreament] = useState([]);
  const [progress, setProgress] = useState(0);

  const [add, setAdd] = useState(0);
  const [info, setInfo] = useState({});

  const [target, setTarget] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    console.log(value);

    const target = TextMatching("name", value, treatment);
    if (target.length > 0) setTarget(target);
    else setTarget('');
  };

  const getTreatment = async ({ token, id }) => {
    if (userInfo.role === "user") return await apiUserTreatment({ token });
    if (userInfo.role === "doctor")
      return await apiDoctorTreatment({ token, id });
  };

  console.log(userInfo);
  const fetchTreatment = async () => {
    setProgress(3);
    const { result, message, data } = await getTreatment({
      token: userInfo.token,
      id: userInfo.userId,
    });
    console.log(result, message, data);
    if (result !== "1" || !data) {
      setProgress(1);
    } else {
      setProgress(2);
      console.log(data.data.treatments);
      setTreament([...data.data.treatments]);
    }

    setInterval(() => setProgress(0), 1000);
  };

  useEffect(() => {
    fetchTreatment();
  }, [userInfo.token]);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setInfo({ ...info, [id]: value });
  };

  const DefaultProps = (name) => ({
    id: name,
    label: labels[name],
    value: info[name],
    onChange: onInputChange,
  });

  const onCreateTreatment = async () => {
    setProgress(3);
    const { result, data, message } = await apiCreateTreatment({
      ...info,
      token: userInfo.token,
    });
    if (result === "1" && data) {
      setProgress(2);
      fetchTreatment();
    } else {
      setProgress(1);
    }

    setInterval(() => setProgress(0), 1000);
  };

  return (
    <>
      <Helmet>
        <title>Prescription</title>
      </Helmet>

      <Container>
        {progress !== 0 && <Popup type={PROGRESS_STATUS[progress]} />}
        <Title>Treatment</Title>
        <SearchBar
          value={searchValue}
          onChange={(e) => onSearchChange(e)}
          placeholder="treatment"
        />
        {target ? (
          <PrescriptionTable
            type="treatment"
            classes={CLASSES}
            heading={HEADING}
            data={target}
          />
        ) : (
          <>
            {userInfo.role === "user" && (
              <Button type="primary" onClick={() => setAdd(1)}>
                Add
              </Button>
            )}

            {add === 1 ? (
              <MedicalCard drop={2} onClose={() => setAdd(0)}>
                <InputForm {...DefaultProps("name")} type="textArea" />
                <InputForm
                  {...DefaultProps("description")}
                  sz="big"
                  type="textArea"
                />
                <Button type="secondary" onClick={() => onCreateTreatment()}>
                  Add
                </Button>
              </MedicalCard>
            ) : null}

            <PrescriptionTable
              type="medication"
              classes={CLASSES}
              heading={HEADING}
              data={treatment}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default statusWrapper(TreatmentPlan);
