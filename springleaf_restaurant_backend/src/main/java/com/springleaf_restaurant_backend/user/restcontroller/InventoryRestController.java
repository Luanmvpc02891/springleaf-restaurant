package com.springleaf_restaurant_backend.user.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.Inventory;
import com.springleaf_restaurant_backend.user.repositories.InventoryRepository;

@RestController
@RequestMapping("/api")
public class InventoryRestController {
    @Autowired
    private InventoryRepository inventoryRepository;

    @GetMapping("/inventoris")
    public List<Inventory> getInventories() {
        return inventoryRepository.findAll();
    }
}
