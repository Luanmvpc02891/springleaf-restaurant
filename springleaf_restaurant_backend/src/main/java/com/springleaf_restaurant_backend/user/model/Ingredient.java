package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "Ingredients")
@Data
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredient_id")
    private Long ingredientId;

    @Column(name = "name")
    private String name;

    @Column(name = "description", length = 255)
    private String description;

    @Column(name = "order_threshold")
    private Integer orderThreshold;

}

