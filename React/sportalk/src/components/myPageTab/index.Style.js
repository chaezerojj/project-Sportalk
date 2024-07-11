import { styled } from 'styled-components';

export const Tab = styled.div`
  width: 250px;
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  padding: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 25px;
  border: 0.5px solid rgb(100, 100, 100, 0.2);
  background-color: #ffffff;
`;

export const Category = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  & a {
    color: rgb(70, 70, 70);
    font-size: 20px;
    font-family: "Pretendard-SemiBold";
  }
  & a:hover {
    color: black;
    font-family: "Pretendard-Bold";
  }
`;