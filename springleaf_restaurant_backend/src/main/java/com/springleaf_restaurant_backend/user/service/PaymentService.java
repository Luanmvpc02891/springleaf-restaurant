package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.Payment;

import java.util.List;

public interface PaymentService {
    List<Payment> getAllPayments();
    Payment getPaymentById(Long id);
    void savePayment(Payment payment);
    void updatePayment(Payment payment);
    void deletePayment(Long id);
}
