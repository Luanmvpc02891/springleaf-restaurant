package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.MenuItemIngredient;

import java.util.List;

public interface MenuItemIngredientService {
    List<MenuItemIngredient> getAllMenuItemIngredients();
    MenuItemIngredient getMenuItemIngredientById(Long id);
    void saveMenuItemIngredient(MenuItemIngredient menuItemIngredient);
    void updateMenuItemIngredient(MenuItemIngredient menuItemIngredient);
    void deleteMenuItemIngredient(Long id);
}
