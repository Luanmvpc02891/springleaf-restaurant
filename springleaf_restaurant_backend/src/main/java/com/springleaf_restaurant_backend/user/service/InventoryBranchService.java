package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.InventoryBranch;

import java.util.List;

public interface InventoryBranchService {
    InventoryBranch getInventoryBranchById(Long id);
    List<InventoryBranch> getAllInventoryBranches();
    void saveInventoryBranch(InventoryBranch inventoryBranch);
    void updateInventoryBranch(InventoryBranch inventoryBranch);
    void deleteInventoryBranch(Long id);
}
