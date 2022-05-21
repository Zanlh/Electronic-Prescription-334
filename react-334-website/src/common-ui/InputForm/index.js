import React from 'react';

import styles from './style.module.css';

const InputForm = (props) => {
  const { label, type, id, value, onChange, error } = props;
  console.log(props);
  console.log(styles);
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div>
        <input 
          className={styles.textArea}
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