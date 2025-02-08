package com.projunifil.adoteumpeludo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projunifil.adoteumpeludo.model.Ad;
import com.projunifil.adoteumpeludo.model.User;
import com.projunifil.adoteumpeludo.service.AdService;
import com.projunifil.adoteumpeludo.service.UserService;


@RestController
@RequestMapping("/api")
public class AdController {
    private final AdService adService;

    private final UserService userService;

    public AdController(AdService adService, UserService userService) {
        this.adService = adService;
        this.userService = userService;
    }

    @PostMapping("/ad")
    public Ad createAd(@RequestBody Ad ad) {
        User postOwner = userService.getByLogin();
        return adService.createAd(ad, postOwner);
    }
    
}
