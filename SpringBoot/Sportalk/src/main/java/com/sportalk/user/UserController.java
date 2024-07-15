package com.sportalk.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    public UserController(AuthenticationManager authenticationManager, UserService userService, UserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.userRepository = userRepository;
    }

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

    @PostMapping("/signup")
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam  String userId, @RequestParam String password, HttpSession session) {
        logger.debug("Login Request: {}", userId);

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(userId, password));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            session.setAttribute("user", userService.findByUserId(userId));

            logger.info("Login success: {}", userId);

            return ResponseEntity.ok("로그인 성공");
        } catch (Exception e) {
            logger.error("Login failed: {}", userId, e);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디 또는 비밀번호가 올바르지 않습니다.");
        }
    }

    @PostMapping("/logout")
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("로그아웃 성공");
    }

    @DeleteMapping("/users/{id}")
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        try {
            Optional<User> userOptional = userRepository.findById(id);
            if (userOptional.isPresent()) {
                User user = userOptional.get();
                userService.deleteUser(user);
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
}
