package com.sportalk.board;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	public void deleteBoard(Long id) {
		boardRepository.deleteById(id);
	}
	
	public Optional<Board> getBoardById(Long boardId) {
		return boardRepository.findById(boardId);
	}
	
	public Board updateBoard(Board board) {
		return boardRepository.save(board);
	}

}
