package com.tourMate.dto;

import com.tourMate.entities.Menu;
import com.tourMate.entities.RestaurantsTable;
import com.tourMate.entities.User;

import java.util.ArrayList;
import java.util.Collection;

public class RestaurantDto {
    private long restaurantID;
    private String restaurantName;
    private String restaurantLocation;
    private String cousineType;
    private String restaurantDescription;
    private String restaurantEdbs;
    private Collection<Menu> menus = new ArrayList<Menu>();
    private Collection<RestaurantsTable> tables;

    public RestaurantDto(long restaurantID, String restaurantName, String restaurantLocation, String cousineType, String restaurantDescription, String restaurantEdbs, Collection<Menu> menus, Collection<RestaurantsTable> tables) {
        this.restaurantID = restaurantID;
        this.restaurantName = restaurantName;
        this.restaurantLocation = restaurantLocation;
        this.cousineType = cousineType;
        this.restaurantDescription = restaurantDescription;
        this.restaurantEdbs = restaurantEdbs;
        this.menus = menus;
        this.tables = tables;
    }

    public long getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(long restaurantID) {
        this.restaurantID = restaurantID;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getRestaurantLocation() {
        return restaurantLocation;
    }

    public void setRestaurantLocation(String restaurantLocation) {
        this.restaurantLocation = restaurantLocation;
    }

    public String getCousineType() {
        return cousineType;
    }

    public void setCousineType(String cousineType) {
        this.cousineType = cousineType;
    }

    public String getRestaurantDescription() {
        return restaurantDescription;
    }

    public void setRestaurantDescription(String restaurantDescription) {
        this.restaurantDescription = restaurantDescription;
    }

    public String getRestaurantEdbs() {
        return restaurantEdbs;
    }

    public void setRestaurantEdbs(String restaurantEdbs) {
        this.restaurantEdbs = restaurantEdbs;
    }

    public Collection<Menu> getMenus() {
        return menus;
    }

    public void setMenus(Collection<Menu> menus) {
        this.menus = menus;
    }

    public Collection<RestaurantsTable> getTables() {
        return tables;
    }

    public void setTables(Collection<RestaurantsTable> tables) {
        this.tables = tables;
    }
}
