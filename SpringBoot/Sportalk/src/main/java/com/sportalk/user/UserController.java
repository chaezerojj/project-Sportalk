package com.sportalk.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
public class UserController {

	private final UserService userService;
	private final UserRepository userRepository;
	private final AuthenticationManager authenticationManager;

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	public UserController(UserService userService, UserRepository userRepository,
			AuthenticationManager authenticationManager) {
		this.userService = userService;
		this.userRepository = userRepository;
		this.authenticationManager = authenticationManager;
	}
	
	// 회원 전체 조회
	@GetMapping(value = "/users")
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
	@PostMapping(value = "/signup")
	public ResponseEntity<String> signUp(@Valid @RequestBody User user) {
		logger.debug("SignUp Request: {}", user);
		if (userService.isUserExists(user.getUserId())) {
			logger.warn("User already exists: {}", user.getUserId());
			return ResponseEntity.status(HttpStatus.CONFLICT).body("이미 존재하는 사용자입니다.");
		}

		try {
			userService.register(user);
			logger.info("User registered successfully: {}", user.getUserId());
			return ResponseEntity.ok("사용자가 정상적으로 등록되었습니다!");
		} catch (Exception e) {
			logger.error("Error registering user", e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("사용자 등록 중 오류가 발생했습니다.");
		}
	}

//	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@PostMapping(value = "/login")
	public ResponseEntity<String> login(@RequestParam String userId, @RequestParam String password,
			HttpSession session) {
		logger.debug("Login Request: {}", userId);

		try {
			// 인증 매니저를 사용하여 사용자 인증 시도
			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(userId, password));

			// 인증 객체를 SecurityContextHolder에 저장
			SecurityContextHolder.getContext().setAuthentication(authentication);

			// 사용자 정보 조회
			Optional<User> userOptional = userService.findByUserId(userId);
			if (userOptional.isPresent()) {
				User user = userOptional.get();
				session.setAttribute("user", user); // 세션에 사용자 정보 저장
				logger.info("Login success: {}", userId);
				return ResponseEntity.ok("로그인 성공");
			} else {
				logger.error("User not found: {}", userId);
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("사용자를 찾을 수 없습니다.");
			}
		} catch (BadCredentialsException e) {
			// 인증 실패 처리
			logger.error("Login failed: {}", userId, e);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디 또는 비밀번호가 올바르지 않습니다.");
		} catch (Exception e) {
			// 기타 예외 처리
			logger.error("Login failed: {}", userId, e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("로그인 중 오류가 발생했습니다.");
		}
	}

	private Map<String, String> createUserInfo(String userId) {
		Map<String, String> userInfo = new HashMap<>();
		userInfo.put("userId", userId);
		return userInfo;
	}

	// 로그인 성공
	@GetMapping("/loggedin")
	public ResponseEntity<Map<String, String>> isLogined() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String userId = authentication.getName();
		System.out.println("로그인한 UserId: " + userId);
		Map<String, String> userInfo = createUserInfo(userId);
		return ResponseEntity.ok(userInfo);
	}

	// 로그아웃
	@PostMapping("/logout")
	public ResponseEntity<String> logout(HttpSession session) {
		session.invalidate();
		return ResponseEntity.ok("로그아웃 성공");
	}

	// 로그아웃 성공 (확인용)
	@GetMapping("/loggedout")
	public ResponseEntity<Void> loggedOut() {
		System.out.println("로그아웃 됨");
		return ResponseEntity.ok().build();
	}

	@DeleteMapping(value = "/users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Long id) {
		try {
			Optional<User> userOptional = userRepository.findById(id);
			if (userOptional.isPresent()) {
				User user = userOptional.get();
				userService.deleteUser(user.getUserId());
				logger.info("사용자 삭제 성공: {}", id);
				return ResponseEntity.ok("사용자가 성공적으로 삭제되었습니다.");
			} else {
				logger.warn("해당 ID로 사용자를 찾을 수 없습니다: {}", id);
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 ID로 사용자를 찾을 수 없습니다.");
			}
		} catch (Exception e) {
			logger.error("사용자 삭제 중 오류 발생", e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("사용자 삭제 중 오류가 발생했습니다.");
		}
	}

	// 마이페이지
	// 회원정보 수정
	@PostMapping("/mypage/profile")
	public ResponseEntity<User> updateUser(@Valid @RequestBody User updatedUser) {
		System.out.println("회원정보 수정: " + updatedUser);
		User user = userService.updateUser(updatedUser);
		userService.register(user);
		return ResponseEntity.ok().build();
	}

	// 유효성 검사들
	// - userId
	@GetMapping("/userid")
	public ResponseEntity<Boolean> existUserId(@RequestParam String userId) {
		boolean exists = userService.checkUserId(userId);
		return ResponseEntity.ok(exists);
	}

	// - nickName
	@GetMapping("/nickname")
	public ResponseEntity<Boolean> existNickName(@RequestParam String nickName) {
		boolean exists = userService.checkNickName(nickName);
		return ResponseEntity.ok(exists);
	}

	// - password
	@GetMapping("/password")
	public ResponseEntity<Boolean> checkPassword(@RequestParam String password) {
		boolean isValid = password.length() >= 10 & password.length() <= 20;
		return ResponseEntity.ok(isValid);
	}

	//
	@GetMapping("/user-success")
	public ResponseEntity<User> getUser() {
		System.out.println("유저 인증 success");
		String userId = SecurityContextHolder.getContext().getAuthentication().getName();
		User user = userService.getUserInfo(userId);
		return ResponseEntity.ok(user);
	}
}
