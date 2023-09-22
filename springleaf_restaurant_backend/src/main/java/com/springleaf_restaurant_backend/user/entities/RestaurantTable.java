package com.springleaf_restaurant_backend.user.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Restaurant_Tables")
public class RestaurantTable {
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
