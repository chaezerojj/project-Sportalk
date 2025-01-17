package com.sportalk.board;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
	
	@Autowired
	BoardRepository boardRepository;

	public List<Board> getAllBoards() {
		return boardRepository.findAll();
	}
	
	public Board createBoard(Board board) {
		return boardRepository.save(board);
	}
	@Transactional
	public void deleteBoard(Long id) {
		boardRepository.deleteById(id);
	}

	public Optional<Board> getBoardById(Long boardId) {
		return boardRepository.findById(boardId);
	}

	public Board updateBoard(Board board) {
		return boardRepository.save(board);
	}
	// 좋아요 메서드
	public Board likePost(Long id) {
		Optional<Board> optionalBoard=boardRepository.findById(id);
		if(optionalBoard.isPresent()) {
			Board board=optionalBoard.get();
			board.setLike(board.getLike()+1);
			return boardRepository.save(board);
		}
		else {
			return null;
		}
	}
}