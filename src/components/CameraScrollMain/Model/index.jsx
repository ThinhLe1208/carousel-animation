import React from 'react';

import styles from './styles.module.scss';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { nodes, materials } = useGLTF('/air_jordan_1.glb');
  return (
    <mesh
      geometry={nodes.shoe_shoe_0.geometry}
      material={materials.shoe}
      position={[0, 0, 4]}
    ></mesh>
  );
};

export default Model;

useGLTF.preload('/air_jordan_1.glb');
