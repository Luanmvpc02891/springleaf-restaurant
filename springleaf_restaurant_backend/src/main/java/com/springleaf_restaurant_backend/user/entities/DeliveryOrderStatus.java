package com.springleaf_restaurant_backend.user.entities;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "Delivery_Orders_Status")
@Data
public class DeliveryOrderStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "status_id")
    private Long statusId;

    @Column(name = "name")
    private String name;

}

