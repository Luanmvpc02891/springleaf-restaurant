package com.springleaf_restaurant_backend.user.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.RoleFunction;
import com.springleaf_restaurant_backend.user.repositories.RoleFunctionRepository;

@RestController
@RequestMapping("/api")
public class RoleFunctionRestController {
    @Autowired
    private RoleFunctionRepository roleFunctionRepository;

    @GetMapping("/roleFunctions")
    public List<RoleFunction> getRoleFuns() {
        return roleFunctionRepository.findAll();
    }
}