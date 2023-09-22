package com.springleaf_restaurant_backend.user.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.model.Category;
import com.springleaf_restaurant_backend.user.repositories.DAOCategory;

@RestController
@RequestMapping("/api/v1/auth")
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

    @PostMapping("/categories")
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {

        dao.save(category);

        return ResponseEntity.status(HttpStatus.CREATED).body(category);
    }

}
