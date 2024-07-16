package com.sportalk.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.CorsUtils;

@Configuration
@EnableWebSecurity
@Import(CorsConfig.class)
public class SecurityConfig {

	private final CorsConfigurationSource corsConfigurationSource;

	public SecurityConfig(CorsConfigurationSource corsConfigurationSource) {
		this.corsConfigurationSource = corsConfigurationSource;
	}
	
	@Autowired
    private CustomAccessDeniedHandler customAccessDeniedHandler;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
        .cors(cors -> cors.configurationSource(corsConfigurationSource))
        .csrf(csrf -> csrf.disable())
        .authorizeRequests(request -> request
//            .requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
            .requestMatchers("/api/auth/**").permitAll()
            .requestMatchers("/api/sportalk/**").permitAll()
            .requestMatchers("/error").permitAll()
            .anyRequest().permitAll()
        )
        .formLogin()
            .loginPage("/api/auth/login")
            .loginProcessingUrl("/api/auth/login")
            .usernameParameter("userId")
            .passwordParameter("password")
            .defaultSuccessUrl("/api/auth/loggedin")
            .successHandler(new CustomAuthenticationSuccessHandler())
            .failureHandler(new CustomAuthenticationFailureHandler())
            .permitAll()
        .and()
        .logout()
            .logoutUrl("/api/auth/logout")
            .logoutSuccessUrl("/api/auth/loggedout")
            .deleteCookies("JSESSIONID")
            .permitAll()
        .and()
        .exceptionHandling()
            .accessDeniedHandler(customAccessDeniedHandler);

    http.headers().frameOptions().sameOrigin();
    return http.build();
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
}