package com.springleaf_restaurant_backend.user.entities;

import lombok.*;
import jakarta.persistence.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Inventory_Branchs")
public class InventoryBranch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inventory_brand_id")
    private Long inventoryBrandId;

    @Column(name = "ingredient_id")
    private Long ingredient;

    @Column(name = "supplier_id")
    private Long supplier;

    @Column(name = "restaurant_id")
    private Long restaurant;

}

