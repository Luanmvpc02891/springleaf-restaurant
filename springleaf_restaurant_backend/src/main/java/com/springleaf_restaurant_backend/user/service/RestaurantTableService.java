package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.RestaurantTable;

import java.util.List;

public interface RestaurantTableService {
    List<RestaurantTable> getAllRestaurantTables();
    RestaurantTable getRestaurantTableById(Long id);
    void saveRestaurantTable(RestaurantTable restaurantTable);
    void updateRestaurantTable(RestaurantTable restaurantTable);
    void deleteRestaurantTable(Long id);
}
