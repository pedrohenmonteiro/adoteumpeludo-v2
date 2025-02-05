package com.projunifil.adoteumpeludo.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "pets")
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
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
    
    @Column(nullable = false, updatable = false)
    private LocalDateTime listingDate = LocalDateTime.now();
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public LocalDateTime getListingDate() {
        return listingDate;
    }

    public void setListingDate(LocalDateTime listingDate) {
        this.listingDate = listingDate;
    }
}

enum PetType {
    CACHORRO, GATO
}

enum Gender {
    MACHO, FÊMEA
}
