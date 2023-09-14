package com.springleaf_restaurant_backend.user.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.dao.DAOCategory;
import com.springleaf_restaurant_backend.user.model.Category;

//@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class RestCategory {
    @Autowired
    private DAOCategory dao;

    @GetMapping("/categories")
    public List<Category> getCategories() {
        return dao.findAll();
    }

    @GetMapping("/categories/{id}")
    public Optional<Category> getCategoryById(@PathVariable("id") int categoryId) {
        return dao.findById(categoryId);
    }

}
