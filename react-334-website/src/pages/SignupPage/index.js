import React, { useState } from 'react';

// api
import { apiSignup } from '../../api/auth';

// common ui
import InputForm from '../../common-ui/InputForm';
import Button from '../../common-ui/Button';

// components
import FormContainer from '../../components/Container/FormContainer';

const labels = {
  fullname: 'Fullname',
  password: 'Password',
  email: 'Email',
};

const SignupPage = () => {
  const [info, setInfo] = useState({});

  const [errors, setErrors] = useState({});

  console.log(info);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setInfo({ ...info, [id] : value});
    setErrors({ ...errors, [id]: 'aaa' });
  }

  const DefaultProps = (name) => ({
    id: name,
    label: labels[name],
    value: info[name],
    onChange: onInputChange,
    error: errors[name],
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { result, message, data } = await apiSignup({ name: info.fullname, password: info.password, email: info.email });

    console.log(result, message, data);
  }
  
  return (
    <FormContainer headerContent="Register">
      <InputForm { ...DefaultProps('email') } type="text" />
      <InputForm { ...DefaultProps('password') } type="password" />
      <InputForm { ...DefaultProps('fullname') } type="text" />

      <Button onClick={onSubmitHandler}>Register</Button>
    </FormContainer>
  );
}

export default SignupPage;