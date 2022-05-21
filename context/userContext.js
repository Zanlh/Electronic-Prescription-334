import React, { useState } from 'react';
import { Children } from 'react/cjs/react.production.min';

const userInfoContext = React.createContext({
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

  return (
    // <userInfoContext.Provider
    //  value={{
    //   userInfo,
    //   setUserInfo: (info) => setUserInfo((userInfo) => ({ ...userInfo, ...info })),
    //   clearUserInfo,
    //  }}
    // >
    //   {props.children}
    // </userInfoContext.Provider>
    <></>
  );
}