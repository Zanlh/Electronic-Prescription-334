import React from 'react';
import SearchIcon from '../../commom-ui/SearchIcon';

import styles from './style.module.css';

const SearchBar = (props) => {

  return (
    <div className={styles.container}>
      <SearchIcon />
      <input 
        className={styles.search} 
        placeholder={`Find my ${props.placeholder}`} 
      />
    </div>
  );
}

export default SearchBar;