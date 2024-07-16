// commentRouter.js
const express = require('express');
const router = express.Router();

// JSON
router.use(express.json());

let comments = [];

// 특정 게시물에 있는 댓글 가져오기
router.get('/board/:postId', (req, res) => {
  const { postId } = req.params;
  const postComments = comments.filter(comment => comment.postId === parseInt(postId));
  res.json(postComments);
});

// Route to create a new comment
router.post('/board/:postId/create', (req, res) => {
  const { postId } = req.params;
  const { comment, nick_name } = req.body;

  // Validate the input
  if (!comment || !nick_name) {
    return res.status(400).json({ success: false, message: 'Comment and nick_name are required' });
  }

  // Create a new comment
  const newComment = {
    id: new Date().getTime(), 
    postId: parseInt(postId, 10),
    comment: comment,
    nick_name: nick_name,
    reg_date: new Date().toISOString(),
    like: 0,
    user_id: 1
  };

  // 데이터베이스에 새 댓글 추가
  comments.push(newComment);

  res.status(201).json({ success: true, comment: newComment });
});

// 댓글 수정
router.put('/board/:postId/comments/:commentId', (req, res) => {
  const { postId, commentId } = req.params;
  const { comment } = req.body;

  // Validate the input
  if (!comment) {
    return res.status(400).json({ success: false, message: 'Comment is required' });
  }

  // Find and update the comment
  let commentIndex = comments.findIndex(c => c.id === parseInt(commentId) && c.postId === parseInt(postId));
  if (commentIndex === -1) {
    return res.status(404).json({ success: false, message: 'Comment not found' });
  }

  comments[commentIndex].comment = comment;
  res.json({ success: true, comment: comments[commentIndex] });
});

// Route to delete a comment
router.delete('/board/:postId/comments/:commentId', (req, res) => {
  const { postId, commentId } = req.params;

  // Find and delete the comment
  comments = comments.filter(c => !(c.id === parseInt(commentId) && c.postId === parseInt(postId)));
  res.status(204).send();
});

module.exports = router;
