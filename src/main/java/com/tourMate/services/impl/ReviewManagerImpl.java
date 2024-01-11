package com.tourMate.services.impl;

import com.tourMate.dao.ReviewDao;
import com.tourMate.dao.ReviewManager;
import com.tourMate.entities.Hotels;
import com.tourMate.entities.Restaurant;
import com.tourMate.entities.Reviews;
import com.tourMate.entities.Transport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewManagerImpl implements ReviewManager {

    @Autowired
    ReviewDao reviewDao;

    @Override
    public void createReview(String title, int numStar, String description, Hotels hotel, Restaurant restaurant, Transport transport) {
        reviewDao.createReview(title, description, numStar, hotel, restaurant, transport);
    }

    @Override
    public void deleteReview(long id) {
        reviewDao.deleteReview(id);
    }

    @Override
    public Reviews findReviewById(long id) {
        return reviewDao.findReviewById(id);
    }

    @Override
    public void editReview(long id, String title, String description, int numStar, Hotels hotel, Restaurant restaurant, Transport transport) {
        reviewDao.editReview(id, title, description, numStar, hotel, restaurant, transport);
    }

    @Override
    public List<Reviews> getAllReviews() {
        return reviewDao.getAllReviews();
    }

    @Override
    public List<Reviews> getHotelReviews() {
        return reviewDao.getHotelReviews();
    }

    @Override
    public List<Reviews> getTransportReviews() {
        return reviewDao.getTransportReviews();
    }

    @Override
    public List<Reviews> getRestaurantReviews() {
        return reviewDao.getRestaurantReviews();
    }

    @Override
    public List<Reviews> getHotelReviews(Hotels hotel) {
        return reviewDao.getHotelReviews(hotel);
    }

    @Override
    public List<Reviews> getRestaurantReviews(Restaurant restaurant) {
        return reviewDao.getRestaurantReviews(restaurant);
    }

    @Override
    public List<Reviews> getTransportReviews(Transport transport) {
        return reviewDao.getTransportReviews(transport);
    }
}
