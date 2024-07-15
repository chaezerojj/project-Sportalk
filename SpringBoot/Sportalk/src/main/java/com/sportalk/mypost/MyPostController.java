package com.sportalk.mypost;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sportalk.board.Board;

@RestController
@RequestMapping("/api/sportalk/mypage/myposts")
public class MyPostController {
	
	@Autowired
	private MyPostService myPostService;
	
	@GetMapping("/{userId}")
	public ResponseEntity<List<Board>> getMyPosts(@PathVariable Long userId) {
		List<Board> posts = myPostService.findPostsByUserId(userId);
		return ResponseEntity.ok(posts);
	}
	
}
