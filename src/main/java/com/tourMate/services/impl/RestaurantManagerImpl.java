package com.tourMate.services.impl;

import com.tourMate.dao.RestaurantDao;
import com.tourMate.dto.RestaurantDto;
import com.tourMate.services.RestaurantManager;
import com.tourMate.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class RestaurantManagerImpl implements RestaurantManager {

    @Autowired
    RestaurantDao restaurantDao;

    @Override
    public void createRestaurant(Restaurant restaurant, long userId) {
        restaurantDao.createRestaurant(restaurant, userId);
    }



    @Override
    public void deleteRestaurant(long restaurantID) {
        restaurantDao.deleteRestaurant(restaurantID);
    }

    @Override
    public void addMenuToRestaurant(long restaurantId, Menu menu) {
        restaurantDao.addMenuToRestaurant(restaurantId, menu);
    }

    @Override
    public List<Restaurant> getRestaurantsByUser(long userId) {
        return restaurantDao.getRestaurantsByUser(userId);
    }

    @Override
    public void deleteHotel(long restaurantID) {
        restaurantDao.deleteRestaurant(restaurantID);
    }

    @Override
    public List<Restaurant> getRestaurants() {
        return restaurantDao.getRestaurants();
    }

    @Override
    public Restaurant findRestaurantByID(long restaurantID) {
        return restaurantDao.findRestaurantByID(restaurantID);
    }

    @Override
    public void addRestaurantImage(Restaurant restaurant, String url) {
        restaurantDao.addRestaurantImage(restaurant, url);
    }

    @Override
    public void removeRestaurantImage(long restaurantImageId) {
        restaurantDao.removeRestaurantImage(restaurantImageId);
    }

    @Override
    public RestaurantImages findRestaurantImageById(long restaurantImageId) {
        return restaurantDao.findRestaurantImageById(restaurantImageId);
    }

    @Override
    public List<RestaurantImages> getRestaurantImages(long restaurantID) {
        return restaurantDao.getRestaurantImages(restaurantID);
    }

    @Override
    public List<RestaurantDto> getTablesByDateAndLocation(String restaurantLocation, Date hourFrom, Date hourTo, int noSeats){
        List<RestaurantsAvailible> restaurantsAvailibles = restaurantDao.getTablesByDateAndLocation(restaurantLocation, hourFrom, hourTo, noSeats);
        Map<Restaurant, List<RestaurantsAvailible>> RestaurantsByAvailability = restaurantsAvailibles.stream().collect(Collectors.groupingBy(x -> x.getRestaurantTable().getRestaurant()));
        return null;
    }

    @Override
    public void editRestaurant(long restaurantID, String restaurantName, String restaurantLocation, String cousineType, String restaurantDescription, String restaurantEdbs, User restaurantOwner) {
        restaurantDao.editRestaurant(restaurantID, restaurantName, restaurantLocation, cousineType, restaurantDescription, restaurantEdbs, restaurantOwner);
    }

    @Override
    public List<RestaurantsTable> getRestaurantTables(long restaurantID) {
        return restaurantDao.getRestaurantTables(restaurantID);
    }

    @Override
    public RestaurantsTable findTableById(long tableId) {
        return restaurantDao.findTableById(tableId);
    }

    @Override
    public void createTable(Long restaurantId, int noSeats) {
        Restaurant r = restaurantDao.findRestaurantByID(restaurantId);
        restaurantDao.createTable(r, noSeats);
    }

    @Override
    public void editTable(Restaurant restaurant, long tableId, int noSeats) {
        restaurantDao.editTable(restaurant, tableId, noSeats);
    }

    @Override
    public void deleteTable(long tableId) {
        restaurantDao.deleteTable(tableId);
    }

    @Override
    public void createTableAvailable(Long rt, Date hourFrom, Date hourTo) {
        RestaurantsTable rtabl = findTableById(rt);
        restaurantDao.createTableAvailable(rtabl, hourFrom, hourTo);
    }

    @Override
    public List<RestaurantsAvailible> getTablesAvailabilityById(Long id)
    {
        return restaurantDao.getTablesAvailabilityById(id);
    }

    @Override
    public void editTableAvailable(long tableId, Restaurant restaurant, int noSeats) {
        restaurantDao.editTableAvailable(tableId, restaurant, noSeats);
    }

    @Override
    public void deleteTableAvailable(long tableId) {
        restaurantDao.deleteTableAvailable(tableId);
    }

    @Override
    public List<RestaurantsTable> getTablesAvailability() {
        return null;
    }

    @Override
    public void createReservation(Restaurant restaurant, int noSeats) {

    }

    @Override
    public void createReservation(RestaurantsTable rt, Date dateFrom, Date dateTo, User user) {
        restaurantDao.createReservation(rt, dateFrom, dateTo, user);
    }

    @Override
    public void editReservation(long tableId, Restaurant restaurant, int noSeats) {
        //restaurantDao.editReservation(tableId, restaurant, noSeats);
    }

    @Override
    public void deleteReservation(long tableId) {
        restaurantDao.deleteReservation(tableId);
    }

    @Override
    public RestaurantReservations findReservationByID(long tableId) {
        //return restaurantDao.findReservationByID(tableId);
        return null;
    }

    @Override
    public List<RestaurantReservations> findAvailableReservationByID() {
        return null;
    }

    @Override
    public List<RestaurantReservations> findAvailableReservationByID(long reservationId) {
        return null;
        // return restaurantDao.findAvailableReservationByID(reservationId);
    }

    @Override
    public List<RestaurantReservations> findReservationByUser(User user) {
        return restaurantDao.findReservationByUser(user);
    }

    @Override
    public List<RestaurantReservations> findReservationByRestaurant(Restaurant restaurant) {
        return restaurantDao.findReservationByRestaurant(restaurant);
    }

    @Override
    public List<RestaurantReservations> getReservations() {
        return restaurantDao.getReservations();
    }

    @Override
    public List<Restaurant> searchByRestaurantName(String restaurantName) {
        return restaurantDao.searchByRestaurantName(restaurantName);
    }

    @Override
    public List<Restaurant> searchByRestaurantLocation(String restaurantLocation) {
        return restaurantDao.searchByRestaurantLocation(restaurantLocation);
    }

    @Override
    public List<RestaurantsTable> searchByNoSeats(int noSeats) {
        return restaurantDao.searchByNoSeats(noSeats);
    }
}
