import React, { useContext }  from 'react';
import cx from 'classnames'
import styles from './style.module.css';

import { UserInfoContext } from '../../../context/userContext';

const FormContainer = (props) => {
  const { userInfo } = useContext(UserInfoContext);
  return (
    <div className={styles.container}>
      <div className={cx(styles.header, styles[userInfo.role])}>
        <span className={styles.headerContent}>{props.headerContent}</span>
      </div>
      {props.children}
    </div>
  );
}

export default FormContainer;