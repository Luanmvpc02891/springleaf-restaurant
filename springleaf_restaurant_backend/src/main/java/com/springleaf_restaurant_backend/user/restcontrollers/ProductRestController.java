package com.springleaf_restaurant_backend.user.restcontrollers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.Category;
import com.springleaf_restaurant_backend.user.entities.MenuItem;
import com.springleaf_restaurant_backend.user.repositories.MenuItemRepository;

@RestController
@RequestMapping("/api")
public class ProductRestController {

    @Autowired
    MenuItemRepository menuItemRepository;

    @GetMapping("/products")
    public List<MenuItem> getCategories() {
        return menuItemRepository.findAll();
    }

    @GetMapping("/products/{id}")
    public Optional<MenuItem> getProductById(@PathVariable("id") Long productId) {
        return menuItemRepository.findById(productId);
    }

    @GetMapping("/category/{id}/products")
    public List<MenuItem> getProductByCategoryId(@PathVariable("id") Long categoryId) {
        List<MenuItem> menuItems = menuItemRepository.findByCategoryId(categoryId);
        return menuItems;
    }

}
