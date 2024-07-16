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

import com.sportalk.user.dto.UserDto;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/auth", consumes="application/json; charset=utf-8")
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

	// 회원 전체 목록 조회
	@GetMapping(value = "/users")
	public ResponseEntity<List<UserDto>> getAllUsers() {
	    try {
	        List<UserDto> users = userService.findAllUsers();
	        if (users.isEmpty()) {
	        	System.out.println("회원 목록이 비었습니다.");
	            return ResponseEntity.noContent().build(); // 데이터가 없을 경우
	        }
	        return ResponseEntity.ok(users);
	    } catch (Exception e) {
	        logger.error("Error fetching users: ", e);
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
	}


    @PostMapping(value = "/signup", consumes="application/json")
    public ResponseEntity<Void> signUp(@Valid @RequestBody UserDto user) {
        try {
//            User user = new User();
            System.out.println("회원가입 실행 ~~ " + user);
//            user.setUserId(user.getUserId());
//            user.setPassword(user.getPassword());
//            user.setConfirmPassword(user.getConfirmPassword());
//            user.setNickName(user.getNickName());
//            user.setEmail(user.getEmail());
//            user.setUserName(user.getUserName());
            
            userService.register(user);
            System.out.println("회원가입 성공!! ");
            return ResponseEntity.ok().build();
        } catch (Exception e) {
        	e.printStackTrace();
        	throw e;
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


//	@RequestMapping(value = "/login", method = RequestMethod.POST)
    // 로그인 처리
    @PostMapping(value = "/login", consumes="application/json")
    public ResponseEntity<Map<String, String>> login(@RequestParam String userId, @RequestParam String password, HttpSession session) {
        logger.debug("Login Request: {}", userId);

        try {
            // 인증 매니저를 사용하여 사용자 인증 시도
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userId, password));
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // 사용자 정보 조회
            UserDto user = userService.findByUserId(userId);
            if (user != null) {
                session.setAttribute("user", user); // 세션에 사용자 정보 저장
                logger.info("Login success: {}", userId);
                Map<String, String> response = new HashMap<>();
                response.put("message", "로그인 성공");
                return ResponseEntity.ok(response);
            } else {
                logger.error("User not found: {}", userId);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "사용자를 찾을 수 없습니다."));
            }
        } catch (BadCredentialsException e) {
            logger.error("Login failed: {}", userId, e);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "아이디 또는 비밀번호가 올바르지 않습니다."));
        } catch (Exception e) {
            logger.error("Login failed: {}", userId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("message", "로그인 중 오류가 발생했습니다."));
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
	@PostMapping(value = "/logout", consumes="application/json")
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
	public ResponseEntity<String> deleteUser(@RequestBody Map<String, String> user) {
		String userId = user.get("userId");
		if (userId == null || userId.isEmpty()) {
			return ResponseEntity.badRequest().body("userId가 필요합니다.");
		}
		try {
			UserDto userDto = userService.getUserInfo(userId);
			if (userDto != null) {
				userService.deleteUser(userDto);
				System.out.println("user 삭제 성공");
				return ResponseEntity.ok("User가 삭제되었습니다.");
			} else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("삭제할 사용자를 찾을 수 없음.");
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user: " + e.getMessage());
		}
		
	}

	// 마이페이지
	// 회원정보 수정
	@PostMapping("/mypage/profile")
	public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto updatedUser) {
		System.out.println("회원정보 수정: " + updatedUser);
		UserDto user = userService.updateUser(updatedUser);
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
	public ResponseEntity<UserDto> getUser() {
		System.out.println("유저 인증 success");
		String userId = SecurityContextHolder.getContext().getAuthentication().getName();
		UserDto user = userService.getUserInfo(userId);
		return ResponseEntity.ok(user);
	}
}
