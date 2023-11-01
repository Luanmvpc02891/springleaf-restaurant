package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.Ingredient;

import java.util.List;

public interface IngredientService {
    List<Ingredient> getAllIngredients();
    Ingredient getIngredientById(Long id);
    void saveIngredient(Ingredient ingredient);
    void updateIngredient(Ingredient ingredient);
    void deleteIngredient(Long id);
}
