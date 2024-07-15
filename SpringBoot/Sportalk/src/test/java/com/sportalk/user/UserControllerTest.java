package com.sportalk.user;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Optional;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc // MockMvc 자동 설정 추가
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService; // UserService를 MockBean으로 주입

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private AuthenticationManager authenticationManager;

    @MockBean
    private PasswordEncoder passwordEncoder;

    @Test
    void testLogin() throws Exception {
        // 로그인 요청 시뮬레이션
        mockMvc.perform(MockMvcRequestBuilders.post("/api/auth/login")
                .param("userId", "test111")
                .param("password", "testpw111"))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = "김이름", roles = {"USER"})
    public void testFindByUserName() throws Exception {
        // 예제로 작성한 테스트 코드입니다. 실제 코드와 맞게 수정해야 합니다.
        String username = "김이름";
        User user = new User();
        user.setUserName(username);

        Mockito.when(userRepository.findByUsername(username)).thenReturn(Optional.of(user));

        mockMvc.perform(MockMvcRequestBuilders.get("/users/{username}", username)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.userName", Matchers.is(username)));
    }
}
