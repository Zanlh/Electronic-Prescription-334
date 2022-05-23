import React, { useContext } from "react";
import { Helmet } from 'react-helmet';
import styles from "./style.module.css";

import { UserInfoContext } from "../../context/userContext";

import { withRouter } from "../../hooks/withRouter";
import { Navigate } from "react-router-dom";

const HomePage = ({ navigation }) => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const onClickHandler = (e) => {
    const { name } = e.target;
    console.log(name);

    if (!name) return;

    setUserInfo({ ...userInfo, role: name });

    navigation("/login");
  };

  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>

      <div className={styles.container} onClick={onClickHandler}>
        <button name="user" className={styles.user}>
          User
        </button>
        <button name="phar" className={styles.phar}>
          Pharmacist
        </button>
        <button name="doctor" className={styles.doctor}>
          Doctor
        </button>
      </div>
    </>
  );
};

export default withRouter(HomePage);
