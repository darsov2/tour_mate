package com.tourMate.dao;

import com.tourMate.entities.*;
import jakarta.transaction.Transactional;

import java.util.Date;
import java.util.List;

public interface RestaurantDao {
    public void createRestaurant(Restaurant restaurant, long userId);
    public void deleteRestaurant(long restaurantID);
    @Transactional
    public void editRestaurant(long restaurantID, String restaurantName, String restaurantLocation, String cousineType, String restaurantDescription, String restaurantEdbs, User restaurantOwner);
    public Restaurant findRestaurantByID (long restaurantID);
    public List<Restaurant> searchByRestaurantName(String restaurantName);
    public List<Restaurant> searchByRestaurantLocation(String restaurantLocation);
    public List<Restaurant> getRestaurants();
    @Transactional
    public void addMenuToRestaurant(long restaurantId, Menu menu);

    public List<RestaurantsAvailible> getTablesByDateAndLocation(String restaurantLocation, Date hourFrom, Date hourTo, int noSeats);

    public void createTable(Restaurant restaurant, int noSeats);
    public void editTable(Restaurant restaurant, long tableId, int noSeats);
    public void deleteTable(long tableId);
    public List<Restaurant> getRestaurantsByUser(long userId);
    public RestaurantsTable findTableById(long tableId);
    public List<RestaurantsTable> searchByNoSeats(int noSeats);
    public List<RestaurantsTable> getRestaurantTables(long restaurantID);

    public void addRestaurantImage(Restaurant restaurant, String url);
    public void removeRestaurantImage(long restaurantImageId);
    public RestaurantImages findRestaurantImageById(long restaurantImageId);
    public List<RestaurantImages> getRestaurantImages(long restaurantID);

    public void createTableAvailable(RestaurantsTable restaurantsTable, Date hourFrom, Date hourTo, int noSeats);
    @Transactional
    abstract void createTableAvailable(RestaurantsTable restaurantsTable, Date hourFrom, Date hourTo);
    public List<RestaurantsAvailible> getTablesAvailabilityById(Long id);
    public void editTableAvailable(long tableId, Restaurant restaurant, int noSeats);
    public void deleteTableAvailable(long tableId);
    public RestaurantsAvailible findAvailableReservationByID(long availibleId);

    public List<RestaurantsAvailible> getTablesAvailability();
    public void createReservation(RestaurantsTable rt, Date hourFrom, Date hourTo, User user);
    public void editReservation(long restaurantsTableId, RestaurantsTable rt, Date hourFrom, Date hourTo, int noSeats, User user);
    public void deleteReservation(long restaurantsTableId);
    public RestaurantReservations findReservationByID(long tableId);
    public List<RestaurantReservations> findReservationByUser(User user);
    public List<RestaurantReservations> findReservationByRestaurant(Restaurant restaurant);
    public List<RestaurantReservations> getReservations();
}
