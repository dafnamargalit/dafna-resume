import { Canvas } from '@react-three/fiber';
import Head from 'next/head';
import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import OrbitControls from '/components/Three/OrbitControls';
import Stars from '/components/Three/Stars';
import { projects } from '/data/projects.js';
import ProjectIcon from '/components/ProjectIcon';
import Link from 'next/link';
import Image from 'next/image';
import Fullname from '/images/fullname.png';

const ROW_COUNT = 2;

const columnCountToWidth = (columnCount) =>
    2500 * columnCount + 16 * (columnCount + 1);

export default function Home() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Suspense fallback={<Container>Loading...</Container>}>
      <Head>
        <title>Dafna</title>
      </Head>
      <Container>
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
      <Content>
          <DafnaLogo src={Fullname}/>
          <WrapIcons>
            {projects.map((project, index) => 
            <Link href={project?.link}>
              <ProjectIcon {...project} key={index} onClick={() => setSelectedProject(project)}/>
            </Link>
            )}
          </WrapIcons>
      </Content>
      </Container>
    </Suspense>
  )
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  
`;

const StyledCanvas = styled(Canvas)`
  background: linear-gradient(to right, #030b25 0%, #081645 100%);
  height: 100vh;
  width: 100vw;
  display: block;
  position: relative;
  z-index: -9999;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 9999;
`;

const DafnaLogo = styled(Image)`
  height: 10vw;
  width: auto;
`;

const WrapIcons = styled.div`
  display: flex;    
  flex-wrap: wrap;
  gap: 50px;
  padding: 32px 16px 16px 16px;
  margin: auto;
  flex-basis: 100%;
  width: 70vw;
  max-width: 900px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;
