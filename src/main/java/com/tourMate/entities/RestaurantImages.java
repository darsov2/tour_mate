package com.tourMate.entities;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;


@Entity
@Table(name="restaurant_images",schema = "public")
public class RestaurantImages {
    private long imageId;
    private Restaurant restaurant;
    private String url;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="image_id",unique = true,nullable = false)
    public long getImageId() {
        return imageId;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="restaurant_id",unique = false,nullable = false,foreignKey = @ForeignKey(name = "fk_ref_od_restimg_kon_restoran"))
    public Restaurant getRestaurant() {
        return restaurant;
    }
    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    @Column(name="image_url",unique = false,nullable = false)
    @NotNull
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
