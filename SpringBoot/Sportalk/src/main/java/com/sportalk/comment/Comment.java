package com.sportalk.comment;

import java.sql.Date;
import com.sportalk.board.Board;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id; // 고유 아이디

    @ManyToOne
    @JoinColumn(name = "board_id", nullable = false)
    private Board board;

    @Column(nullable = false)
    private String comment; // 댓글 내용

    @Column(nullable = false, unique = true)
    private String nickName; // 닉네임

    @Column(nullable = false)
    private int like; // 좋아요

    @Column(nullable = false)
    private Date regDate; // 등록일
}