package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.Rating;

import java.util.List;

public interface RatingService {
    List<Rating> getAllRatings();
    Rating getRatingById(Long id);
    void saveRating(Rating rating);
    void updateRating(Rating rating);
    void deleteRating(Long id);
}
