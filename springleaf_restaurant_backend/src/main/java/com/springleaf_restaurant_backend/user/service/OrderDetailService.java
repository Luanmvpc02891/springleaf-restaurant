package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.OrderDetail;

import java.util.List;

public interface OrderDetailService {
    List<OrderDetail> getAllOrderDetails();
    OrderDetail getOrderDetailById(Long id);
    void saveOrderDetail(OrderDetail orderDetail);
    void updateOrderDetail(OrderDetail orderDetail);
    void deleteOrderDetail(Long id);
}
