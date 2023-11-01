package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.Reservation;

import java.util.List;

public interface ReservationService {
    List<Reservation> getAllReservations();
    Reservation getReservationById(Long id);
    void saveReservation(Reservation reservation);
    void updateReservation(Reservation reservation);
    void deleteReservation(Long id);
}
