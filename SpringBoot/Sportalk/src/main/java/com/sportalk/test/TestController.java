package com.sportalk.test;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// 서버 연결 테스트용

@RestController
public class TestController {
	@GetMapping("/api/test")
	public List<String> Test() {
		return Arrays.asList("스프링부트 연결", "Test");
	}
}
