package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();
    Order getOrderById(Long id);
    void saveOrder(Order order);
    void updateOrder(Order order);
    void deleteOrder(Long id);
}
