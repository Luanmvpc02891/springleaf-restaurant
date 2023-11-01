package com.springleaf_restaurant_backend.security.service;

import com.springleaf_restaurant_backend.user.entities.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findByUsername(String username);
    User findByEmail(String email);
    User getUserById(Long id);
    void saveUser(User user);
    void updateUser(User user);
    void deleteUser(Long id);
}
