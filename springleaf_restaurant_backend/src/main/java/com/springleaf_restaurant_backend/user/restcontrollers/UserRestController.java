package com.springleaf_restaurant_backend.user.restcontrollers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.TableStatus;
import com.springleaf_restaurant_backend.user.entities.User;
import com.springleaf_restaurant_backend.user.repositories.TableStatusRepository;
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

    @GetMapping("/user/{userId}")
    public Optional<User> getUserById(@PathVariable("userId") Long userId) {
        return userRepository.findById(userId);
    }
}
