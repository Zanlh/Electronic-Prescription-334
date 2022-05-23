import React from "react";
import cx from "classnames";

import styles from "./style.module.css";
import SuccessIcon from "../SuccessIcon";
import ErrorIcon from "../ErrorIcon";

const STATE = {
  success: "   Succeded",
  error: "   Error occured",
  loading: "   Loading...",
};

const Popup = (props) => {
  const { type } = props;
  console.log('popup');
  console.log(type);
  return (
    <div className={cx(styles[type], styles.container)}>
      {type === "success" && <SuccessIcon />}
      {type === "error" && <ErrorIcon />}
      <span className={styles.text}>{STATE[type]}</span>
    </div>
  );
};

export default Popup;
