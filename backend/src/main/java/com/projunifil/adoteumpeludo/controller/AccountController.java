package com.projunifil.adoteumpeludo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projunifil.adoteumpeludo.model.User;
import com.projunifil.adoteumpeludo.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class AccountController {

    private final UserService userService;



    public AccountController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public void registerAccount(@Valid @RequestBody User user) {   
        userService.userSignUp(user);
    }
    
}
