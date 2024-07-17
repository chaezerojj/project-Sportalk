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
          <Link to="/sportalk">
            <h2>Sportalk</h2>
          </Link>
        </S.Logo>

        <S.Nav>
          <S.BoardWrapper>
            <Link to="/sportalk/board">
              <h3>게시판</h3>
            </Link>
            <Link to="/sportalk/rank">
              <h3>랭킹</h3>
            </Link>
            <Link to="/sportalk/calendar">
              <h3>경기일정</h3>
            </Link>
            <Link to="/sportalk/team">
              <h3>팀</h3>
            </Link>
          </S.BoardWrapper>

          <S.UserNav>
            {isLoggedIn ? (
              <>
                <Link to="/sportalk/mypage">마이페이지</Link>
                <S.Button onClick={logout}>로그아웃</S.Button>
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
