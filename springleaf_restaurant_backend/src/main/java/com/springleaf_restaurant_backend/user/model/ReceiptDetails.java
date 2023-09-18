package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "ReceiptDetails")
@Data
public class ReceiptDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "receipt_detail_id")
    private Long receiptDetailId;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "unit_price")
    private Integer unitPrice;

    @ManyToOne
    @JoinColumn(name = "receipt_id")
    private Receipt receipt;

}
