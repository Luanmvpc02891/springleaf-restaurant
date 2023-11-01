package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.MergeTable;

import java.util.List;

public interface MergeTableService {
    List<MergeTable> getAllMergeTables();
    MergeTable getMergeTableById(Long id);
    void saveMergeTable(MergeTable mergeTable);
    void updateMergeTable(MergeTable mergeTable);
    void deleteMergeTable(Long id);
}
