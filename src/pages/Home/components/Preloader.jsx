// Preloader.jsx
import React from 'react';
import styles from '../styles/Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageBg}></div>
      <div className={styles.preloader}>
        <div className={styles.preloaderBox}>
          <div>L</div>
          <div>O</div>
          <div>A</div>
          <div>D</div>
          <div>I</div>
          <div>N</div>
          <div>G</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
