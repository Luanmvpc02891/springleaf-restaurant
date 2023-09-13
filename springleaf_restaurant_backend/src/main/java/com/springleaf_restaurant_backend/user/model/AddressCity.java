package com.springleaf_restaurant_backend.user.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Address_Cities")
public class AddressCity {

    @Id
    @Column(name = "address_city_id")
    private int addressCityId;

    @Column(name = "name")
    private String name;
}