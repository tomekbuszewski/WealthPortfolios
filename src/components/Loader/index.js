import styled, { keyframes } from 'styled-components';

const size = 24;

const loader = keyframes`
  0% {
    background-color: rgba(0,0,0, 1);
    box-shadow: ${size * 2}px 0 0 0 rgba(0,0,0,0.2), 
                ${size * 4}px 0 0 0 rgba(0,0,0,0.2);
  }
  25% { 
    background-color: rgba(0,0,0, 0.4);
    box-shadow: ${size * 2}px 0 0 0 rgba(0,0,0,2), 
                ${size * 4}px 0 0 0 rgba(0,0,0,0.2);
  }
  75% {
    background-color: rgba(0,0,0, 0.4);
    box-shadow: ${size * 2}px 0 0 0 rgba(0,0,0,0.2), 
                ${size * 4}px 0 0 0 rgba(0,0,0,1);
  }
`;

const Loader = styled.div`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  margin: 46px auto;
  position: relative;
  left: -${size * 2}px;
  animation: ${loader} 2s linear infinite alternate;
`;


export default Loader;
