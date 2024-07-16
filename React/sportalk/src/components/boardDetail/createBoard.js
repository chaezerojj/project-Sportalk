import React, { useState } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthProvider';

function CreateBoard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
	const {userId}=useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const currentDate = new Date().toISOString().split('T')[0];

    const newPost = {
      title: title,
      content: content,
      regDate: currentDate,
			user:userId
    };
		
    try {
      setIsSubmitting(true);
      const response = await axios.post('/api/sportalk/board/create', newPost);

      if (response.status === 201) {
        navigate('/sportalk/board'); // 생성 후 게시판 페이지로 이동
      } else {
        console.error('게시물 생성 실패');
      }
    } catch (error) {
      console.error('게시물 생성 중 오류 발생', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <h2>게시글 작성하기</h2>
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
        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={isSubmitting}>
          작성하기
        </Button>
      </Grid>
    </Container>
  );
}

export default CreateBoard;
