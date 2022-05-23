import React, { useState, useContext } from "react";
import { Helmet } from 'react-helmet'
// api
import { apiUserLogin, apiDoctorLogin, apiPharLogin } from "../../api/auth";

// common ui
import InputForm from "../../commom-ui/InputForm";
import Button from "../../commom-ui/Button";

// components
import FormContainer from "../../components/Container/FormContainer";

import { withRouter } from "../../hooks/withRouter";

// context
import { UserInfoContext } from "../../context/userContext";

// common-ui
import Popup from "../../commom-ui/Popup";

// hoc
import statusWrapper from "../../hoc/statusWrapper";

const labels = {
  password: "Password",
  email: "Email",
};

const PROGRESS_STATUS = [
  '',
  'error',
  'success',
  'loading',
]

const LoginPage = ({ navigation }) => {
  const [info, setInfo] = useState({});

  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState(0);

  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setInfo({ ...info, [id]: value });
    setErrors({ ...errors, [id]: null });
  };

  const DefaultProps = (name) => ({
    id: name,
    label: labels[name],
    value: info[name],
    onChange: onInputChange,
    error: errors[name],
  });

  const fetchLogin = async ({ email, password }) => {
    if (userInfo.role === "user")
      return await apiUserLogin({ password, email });
    if (userInfo.role === "doctor")
      return await apiDoctorLogin({ password, email });
    return await apiPharLogin({ password, email });
  };

  console.log(PROGRESS_STATUS[progress]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setProgress(3);
    const { result, message, data } = await fetchLogin({ ...info });
    if (result !== "1" || !data || !data.token) {
      setProgress(1);
    } else {
      setProgress(2);
      setUserInfo({ token: data.token });

      if (userInfo.role === "user") navigation("/user-prescriptions");
      else if (userInfo.role === "doctor") navigation("/doctor-find");
      else navigation("/phar-prescription");
    }
    setInterval(() => setProgress(0), 1000);
  };

  return (
    <>
    <Helmet>
      <title>Login</title>
    </Helmet>
   
    <FormContainer headerContent="Login">
      {progress !== 0 && <Popup type={PROGRESS_STATUS[progress]} />}
      <InputForm {...DefaultProps("email")} type="text" />
      <InputForm {...DefaultProps("password")} type="password" />

      <Button type="primary" onClick={onSubmitHandler}>
        Login
      </Button>

    </FormContainer>
    </>
  );
};

export default statusWrapper(withRouter(LoginPage));
