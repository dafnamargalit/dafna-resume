import React, { useState } from 'react';
import { extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export default function Controls(props) {
  const { camera, gl } = useThree();

  function handleMouseMove(ev) { 
    camera.position.set(ev.clientX * 0.0001, ev.clientY * -0.0001, 2); 
  }

  return <orbitControls enabled={false} attach={'orbitControls'} enablePan={false} enableZoom={false} args={[camera, gl.domElement]} domElement={addEventListener('mousemove', (event) => handleMouseMove(event))}/>;
}
