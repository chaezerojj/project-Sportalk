package com.sportalk.likedposts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sportalk.board.Board;
import com.sportalk.board.BoardRepository;

@Service
public class LikedPostsService {
	
	@Autowired
	private BoardRepository boardRepository;
	
	public List<Board> findLikePostsByUserId(Long userId) {
		return boardRepository.findByUserIdAndLikeGreaterThan(userId, 0);
	}
}
