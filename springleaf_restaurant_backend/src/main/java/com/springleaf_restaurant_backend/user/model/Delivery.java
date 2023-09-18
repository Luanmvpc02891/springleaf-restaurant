package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Delivery")
@Data
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delivery_id")
    private Long deliveryId;

    @ManyToOne
    @JoinColumn(name = "inventories_brand_id")
    private InventoryBrand inventoryBrand;

    @Column(name = "date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "warehouse_manager_id")
    private User warehouseManager;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}

