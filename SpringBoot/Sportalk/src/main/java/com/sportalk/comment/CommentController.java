package com.sportalk.comment;

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

import com.sportalk.board.Board;
import com.sportalk.board.BoardService;

@RestController
@RequestMapping("/api/sportalk/comments")
public class CommentController {
	@Autowired
	private CommentService commentService;

	@Autowired
	private BoardService boardService;

	// 게시물id로 댓글 조회
	@GetMapping(value = "/board/{boardId}")
	public List<Comment> getCommentsByBoardId(@PathVariable Long boardId){
		return commentService.getCommentsByPostId(boardId);
	}

    // 댓글 생성
    @PostMapping("/board/{boardId}/create")
    public ResponseEntity<Comment> createComment(@PathVariable Long boardId, @RequestBody Comment comment) {
        Optional<Board> optionalBoard = boardService.getBoardById(boardId);
        if (!optionalBoard.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Board board = optionalBoard.get();
        comment.setBoard(board); // 댓글에 게시물 설정
        Comment newComment = commentService.createComment(comment);
        return ResponseEntity.status(HttpStatus.CREATED).body(newComment);
    }

    // 댓글 수정
    @PutMapping("/board/{boardId}/comments/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long boardId, @PathVariable Long commentId,
                                                  @RequestBody Comment commentDetails) {
        Optional<Comment> optionalComment = commentService.getCommentById(commentId);
        if (optionalComment.isPresent()) {
            Comment comment = optionalComment.get();
            comment.setComment(commentDetails.getComment());
            commentService.updateComment(comment);
            return ResponseEntity.ok(comment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // 댓글 삭제
	@DeleteMapping("/board/{boardId}/comments/{id}")
	public ResponseEntity<?> deleteComment(@PathVariable Long boardId, @PathVariable Long commentId) {
		commentService.deleteComment(commentId);
		return ResponseEntity.ok().build();
	}
}