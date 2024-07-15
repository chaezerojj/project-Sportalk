package com.sportalk.config;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
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

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
		.cors(cors -> cors.configurationSource(corsConfigurationSource))
		.csrf(csrf -> csrf.disable())
		.authorizeRequests(authorize -> authorize.requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
				.requestMatchers("/api/auth/signup", "/error").permitAll()
				.requestMatchers("/api/auth/login").permitAll()
				.requestMatchers("/api/auth/user/**").authenticated()
				.requestMatchers("/api/auth/loggedin").authenticated()
				.requestMatchers("/api/auth/logout").authenticated()
				.requestMatchers("/api/auth/loggedout").authenticated()
				.requestMatchers("/api/sportalk/board").permitAll()
				.requestMatchers("/api/sportalk/board/**").authenticated()
				.anyRequest().permitAll()
				)
				.formLogin((form) -> {
					try {
						form
						.loginPage("/api/auth/login")
						.loginProcessingUrl("api/auth/login") // 실제 login endpoint
						.usernameParameter("userId")
						.defaultSuccessUrl("api/auth/loggedin")
						.and().logout() // 로그아웃
						.logoutUrl("api/auth/logout")
						.logoutSuccessUrl("api/auth/loggedout")
						.deleteCookies("JSESSIONID");
					} catch (Exception e) {
						e.printStackTrace();
					}
				});
//		http.addFilterBefore(corsFilter(), UsernamePasswordAuthenticationFilter.class);

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
