import React, { useEffect, useState } from 'react';
import * as S from './index.Style';
import { SERVER_URL } from '../../../constants';
import { useAuth } from '../../../contexts/AuthProvider';

export default function Index() {
  const [comments, setComments] = useState([]);
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
      const response = await fetch(`${SERVER_URL}/api/sportalk/mypage/mycomment/${userId}`);
      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }
      const data = await response.json();
      setComments(data);
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
      <S.CommentList>
        <S.TextTitle>
          💬 내가 쓴 댓글 목록
        </S.TextTitle>
        <S.ListWrapper>
          <S.List>
            {comments.length > 0 ? (
              comments.map(comment => (
                <S.CommentItem key={comment.id}>
                  <S.CommentContent>{comment.content}</S.CommentContent>
                </S.CommentItem>
              ))
            ) : (
              <S.NoComments>댓글이 없습니다.</S.NoComments>
            )}
          </S.List>
        </S.ListWrapper>
      </S.CommentList>
    </S.Wrapper>
  );
}
