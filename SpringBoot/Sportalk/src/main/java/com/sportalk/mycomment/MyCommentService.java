package com.sportalk.mycomment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sportalk.comment.Comment;
import com.sportalk.comment.CommentRepository;

@Service
public class MyCommentService {
	@Autowired
	private CommentRepository commentRepository;
	
	public List<Comment> findCommentsByUserId(Long userId) {
		return commentRepository.findByUserId(userId);
	}
}
