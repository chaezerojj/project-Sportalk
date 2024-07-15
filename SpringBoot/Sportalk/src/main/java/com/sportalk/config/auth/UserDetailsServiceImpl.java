//package com.sportalk.config.auth;
//
//import java.util.Collections;
//import java.util.Optional;
//
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.sportalk.user.User;
//import com.sportalk.user.UserRepository;
//
//
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService {
//    private final UserRepository userRepository;
//
//    public UserDetailsServiceImpl(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
//        System.out.println("넘어온 아이디: " + userId);
//        System.out.println("loadUserByUsername 실행");
//
//        // 사용자 조회, 없으면 예외 발생
//        Optional<User> user = userRepository.findByUserId(userId);
//        if (user == null) {
//            throw new UsernameNotFoundException("User not found with ID: " + userId);
//        }
//
//        // 사용자가 있다면 UserDetails 객체 생성
//        return new org.springframework.security.core.userdetails.User(
//                user.getUserId(),
//                user.getPassword(),
//                Collections.emptySet());
//    }
//
//}