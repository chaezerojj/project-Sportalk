// 마이페이지 
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import * as S from './index.Style';
import MyPageTab from '../../components/myPageTab';
import Profile from './profile';
import MyPosts from './posts';
import MyComments from './comment';
import LikedPosts from './likedPosts';

export default function Index() {
  return (
    <S.Wrapper>
      {/* <h2>마이페이지</h2> */}
      <S.MyPageWrapper>
        <S.LeftWrapper>
        <MyPageTab />
        </S.LeftWrapper>
        <S.RightWrapper>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/my-comments" element={<MyComments />} />
          <Route path="/liked-posts" element={<LikedPosts />} />
        </Routes>

        </S.RightWrapper>
      </S.MyPageWrapper>
    </S.Wrapper>
  )
}
