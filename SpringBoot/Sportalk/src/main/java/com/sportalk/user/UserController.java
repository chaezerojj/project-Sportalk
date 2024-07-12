package com.sportalk.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/users")
	@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
	public ResponseEntity<List<User>> getAllUsers() {
	    try {
	        List<User> users = userService.findAllUsers();
	        return ResponseEntity.ok(users);
	    } catch (Exception e) {
	        logger.error("Error fetching users", e);
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
	}


	// 회원가입
	@PostMapping("/signup")
	@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
	public ResponseEntity<String> signUp(@Valid @RequestBody User user) {

		if (userService.isUserExists(user.getUserId())) {
			logger.warn("User already exists: {}", user.getUserId());
			return ResponseEntity.status(409).body("이미 존재하는 사용자입니다.");
		}

		try {
			userService.register(user);
			logger.info("User registered successfully: {}", user.getUserId());
			return ResponseEntity.ok("사용자가 정상적으로 등록되었습니다!");
		} catch (Exception e) {
			logger.error("Error registering user", e);
			return ResponseEntity.status(500).body("Error registering user");
		}

	}

	// 로그인
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
	public ResponseEntity<String> login(@RequestParam String userId, @RequestParam String password,
			HttpSession session) {
		logger.info("로그인 시도: {}", userId);
		User existingUser = userService.findByUserId(userId);
		if (existingUser != null && userService.checkPassword(existingUser, password)) {
			logger.info("로그인 성공: {}", userId);
			session.setAttribute("user", existingUser); // 세션에 사용자 정보 저장
			return ResponseEntity.ok("로그인 성공");
		} else {
			logger.warn("로그인 실패: {}", userId);
			return ResponseEntity.status(401).body("Invalid credentials");
		}
	}

	// 로그아웃
	@PostMapping("/logout")
	@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
	public ResponseEntity<String> logout(HttpSession session) {
		session.invalidate(); // 세션 무효화
		return ResponseEntity.ok("로그아웃 성공");
	}

	// 사용자 생성
	@PostMapping("/users/create")
	@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
	public ResponseEntity<String> createUser(@Valid @RequestBody User user) {
		return ResponseEntity.ok("User created successfully!");
	}
}
