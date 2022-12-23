import styled from 'styled-components';
import Link from 'next/link';

export default function ProjectIcon(props) {
    return (
        <Container>
            {props.name}
        </Container>
    );
} 

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
  text-decoration: none;
   @media (hover: hover) {
    :hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    
  }
  :not( :hover ){ transition: all 0.2s ease-in-out; }
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