package com.projunifil.adoteumpeludo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projunifil.adoteumpeludo.model.Pet;

public interface PetRepository extends JpaRepository<Pet, Long> {

    
    
}
