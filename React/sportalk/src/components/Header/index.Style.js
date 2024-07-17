// header style
import { styled } from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0;
  text-align: justify;
  height: 150px;
  color: black;
  z-index: 1000;
  border-bottom: 0.5px solid rgb(100, 100, 100, 0.1);
`;
  
export const Wrapper = styled.div`
  background-color: #ffffff;
  width: 1440px;
  min-width: 1440px;
  height: 150px;
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin: 5px auto;
  padding: 0px 40px;
  font-family: "Tenada";
`;

export const Logo = styled.h1`
  width: 400px;
  padding-top: 10px;
  margin: 0;
  & a {
    display: flex;
    text-align: center;
    justify-content: center;
    color: black;
    text-decoration: none;
  }
`;

export const Nav = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  padding-top: 30px;
  font-size: 22px;
  & a {
    cursor: pointer;
    border-radius: 2rem;
    padding: 0 1rem;
    color: rgb(70, 70, 70);
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5rem;
    &:hover {
      color: rgb(0, 0, 0);
    }
  }
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserNav = styled.div`
  width: 300px;
  padding: 20px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & a {
    cursor: pointer;
    border-radius: 2rem;
    padding: 0 1rem;
    color: rgb(70, 70, 70);
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: rgb(0, 0, 0);
    }
  }
`;

export const Button = styled.button`
  font-family: "Tenada";
  font-size: 22px;
  border: none;
  background-color: transparent;
  color: rgb(70, 70, 70);
  &:hover {
    color: rgb(0, 0, 0);
  }
`;