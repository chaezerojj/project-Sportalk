// 댓글
import React, { useState } from 'react';
import * as S from './index.Style';
import { Button, TextField } from '@mui/material';

const Index = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = () => {
    fetch(`api/sportalk/comments/board/${postId}`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error('Error fetching comments: ', err));
  };

  // 댓글 추가
  const handleAddComment = () => {
    fetch(`/api/sportalk/comments/board/${postId}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: newComment })
    })
      .then(res => res.json())
      .then(data => {
        setComments([...comments, data]);
        setNewComment('');
      })
      .catch(err => console.error('Error adding comment:', err));
  };

  // 댓글 수정
  const handleEditComment = (commentId) => {
    setEditCommentId(commentId);
    const comment = comments.find(c => c.id === commentId);
    setEditCommentText(comment.comment);
  };

  const handleUpdateComment = (commentId) => {
    fetch(`/api/sportalk/comments/board/${postId}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: editCommentText })
    })
      .then(res => res.json())
      .then(data => {
        setComments(comments.map(c => c.id === commentId ? data : c));
        setEditCommentId(null);
        setEditCommentText('');
      })
      .catch(err => console.error('Error updating comment: ', err));
  };

  // 댓글 삭제
  const handleDeleteComment = (commentId) => {
    fetch(`/api/sportalk/comments/board/${postId}/comments/${commentId}`, {
      method: 'DELETE'
    })
      .then(() => {
        setComments(comments.filter(c => c.id !== commentId));
      })
      .catch(err => console.error('Error deleting comment: ', err))
  };

  return (
    <S.Wrapper>
      <h3>댓글</h3>
      {comments.map(comment => (
        <Box key={comment.id} mb={2}>
          {editCommentId === comment.id ? (
            <>
              <TextField
                fullWidth
                value={editCommentText}
                onChange={(e) => setEditCommentText(e.target.value)}
                />
                <Button onClick={() => handleEditComment(comment.id)}>수정</Button>
                <Button onClick={() => setEditCommentId(null)}>취소</Button>
            </>
          ) : (
            <>
              <h3>{comment.comment}</h3>
              <Button onClick={() => handleEditComment(comment.id)}>수정</Button>
              <Button onClick={() => handleDeleteComment(comment.id)}>삭제</Button>
            </>
          )}
        </Box>
      ))}
      <S.InputBox>
        <S.CommentWrapper>
          <TextField 
            fullWidth
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 작성하세요."
          />
          <Button onClick={handleAddComment}>댓글 작성</Button>
        </S.CommentWrapper>
      </S.InputBox>
    </S.Wrapper>
  )
};

export default Index;