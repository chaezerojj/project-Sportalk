import { keyframes, styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const MainDiv = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  backgroud-color: rgb(0, 0, 0, 0,2);
`;

export const MainImg = styled.img`
  position: relative; 
  width: 80%;
  display: block;
  margin-top: -480px; 
  z-index: 1;
  top: 30%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
`;

export const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
  height: 760px;
  z-index: 2;
`;

export const TextContent = styled.div`
  position: absolute; 
  top: 20%; 
  left: 40%; 
  transform: translate(-50%, -50%); 
  z-index: 3; 
  font-size: 70px; 
  font-family: 'Pretendard-Bold';
  text-decoration-color: #fff;
  #blink {
    animation: ${blinkAnimation} 1s infinite;
  }
`;
