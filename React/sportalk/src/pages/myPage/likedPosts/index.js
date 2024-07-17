import React, { useEffect, useState } from 'react';
import * as S from './index.Style';
import { SERVER_URL } from '../../../constants';
import { useAuth } from '../../../contexts/AuthProvider';

export default function Index() {
  const [likedPosts, setLikedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoggedIn, userId } = useAuth();

  useEffect(() => {
    if (isLoggedIn && userId) {
      fetchData(userId);
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, userId]);

  const fetchData = async (userId) => {
    try {
      const response = await fetch(`${SERVER_URL}/api/sportalk/mypage/likedposts/${userId}`);
      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }
      const data = await response.json();
      setLikedPosts(data);
    } catch (error) {
      console.error("Error fetching Data: ", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return <S.Wrapper>해당 페이지는 로그인 후 이용 가능합니다.</S.Wrapper>;
  }

  if (loading) {
    return <S.Wrapper>로딩중입니다..</S.Wrapper>;
  }

  if (error) {
    return <S.Wrapper>Error: {error}</S.Wrapper>;
  }

  return (
    <S.Wrapper>
      <S.LikedList>
        <S.TextTitle>
          💗좋아요 받은 게시물 목록
        </S.TextTitle>
        <S.ListWrapper>
          <S.List>
            {likedPosts.length > 0 ? (
              likedPosts.map(post => (
                <S.LikedItem key={post.id}>
                  <S.LikedTitle>{post.title}</S.LikedTitle>
                </S.LikedItem>
              ))
            ) : (
              <S.NoLikedPosts>좋아요 받은 게시물이 없습니다.</S.NoLikedPosts>
            )}
          </S.List>
        </S.ListWrapper>
      </S.LikedList>
    </S.Wrapper>
  );
}
