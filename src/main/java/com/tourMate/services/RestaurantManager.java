package com.tourMate.services;

import com.tourMate.dto.RestaurantDto;
import com.tourMate.entities.*;

import java.util.Date;
import java.util.List;

public interface RestaurantManager {
    public void createRestaurant(Restaurant restaurant, long userId);
    public void deleteRestaurant(long restaurantID);
    public void addMenuToRestaurant(long restaurantId, Menu menu);
    public List<Restaurant> getRestaurantsByUser(long userId);
    void deleteHotel(long restaurantID);

    public List<Restaurant> getRestaurants();
    public Restaurant findRestaurantByID (long restaurantID);
    public void addRestaurantImage(Restaurant restaurant, String url);
    public void removeRestaurantImage(long restaurantImageId);
    public RestaurantImages findRestaurantImageById(long restaurantImageId);

    public List<RestaurantImages> getRestaurantImages(long restaurantID);
    public void editRestaurant(long restaurantID, String restaurantName, String restaurantLocation, String cousineType, String restaurantDescription, String restaurantEdbs, User restaurantOwner);
    public List<RestaurantsTable> getRestaurantTables(long restaurantID);
    public List<RestaurantDto> getTablesByDateAndLocation(String restaurantLocation, Date hourFrom, Date hourTo, int noSeats );
    public RestaurantsTable findTableById(long tableId);
    public void createTable(Long restaurantId, int noSeats);
    public void editTable(Restaurant restaurant, long tableId, int noSeats);
    public void deleteTable(long tableId);

    public void createTableAvailable(Long rt, Date hourFrom, Date hourTo);

    public void editTableAvailable(long tableId, Restaurant restaurant, int noSeats);
    public void deleteTableAvailable(long tableId);
    public List<RestaurantsTable> getTablesAvailability();
    public List<RestaurantsAvailible> getTablesAvailabilityById(Long id);
    public void createReservation(Restaurant restaurant, int noSeats);

    void createReservation(RestaurantsTable rt, Date dateFrom, Date dateTo, User user);

    public void editReservation(long tableId, Restaurant restaurant, int noSeats);
    public void deleteReservation(long tableId);
    public RestaurantReservations findReservationByID(long tableId);
    public List<RestaurantReservations> findAvailableReservationByID();

    List<RestaurantReservations> findAvailableReservationByID(long reservationId);

    public List<RestaurantReservations> findReservationByUser(User user);
    public List<RestaurantReservations> findReservationByRestaurant(Restaurant restaurant);
    public List<RestaurantReservations> getReservations();
    public List<Restaurant> searchByRestaurantName(String restaurantName);
    public List<Restaurant> searchByRestaurantLocation(String restaurantLocation);
    public List<RestaurantsTable> searchByNoSeats(int noSeats);
}
