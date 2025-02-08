package com.projunifil.adoteumpeludo.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.projunifil.adoteumpeludo.model.Ad;
import com.projunifil.adoteumpeludo.model.User;
import com.projunifil.adoteumpeludo.service.AdService;
import com.projunifil.adoteumpeludo.service.UserService;
import com.projunifil.adoteumpeludo.util.PaginationUtil;


@RestController
@RequestMapping("/api")
public class AdController {
    private final AdService adService;

    private final UserService userService;

    public AdController(AdService adService, UserService userService) {
        this.adService = adService;
        this.userService = userService;
    }

    @PostMapping("/ads")
    public Ad createAd(@RequestBody Ad ad) {
        User postOwner = userService.getByLogin();
        return adService.createAd(ad, postOwner);
    }


    @GetMapping("/ads")
   public ResponseEntity<List<Ad>> getAllAds(Pageable pageable) {
        Page<Ad> page = adService.getAllAds(pageable);
        
        HttpHeaders headers = PaginationUtil.generatePaginationHeaders(page, ServletUriComponentsBuilder.fromCurrentRequest());
        
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }
    
}
