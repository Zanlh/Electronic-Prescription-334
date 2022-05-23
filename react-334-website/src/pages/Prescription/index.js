import React, { useContext, useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

import {
  apiGetUserIssues,
  apiGetDoctorIssues,
  apiCreateIssue,
  apiCreatePrescription,
  apiGetPharIssues,
} from "../../api";

import Title from "../../commom-ui/Title";
import Container from "../../commom-ui/Container";
import SearchBar from "../../components/SearchBar";

import Button from "../../commom-ui/Button";
import Popup from "../../commom-ui/Popup";

import { UserInfoContext } from "../../context/userContext";

import InputForm from "../../commom-ui/InputForm";

// hoc
import statusWrapper from "../../hoc/statusWrapper";
import MedicalCard from "../../components/MedicalCard";
import PrescriptionTable from "../../components/PrescriptionTable";
import { TextMatching } from "../../algo";

import styles from './style.module.css';

const CLASSES = [
  "name",
  "created_at",
  "dosage",
  "quantity",
  "advice",
  "reaction",
];
const HEADING = [
  "Name",
  "Date of dispensed",
  "Dosage",
  "Quantity",
  "Advice",
  "Reaction",
];

const labels = {
  token: "Token",
  name: "Name",
  dosage: "Dosage",
  quantity: "Quantity",
  advice: "Advice",
  reaction: "Reaction",
};

const PROGRESS_STATUS = [
  '',
  'error',
  'success',
  'loading',
]

const Prescription = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [info, setInfo] = useState({});
  const [issues, setIssues] = useState([]);
  const [issueId, setIssueId] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [add, setAdd] = useState(0);
  const [token, setToken] = useState(0);
  const [targetToken, setTargetToken] = useState(-1);
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    console.log(value);

    const target = TextMatching("token", value, issues);
    if (target.length > 0) setTargetToken(value);
    else setTargetToken(-1);
  };

  console.log(targetToken);

  const getIssues = async ({ token, id }) => {
    if (userInfo.role === "user") return await apiGetUserIssues({ token });
    if (userInfo.role === "doctor")
      return await apiGetDoctorIssues({ token, id });
    if (userInfo.role === "phar") return await apiGetPharIssues({ token });
  };

  const fetchIssues = async () => {
    setProgress(3);
    const { result, message, data } = await getIssues({
      token: userInfo.token,
      id: userInfo.userId,
    });
    console.log("issues", result, message, data);
    if (result !== "1" || !data) {
      setProgress(1);
    } else {
      setProgress(2);
      setIssues([...data.data.issues]);
    }

    setInterval(() => setProgress(0), 1000);
  };

  useEffect(() => {
    fetchIssues();
  }, [userInfo.token]);

  console.log(issues);

  const [prescription, setPrescription] = useState([]);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "token") setToken(value);
    else setInfo({ ...info, [id]: value });
  };

  const DefaultProps = (name) => ({
    id: name,
    label: labels[name],
    value: name === "token" ? token : info[name],
    onChange: onInputChange,
  });

  const createIssues = async () => {
    setProgress(3);
    const { data, result, message } = await apiCreateIssue({
      token: userInfo.token,
      id: userInfo.userId,
    });
    console.log(data, result, message);
    console.log(result !== "1");

    if (result !== "1" || !data) {
      setProgress(1);
    } else {
      setProgress(2);
      setAdd(1);
      console.log(data);
      setIssueId(data.token);
    }

    setInterval(() => setProgress(0), 1000);
  };

  const createPrescription = async () => {
    setProgress(3);
    const newInfo = {
      ...info,
      issue_id: add === 1 ? issueId : token,
    };
    console.log(newInfo);
    const { data, result, message } = await apiCreatePrescription({
      token: userInfo.token,
      ...newInfo,
    });
    console.log(data, result);
    if (result !== "1" || !data) {
      setProgress(1);
    } else {
      setProgress(2);
      fetchIssues();
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
        <Title>My prescriptions</Title>
        <SearchBar
          value={searchValue}
          onChange={(e) => onSearchChange(e)}
          placeholder="prescription"
          />
        {targetToken === -1 ? (
          <>
            {userInfo.role === "doctor" && (
              <div className={styles.buttonContainer}>
                <Button type="primary" onClick={() => setAdd(2)}>
                  Add prescription
                </Button>
                <Button type="primary" onClick={() => createIssues()}>
                  Add issues
                </Button>
              </div>
            )}

            {add === 1 || add === 2 ? (
              <MedicalCard drop={2} onClose={() => setAdd(0)}>
                {Object.keys(labels).map((name) => {
                  if (name === "token" && add === 1) return null;
                  return (
                    <InputForm
                    {...DefaultProps(`${name}`)}
                    type="textArea"
                    sz={(name === "advice" || name === "reaction") && "big"}
                    />
                    );
                  })}
                <Button type="secondary" onClick={() => createPrescription()}>
                  Add
                </Button>
              </MedicalCard>
            ) : null}

            {userInfo.role !== "phar" &&
              issues.map((issue) => (
                <MedicalCard title={issue.token}>
                  <PrescriptionTable
                    id={issue.token}
                    type="prescription"
                    classes={CLASSES}
                    heading={HEADING}
                    data={prescription}
                    />
                </MedicalCard>
              ))}
          </>
        ) : (
          <MedicalCard title={targetToken}>
            <PrescriptionTable
              id={targetToken}
              type="prescription"
              classes={CLASSES}
              heading={HEADING}
              data={prescription}
              />
          </MedicalCard>
        )}
      </Container>
    </>
  );
};

export default statusWrapper(Prescription);
