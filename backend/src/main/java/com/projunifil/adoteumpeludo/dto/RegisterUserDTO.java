package com.projunifil.adoteumpeludo.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class RegisterUserDTO extends AdminUserDTO {

    public RegisterUserDTO() {
    }

    @NotNull
    @Size(min = 4, max = 100)
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
