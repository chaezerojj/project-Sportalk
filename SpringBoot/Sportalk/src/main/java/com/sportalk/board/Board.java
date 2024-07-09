package com.sportalk.board;

import java.sql.Date;
import com.sportalk.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PostLoad;
import jakarta.persistence.PostPersist;
import jakarta.persistence.PostUpdate;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id; // 아이디

    private String nickName; // 닉네임
    private String title; // 게시물 제목
    private String content; // 게시물 본문
    private Date regDate; // 게시물 작성일
    private int like; // 좋아요 수
    private int commentCount; // 댓글 수

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

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
