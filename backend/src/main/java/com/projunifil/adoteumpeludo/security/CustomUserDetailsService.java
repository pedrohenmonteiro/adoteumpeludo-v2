package com.projunifil.adoteumpeludo.security;

import java.util.List;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.projunifil.adoteumpeludo.model.User;
import com.projunifil.adoteumpeludo.repository.UserRepository;


@Component("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService{
    
    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

   
    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(final String login) {
            return userRepository   
                .findByEmailIgnoreCase(login)
                .map(user -> createSpringSecurityUser(login, user))
                .orElseThrow(() -> new RuntimeException("User not found"));
    }


        private org.springframework.security.core.userdetails.User createSpringSecurityUser(String lowercaseLogin, User user) {
        List<SimpleGrantedAuthority> grantedAuthorities = user
            .getAuthorities()
            .stream()
            .map(AuthorityEnum::getRole)
            .map(SimpleGrantedAuthority::new)
            .toList();
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), grantedAuthorities);
    }


}