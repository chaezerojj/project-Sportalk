package com.sportalk.board;

import java.util.List;

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

}
