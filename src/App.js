import React, { Suspense, lazy, useEffect, useState } from 'react';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Loading from './components/Loading';

// const Carousel = lazy(() => import('./components/Carousel'));
// const Header = lazy(() => import('./components/Header'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div>
        {isLoading && <><Loading /></>}
        {!isLoading && (
          <>
            <Header />
            <Carousel />
          </>
        )}

        {/* <Header />
        <Carousel /> */}
      </div>
    </Suspense>
  );
};

export default App;