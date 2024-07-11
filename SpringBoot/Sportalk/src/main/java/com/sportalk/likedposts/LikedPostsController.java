package com.sportalk.likedposts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sportalk.board.Board;

@RestController
@RequestMapping("/api/likedposts")
public class LikedPostsController {
	
	@Autowired
	private LikedPostsService likedPostsService;
	
	@GetMapping("/{userId}")
	public ResponseEntity<List<Board>> getLikedPosts(@PathVariable Long userId) {
		List<Board> posts = likedPostsService.findLikePostsByUserId(userId);
		return ResponseEntity.ok(posts);
	}
}
