package com.sportalk.mycomment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sportalk.comment.Comment;

@RestController
@RequestMapping("/api/mycomments")
public class MyCommentController {
	
	@Autowired
	private MyCommentService myCommentService;
	
	@GetMapping("/{userId}")
	public ResponseEntity<List<Comment>> getMyComments(@PathVariable Long userId) {
		List<Comment> comments = myCommentService.findCommentsByUserId(userId);
		return ResponseEntity.ok(comments);
	}
}
