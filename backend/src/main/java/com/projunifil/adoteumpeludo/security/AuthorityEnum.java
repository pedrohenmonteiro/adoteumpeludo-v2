package com.projunifil.adoteumpeludo.security;

import java.util.Arrays;


public enum AuthorityEnum {
    ROLE_ADMIN("ROLE_ADMIN"),
    ROLE_USER("ROLE_USER");

    private final String description;

    private AuthorityEnum(String description) {
       this.description = description;
    }
 
    public String getDescription() {
       return this.description;
    }
 
    public static AuthorityEnum toEnum(String description) {
       return (AuthorityEnum)Arrays.stream(values()).filter((AuthorityEnum) -> {
          return AuthorityEnum.getDescription().equals(description);
       }).findFirst().orElseThrow(() -> {
          return new IllegalArgumentException("Invalid description: " + description);
       });
    }
}