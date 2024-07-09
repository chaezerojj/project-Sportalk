package com.sportalk.board;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sportalk.comment.Comment;
import com.sportalk.comment.CommentService;

@RestController
@RequestMapping("/api/sportalk/board")
public class BoardController {

	@Autowired
	private BoardService boardService;

	@Autowired
	private CommentService commentService;

	@GetMapping
	public ResponseEntity<List<Board>> getAllBoards() {
		List<Board> boards = boardService.getAllBoards();
		return ResponseEntity.ok(boards);
	}

	// 입력받은 게시물 저장
	@PostMapping
	public ResponseEntity<Board> createBoard(@RequestBody Board board) {
		Board newBoard = boardService.createBoard(board);
		return ResponseEntity.status(HttpStatus.CREATED).body(newBoard);
	}

	// 게시물 삭제 - id값 받아서 삭제됨
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteBoard(@PathVariable Long id) {
		boardService.deleteBoard(id);
		return ResponseEntity.noContent().build();
	}

	// id값으로 게시물 상세 조회
	@GetMapping(value = "/{id}")
	public ResponseEntity<Board> getBoardById(@PathVariable Long id) {
		Optional<Board> board = boardService.getBoardById(id);
		return board.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}

	// 게시물 수정
	@PutMapping(value = "/{id}")
	public ResponseEntity<Board> updateBoard(@PathVariable Long id, @RequestBody Board updatedBoard) {
		Optional<Board> optionalBoard = boardService.getBoardById(id);
		if (optionalBoard.isPresent()) {
			Board board = optionalBoard.get();
			board.setTitle(updatedBoard.getTitle());
			board.setContent(updatedBoard.getContent());
			// 다른 필드 업데이트
			Board savedBoard = boardService.updateBoard(board);
			return ResponseEntity.ok(savedBoard);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// 게시물에 댓글 추가
	@PostMapping(value = "/{boardId}/comments/create")
	public ResponseEntity<Comment> addCommentToBoard(@PathVariable Long boardId, @RequestBody Comment comment) {
		Optional<Board> optionalBoard = boardService.getBoardById(boardId);
		if (!optionalBoard.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		Board board = optionalBoard.get();
		comment.setBoard(board); // 댓글에 게시물 설정함
		Comment newComment = commentService.createComment(comment);
		return ResponseEntity.status(HttpStatus.CREATED).body(newComment);
	}





}