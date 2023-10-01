package com.springleaf_restaurant_backend.user.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.MenuItem;
import com.springleaf_restaurant_backend.user.repositories.MenuItemRepository;

@RestController
@RequestMapping("/api")
public class MenuItemRestController {
    @Autowired
    private MenuItemRepository menuItemRepository;

    @GetMapping("/menuitems")
    public List<MenuItem> getMenuItems() {
        return menuItemRepository.findAll();
    }
}
