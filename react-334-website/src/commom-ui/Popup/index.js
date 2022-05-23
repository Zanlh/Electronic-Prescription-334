import React from "react";
import cx from "classnames";

import styles from "./style.module.css";
import SuccessIcon from "../SuccessIcon";
import ErrorIcon from "../ErrorIcon";

const STATE = {
  success: "   Update succeded",
  error: "   Error occured",
};

const Popup = (props) => {
  const { type } = props;
  return (
    <div className={cx(styles[type], styles.container)}>
      {type === "success" ? <SuccessIcon /> : <ErrorIcon />}
      <span className={styles.text}>{STATE[type]}</span>
    </div>
  );
};

export default Popup;
