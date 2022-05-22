import React, { useState, useContext } from 'react';

// api
import { apiLogin } from '../../api/auth';

// common ui
import InputForm from '../../commom-ui/InputForm';
import Button from '../../commom-ui/Button';

// components
import FormContainer from '../../components/Container/FormContainer';

// context
import { UserInfoContext } from '../../context/userContext';

const labels = {
  password: 'Password',
  email: 'Email',
};

const LoginPage = ({ history }) => {
  const [info, setInfo] = useState({});

  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState(0);

  const { userInfo, setUserInfo } = useContext(UserInfoContext);

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

    if (result !== "1" || !data || !data.token) {
      setProgress(1);
    } else {
      setProgress(2);
      console.log(result, message, data);
      setUserInfo({ token: data.token, isFetch: false });
      console.log('login', data);
    }
    
    // history.push('/');
  }

  if (userInfo?.email) console.log('userInfo', userInfo.email);
  
  return (
    <FormContainer headerContent="Register">
      <InputForm { ...DefaultProps('email') } type="text" />
      <InputForm { ...DefaultProps('password') } type="password" />

      <Button onClick={onSubmitHandler}>Register</Button>
    </FormContainer>
  );
}

export default LoginPage;