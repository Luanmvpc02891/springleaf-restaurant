package com.springleaf_restaurant_backend.user.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.RestaurantTable;
import com.springleaf_restaurant_backend.user.repositories.RestauranTableRepository;

@RestController
@RequestMapping("/api")
public class RestaurantTableRestController {
    @Autowired
    private RestauranTableRepository restauranTableRepository;

    @GetMapping("/restaurantTables")
    public List<RestaurantTable> getRestaurantTable() {
        return restauranTableRepository.findAll();
    }

    @PostMapping("/restaurantTable")
    public RestaurantTable createRestaurantTable(@RequestBody RestaurantTable restaurantTable) {
        return restauranTableRepository.save(restaurantTable);
    }
}
