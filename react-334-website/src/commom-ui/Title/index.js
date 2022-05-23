import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './style.module.css';

import { UserInfoContext } from '../../context/userContext';

const Title = ({ children }) => {
  const { userInfo } = useContext(UserInfoContext);
  return (
    <h2 className={cx(styles.title, styles[`title-${userInfo.role}`])}>{children}</h2>
  );   
}

export default Title;