import React, { useState, useContext } from "react";
import { Helmet } from 'react-helmet';
// api
import { apiUserSignup, apiDoctorSignup, apiPharSignup } from "../../api/auth";

// common ui
import InputForm from "../../commom-ui/InputForm";
import Button from "../../commom-ui/Button";
import Popup from "../../commom-ui/Popup";

// components
import FormContainer from "../../components/Container/FormContainer";

// hoc
import statusWrapper from "../../hoc/statusWrapper";

import { UserInfoContext } from "../../context/userContext";

const labels = {
  fullname: "Fullname",
  password: "Password",
  email: "Email",
};

const PROGRESS_STATUS = [
  '',
  'error',
  'success',
  'loading',
]

const SignupPage = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [info, setInfo] = useState({});
  const [progress, setProgress] = useState(0);
  // const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setInfo({ ...info, [id]: value });
    // setErrors({ ...errors, [id]: null });
  };

  const DefaultProps = (name) => ({
    id: name,
    label: labels[name],
    value: info[name],
    onChange: onInputChange,
    // error: errors[name],
  });

  const fetchSignup = async ({ fullname: name, email, password }) => {
    if (userInfo.role === "user")
      return await apiUserSignup({ name, password, email });
    if (userInfo.role === "doctor")
      return await apiDoctorSignup({ name, password, email });
    return await apiPharSignup({ name, password, email });
  };

  const onSubmitHandler = async (e) => {
    setProgress(3);
    e.preventDefault();

    const { result, message, data } = await fetchSignup({ ...info });
    if (result !== "1" || data) {
      setProgress(1);
    } else {
      setProgress(2);
    }

    setInterval(() => setProgress(0), 1000);
  };

  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <FormContainer headerContent="Register">
        {progress !== 0 && <Popup type={PROGRESS_STATUS[progress]} />}
        <InputForm {...DefaultProps("email")} type="text" />
        <InputForm {...DefaultProps("password")} type="password" />
        <InputForm {...DefaultProps("fullname")} type="text" />

        <Button type="primary" onClick={onSubmitHandler}>
          Register
        </Button>
      </FormContainer>
    </>
  );
};

export default statusWrapper(SignupPage);
