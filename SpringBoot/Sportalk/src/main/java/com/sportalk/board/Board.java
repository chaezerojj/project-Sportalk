package com.sportalk.board;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sportalk.comment.Comment;
import com.sportalk.user.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PostLoad;
import jakarta.persistence.PostPersist;
import jakarta.persistence.PostUpdate;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity


@ToString(exclude = {"user"})
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id; // 아이디

//    private Date createDate; //수정 일자
    private String nickName; // 닉네임
    private String title; // 게시물 제목
    private String content; // 게시물 본문
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private LocalDate regDate; // 게시물 작성일
    private int like; // 좋아요 수
    private int commentCount; // 댓글 수

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore // 무한 참조 방지
    private User user;
    
 
    
    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;

    // 엔티티가 로드될 때 자동으로 User의 nickName 필드와 동기화
    @PostLoad
    @PostPersist
    @PostUpdate
    public void syncNickName() {
        if (user != null) {
            this.nickName = user.getNickName();
        }
    }
}
