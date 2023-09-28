package com.springleaf_restaurant_backend.user.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.User;
import com.springleaf_restaurant_backend.user.repositories.UserRepository;

@RestController
@RequestMapping("/api")
public class UserRestController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUser() {
        return userRepository.findAll();
    }
}
