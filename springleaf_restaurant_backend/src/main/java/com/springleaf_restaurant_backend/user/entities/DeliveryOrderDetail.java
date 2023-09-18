package com.springleaf_restaurant_backend.user.entities;

import lombok.Data;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Delivery_Order_Details")
@Data
public class DeliveryOrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delivery_oder_detail_id")
    private Long deliveryOrderDetailId;

    @ManyToOne
    @JoinColumn(name = "deliveryoder_id")
    private DeliveryOrder deliveryOrder;

    @ManyToOne
    @JoinColumn(name = "menu_item_id")
    private MenuItem menuItem;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "order_time")
    private Date orderTime;

}

