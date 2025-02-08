package com.projunifil.adoteumpeludo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Size;

@Embeddable
public class Pet {
    
    @Size(min = 2, max = 50)
    @Column(length = 50, nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String age; // "Filhote" / "Adulto" / "Idoso"
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PetType type;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public PetType getType() {
        return type;
    }

    public void setType(PetType type) {
        this.type = type;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}

enum PetType {
    CACHORRO, GATO
}

enum Gender {
    MACHO, FÊMEA
}
