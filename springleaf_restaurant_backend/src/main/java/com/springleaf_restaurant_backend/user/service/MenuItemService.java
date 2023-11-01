package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.MenuItem;

import java.util.List;

public interface MenuItemService {
    List<MenuItem> getAllMenuItems();
    List<MenuItem> getMenuItemsByCategoryId(Long categoryId);
    MenuItem getMenuItemById(Long id);
    void saveMenuItem(MenuItem menuItem);
    void updateMenuItem(MenuItem menuItem);
    void deleteMenuItem(Long id);
}
