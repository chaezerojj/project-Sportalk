// header
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './index.Style';


export default function Index() {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link to="/">
            <h2>Sportalk</h2>
          </Link>
        </S.Logo>

      <S.Nav>
        <Link to="/sportalk/board">
          <h3>게시판</h3>
        </Link>
      </S.Nav>

      <S.UserNav>
        <Link to="/sportalk/login">
          로그인
        </Link>

        <Link to="/sportalk/signup">
          회원가입
        </Link>

        <Link to="/sportalk/mypage">
        마이페이지
        </Link>
      </S.UserNav>

      </S.Wrapper>
    </S.Header>
  )
}
