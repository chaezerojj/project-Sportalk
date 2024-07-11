package com.sportalk.mypost;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sportalk.board.Board;
import com.sportalk.board.BoardRepository;

@Service
public class MyPostService {

 @Autowired
 private BoardRepository boardRepository;

 public List<Board> findPostsByUserId(Long userId) {
     return boardRepository.findByUserId(userId);
 }
}
