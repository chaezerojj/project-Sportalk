import React, { useEffect, useState } from 'react';
import * as S from './index.Style';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../../constants';
import { useAuth } from '../../../contexts/AuthProvider';

export default function Index() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoggedIn, userId } = useAuth();

  useEffect(() => {
    if (isLoggedIn && userId) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, userId]);

  const fetchData = async () => {
    const userId = 'abcd';
    try {
      const response = await fetch(SERVER_URL + `/mypage/myposts/${userId}`);
      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching Data: ", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleRowClick = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    navigate(`/sportalk/board/${id}`);
  };

  if (!isLoggedIn) {
    return <S.Wrapper>해당 페이지는 로그인 후 이용 가능합니다.</S.Wrapper>
  }

  if (loading) {
    return <S.Wrapper>로딩중입니다..</S.Wrapper>
  }

  if (error) {
    return <S.Wrapper>Error: {error}</S.Wrapper>
  }

  return (
    <S.Wrapper>
      <S.PostList>
        <S.TextTitle>
          📃내가 쓴 게시물 목록
        </S.TextTitle>
        <S.ListWrapper>
          <S.List>
            <S.Table>
              <S.Thead>
                <tr>
                  <S.ThTitle>제목</S.ThTitle>
                </tr>
              </S.Thead>
              <S.Tbody>
                {posts.map(post => (
                  <tr key={post.id} data-id={post.id} onClick={handleRowClick}>
                    <S.TdTitle>{post.title}</S.TdTitle>
                  </tr>
                ))}
              </S.Tbody>
            </S.Table>
          </S.List>
        </S.ListWrapper>
      </S.PostList>
    </S.Wrapper>
  )
}