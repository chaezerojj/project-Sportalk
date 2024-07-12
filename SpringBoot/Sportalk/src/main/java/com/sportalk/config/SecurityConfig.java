package com.sportalk.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@Import(CorsConfig.class) // CorsConfig 클래스 포함
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .requestMatchers("/api/auth/login").permitAll() // 로그인 API는 인증 없이 접근 가능
                .anyRequest().authenticated() // 그 외 요청은 인증 필요
                .and()
            .formLogin()
                .loginProcessingUrl("/api/auth/login") // 로그인 처리 URL 설정
                .usernameParameter("userId") // 로그인 폼에서 사용할 파라미터명 설정
                .passwordParameter("password") // 로그인 폼에서 사용할 파라미터명 설정
                .defaultSuccessUrl("/api/auth/success") // 로그인 성공 시 리다이렉트할 URL 설정
                .failureUrl("/api/auth/failure") // 로그인 실패 시 리다이렉트할 URL 설정
                .permitAll()
                .and()
            .logout()
                .logoutUrl("/api/auth/logout") // 로그아웃 URL 설정
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true) // 세션 무효화
                .deleteCookies("JSESSIONID"); // 세션 쿠키 삭제

        return http.build();
    }
    
    @Bean
    PasswordEncoder passwordEncoder() {
    	return new BCryptPasswordEncoder();
    }
}
