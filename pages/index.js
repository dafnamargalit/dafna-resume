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
import firstname from '/images/firstname.png';
import lastname from '/images/lastname.png';

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
        <WrapLogo>
          <DafnaLogo src={firstname}/>
          <DafnaLogo src={lastname}/>
        </WrapLogo>
        <ClickOnProject>Click On An Icon!</ClickOnProject>
          <WrapIcons>
            {projects.map((project, index) => 
            <Link href={project?.link}>
              <ProjectIcon {...project} key={index} onClick={() => setSelectedProject(project)}/>
            </Link>
            )}
          </WrapIcons>
          <ViewSourceCode href="https://github.com/dafnamargalit/dafna-resume">{"View Source Code ->"}</ViewSourceCode>
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

const WrapLogo = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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

const ClickOnProject = styled.div`
   color: #ffaacf;
  text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  font-weight: 800;
    font-family: 'Courier New', Courier, monospace;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 5vh;
`;

const ViewSourceCode = styled(Link)`
  color: #ffaacf;
  text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  font-weight: 800;
    font-family: 'Courier New', Courier, monospace;
    transition: transform .2s;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 5vh;
    &:hover{
      transform: scale(1.1);
    }
`;