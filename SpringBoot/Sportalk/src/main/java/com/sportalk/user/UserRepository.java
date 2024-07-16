package com.sportalk.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sportalk.user.dto.UserDto;

@Repository
public interface UserRepository extends JpaRepository<UserDto, Long> {
    UserDto findByUserId(String userId);
    boolean existsByUserId(String userId);
    boolean findByNickName(String nickName);
    boolean findByUserName(String userName);
}
