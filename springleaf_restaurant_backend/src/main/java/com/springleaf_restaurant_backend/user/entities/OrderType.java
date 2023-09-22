package com.springleaf_restaurant_backend.user.entities;

import lombok.*;
import jakarta.persistence.*;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Order_Types")
public class OrderType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_type_id")
    private Long orderTypeId;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "orderType")
    private List<Order> orders;

}

