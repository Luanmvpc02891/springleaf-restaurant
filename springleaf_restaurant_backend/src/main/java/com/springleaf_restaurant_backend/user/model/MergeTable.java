package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Merge_Tables")
@Data
public class MergeTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "table_id")
    private Table table;

    @Column(name = "merge_table_id")
    private String mergeTableId;

    @Column(name = "merge_time")
    private Date mergeTime;

}

