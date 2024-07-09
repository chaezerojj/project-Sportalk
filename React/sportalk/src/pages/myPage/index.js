// 마이페이지 
import React from 'react';
import * as S from './index.Style';
import MyPageTab from '../../components/myPageTab';
import Profile from './profile/index';

export default function Index() {
  return (
    <S.Wrapper>
      <h2>마이페이지</h2>
      <S.MyPageWrapper>
        <MyPageTab />
        <Profile />
      </S.MyPageWrapper>
    </S.Wrapper>
  )
}
