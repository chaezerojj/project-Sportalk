import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthProvider';

function EditBoardPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();

  useEffect(() => {
    // 게시글 데이터 불러오기
    fetch(`/api/sportalk/board/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
      })
      .catch(err => {
        console.error('Error fetching post:', err);
      });
  }, [id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpdate = () => {
    const updatedPost = {
      title: title,
      content: content,
    };

    axios.put(`/api/sportalk/board/${id}`, updatedPost)
      .then(response => {
        if (response.status === 200) {
          navigate(`/sportalk/board/${id}`); 
        } else {
          throw new Error('게시글 수정에 실패했습니다.');
        }
      })
      .catch(error => {
        console.error('Error updating post:', error);
      });
  };

  const handleCancel = () => {
    if (window.confirm('수정을 취소하시겠습니까?')) {
      navigate(`/sportalk/board/${id}`); 
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        게시글 수정
      </Typography>
      <TextField
        label="제목"
        fullWidth
        value={title}
        onChange={handleTitleChange}
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="내용"
        multiline
        rows={10}
        fullWidth
        value={content}
        onChange={handleContentChange}
        style={{ marginBottom: '20px' }}
      />
      <Grid container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            수정하기
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleCancel}>
            취소하기
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditBoardPage;
