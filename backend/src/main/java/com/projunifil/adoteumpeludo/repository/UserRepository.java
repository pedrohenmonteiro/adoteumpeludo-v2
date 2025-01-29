package com.projunifil.adoteumpeludo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projunifil.adoteumpeludo.models.User;


public interface UserRepository extends JpaRepository<User, Long>{
    
    Optional<User> findByUsername(String username);

    Optional<User> findByEmailIgnoreCase(String email);
}
