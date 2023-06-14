import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const LoaderModel = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

export default LoaderModel;
