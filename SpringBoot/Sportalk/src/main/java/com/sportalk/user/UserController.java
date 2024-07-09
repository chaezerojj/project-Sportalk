package com.sportalk.user;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/auth")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {

        if (userService.isUserExists(user.getUserId())) {
            logger.warn("User already exists: {}", user.getUserId());
            return ResponseEntity.status(409).body("이미 존재하는 사용자입니다.");
        }

        try {
            userService.register(user);
            logger.info("User registered successfully: {}", user.getUserId());
            return ResponseEntity.ok("사용자가 정상적으로 등록되었습니다!");
        } catch(Exception e) {
            logger.error("Error registering user", e);
            return ResponseEntity.status(500).body("Error registering user");
        }

    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        logger.info("로그인 시도: {}", user.getUserId());
        User existingUser = userService.findByUserId(user.getUserId());
        if (existingUser != null) {
            if (userService.checkPassword(existingUser, user.getPassword())) {
                logger.info("비밀번호 일치: {}", user.getUserId());
                return ResponseEntity.ok("로그인 성공");
            } else {
                logger.warn("비밀번호 불일치: {}", user.getUserId());
            }
        } else {
            logger.warn("사용자 없음: {}", user.getUserId());
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
