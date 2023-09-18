package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "Reservations")
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    private Long reservationId;

    @ManyToOne
    @JoinColumn(name = "table_id")
    private Table table;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "user_name")
    private User user;

    @Column(name = "reservation_date")
    private Date reservationDate;

    @Column(name = "number_of_guest")
    private Long numberOfGuests;

}

