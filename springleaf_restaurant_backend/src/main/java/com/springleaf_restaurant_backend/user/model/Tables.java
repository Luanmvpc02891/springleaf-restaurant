package com.springleaf_restaurant_backend.user.model;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "Tables")
@Data
public class Tables {
    @Id
    @Column(name = "table_id")
    private Long tableId;

    @Column(name = "table_name")
    private String tableName;

    @Column(name = "table_type")
    private String tableType;

    @ManyToOne
    @JoinColumn(name = "table_status")
    private TableStatus tableStatus;

    @Column(name = "merge_table_id")
    private String mergeTableId;

}
