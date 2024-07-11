package com.sportalk.user;

<<<<<<< HEAD
public class UserController {

=======
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @PostMapping("/users")
    public String createUser(@Valid @RequestBody User user) {
        
        return "User created successfully!";

    }
>>>>>>> 9a3d39c9ecc154e5b0cfc6397e333733266115ad
}

