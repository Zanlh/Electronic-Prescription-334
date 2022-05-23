import React, { useContext, useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

import { UserInfoContext } from "../../context/userContext";

import { apiGetUsers } from "../../api";
import { withRouter } from "../../hooks/withRouter";
import statusWrapper from "../../hoc/statusWrapper";

import { Navigate } from "react-router-dom";

import Button from "../../commom-ui/Button";
import FormContainer from "../../components/Container/FormContainer";
import InputForm from "../../commom-ui/InputForm";

import Popup from "../../commom-ui/Popup";

import { TextMatching } from "../../algo";

const PROGRESS_STATUS = [
  '',
  'error',
  'success',
  'loading',
]

const FindUser = ({ navigation }) => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [email, setEmail] = useState();
  const [users, setUsers] = useState([]);
  const [progress, setProgress] = useState(0);

  const getUsers = async () => {
    setProgress(3);
    const { data, message, result } = await apiGetUsers({
      token: userInfo.token,
    });

    if (result !== "1" || !data) {
      setProgress(1);
    } else {
      setProgress(2);
      setUsers([...data.data.users]);
    }

    setInterval(() => setProgress(0), 1000);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onSubmitHandler = () => {

    const data = TextMatching("email", email, users);
    console.log(data);
    if (data.length > 0) {
      setUserInfo({
        ...userInfo,
        userId: data[0].id,
        userName: data[0].name,
        userEmail: data[0].email,
      });
      navigation("/doctor-prescription");
    }
  };

  console.log(userInfo);
  return (
    <>
      <Helmet>
        <title>Find patient</title>
      </Helmet>

      <FormContainer headerContent="Search patient">
        {progress !== 0 && <Popup type={PROGRESS_STATUS[progress]} />}
        <InputForm
          id="email"
          label="email"
          value={email}
          type="text"
          onChange={(e) => onInputChange(e)}
        />

        <Button type="primary" onClick={onSubmitHandler}>
          Search
        </Button>
      </FormContainer>
    </>
  );
};

export default statusWrapper(withRouter(FindUser));
