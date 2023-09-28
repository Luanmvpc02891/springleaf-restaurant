package com.springleaf_restaurant_backend.user.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.Category;
import com.springleaf_restaurant_backend.user.repositories.CategoryRepository;

@RestController
@RequestMapping("/api")
public class CategoryRestController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/categories")
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @GetMapping("/category/{id}")
    public Optional<Category> getCategoryById(@PathVariable("id") Long categoryId) {
        return categoryRepository.findById(categoryId);
    }

}
