import React from 'react';

import styles from './style.module.css';

const Button = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;