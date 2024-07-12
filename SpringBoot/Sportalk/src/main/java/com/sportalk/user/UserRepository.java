package com.sportalk.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUserId(String userId);
	Optional<User> findByNickName(String nickName);
}