package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "ComboDetails")
@Data
public class ComboDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "combo_detail_id")
    private Long comboDetailId;

    @ManyToOne
    @JoinColumn(name = "combo_id")
    private Combo combo;

    @ManyToOne
    @JoinColumn(name = "menu_item_id")
    private MenuItem menuItem;

    @Column(name = "quantity")
    private Long quantity;

    @Column(name = "combo_type_id")
    private Integer comboTypeId;

}

