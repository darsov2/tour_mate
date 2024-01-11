package com.tourMate.entities;

import jakarta.persistence.*;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "restaurants", schema = "public")
public class Restaurant {
    private long restaurantID;
    private String restaurantName;
    private String restaurantLocation;
    private String cousineType;
    private String restaurantDescription;
    private String restaurantEdbs;
    private User restaurantOwner;
    private Collection<Menu> menus = new ArrayList<Menu>();
    private Collection<RestaurantsTable> tables;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "restaurant")
    public Collection<RestaurantsTable> getTables() {
        return tables;
    }

    public void setTables(Collection<RestaurantsTable> tables) {
        this.tables = tables;
    }

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "restaurant")
    public Collection<Menu> getMenus() {
        return menus;
    }

    public void setMenus(Collection<Menu> menus) {
        this.menus = menus;
    }
    public Restaurant(String restaurantName, String restaurantLocation, String cousineType, String restaurantDescription, String restaurantEdbs, User restaurantOwner) {
        this.restaurantName = restaurantName;
        this.restaurantLocation = restaurantLocation;
        this.cousineType = cousineType;
        this.restaurantDescription = restaurantDescription;
        this.restaurantEdbs = restaurantEdbs;
        this.restaurantOwner = restaurantOwner;
    }

    public Restaurant(long restaurantID, String restaurantName, String restaurantLocation, String cousineType, String restaurantDescription, String restaurantEdbs) {
        this.restaurantID = restaurantID;
        this.restaurantName = restaurantName;
        this.restaurantLocation = restaurantLocation;
        this.cousineType = cousineType;
        this.restaurantDescription = restaurantDescription;
        this.restaurantEdbs = restaurantEdbs;
    }

    public Restaurant() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_id",unique = true,nullable = false)
    public long getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(long restaurantID) {
        this.restaurantID = restaurantID;
    }

    @Column(name="restaurant_name",unique = false,nullable = false)
    @NotNull
    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    @Column(name="restaurant_location",unique = false,nullable = false)
    @NotNull
    public String getRestaurantLocation() {
        return restaurantLocation;
    }

    public void setRestaurantLocation(String restaurantLocation) {
        this.restaurantLocation = restaurantLocation;
    }

    @Column(name="restaurant_cousine",unique = false,nullable = false)
    @NotNull
    public String getCousineType() {
        return cousineType;
    }

    public void setCousineType(String cousineType) {
        this.cousineType = cousineType;
    }

    @Column(name="restaurant_description",unique = false,nullable = false)
    @NotNull
    public String getRestaurantDescription() {
        return restaurantDescription;
    }

    public void setRestaurantDescription(String restaurantDescription) {
        this.restaurantDescription = restaurantDescription;
    }

    @Column(name="restaurant_edbs",unique = false,nullable = false)
    @NotNull
    public String getRestaurantEdbs() {
        return restaurantEdbs;
    }

    public void setRestaurantEdbs(String restaurantEdbs) {
        this.restaurantEdbs = restaurantEdbs;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_restoran_kon_korisnik"))
    public User getRestaurantOwner() {
        return restaurantOwner;
    }

    public void setRestaurantOwner(User restaurantOwner) {
        this.restaurantOwner = restaurantOwner;
    }
}
