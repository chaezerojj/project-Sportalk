import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BoardDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostById = () => {
      fetch(`/api/sportalk/board/${id}`)
        .then(res => res.json())
        .then(data => {
          setPost(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching post:', err);
          setLoading(false);
        });
    };

    fetchPostById();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // 데이터 로딩 중일 때 표시
  }

  if (!post) {
    return <div>No data found.</div>; // 데이터가 없을 때 표시
  }

  return (
    <div>
      <h3>제목 : {post.title}</h3>
      <h3>작성자 : {post.nickName}</h3>
      <h3>작성일자 : {post.regDate}</h3>
      <h3>내용 : {post.content}</h3>
    </div>
  );
}

export default BoardDetailPage;
