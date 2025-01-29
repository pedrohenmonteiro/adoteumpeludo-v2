package com.projunifil.adoteumpeludo.service;

import java.util.HashSet;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.projunifil.adoteumpeludo.model.User;
import com.projunifil.adoteumpeludo.repository.UserRepository;
import com.projunifil.adoteumpeludo.security.AuthorityEnum;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
    
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;


    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
            this.userRepository = userRepository;
            this.passwordEncoder = passwordEncoder;
    }

    public User userSignUp(User inUser) {

        userRepository.findByEmailIgnoreCase(inUser.getEmail())
        .ifPresent(_ -> {
            throw new RuntimeException("E-mail already exists");
        });

        userRepository.findByUsername(inUser.getUsername())
        .ifPresent(_ -> {
            throw new RuntimeException("Username already exists");
        });

        inUser.setPassword(passwordEncoder.encode(inUser.getPassword()));
        var authorities = new HashSet<>();
        authorities.add(AuthorityEnum.ROLE_USER);

        return userRepository.save(inUser);
    }
     

}
