package com.springleaf_restaurant_backend.user.restcontrollers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.Category;
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

    @GetMapping("/inventory/{inventoryId}")
    public Optional<Inventory> getInventoryById(@PathVariable("inventoryId") Long inventoryId) {
        return inventoryRepository.findById(inventoryId);
    }

    @PostMapping("/inventory")
    public Inventory creaInventory(@RequestBody Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @DeleteMapping("/inventory/{inventoryId}")
    public void deleteInventory(@PathVariable("inventoryId") Long inventoryId) {
        inventoryRepository.deleteById(inventoryId);
    }

    @PutMapping("/inventory/{inventoryId}")
    public Inventory updateInventory(@PathVariable("inventoryId") Long inventoryId,
            @RequestBody Inventory updatedInventory) {
        Optional<Inventory> databaseInventory = inventoryRepository.findById(inventoryId);
        if (databaseInventory.isPresent()) {
            Inventory existingInventory = databaseInventory.get();
            existingInventory.setInventoryId(updatedInventory.getInventoryId());
            existingInventory.setIngredient(updatedInventory.getIngredient());
            existingInventory.setSupplier(updatedInventory.getSupplier());
            return inventoryRepository.save(existingInventory);
        } else {
            return null;
        }
    }
}
