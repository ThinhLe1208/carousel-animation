import React from 'react';

import styles from './styles.module.scss';

const HomeContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
    </div>
  );
};

export default HomeContent;
