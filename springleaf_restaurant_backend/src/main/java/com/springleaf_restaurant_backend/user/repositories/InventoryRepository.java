package com.springleaf_restaurant_backend.user.repositories;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springleaf_restaurant_backend.user.entities.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {

}
