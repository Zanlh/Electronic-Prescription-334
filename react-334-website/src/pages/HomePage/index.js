import React, { useContext } from 'react';

import { userInfoContext } from '../../context/userContext';

const HomePage = () => {
  const { userInfo, setUserInfo } = useContext(userInfoContext);

  console.log(userInfo);
  return <div>This is home page</div>
}

export default HomePage;
