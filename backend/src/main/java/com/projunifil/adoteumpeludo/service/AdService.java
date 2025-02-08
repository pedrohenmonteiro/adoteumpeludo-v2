package com.projunifil.adoteumpeludo.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.projunifil.adoteumpeludo.model.Ad;
import com.projunifil.adoteumpeludo.model.User;
import com.projunifil.adoteumpeludo.repository.AdRepository;

@Service
public class AdService {

    private final AdRepository adRepository;


    public AdService(AdRepository adRepository) {
        this.adRepository = adRepository;
    }

    public Ad createAd(Ad ad, User user) {
        ad.setUser(user);
        return adRepository.save(ad);
    }
    
    public Page<Ad> getAllAds(Pageable pageable) {
        return adRepository.findAll(pageable);
    }
}
