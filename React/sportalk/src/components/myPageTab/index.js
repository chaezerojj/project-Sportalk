// 마이페이지 탭(카테고리)
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from "./index.Style";

export default function Index() {
  
  return (
    <S.Tab>
      {/* 카테고리 : 회원정보 수정 / 내가 쓴 게시물 / 내가 쓴 댓글 / 좋아요 받은 게시물 */}
      <S.Category>
        <Link to='profile'>회원정보 수정</Link>
      </S.Category>
      <S.Category>
        <Link to='my-posts'>내가 쓴 게시물</Link>
      </S.Category>
      <S.Category>
        <Link to='my-comments'>내가 쓴 댓글</Link>
      </S.Category>
      <S.Category>
        <Link to='liked-posts'>좋아요 받은 게시물</Link>
      </S.Category>
    </S.Tab>
  )
}
