// components/CreateBoard.js

import React, { useState } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

function CreateBoard() {
	// const {user}=useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

	const user={
		id:1,
		nickName:"minion",
		userName:"권민현",
		email:"rnjsalsgus06@naver.com",
		password:"1234",
		userId:"jess06"
	}

  const handleSubmit = async () => {
		const currentDate=new Date().toISOString().split('T')[0]
    const newPost = {
      title:title,
      content:content,
			regDate:currentDate,
      nickname:user.nickName,
			user:user
    };

    const response = await fetch("/api/sportalk/board/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost)
    });

    if (response.ok) {
      // 게시물 생성 성공 시 처리할 로직 추가
      navigate('/sportalk/board'); // 생성 후 게시판 페이지로 이동
    } else {
      // 게시물 생성 실패 시 처리할 로직 추가
      console.error('게시물 생성 실패');
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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          작성하기
        </Button>
      </Grid>
    </Container>
  );
}
export default CreateBoard