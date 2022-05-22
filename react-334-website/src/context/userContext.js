import React, { useState, useEffect, useCallback } from 'react';

import { apiGetUserInfo } from '../api/'; 

const USER_INFO_STORAGE = 'user-info';

const DEFAULT_USER_INFO = {
  email: '',
  fullname: '',
  token: null,
};

export const UserInfoContext = React.createContext({
  userInfo: DEFAULT_USER_INFO,
  setUserInfo: () => {},
  clearUserInfo: () => {},
});

export function UserInfoProvider(props) {
  const [userInfo, setUserInfo] = useState(DEFAULT_USER_INFO);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log('context', userInfo);

  const getUserInfo = async () => {
    const { result, data } = await apiGetUserInfo({ token: userInfo.token });
    if (result === "1" && data) {
      setUserInfo({
        ...userInfo,
        fullname: data.name || userInfo.fullname,
        email: data.email || userInfo.email,
      });
    } else {
      setUserInfo({ ...DEFAULT_USER_INFO });
    }
  };

  useEffect(() => {
    console.log(userInfo);
    if (isLoaded) {
      if (userInfo?.token) {
        getUserInfo();
      }
    }
  }, [userInfo.token]);

  useEffect(() => {
    const userInfoStorage = JSON.parse(localStorage.getItem(USER_INFO_STORAGE));
    if (userInfoStorage?.token) {
      setUserInfo({ ...userInfo, token: userInfoStorage.token });
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem(USER_INFO_STORAGE, JSON.stringify(userInfo));
  }, [userInfo]);

  const clearUserInfo = useCallback(() => {
    setUserInfo(DEFAULT_USER_INFO);
    localStorage.clear(USER_INFO_STORAGE);
  }, []);

  return (
    <UserInfoContext.Provider
     value={{
      userInfo,
      setUserInfo: (info) => setUserInfo((userInfo) => {
        return { ...userInfo, ...info }
      }),
      clearUserInfo,
     }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
}