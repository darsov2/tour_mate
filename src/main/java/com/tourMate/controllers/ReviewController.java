package com.tourMate.controllers;

import com.tourMate.dao.ReviewManager;
import com.tourMate.entities.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ReviewController {
    @Autowired
    ReviewManager reviewManager;

    @PostMapping(path = "/review/add")
    public void add(@RequestBody Reviews review) {
//        String title, int numStar, String description, Hotels hotel, Restaurants restaurant, Transport transport
        reviewManager.createReview(review.getTitle(), review.getNumStar(), review.getDescription(), review.getHotel(), review.getRestaurant(), review.getTransport());
    }

    @PostMapping(path = "/review/edit")
    public void edit(@RequestBody Reviews review)
    {
//        editReview(long id, String title, String description, int numStar, Hotels hotel, Restaurants restaurant, Transport transport)
        reviewManager.editReview(review.getReviewId(), review.getTitle(), review.getDescription(), review.getNumStar(), review.getHotel(), review.getRestaurant(), review.getTransport());
    }

    @GetMapping(path = "/review/delete")
    public ResponseEntity remove(@RequestParam(name = "reviewId") long reviewId) {
        try
        {
            reviewManager.deleteReview(reviewId);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception exception)
        {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }


}
