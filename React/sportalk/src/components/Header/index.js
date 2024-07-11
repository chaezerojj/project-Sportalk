// header
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './index.Style';
import { useAuth } from '../../contexts/AuthProvider';


export default function Index() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link to="/">
            <h2>Sportalk</h2>
          </Link>
        </S.Logo>

        <S.Nav>
          <S.BoardWrapper>
            <Link to="/sportalk/board">
              <h3>게시판</h3>
            </Link>
          </S.BoardWrapper>

          <S.UserNav>
            {isLoggedIn ? (
              <>
                <Link to="/sportalk/mypage">마이페이지</Link>
                <button onClick={logout}>로그아웃</button>
              </>
            ) : (
              <>
                <Link to="/sportalk/login">로그인</Link>
                <Link to="/sportalk/signup">회원가입</Link>
              </>
            )}
          </S.UserNav>
        </S.Nav>
      </S.Wrapper>
    </S.Header>
  )
}
