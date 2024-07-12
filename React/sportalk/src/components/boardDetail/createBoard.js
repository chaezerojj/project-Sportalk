// components/CreateBoard.js

import React, { useState } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

function CreateBoard() {
	const {user}=useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
	const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const currentDate = new Date().toISOString().split('T')[0];

    const newPost = {
      title: title,
      content: content,
      regDate: currentDate,
      nickName: user.nickName, // 사용자의 닉네임 사용
     	Id: user.id // 사용자의 식별자 사용
    };
		console.log(user.id)
    try {
      setIsSubmitting(true); // 폼 제출 중임을 표시
      const response = await fetch("/api/sportalk/board/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        // 게시물 생성 성공 시 처리할 로직 추가
        await fetchBoardPosts(); // 게시글 목록을 다시 불러오는 함수 호출
        navigate('/sportalk/board'); // 생성 후 게시판 페이지로 이동
      } else {
        console.error('게시물 생성 실패');
      }
    } catch (error) {
      console.error('게시물 생성 중 오류 발생', error);
    } finally {
      setIsSubmitting(false); // 폼 제출 완료 후 상태 변경
    }
  };

  // 게시글 목록을 다시 불러오는 함수
  const fetchBoardPosts = async () => {
    try {
      const response = await fetch("/api/sportalk/board");
      if (response.ok) {
        const data = await response.json();
        // 게시글 목록을 업데이트하거나 상태 관리 시스템에 반영하는 로직 추가
      } else {
        console.error('게시글 목록을 불러오는 데 실패했습니다.');
      }
    } catch (error) {
      console.error('게시글 목록을 불러오는 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <Container>
      <h2>작성하기</h2>
      <TextField
        label="제목"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="내용"
        fullWidth
        multiline
        rows={8}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <Grid container justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={handleSubmit}  disabled={isSubmitting}>
          작성하기
        </Button>
      </Grid>
    </Container>
  );
}
export default CreateBoard