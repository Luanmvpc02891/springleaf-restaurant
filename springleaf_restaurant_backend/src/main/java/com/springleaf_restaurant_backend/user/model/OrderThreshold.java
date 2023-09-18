package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "OrderThreshold")
@Data
public class OrderThreshold {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_threshold_id")
    private Long orderThresholdId;

    @Column(name = "reorder_point")
    private Integer reorderPoint;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @ManyToOne
    @JoinColumn(name = "inventory_brand_id")
    private InventoryBrand inventoryBrand;

    @ManyToOne
    @JoinColumn(name = "inventory_id")
    private Inventory inventory;

}

