package com.projunifil.adoteumpeludo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projunifil.adoteumpeludo.model.Ad;

public interface AdRepository extends JpaRepository<Ad, Long> {

    
}
