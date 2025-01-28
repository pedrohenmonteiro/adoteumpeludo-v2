package com.projunifil.adoteumpeludo.models;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projunifil.adoteumpeludo.security.AuthorityEnum;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 3, max = 50)
    @Column(length = 50, unique = true, nullable = false)
    private String username;

    @JsonIgnore
    @NotNull
    @Size(min = 60, max = 60)
    @Column(length = 60, nullable = false)
    private String password;

    @Email
    @Size(max = 60)
    @Column(length = 60, unique = true)
    private String email;

    @Size(max = 256)
    @Column(name = "image_url", length = 256)
    private String imageUrl;

    @JsonIgnore
    private Set<AuthorityEnum> authorities;
}
