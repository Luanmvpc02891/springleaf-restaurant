package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.Inventory;

import java.util.List;

public interface InventoryService {
    List<Inventory> getAllInventories();
    List<Object[]> getInventoryInfo();
    Inventory getInventoryById(Long id);
    void saveInventory(Inventory inventory);
    void updateInventory(Inventory inventory);
    void deleteInventory(Long id);
}
