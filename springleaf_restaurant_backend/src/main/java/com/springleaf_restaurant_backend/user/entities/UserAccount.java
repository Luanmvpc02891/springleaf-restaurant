package com.springleaf_restaurant_backend.user.entities;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "UserAccounts")
@Data
public class UserAccount {
    @Id
    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Constructors, getters, and setters
}

