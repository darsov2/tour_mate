package com.tourMate.entities;

import jakarta.persistence.*;

import javax.validation.constraints.NotNull;

@Entity
@Table(name="reviews", schema = "public")
public class Reviews {
    private long reviewId;
    private String title;
    private int numStar;
    private String description;
    private Hotels hotel;
    private Restaurant restaurant;
    private Transport transport;

    public Reviews(String title, int numStar, String description, Hotels hotel, Restaurant restaurant, Transport transport) {
        this.title = title;
        this.numStar = numStar;
        this.description = description;
        this.hotel = hotel;
        this.restaurant = restaurant;
        this.transport = transport;
    }

    public Reviews() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id", unique = true, nullable = false)
    public long getReviewId() {
        return reviewId;
    }

    public void setReviewId(long reviewId) {
        this.reviewId = reviewId;
    }


    @Column(name = "title", unique = false, nullable = false)
    @NotNull
    public String getTitle () {
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    @Column(name = "num_stars", unique = false, nullable = false)
    @NotNull
    public int getNumStar () {
        return numStar;
    }

    public void setNumStar ( int numStar){
        this.numStar = numStar;
    }

    @Column(name = "description", unique = false, nullable = false)
    @NotNull
    public String getDescription () {
        return description;
    }

    public void setDescription (String description){
        this.description = description;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_review_kon_hotel"))
    public Hotels getHotel () {
        return hotel;
    }

    public void setHotel (Hotels hotel){
        this.hotel = hotel;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_review_kon_restorani"))
    public Restaurant getRestaurant () {
        return restaurant;
    }

    public void setRestaurant (Restaurant restaurant){
        this.restaurant = restaurant;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "transport_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_review_kon_transport"))
    public Transport getTransport () {
        return transport;
    }

    public void setTransport (Transport transport){
        this.transport = transport;
    }
}
