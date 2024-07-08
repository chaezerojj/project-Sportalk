package com.sportalk.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sportalk/board")
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	@GetMapping
	public ResponseEntity<List<Board>> getAllBoards() {
		List<Board> boards = boardService.getAllBoards();
		return ResponseEntity.ok(boards);
	}
}
