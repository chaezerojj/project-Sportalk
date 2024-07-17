import React from 'react';
import { Link } from 'react-router-dom';
import * as S from "./index.Style";

export default function Index() {
  return (
    <S.Wrapper>
      <S.Team>
        <Link to='Doosan'>두산</Link>
      </S.Team>
      <S.Team>
        <Link to='Hanhwa'>한화</Link>
      </S.Team>
      <S.Team>
        <Link to='Kia'>KIA</Link>
      </S.Team>
      <S.Team>
        <Link to='Kiwoom'>키움</Link>
      </S.Team>
      <S.Team>
        <Link to='Kt'>KT</Link>
      </S.Team>
      <S.Team>
        <Link to='LG'>LG</Link>
      </S.Team>
      <S.Team>
        <Link to='Lotte'>롯데</Link>
      </S.Team>
      <S.Team>
        <Link to='NC'>NC</Link>
      </S.Team>
      <S.Team>
        <Link to='Samsung'>삼성</Link>
      </S.Team>
      <S.Team>
        <Link to='SSG'>SSG</Link>
      </S.Team>
    </S.Wrapper>
  )
}
