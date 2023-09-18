package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Favorites")
@Data
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "favorite_id")
    private Long favoriteId;

    @ManyToOne
    @JoinColumn(name = "user_name")
    private User user;

    @ManyToOne
    @JoinColumn(name = "menu_item_id")
    private MenuItem menuItem;

    @Column(name = "favorite_date")
    private Date favoriteDate;
    
}

