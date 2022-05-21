import React, { useState, useContext } from 'react';

// api
import { apiLogin } from '../../api/auth';

// common ui
import InputForm from '../../commom-ui/InputForm';
import Button from '../../commom-ui/Button';

// components
import FormContainer from '../../components/Container/FormContainer';

// context
import { userInfoContext } from '../../context/userContext';

const labels = {
  password: 'Password',
  email: 'Email',
};

const LoginPage = ({ history }) => {
  const [info, setInfo] = useState({});

  const [errors, setErrors] = useState({});

  const { userInfo, setUserInfo } = useContext(userInfoContext);

  console.log(info);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setInfo({ ...info, [id] : value});
    setErrors({ ...errors, [id]: null });
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

    const { result, message, data} = await apiLogin({ password: info.password, email: info.email });

    
    console.log(userInfo);
    // history.push('/');
  }

  console.log(userInfo);
  
  return (
    <FormContainer headerContent="Register">
      <InputForm { ...DefaultProps('email') } type="text" />
      <InputForm { ...DefaultProps('password') } type="password" />

      <Button onClick={onSubmitHandler}>Register</Button>
    </FormContainer>
  );
}

export default LoginPage;