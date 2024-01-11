package com.tourMate.controllers;

import com.tourMate.dto.RestaurantDto;
import com.tourMate.entities.*;
import com.tourMate.services.RestaurantManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;


import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
public class RestaurantController {

    @Autowired
    RestaurantManager restaurantManager;

    @PostMapping(path = "/restaurant/add")
    public List<Restaurant> add(@RequestBody Restaurant restaurant, @RequestParam(name = "userId") long userId) {

        restaurantManager.createRestaurant(restaurant, userId);
        return restaurantManager.getRestaurants();
    }

    @PostMapping(path = "/restaurant/{id}/menu/add")
    public void addMenu(@PathVariable(name = "id") long restaurantId, @RequestBody Menu menu)
    {
        restaurantManager.addMenuToRestaurant(restaurantId, menu);
    }

    @GetMapping(path = "/restaurant")
    public List<Restaurant> showRestaurants() {
        return restaurantManager.getRestaurants();
    }

    @GetMapping(path = "/restaurant/user/{id}")
    public List<Restaurant> showRestaurantsForUser(@PathVariable(name = "id") long userId) {

        return restaurantManager.getRestaurants();
    }

    @PostMapping(path = "/restaurant/edit")
    public List<Restaurant> edit(@RequestBody Restaurant restaurant) {
        restaurantManager.editRestaurant(restaurant.getRestaurantID(), restaurant.getRestaurantName(), restaurant.getRestaurantLocation(), restaurant.getCousineType(), restaurant.getRestaurantDescription(), restaurant.getRestaurantEdbs(), restaurant.getRestaurantOwner());
        return restaurantManager.getRestaurants();
    }

    @GetMapping(path = "/restaurant/{id}")
    public Restaurant getRestaurantById(@PathVariable(name = "id") long restaurantId)
    {
        return restaurantManager.findRestaurantByID(restaurantId);
    }

    @GetMapping(path = "/restaurant/delete")
    public ResponseEntity remove(@RequestParam(name = "restaurantId") long restaurantId) {
        try {
            restaurantManager.deleteRestaurant(restaurantId);
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    // RESTAURANT IMAGE CRUD
    @GetMapping(path = "/restaurant/images")
    public List<RestaurantImages> getRestaurantImages(@RequestBody Restaurant restaurant) {
        return restaurantManager.getRestaurantImages(restaurant.getRestaurantID());
    }

    @GetMapping(path = "/restaurant/images/add")
    public void addRestaurantImages(@RequestParam(name = "restaurantId") long restaurantId, @RequestParam(name = "url") String url) {
        Restaurant r = restaurantManager.findRestaurantByID(restaurantId);
//        restaurantManager.
    }

    @GetMapping(path = "/restaurant/images/delete")
    public ResponseEntity removeRestaurantImage(@RequestParam(name = "restaurantId") long restaurantId) {
        try {
            restaurantManager.removeRestaurantImage(restaurantId);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception exception) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    // RESTAURANT TABLE CRUD
    @PostMapping(path = "/restaurant/table/{id}/add")
    public void addTable(@PathVariable Long id, @RequestParam Integer noSeats) {
        restaurantManager.createTable(id, noSeats);
    }

    @PostMapping(path = "/restaurant/table/edit")
    public void editTable(@RequestBody RestaurantsTable restaurantsTable) {
        restaurantManager.editTable(restaurantsTable.getRestaurant(), restaurantsTable.getTableId(), restaurantsTable.getNoSeats());
    }

    @GetMapping(path = "/restaurant/table/delete")
    public ResponseEntity removeTable(@RequestParam(name = "restaurantTableId") long restaurantTableId) {
        try {
            restaurantManager.deleteTable(restaurantTableId);
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/restaurant/table/{id}/availible")
    public List<RestaurantsAvailible> addTable(@PathVariable Long id) {
        return restaurantManager.getTablesAvailabilityById(id);
    }


    // RESTAURANT RESERVATION CRUD
    @PostMapping(path = "/restaurant/table/reservation/add")
    public void addTableReservation(@RequestBody RestaurantReservations restaurantReservations) {
        //restaurantManager.createReservation(restaurantReservations);
    }

    @PostMapping(path = "/restaurant/table/{id}/available/add")
    public void addTableAvailable(@RequestBody RestaurantsAvailible restaurantsAvailible,
                                  @PathVariable Long id) {
        System.out.println(restaurantsAvailible.getHourFrom() + " " + restaurantsAvailible.getHourTo());
        restaurantManager.createTableAvailable(id, restaurantsAvailible.getHourFrom(), restaurantsAvailible.getHourTo());
    }

    @GetMapping(path = "/restaurant/search")
    public List<RestaurantDto> searchAvailableRestaurant(@RequestParam(name = "restaurantLocation") String restaurantLocation,
                                                         @RequestParam(name = "cousineType") String cousineType,
                                                         @RequestParam(name = "hourFrom") @DateTimeFormat(pattern = "yyyy-mm-ddThh:mm") Date hourFrom,
                                                         @RequestParam(name = "hourTo") @DateTimeFormat (pattern = "yyyy-mm-ddThh:mm") Date hourTo,
                                                         @RequestParam(name = "noSeats") int noSeats){
            //return restaurantManager.getTablesByDateAndLocation(restaurantLocation, cousineType, hourFrom, hourTo, noSeats);
        return null;
    }
}

