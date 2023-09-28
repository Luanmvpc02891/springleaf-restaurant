package com.springleaf_restaurant_backend.user.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.Ingredient;
import com.springleaf_restaurant_backend.user.repositories.IngredientRepository;

@RestController
@RequestMapping("/api")
public class IngredientRestController {
    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping("/ingredient")
    public List<Ingredient> getIngredients() {
        return ingredientRepository.findAll();
    }
}
