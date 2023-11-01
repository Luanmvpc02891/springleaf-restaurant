package com.springleaf_restaurant_backend.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springleaf_restaurant_backend.user.entities.Ingredient;
import com.springleaf_restaurant_backend.user.repositories.IngredientRepository;
import com.springleaf_restaurant_backend.user.service.IngredientService;

import java.util.List;

@Service
public class IngredientServiceImpl implements IngredientService {
    private final IngredientRepository ingredientRepository;

    @Autowired
    public IngredientServiceImpl(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    @Override
    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    @Override
    public Ingredient getIngredientById(Long id) {
        return ingredientRepository.findById(id).orElse(null);
    }

    @Override
    public void saveIngredient(Ingredient ingredient) {
        ingredientRepository.save(ingredient);
    }

    @Override
    public void updateIngredient(Ingredient ingredient) {
        ingredientRepository.save(ingredient);
    }

    @Override
    public void deleteIngredient(Long id) {
        ingredientRepository.deleteById(id);
    }
}
