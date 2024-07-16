package com.sportalk.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sportalk.user.dto.UserDto;

import jakarta.validation.Valid;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // 회원가입 user 등록(저장)
    public UserDto register(UserDto user) {
    	UserDto existedUser = userRepository.findById(user.getId())
    			.orElseThrow(() -> new IllegalArgumentException("사용자 찾을 수 없음"));
    	System.out.println("비밀번호 시작 -- ");
        String originPassword = user.getPassword(); // 입력된 비밀번호
        String originConfirmPassword = user.getConfirmPassword(); // 비밀번호 확인
        System.out.println("비밀번호 + 비밀번호 확인");
        String encPassword = passwordEncoder.encode(originPassword);
        System.out.println("passwordEncoder.encode(originPassword)");
        String encConfirmPassword = passwordEncoder.encode(originConfirmPassword);
        System.out.println("passwordEncoder.encode(originConfirmPassword)");
        System.out.println("Encoding Password: " + encPassword);
        user.setPassword(encPassword);
        System.out.println("user.setPassword(encPassword)");
        user.setConfirmPassword(encConfirmPassword);
        System.out.println("user.setConfirmPassword(encConfirmPassword)");
        System.out.println("register 완료");
        return userRepository.save(user);
    }

    public UserDto findByUserId(String userId) {
        return userRepository.findByUserId(userId);
    }

    public List<UserDto> findAllUsers() {
    	System.out.println("전체 회원 목록 조회 ~~~");
        return userRepository.findAll();
    }

    public UserDto isUserExists(String userId) {
        return userRepository.findByUserId(userId);
    }

    // 유효성 검사 - 비밀번호 
    public boolean checkPassword(User user, String rawPassword) {
        return passwordEncoder.matches(rawPassword, user.getPassword());
    }

    // user 삭제
    public void deleteUser(UserDto userId) {
        userRepository.delete(userId);
    }

    // 유저 정보
    public UserDto getUserInfo(String userId) {
        UserDto user = userRepository.findByUserId(userId);
        return user;
    }

    public boolean checkUserId(String userId) {
        return userRepository.existsByUserId(userId);
    }
    
    public boolean checkNickName(String nickName) {
        return userRepository.findByNickName(nickName);
    }

    // 회원정보 수정
    public UserDto updateUser(UserDto updatedUser) {
        UserDto existingUser = userRepository.findById(updatedUser.getId())
                .orElseThrow(() -> new UsernameNotFoundException("User를 찾을 수 없음."));
        existingUser.setUserId(updatedUser.getUserId());
        existingUser.setConfirmPassword(updatedUser.getConfirmPassword());
        existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        existingUser.setNickName(updatedUser.getNickName());
        existingUser.setUserName(updatedUser.getUserName());
        return userRepository.save(existingUser);
    }


}
