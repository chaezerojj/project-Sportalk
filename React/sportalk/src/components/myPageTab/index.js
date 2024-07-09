// 마이페이지 탭(카테고리)
import React from 'react';
import * as S from "./index.Style";

export default function Index() {
  
  return (
    <S.Tab>
      <h3>카테고리</h3>
      {/* 카테고리 : 회원정보 수정 / 내가 쓴 게시물 / 내가 쓴 댓글 / 좋아요 받은 게시물 */}
      <div>회원정보 수정</div>
      <div>내가 쓴 게시물</div>
      <div>내가 쓴 댓글</div>
      <div>좋아요 받은 게시물</div>
    </S.Tab>
  )
}
