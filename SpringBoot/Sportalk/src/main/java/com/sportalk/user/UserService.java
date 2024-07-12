package com.sportalk.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	@Autowired
	private UserRepository userRepository;

	private final PasswordEncoder passwordEncoder;

	// 사용자 등록
	public User register(User user) {
		return userRepository.save(user);
	}

	// repository에서 userId로 사용자 조회
	public User findByUserId(String userId) {
		return userRepository.findByUserId(userId).orElse(null); // 사용자 있으면 해당 사용자 객체 반환, 없으면 null 반환함
	}

	// 모든 사용자 조회하기
	public List<User> findAllUsers() {
		return userRepository.findAll();
	}

	// 이미 존재하는 userId인지 확인하기
	public boolean isUserExists(String userId) {
		return userRepository.findByUserId(userId).isPresent();
	}

	// 비밀번호 확인(암호화)
	public boolean checkPassword(User user, String rawPassword) {
		return passwordEncoder.matches(rawPassword, user.getPassword());
	}
}