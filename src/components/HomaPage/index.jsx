import React from 'react';

import styles from './styles.module.scss';
import CameraScrollMain from '..//CameraScrollMain';
import HomeContent from '../HomeContent';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeContent}>
        <HomeContent />
      </div>

      <div className={styles.cameraScroll}>
        <CameraScrollMain />
      </div>
    </div>
  );
};

export default HomePage;
