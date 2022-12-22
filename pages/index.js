import Head from 'next/head'
import React, { useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import styled from 'styled-components';
import Floor from '/components/Three/Floor';
import Box from '/components/Three/Box';
import LightBulb from '/components/Three/LightBulb';
import OrbitControls from '/components/Three/OrbitControls';
import Draggable from '/components/Three/Draggable';
import Stars from '/components/Three/Stars';

export default function Home() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Container>
      <Head>
        <title>Dafna Margalit</title>
      </Head>
      <StyledCanvas
       shadows={true}
       camera={{
        fov: 75,
        aspect: 2,
        near: 1.5,
        far: 5,
        position: [0, 0, 2],
        }}>
          <directionalLight color={'white'} intensity={1} />
          <Stars />
          <Stars count={350} size={0.075} map={'https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png'}/>
          <OrbitControls />
      </StyledCanvas>
    </Container>
    </Suspense>
  )
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
`;

const StyledCanvas = styled(Canvas)`
  background: linear-gradient(to right, #030b25 0%, #081645 100%);
`;