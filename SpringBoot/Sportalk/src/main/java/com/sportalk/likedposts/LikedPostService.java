package com.sportalk.likedposts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sportalk.board.Board;
import com.sportalk.board.BoardRepository;

@Service
public class LikedPostService {
	
	@Autowired
	private BoardRepository boardRepository;
	
	public List<Board> findLikedPostsByUserId(String userId) {
		return boardRepository.findByUserIdAndLikedsGreaterThan(userId, 0);
	}
}
