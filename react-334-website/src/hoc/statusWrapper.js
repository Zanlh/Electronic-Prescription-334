import React, { useContext } from "react";

import { UserInfoContext } from "../context/userContext";

import { Navigate, useLocation } from "react-router-dom";

import { LOGIN, HOMEPAGE } from "../routes/paths";

const statusWrapper = (Component) => {
  const Wrapper = (props) => {
    const { userInfo } = useContext(UserInfoContext);
    const { pathname } = useLocation();

    if ((!userInfo || !userInfo.role) && pathname !== "/") {
      return <Navigate to={HOMEPAGE} />;
    }
    if (
      (!userInfo || !userInfo.token) &&
      !pathname.includes("login") &&
      !pathname.includes("signup")
    ) {
      return <Navigate to={LOGIN} />;
    }

    return <Component {...props} />;
  };

  return Wrapper;
};

export default statusWrapper;
