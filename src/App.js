import React, { Suspense, lazy } from 'react';
import Loading from './components/Loading';

import styles from './App.module.scss';

const LazyCarousel = lazy(() => import('./components/Carousel'));
const LazyHeader = lazy(() => import('./components/Header'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.wrapper}>
        <LazyHeader />
        <LazyCarousel />
        <p>Scroll down to reset animation</p>
      </div>
    </Suspense>
  );
};

export default App;