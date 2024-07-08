// header style
import { styled } from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0;
  text-align: justify;
  color: black;
  height: 4rem;
  z-index: 1000;
`;

export const Wrapper = styled.div`
  display: flex;
  align-item:: center;
  width: 1440px;
  margin: 5px auto;
  padding: 0px 40px;
`;

export const Logo = styled.h1`
  padding: 5px;
  & a {
    display: flex;
    text-align: center;
    color: black;
    text-decoration: none;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-left: 250px;
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

export const UserNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 20px;
  margin-left: 250px;
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