import React  from 'react';

import styles from './style.module.css';

const FormContainer = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerContent}>{props.headerContent}</span>
      </div>
      {props.children}
    </div>
  );
}

export default FormContainer;