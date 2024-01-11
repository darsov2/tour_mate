package com.tourMate.dao.impl;

import com.tourMate.dao.ReviewDao;
import com.tourMate.entities.Hotels;
import com.tourMate.entities.Restaurant;
import com.tourMate.entities.Reviews;
import com.tourMate.entities.Transport;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReviewDaoImpl implements ReviewDao {

    @PersistenceContext
    EntityManager em;
    
    @Override
    public void createReview(String title, String description, int numStar, Hotels hotel, Restaurant restaurant, Transport transport) {
        Reviews review = new Reviews (title, numStar, description, hotel, restaurant, transport);
        em.persist(review);
    }

    @Override
    public void deleteReview(long id) {
        Reviews review = findReviewById(id);
        em.remove(review);
    }

    @Override
    public Reviews findReviewById(long id) {
        return em.find(Reviews.class, id);
    }

    @Override
    public void editReview(long id, String title, String description, int numStar, Hotels hotel, Restaurant restaurant, Transport transport) {
        Reviews review = findReviewById(id);
        review.setDescription(description);
        review.setHotel(hotel);
        review.setRestaurant(restaurant);
        review.setTitle(title);
        review.setNumStar(numStar);
        review.setTransport(transport);
        em.persist(review);
    }

    @Override
    public List<Reviews> getAllReviews() {
        return em.createQuery("select r from Reviews r order by reviewId").getResultList();
    }

    @Override
    public List<Reviews> getHotelReviews() {
        return em.createQuery("select r from Reviews r where r.hotel is not null").getResultList();
    }

    @Override
    public List<Reviews> getTransportReviews() {
        return em.createQuery("select r from Reviews r where r.transport is not null").getResultList();
    }

    @Override
    public List<Reviews> getRestaurantReviews() {
        return em.createQuery("select r from Reviews r where r.restaurant is not null").getResultList();
    }

    @Override
    public List<Reviews> getHotelReviews(Hotels hotel) {
        return null;
    }

    @Override
    public List<Reviews> getRestaurantReviews(Restaurant restaurant) {
        return null;
    }

    @Override
    public List<Reviews> getTransportReviews(Transport transport) {
        return null;
    }

}
