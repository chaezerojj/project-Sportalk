import React, { useEffect } from 'react';
import * as S from './index.Style';
import { SERVER_URL } from '../../../constants';

export default function Index() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const userId = 'abcd';
    try {
      const response = await fetch(SERVER_URL + `/mypage/mycomment/${userId}`);
      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching Data: ", error);
    }
  }

  return (
    <S.Wrapper>
    <S.CommentList>
      <S.TextTitle>
        💬 내가 쓴 댓글 목록
      </S.TextTitle>
      <S.ListWrapper>
        <S.List>
          목록~~
        </S.List>
      </S.ListWrapper>
    </S.CommentList>
  </S.Wrapper>
  )
}