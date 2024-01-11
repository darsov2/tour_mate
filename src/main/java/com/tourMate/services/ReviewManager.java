package com.tourMate.dao;

import com.tourMate.entities.Hotels;
import com.tourMate.entities.Restaurant;
import com.tourMate.entities.Reviews;
import com.tourMate.entities.Transport;
import java.util.List;

public interface ReviewManager{

    public void createReview(String title, int numStar, String description, Hotels hotel, Restaurant restaurant, Transport transport);
    public void deleteReview(long id);
    public Reviews findReviewById(long id);
    public void editReview(long id, String title, String description, int numStar, Hotels hotel, Restaurant restaurant, Transport transport);
    public List<Reviews> getAllReviews();
    public List<Reviews> getHotelReviews();
    public List<Reviews> getTransportReviews();
    public List<Reviews> getRestaurantReviews();
    public List<Reviews> getHotelReviews(Hotels hotel);
    public List<Reviews> getRestaurantReviews(Restaurant restaurant);
    public List<Reviews> getTransportReviews(Transport transport);

}
