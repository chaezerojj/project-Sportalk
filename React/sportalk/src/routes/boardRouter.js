// src/routes/boardRouter.js

const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js'); // Assuming you have a Post model defined

// GET all posts
router.get('/api/sportalk/board', async (req, res) => {
  try {
    const posts = await Post.find().sort({ regDate: -1 }); // Sort by regDate descending
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Server error: Failed to fetch posts.' });
  }
});

// GET a single post by ID
router.get('/api/sportalk/board/:postId', async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    res.status(500).json({ error: 'Server error: Failed to fetch post.' });
  }
});

// Example: Create a new post
router.post('/api/sportalk/board/create', async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    const newPost = new Post({
      title,
      content,
      userId,
      regDate: new Date()
    });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully.', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Server error: Failed to create post.' });
  }
});

// Example: Update an existing post
router.put('/api/sportalk/board/:postId', async (req, res) => {
  const { postId } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, { title, content }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    res.status(200).json({ message: 'Post updated successfully.', post: updatedPost });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Server error: Failed to update post.' });
  }
});

// Example: Delete an existing post
router.delete('/api/sportalk/board/:postId', async (req, res) => {
  const { postId } = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    res.status(200).json({ message: 'Post deleted successfully.', post: deletedPost });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Server error: Failed to delete post.' });
  }
});

module.exports = router;
