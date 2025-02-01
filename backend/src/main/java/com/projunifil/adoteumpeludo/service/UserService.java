package com.projunifil.adoteumpeludo.service;

import java.util.HashSet;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projunifil.adoteumpeludo.dto.AdminUserDTO;
import com.projunifil.adoteumpeludo.model.User;
import com.projunifil.adoteumpeludo.repository.UserRepository;
import com.projunifil.adoteumpeludo.security.AuthorityEnum;
import com.projunifil.adoteumpeludo.security.SecurityUtils;


@Service
@Transactional
public class UserService {
    
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;


    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
            this.userRepository = userRepository;
            this.passwordEncoder = passwordEncoder;
    }

    public User userSignUp(AdminUserDTO userDto, String password) {

        userRepository.findByEmailIgnoreCase(userDto.getEmail())
        .ifPresent(_ -> {
            throw new RuntimeException("E-mail already exists");
        });

        userRepository.findByUsername(userDto.getUsername().toLowerCase())
        .ifPresent(_ -> {
            throw new RuntimeException("Username already exists");
        });

        User newUser = new User();
        String encryptedPassword = passwordEncoder.encode(password);
        newUser.setUsername(userDto.getUsername().toLowerCase());
        newUser.setPassword(encryptedPassword);
        newUser.setEmail(userDto.getEmail().toLowerCase());
        newUser.setImageUrl(userDto.getImageUrl());
        var authorities = new HashSet<>();
        authorities.add(AuthorityEnum.ROLE_USER.getRole());

        return userRepository.save(newUser);
    }
     
    @Transactional(readOnly = true)
    public User getByLogin() {
        return SecurityUtils.getCurrentUserLogin().flatMap(userRepository::findByEmailIgnoreCase)
                    .orElseThrow(() -> new RuntimeException("User not found"));
    }

}
