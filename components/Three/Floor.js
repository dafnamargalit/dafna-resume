import React from 'react';

export default function Floor(props) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color={'white'} />
    </mesh>
  );
}
