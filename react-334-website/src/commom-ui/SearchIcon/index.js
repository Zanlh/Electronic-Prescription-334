import React from "react";

import styles from "./style.module.css";

const SearchIcon = () => {
  return (
    <div className={styles.container}>
      <svg
        width="28"
        height="25"
        viewBox="0 0 28 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5288 9.23913C19.5288 14.0472 15.4683 17.9783 10.4174 17.9783C5.36644 17.9783 1.30591 14.0472 1.30591 9.23913C1.30591 4.43108 5.36644 0.5 10.4174 0.5C15.4683 0.5 19.5288 4.43108 19.5288 9.23913Z"
          fill="white"
          stroke="#12266D"
        />
        <line
          y1="-0.5"
          x2="14.1162"
          y2="-0.5"
          transform="matrix(0.720932 0.693005 -0.720932 0.693005 16.6366 15.2168)"
          stroke="#12266D"
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
