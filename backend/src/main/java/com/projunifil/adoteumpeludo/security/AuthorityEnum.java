package com.projunifil.adoteumpeludo.security;

public enum AuthorityEnum {
   ROLE_ADMIN,
   ROLE_USER;

   public String getRole() {
       return name(); 
   }
}