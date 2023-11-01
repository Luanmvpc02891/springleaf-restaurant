package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.OrderThreshold;

import java.util.List;

public interface OrderThresholdService {
    List<OrderThreshold> getAllOrderThresholds();
    OrderThreshold getOrderThresholdById(Long id);
    void saveOrderThreshold(OrderThreshold orderThreshold);
    void updateOrderThreshold(OrderThreshold orderThreshold);
    void deleteOrderThreshold(Long id);
}
