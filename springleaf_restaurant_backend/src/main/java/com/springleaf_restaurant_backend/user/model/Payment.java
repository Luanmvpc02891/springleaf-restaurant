package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "Payments")
@Data
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private Long paymentId;

    @Column(name = "name")
    private String name;

}

