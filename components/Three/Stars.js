import { useTexture } from '@react-three/drei';
import React, { useMemo } from 'react';

export default function Stars({count = 1500, sep = 3, size = 0.05, map = 'https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp1.png'}) {

  const { colorMap } = useTexture({colorMap: map})

  let positions = useMemo(() => {
    let positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  
  return new Float32Array(positions);
  }, [count, sep]); 
  

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position" //attribute parameter yang akan dikontrol
          array={positions}
          count={positions.length / 3} //
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={colorMap}
        color={'#ffdd00'}
        size={size}
        transparent={true}
        alphaTest={0.5} //merupakan thresshold saat rendering untuk mencega bila opacity dibawah value alphatest
        opacity={0.6}
      />
    </points>
  )
};