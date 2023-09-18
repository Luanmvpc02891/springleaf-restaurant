package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "Table_Status")
@Data
public class TableStatus {
    @Id
    @Column(name = "table_status_id")
    private Integer tableStatusId;

    @Column(name = "name")
    private String name;
   
}

