package com.sportalk.board;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
	List<Board> findByUserId(String userId);
	List<Board> findByUserIdAndLikedsGreaterThan(String userId, int likes);
}
