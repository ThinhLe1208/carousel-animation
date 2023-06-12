import React, { Suspense, lazy, useEffect, useState } from 'react';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Loading from './components/Loading';

// const Carousel = lazy(() => import('./components/Carousel'));
// const Header = lazy(() => import('./components/Header'));

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div>
      {isLoading && <><Loading /></>}
      {!isLoading && (
        <>
          <Header />
          <Carousel />
        </>
      )}
    </div>
  );
};

export default App;