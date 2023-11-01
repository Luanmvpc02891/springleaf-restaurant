package com.springleaf_restaurant_backend.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springleaf_restaurant_backend.user.entities.InventoryBranch;
import com.springleaf_restaurant_backend.user.repositories.InventoryBranchRepository;
import com.springleaf_restaurant_backend.user.service.InventoryBranchService;

import java.util.List;

@Service
public class InventoryBranchServiceImpl implements InventoryBranchService {
    private final InventoryBranchRepository inventoryBranchRepository;

    @Autowired
    public InventoryBranchServiceImpl(InventoryBranchRepository inventoryBranchRepository) {
        this.inventoryBranchRepository = inventoryBranchRepository;
    }

    @Override
    public InventoryBranch getInventoryBranchById(Long id) {
        return inventoryBranchRepository.findById(id).orElse(null);
    }

    @Override
    public List<InventoryBranch> getAllInventoryBranches() {
        return inventoryBranchRepository.findAll();
    }

    @Override
    public void saveInventoryBranch(InventoryBranch inventoryBranch) {
        inventoryBranchRepository.save(inventoryBranch);
    }

    @Override
    public void updateInventoryBranch(InventoryBranch inventoryBranch) {
        // Bạn có thể thêm logic kinh doanh cụ thể tại đây trước khi lưu inventory branch.
        inventoryBranchRepository.save(inventoryBranch);
    }

    @Override
    public void deleteInventoryBranch(Long id) {
        inventoryBranchRepository.deleteById(id);
    }
}
