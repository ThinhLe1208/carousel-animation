import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import styles from './styles.module.scss';
import Model from '../Model';
import Overlay from '../Overlay';
import LoaderModel from '../../LoaderModel';

const CameraScroll = () => {
  return (
    <div className={styles.wrapper}>
      <Canvas
        shadows
        eventSource={document.getElementById('root')}
        eventPrefix='client'
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />

        <Suspense fallback={<LoaderModel />}>
          <Model />
          <Environment preset='city' />
        </Suspense>
      </Canvas>

      <Overlay />
    </div>
  );
};

export default CameraScroll;
