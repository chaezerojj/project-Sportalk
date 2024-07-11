import React, { useEffect, useState } from 'react';
import * as S from './index.Style';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../../constants';

export default function Index() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const userId = 'abcd';
    try {
      const response = await fetch(SERVER_URL + `/mypage/myposts/${userId}`);
      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching Data: ", error);
    }
  }

  const handleRowClick = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    navigate(`/sportalk/board/${id}`);
  }

  return (
    <S.Wrapper>
      <S.PostList>
        <S.TextTitle>
          📃내가 쓴 게시물 목록
        </S.TextTitle>
        <S.ListWrapper>
          <S.List>
            {posts.map(post => (
              <div key={post.id}>
                {post.title}
                {post.content}
              </div>
            ))}
          </S.List>
        </S.ListWrapper>
      </S.PostList>
    </S.Wrapper>
  )
}