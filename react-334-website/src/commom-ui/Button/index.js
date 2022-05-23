import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './style.module.css';

import { UserInfoContext } from '../../context/userContext';

const Button = (props) => {
  const { userInfo } = useContext(UserInfoContext);

  return (
    <div className={styles.container}>
      <button className={cx(styles.button, styles[`button-${props.type}-${userInfo.role}`])} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;