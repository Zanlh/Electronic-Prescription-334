import React, { useState, useContext } from 'react';

// api
import { apiUserLogin, apiDoctorLogin } from '../../api/auth';

// common ui
import InputForm from '../../commom-ui/InputForm';
import Button from '../../commom-ui/Button';

// components
import FormContainer from '../../components/Container/FormContainer';

import { withRouter } from '../../hooks/withRouter';

// context
import { UserInfoContext } from '../../context/userContext';

// common-ui
import Popup from '../../commom-ui/Popup';

// hoc  
import statusWrapper from '../../hoc/statusWrapper';

const labels = {
  password: 'Password',
  email: 'Email',
};

const LoginPage = ({ navigation }) => {
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

  const fetchLogin = async ({ email, password }) => {
    if (userInfo.role === 'user') return await apiUserLogin({ password, email });
    return await apiDoctorLogin({ password, email });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    
    const { result, message, data} = await fetchLogin({ ...info });

    if (result !== "1" || !data || !data.token) {
      setProgress(1);
    } else {
      setProgress(2);
      console.log(result, message, data);
      setUserInfo({ token: data.token });
      console.log('login', data);

      navigation('/user-prescriptions');
    }
  }
  
  return (
    <FormContainer headerContent="Login">
      <InputForm { ...DefaultProps('email') } type="text" />
      <InputForm { ...DefaultProps('password') } type="password" />

      <Button type="primary" onClick={onSubmitHandler}>Login</Button>

      <Popup type="error" />
    </FormContainer>
  );
}

export default statusWrapper(withRouter(LoginPage));