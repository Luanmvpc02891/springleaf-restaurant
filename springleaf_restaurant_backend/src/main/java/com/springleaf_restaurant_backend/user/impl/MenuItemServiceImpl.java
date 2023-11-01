package com.springleaf_restaurant_backend.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springleaf_restaurant_backend.user.entities.MenuItem;
import com.springleaf_restaurant_backend.user.repositories.MenuItemRepository;
import com.springleaf_restaurant_backend.user.service.MenuItemService;

import java.util.List;

@Service
public class MenuItemServiceImpl implements MenuItemService {
    private final MenuItemRepository menuItemRepository;

    @Autowired
    public MenuItemServiceImpl(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    @Override
    public List<MenuItem> getAllMenuItems() {
        return menuItemRepository.findAll();
    }

    @Override
    public List<MenuItem> getMenuItemsByCategoryId(Long categoryId) {
        return menuItemRepository.findByCategoryId(categoryId);
    }

    @Override
    public MenuItem getMenuItemById(Long id) {
        return menuItemRepository.findById(id).orElse(null);
    }

    @Override
    public void saveMenuItem(MenuItem menuItem) {
        menuItemRepository.save(menuItem);
    }

    @Override
    public void updateMenuItem(MenuItem menuItem) {
        menuItemRepository.save(menuItem);
    }

    @Override
    public void deleteMenuItem(Long id) {
        menuItemRepository.deleteById(id);
    }
}
