package com.sportalk.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
    public User register(User user) {
        String originPassword = user.getPassword(); // 입력된 비밀번호
        String originConfirmPassword = user.getConfirmPassword(); // 비밀번호 확인
        String encPassword = passwordEncoder.encode(originPassword);
        String encConfirmPassword = passwordEncoder.encode(originConfirmPassword);
        System.out.println("Encoding Password: " + encPassword);
        user.setPassword(encPassword);
        user.setConfirmPassword(encConfirmPassword);
        return userRepository.save(user);
    }

    public Optional<User> findByUserId(String userId) {
        return userRepository.findByUserId(userId);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public boolean isUserExists(String userId) {
        return userRepository.findByUserId(userId).isPresent();
    }

    // 유효성 검사 - 비밀번호 
    public boolean checkPassword(User user, String rawPassword) {
        return passwordEncoder.matches(rawPassword, user.getPassword());
    }

    // user 삭제
    public void deleteUser(String userId) {
        userRepository.findByUserId(userId)
                .ifPresent(userRepository::delete);
    }

    public User getUserInfo(String userId) {
        return userRepository.findByUserId(userId)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public boolean checkUserId(String userId) {
        return userRepository.findByUserId(userId).isPresent();
    }
    
    public boolean checkNickName(String nickName) {
        return userRepository.findByNickName(nickName).isPresent();
    }

    // 회원정보 수정
    public User updateUser(User updatedUser) {
        User existingUser = userRepository.findByUserId(updatedUser.getUserId())
                .orElseThrow(() -> new UsernameNotFoundException("User를 찾을 수 없음."));
        
        existingUser.setUserId(updatedUser.getUserId());
        existingUser.setConfirmPassword(updatedUser.getConfirmPassword());
        existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        existingUser.setNickName(updatedUser.getNickName());
        existingUser.setUserName(updatedUser.getUserName());
        return userRepository.save(existingUser);
    }
}
