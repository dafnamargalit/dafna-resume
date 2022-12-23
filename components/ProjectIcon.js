import styled from 'styled-components';
import Image from 'next/image';

export default function ProjectIcon(props) {
    return (
        <Container src={props.src}/>
    );
} 

const Container = styled(Image)`
  height: 200px;
  width: auto;
  filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.3));
   @media (hover: hover) {
    :hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    
  }
  :not( :hover ){ transition: all 0.2s ease-in-out;     cursor: pointer;}
  :active {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`;