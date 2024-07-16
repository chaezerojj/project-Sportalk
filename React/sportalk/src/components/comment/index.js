// Comments.js
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import * as S from './index.Style';

const Comments = ({ postId, user }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = () => {
    fetch(`/api/sportalk/comments/board/${postId}`)
      .then(res => res.json())
      .then(data => {
        setComments(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error('Error fetching comments: ', err));
  };

  const handleAddComment = () => {
    fetch(`/api/sportalk/comments/board/${postId}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        comment: newComment,
        nick_name: user.nickName // Ensure user.nickName is passed
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) { // Check if the response indicates success
          setComments([...comments, data.comment]);
          setNewComment('');
        } else {
          console.error('Error adding comment:', data.message);
        }
      })
      .catch(err => console.error('Error adding comment:', err));
  };

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

  const handleDeleteComment = (commentId) => {
    fetch(`/api/sportalk/comments/board/${postId}/comments/${commentId}`, {
      method: 'DELETE'
    })
      .then(() => {
        setComments(comments.filter(c => c.id !== commentId));
      })
      .catch(err => console.error('Error deleting comment: ', err));
  };

  return (
    <S.Wrapper>
      <h3>댓글</h3>
      {comments.length > 0 ? (
        comments.map(comment => (
          <Box key={comment.id} mb={2}>
            {editCommentId === comment.id ? (
              <>
                <TextField
                  fullWidth
                  value={editCommentText}
                  onChange={(e) => setEditCommentText(e.target.value)}
                />
                <Button onClick={() => handleUpdateComment(comment.id)}>수정</Button>
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
        ))
      ) : (
        <p>댓글이 없습니다.</p>
      )}
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
  );
};

export default Comments;
