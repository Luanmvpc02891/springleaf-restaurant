package com.springleaf_restaurant_backend.user.entities;

import lombok.*;
import jakarta.persistence.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Combos")
public class Combo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "combo_id")
    private Long comboId;

    @Column(name = "combo_name")
    private String comboName;

    @ManyToOne
    @JoinColumn(name = "combo_user")
    private User comboUser;

    @ManyToOne
    @JoinColumn(name = "combo_item")
    private MenuItem comboItem;

    @Column(name = "total_amount")
    private Double totalAmount;

}

