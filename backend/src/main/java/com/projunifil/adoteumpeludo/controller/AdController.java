package com.projunifil.adoteumpeludo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public Map<String, Object> getAllAds(Pageable pageable) {
        final Page<Ad> page = adService.getAllAds(pageable);
        Map<String, Object> response = new HashMap<>();
        response.put("total", page.getTotalElements());
        response.put("data", page.getContent());

         List<String> links = new ArrayList<>();
        String uri = ServletUriComponentsBuilder.fromCurrentRequest().toUriString();

         if (page.hasPrevious()) {
        links.add(uri + "?page=" + (page.getNumber() - 1) + "&size=" + pageable.getPageSize());
        }
        if (page.hasNext()) {
        links.add(uri + "?page=" + (page.getNumber() + 1) + "&size=" + pageable.getPageSize());
        }
    
        response.put("links", links);

        return response;
    }
    
}
