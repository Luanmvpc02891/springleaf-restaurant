package com.springleaf_restaurant_backend.user.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.Combo;
import com.springleaf_restaurant_backend.user.repositories.ComboRepository;

@RestController
@RequestMapping("/api")
public class ComboRestController {
    @Autowired
    private ComboRepository comboRepository;

    @GetMapping("/combos")
    public List<Combo> getCombos() {
        return comboRepository.findAll();
    }
}
