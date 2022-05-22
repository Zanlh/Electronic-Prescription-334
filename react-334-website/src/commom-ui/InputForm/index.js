import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './style.module.css';

import { UserInfoContext } from '../../context/userContext';

const InputForm = (props) => {
  const { userInfo } = useContext(UserInfoContext);

  const { label, type, id, value, onChange, error } = props;
  return (
    <div className={cx(styles.container, styles[`text-${userInfo.role}`])}>
      <label className={styles.label}>{label}</label>
      <div>
        <input 
          className={styles[`textArea-${userInfo.role}`]}
          type={type} 
          id={id} 
          value={value || ''}
          onChange={onChange}
        />
        <div className={styles.error}>{error}</div>
      </div>
    </div>
  );
};

export default InputForm;