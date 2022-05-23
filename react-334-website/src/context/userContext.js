import React, { useState, useEffect, useCallback } from 'react';

import { apiGetUserInfo, apiGetDoctorInfo } from '../api/'; 

const USER_INFO_STORAGE = 'user-info';

const DEFAULT_USER_INFO = {
  email: '',
  fullname: '',
  role: '',
  token: null,
};

export const UserInfoContext = React.createContext({
  userInfo: DEFAULT_USER_INFO,
  setUserInfo: () => {},
  clearUserInfo: () => {},
});

export function UserInfoProvider(props) {
  const [userInfo, setUserInfo] = useState(() => {
    const userInfoStorage = JSON.parse(localStorage.getItem(USER_INFO_STORAGE));
    return userInfoStorage || DEFAULT_USER_INFO;
  });
  const [isLoaded, setIsLoaded] = useState(false);

  console.log('context', userInfo, isLoaded);

  const getInfo = async (token) => {
    if (userInfo.role === 'user') return await apiGetUserInfo({ token });
    return await apiGetDoctorInfo({ token });
  }

  const getUserInfo = async () => {
    console.log(userInfo);
    const { result, data } = await getInfo(userInfo.token);
    if (result === "1" && data) {
      setUserInfo({
        ...userInfo,
        fullname: data.name || userInfo.fullname,
        email: data.email || userInfo.email,
      });
    } else {
      // console.log('fetch', userInfo);
      setUserInfo({ ...userInfo });
    }
  };

  useEffect(() => {
    if (isLoaded) {
      if (userInfo?.token) {
        getUserInfo();
      } else {
        setUserInfo({ ...userInfo });
      }
    }
  }, [userInfo.token, isLoaded]);

  useEffect(() => {
    const userInfoStorage = JSON.parse(localStorage.getItem(USER_INFO_STORAGE));
    if (userInfoStorage?.role) {
      setUserInfo({ ...userInfo, role: userInfoStorage.role });
    }
  }, []);

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
      getUserInfo,
     }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
}