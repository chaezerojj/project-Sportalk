import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 1100px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  font-size: 32px;
  font-family: "Tenada";
  text-decoration-line: none;
`;

export const Team = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  & a {
    background-color: rgb(100, 100, 100, 0.1);
    padding: 14px;
    padding-top: 18px;
    border-radius: 12px;
    color: rgb(70, 70, 70);
    text-decoration-line: none;
  }
  & a:hover {
    color: black;
  }
`;