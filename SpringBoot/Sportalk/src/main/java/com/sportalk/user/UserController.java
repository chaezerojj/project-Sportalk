package com.sportalk.user;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
public class UserController {

    @PostMapping("/users")
    public String createUser(@Valid @RequestBody User user) {
        
        return "User created successfully!";
    }
}

