// 좋아요 받은 게시물 페이지
import React, { useEffect, useState } from 'react';
import * as S from './index.Style';
import { SERVER_URL } from '../../../constants';

export default function Index() {
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const userId = '';
    try {
      const response = await fetch(SERVER_URL + `/api/sportalk/mypage/likedposts/${userId}`);
      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching Data: ", error);
    }
  };

  return (
    <S.Wrapper>
      <S.LikedList>
        <S.TextTitle>
          💗좋아요 받은 게시물 목록
        </S.TextTitle>
        <S.ListWrapper>
          <S.List>
            목록~~
          </S.List>
        </S.ListWrapper>
      </S.LikedList>
    </S.Wrapper>
  )
}
