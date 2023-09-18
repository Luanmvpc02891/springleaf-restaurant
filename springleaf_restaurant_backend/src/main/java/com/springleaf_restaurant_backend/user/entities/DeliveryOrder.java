package com.springleaf_restaurant_backend.user.entities;

import lombok.Data;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Delivery_Orders")
@Data
public class DeliveryOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delivery_order_id")
    private Long deliveryOrderId;

    @Column(name = "user_id")
    private User user;

    @Column(name = "order_date")
    private Date orderDate;

    @Column(name = "delivery_address", columnDefinition = "nvarchar(max)")
    private String deliveryAddress;

    @Column(name = "total_amount")
    private Double totalAmount;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private DeliveryOrderStatus status;

}

