import React, { useState } from 'react';

export const userInfoContext = React.createContext({
  userInfo: {
    email: '',
    password: '',
    token: null,
  },
  setUserInfo: () => {},
  clearUserInfo: () => {},
});

export function UserInfoProvider(props) {
  const [userInfo, setUserInfo] = useState();

  // const clearUserInfo = React.useCallback(() => {
  //   setUserInfo({
  //     
  //   });
  //   apiLogout();
  // }, []);

  const clearUserInfo = () => {}

  console.log(userInfo);

  return (
    <userInfoContext.Provider
     value={{
      userInfo,
      setUserInfo: (info) => setUserInfo((userInfo) => ({ ...userInfo, ...info })),
      clearUserInfo,
     }}
    >
      {props.children}
    </userInfoContext.Provider>
  );
}