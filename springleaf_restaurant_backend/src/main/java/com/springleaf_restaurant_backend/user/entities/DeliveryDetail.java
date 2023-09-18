package com.springleaf_restaurant_backend.user.entities;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "DeliveryDetails")
@Data
public class DeliveryDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delivery_detail_id")
    private Long deliveryDetailId;

    @ManyToOne
    @JoinColumn(name = "delivery_id")
    private Delivery delivery;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @Column(name = "quantity")
    private Integer quantity;

}

