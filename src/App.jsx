import React from 'react';

import styles from './App.module.scss';
import Header from './components/Header';
import HomePage from './components/HomaPage';

const App = () => {
  return (
    <div className={styles.wrapper}>
      {/* <Header /> */}
      <HomePage />
    </div>
  );
};

export default App;
